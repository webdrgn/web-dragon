import { Html, Head, Main, NextScript } from 'next/document';
import {
  AUTHOR_NAME,
  AUTHOR_JOB_TITLE,
  AUTHOR_PHOTO,
  BASE_PATH,
  SITE_URL,
  SEO_DESCRIPTION,
  AUTHOR_EMAIL,
  SAME_AS,
  SKILLS_LIST,
} from '@/config/constants';

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#1c1c1c" />
        <link rel="icon" href={`${BASE_PATH}/favicon.ico`} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: AUTHOR_NAME,
              jobTitle: AUTHOR_JOB_TITLE,
              url: SITE_URL,
              image: `${SITE_URL}${AUTHOR_PHOTO}`,
              description: SEO_DESCRIPTION,
              sameAs: SAME_AS,
              email: AUTHOR_EMAIL,
              nationality: 'RU',
              knowsAbout: SKILLS_LIST,
              alumniOf: {
                '@type': 'EducationalOrganization',
                name: 'Яндекс Практикум',
              },
            }),
          }}
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
