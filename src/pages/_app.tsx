import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="GEMA Consultoria Gastronômica - Estruture, organize e otimize seu negócio de alimentos e bebidas com estratégia e clareza."
        />
        <meta name="theme-color" content="#556B2F" />
        <title>GEMA - Consultoria Gastronômica Premium</title>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75' fill='%23556B2F' font-family='serif' font-weight='bold'>g</text></svg>" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}