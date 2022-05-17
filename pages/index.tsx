import type { NextPage } from 'next';
import Head from 'next/head';
import { Hero } from 'components/Hero';
import { Nav } from 'components/Nav';
import React, { useEffect } from 'react';
import { Sponsors } from 'components/Sponsors';
import { About } from 'components/About';
import { Prizes } from 'components/Prizes';

const Home: NextPage = () => {
  // useEffect(() => {
  //   if(process.env.NODE_ENV !== 'development' && window.location.protocol !== 'https') {
  //     window.location.replace(`https://${process.env.URL}${process.env.BASE_URL}`);
  //   }
  // }, [window?.location?.protocol]);

  return (
    <React.Fragment>
      <Head>
        <title>All You Can Board</title>
        <meta name="description" content="All You Can Board!" />
        <link rel="icon" href={`${process.env.BASE_PATH}/logo.png`} />
      </Head>
      <Nav />
      <Hero />
      <About />
      <Sponsors />
      <Prizes />
    </React.Fragment>
  )
}

export default Home;
