import ThemeContainer from "../contexts/theme/ThemeContainer"

import React from 'react'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Formac Costa Rica</title>
      </Head>
      <ThemeContainer>
      <Component {...pageProps} />
    </ThemeContainer>
    </>
  )
}

export default MyApp
