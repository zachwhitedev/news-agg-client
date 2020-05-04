import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

import '../assets/styles/main.scss';

interface HomeProps {}


function Home(props: HomeProps): JSX.Element {

  const[state, setState] = useState({
    authors: [],
    articles: []
  })
  
  useEffect(() => {
    if(localStorage.getItem('userid')){
      axios.get(`https://petersapi.com/userauthor/${localStorage.getItem('userid')}`)
        .then(res => {
          setState({
            ...state,
            authors: res.data.authors
          })
          const userauthors = res.data.authors;
          axios.post('https://petersapi.com/getposts', userauthors)
          .then(res => {
            setState({
              ...state,
              articles: res.data.articles
            })
          })
        })
    }
  }, [])


  return (
    <>
      <h1>Home page</h1>
      <Link href='/about' as='/about'>
        <a>About</a>
      </Link>
    </>
  );
}

export default Home;