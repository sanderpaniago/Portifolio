import ThemeContainer from "../contexts/theme/ThemeContainer"
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import '../styles/index.css'

import React from 'react'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Sander Paniago - Dev</title>
      </Head>
      <ThemeContainer>
      <Component {...pageProps} />
    </ThemeContainer>
    </>
  )
}

export default MyApp
