import React from 'react';
import Link from 'next/link';

import '../assets/styles/feed.scss';

interface FeedProps {}

function Feed(props: FeedProps): JSX.Element {
  return (
    <div className='feed'>
        <h1>Newsfeed</h1>
    </div>
  );
}

export default Feed;