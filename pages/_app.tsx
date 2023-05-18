import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from 'next/app'
import { Fragment } from 'react'
import Head from 'next/head'


export default function App({ Component, pageProps }:AppProps) {
  return (
  <Fragment>
    <Head>
      <meta name='viewport' content='initial-scale=1.0, width=device-width'/>
    </Head>
  <Component {...pageProps} />
  </Fragment>
  )
}
