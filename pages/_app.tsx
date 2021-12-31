import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/fonts/Freshman.ttf"
          as="font"
          crossOrigin=""
        />
        <title>FC - Clan Market</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
