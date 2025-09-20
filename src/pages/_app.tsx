import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import NoiseAnimation from '@/components/animation/NoiseAnimation';
import Loader from '@/components/common/Loader/Loader';
import DragonFireflies from '@/components/animation/DragonFireflies/DragonFireflies';
import Aos from 'aos';
import 'aos/dist/aos.css';
import ErrorBoundary from '@/components/common/ErrorBoundary';
import { AOS_DURATION_MS, LOADER_DELAY_MS, FIREFLIES_COUNT } from '@/config/constants';

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    Aos.init({ duration: AOS_DURATION_MS });

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
      <div className="app">
        <NoiseAnimation />
        <DragonFireflies count={FIREFLIES_COUNT} />

        {loading ? (
          <Loader className={loading ? '' : 'hidden--opacity'} />
        ) : (
          <Component {...pageProps} />
        )}
      </div>
    </ErrorBoundary>
  );
}
