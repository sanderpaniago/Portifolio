import ThemeContainer from "../contexts/theme/ThemeContainer"

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
