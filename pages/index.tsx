import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import Nav from '../components/Nav';
import Feed from '../components/Feed';

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
      <Feed />
    </>
  );
}

export default Home;