import React from 'react';
import Link from 'next/link';

import '../assets/styles/main.scss';

interface HomeProps {
    title?: string;
}

function Home(props: HomeProps): JSX.Element {
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