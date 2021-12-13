import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&family=Roboto:wght@300;400;500;700&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" type="image/x-icon" href="./logo.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
