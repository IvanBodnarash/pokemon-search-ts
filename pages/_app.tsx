import type { AppProps } from 'next/app';
import { useRouter } from "next/router";
import { useEffect } from 'react';
import '../styles/globals.css';

export default function PokemonApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    if (pageProps.error && pageProps.error.statusCode === 404) {
      router.replace("/error/404");
    }
  }, [pageProps.error]);

  return <Component {...pageProps} />;
}
