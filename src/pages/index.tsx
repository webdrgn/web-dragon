import Greeting from '@/components/pages/main/Greeting/Greeting';
import Skills from '@/components/pages/main/Skills/Skills';
import Projects from '@/components/pages/main/Projects/Projects';
import Header from '@/components/common/Header/Header';
import Footer from '@/components/common/Footer/Footer';
import Head from 'next/head';
import { SITE_URL, SITE_NAME, SEO_DESCRIPTION, SEO_KEYWORDS, OG_IMAGE } from '@/config/constants';

export default function Home() {
  return (
    <>
      <Head>
        <title>{SITE_NAME}</title>
        <meta name="description" content={SEO_DESCRIPTION} />
        <meta name="keywords" content={SEO_KEYWORDS.join(', ')} />
        <link rel="canonical" href={SITE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:title" content={SITE_NAME} />
        <meta property="og:description" content={SEO_DESCRIPTION} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:alt" content="Фронтенд-разработчик - Портфолио" />
        <meta property="og:locale" content="ru_RU" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SITE_NAME} />
        <meta name="twitter:description" content={SEO_DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />

        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            'name': SITE_NAME,
            'url': SITE_URL,
          })}
        </script>
      </Head>
      
      <Header />

      <main>
        <div className="normalize-section normalize-container">
          <Greeting />
        </div>

        <div className="normalize-section normalize-container">
          <Skills />
        </div>

        <div className="normalize-section normalize-container">
          <Projects />
        </div>
      </main>

      <div className="normalize-container">
        <Footer />
      </div>
    </>
  );
}
