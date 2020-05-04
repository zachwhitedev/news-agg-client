import React from 'react';
import Link from 'next/link';

interface AboutProps {}

function About(props: AboutProps): JSX.Element {
  return (
    <>
      <h1>About page</h1>
      <Link href='/' as='/'>
        <a>Home</a>
      </Link>
    </>
  );
}

export default About;