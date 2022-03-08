import { Html, Head, NextScript, Main } from 'next/document';

const CustomDocument = () => (
  <Html>
    <Head lang="pt-BR">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      {/* eslint-disable-next-line react/no-unknown-property */}
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap"
        rel="stylesheet"
      />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default CustomDocument;
