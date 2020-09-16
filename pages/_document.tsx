import Document, { Html, Main, NextScript, Head } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang='pt-br'>
        <Head>
          <meta name='Descripition' content=' Site de portifolio empressarial' />
          <link href='https://fonts.googleapis.com/css2?family=Orbitron&family=Poppins:wght@100;200;400;700&family=Play:wght@400;700&display=swap' rel="stylesheet" />  
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument