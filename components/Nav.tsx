import React from 'react';
import Link from 'next/link';

import '../assets/styles/nav.scss';

interface NavProps {}

function Nav(props: NavProps): JSX.Element {
  return (
    <nav className='nav'>
      <div className='nav-container'>
        <div className='logo'>
          <Link href='/' as='/'>
            <a>
              <img src='/images/logo.png' alt='site-logo' />
            </a>
          </Link>
        </div>

        <div className='nav-items'>
          <Link href='/login' as='/login'>
            <a>Login</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
