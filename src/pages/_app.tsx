import "@fontsource/alata/index.css";
import "@fontsource/alata/400.css";
import '../styles/globals.scss';

import Head from "next/head";
import GlobalWrapper from '@/layout/globalWrapper';

import type { AppProps } from 'next/app';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      </Head>
      <GlobalWrapper>
        <Component {...pageProps} />
      </GlobalWrapper>
    </>
  );
}

export default MyApp;
