import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import NoiseAnimation from '@/components/animation/NoiseAnimation';
import Loader from '@/components/common/Loader/Loader.jsx';

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    if (loading) {
      document?.querySelector('body')?.classList.add('lock');
    } else {
      document?.querySelector('body')?.classList.remove('lock');
    }
  }, [loading]);

  return (
    <div className="app">
      <NoiseAnimation />

      {loading ? (
        <Loader className={loading ? '' : 'hidden--opacity'} />
      ) : (
        <Component {...pageProps} />
      )}
    </div>
  );
}
