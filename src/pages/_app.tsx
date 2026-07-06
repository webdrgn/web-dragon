import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import NoiseAnimation from '@/components/animation/NoiseAnimation';
import Loader from '@/components/common/Loader/Loader';
import DragonFireflies from '@/components/animation/DragonFireflies/DragonFireflies';
import Aos from 'aos';
import 'aos/dist/aos.css';
import ErrorBoundary from '@/components/common/ErrorBoundary';
import { AOS_DURATION_MS, LOADER_DELAY_MS, LOADER_SESSION_KEY, FIREFLIES_COUNT } from '@/config/constants';
import FollowCursor from '@/components/animation/FollowCursor/FollowCursor';

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const visited = sessionStorage.getItem(LOADER_SESSION_KEY);
    const skipLoader = Boolean(visited);

    if (!skipLoader) {
      setLoading(true);
      sessionStorage.setItem(LOADER_SESSION_KEY, '1');
    }

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    Aos.init({
      duration: prefersReducedMotion ? 0 : AOS_DURATION_MS,
      disable: prefersReducedMotion,
    });

    if (skipLoader) {
      return;
    }

    setTimeout(() => {
      setLoading(false);
    }, LOADER_DELAY_MS);
  }, []);

  useEffect(() => {
    if (loading) {
      document?.querySelector('body')?.classList.add('lock');
    } else {
      document?.querySelector('body')?.classList.remove('lock');
    }
  }, [loading]);

  return (
    <ErrorBoundary>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
      </Head>
      <div className="app">
        <NoiseAnimation />
        <DragonFireflies count={FIREFLIES_COUNT} />
        <FollowCursor />

        {loading ? (
          <Loader className={loading ? '' : 'hidden--opacity'} />
        ) : (
          <Component {...pageProps} />
        )}
      </div>
    </ErrorBoundary>
  );
}
