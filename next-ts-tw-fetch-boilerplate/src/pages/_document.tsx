import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko-kr">
        <Head>
          <meta charSet="utf-8" />
          <link rel="preload" href="/assets/styles/font.css" as="style" />
          <link rel="stylesheet" type="text/css" href="/assets/styles/font.css" />

          <meta property="og:title" content="원 뷰" />
          <meta property="og:image" content="" />
          <meta id="metaOgUrl" property="og:url" content="" />
          <meta property="og:description" content="one-view" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
