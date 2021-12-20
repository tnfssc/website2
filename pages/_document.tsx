import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="description" content="Description" />
          <meta name="keywords" content="Keywords" />
          <link rel="manifest" href="/manifest.json" />
          <link href="/icons/dark/favicon-16x16.png" rel="icon" type="image/png" sizes="16x16" />
          <link href="/icons/dark/favicon-32x32.png" rel="icon" type="image/png" sizes="32x32" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/icons/dark/apple-touch-icon.png"></link>
          <meta name="theme-color" content="#000000" />
        </Head>
        <body>
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
