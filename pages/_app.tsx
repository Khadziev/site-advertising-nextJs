import { AppProps } from "next/dist/shared/lib/router/router";
import "../styles/globals.css";
import React from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Haz Khadziev</title>
        <link rel="stylesheet" href="/favison.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
