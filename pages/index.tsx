import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import Nav from '../components/Nav';

import '../assets/styles/main.scss';

interface HomeProps {}


function Home(props: HomeProps): JSX.Element {

  const[state, setState] = useState({
    authors: [],
    articles: []
  })
  
  useEffect(() => {
    console.log('yo')
  }, [])


  return (
    <>
      <Nav />
      <h1>Home page</h1>
      <Link href='/about' as='/about'>
        <a>About</a>
      </Link>
    </>
  );
}

export default Home;