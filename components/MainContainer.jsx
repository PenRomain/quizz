import React from 'react';
import Head from 'next/head';
// import Image from 'next/image';
// import A from './A';
import { Hands, RMBadge } from './features';

function MainContainer({ children }) {
  return (
    <>
      <Head>
        <title>Quiz</title>
      </Head>
      {/* <div className="navbar">
        <A href="/" text="Main" />
        <A href="/users" text="Users" />
      </div> */}
      <div>{children}</div>
      <Hands styles={{
        marginBottom: '2rem',
      }}
      />
      <div className="mainContainer">
        <RMBadge />
        <h1>
          <i>
            Hello,
          </i>
          {' '}
          I am Wedding Quiz!
        </h1>
        <i><h2>Play</h2></i>
        <i><h2>Score</h2></i>
        {/* <Image src="/assets/gifs/underStartHover2.gif"
         width={300} height={100} alt="under" /> */}
      </div>
    </>
  );
}

export default MainContainer;
