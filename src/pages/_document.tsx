import { Html, Head, Main, NextScript } from 'next/document';
import { SITE_URL, SITE_NAME, SEO_DESCRIPTION, SEO_KEYWORDS, AUTHOR_EMAIL, OG_IMAGE, SAME_AS, SKILLS_LIST } from '@/config/constants';

const metaData = {
  title: SITE_NAME,
  description: SEO_DESCRIPTION,
  url: SITE_URL,
  image: OG_IMAGE,
  keywords: SEO_KEYWORDS.join(', '),
  author: 'web-dragon',
};

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
        />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/web-dragon/favicon.ico" />

        <meta name="description" content={metaData.description} />
        <meta name="keywords" content={metaData.keywords} />
        <meta name="author" content={metaData.author} />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="7 days" />
        <link rel="canonical" href={metaData.url} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={metaData.url} />
        <meta property="og:title" content={metaData.title} />
        <meta property="og:description" content={metaData.description} />
        <meta property="og:image" content={metaData.image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Фронтенд-разработчик - Портфолио" />
        <meta property="og:locale" content="ru_RU" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={metaData.url} />
        <meta name="twitter:title" content={metaData.title} />
        <meta name="twitter:description" content={metaData.description} />
        <meta name="twitter:image" content={metaData.image} />

        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: metaData.author,
            jobTitle: 'Frontend Developer',
            url: metaData.url,
            description: metaData.description,
            sameAs: SAME_AS,
            email: `mailto:${AUTHOR_EMAIL}`,
            nationality: 'RU',
            knowsAbout: SKILLS_LIST,
            alumniOf: {
              '@type': 'EducationalOrganization',
              name: 'Яндекс Практикум',
            },
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'customer support',
              email: AUTHOR_EMAIL,
              areaServed: 'RU',
              availableLanguage: ['ru'],
            },
          })}
        </script>
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
