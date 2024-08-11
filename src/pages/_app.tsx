import "@fontsource/alata/index.css";
import "@fontsource/alata/400.css";
import '../styles/globals.scss';

import Head from "next/head";
import GlobalWrapper from '@/layout/globalWrapper';
import { Analytics } from '@vercel/analytics/react';

import type { AppProps } from 'next/app';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
        <meta name="description" content="Short articles unpacking powerful programming concepts."></meta>
        <meta property="og:description" content="Short articles unpacking powerful programming concepts."></meta>
        <meta property="og:image" content="/images/og_image.png"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:site_name" content="Quick Wins With Code"></meta>
        <meta property="og:url" content="https://www.quickwinswithcode.com"></meta>
        <meta name="theme-color" content="#28265eff"></meta>
      </Head>
      <GlobalWrapper>
        <Component {...pageProps} />
      </GlobalWrapper>
      <Analytics />
    </>
  );
}

export default MyApp;
