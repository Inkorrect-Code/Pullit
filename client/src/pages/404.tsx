import Head from 'next/head';
import React from 'react';

function NotFound() {
  return (
    <>
      <Head>
        <title>pullit: page not found</title>
      </Head>
      <div className="fixed inset-y-1/2 w-full text-center">
        page not found
      </div>
    </>
  );
}

export default NotFound;
