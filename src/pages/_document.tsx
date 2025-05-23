import { Html, Head, Main, NextScript } from 'next/document';

const metaData = {
  title:
    'Frontend-разработчик | Веб-дракончик (Vue/React, TypeScript, Node.js)',
  description:
    'Создаю быстрые и прибыльные веб-приложения. Специализация: Vue, React, TypeScript, Node.js, e-commerce и event-платформы. Оптимизация производительности +30% к скорости.',
  url: 'https://grmnche.github.io/web-dragon',
  image: 'https://grmnche.github.io/web-dragon/assets/img/wd.jpg',
  keywords:
    'веб-разработчик, React, Vue, Nuxt, JavaScript, Node.js, фронтенд, fullstack, TypeScript, веб-дракончик',
  author: 'Герман Чернышёв',
};

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        {/* Базовые мета-теги */}
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
        />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/web-dragon/favicon.ico" />

        {/* Основные SEO */}
        <title>{metaData.title}</title>
        <meta name="description" content={metaData.description} />
        <meta name="keywords" content={metaData.keywords} />
        <meta name="author" content={metaData.author} />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="7 days" />
        <link rel="canonical" href={metaData.url} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={metaData.url} />
        <meta property="og:title" content={metaData.title} />
        <meta property="og:description" content={metaData.description} />
        <meta property="og:image" content={metaData.image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Фронтенд-разработчик - Портфолио"
        />
        <meta property="og:locale" content="ru_RU" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={metaData.url} />
        <meta name="twitter:title" content={metaData.title} />
        <meta name="twitter:description" content={metaData.description} />
        <meta name="twitter:image" content={metaData.image} />

        {/* JSON-LD (без dangerouslySetInnerHTML) */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            'name': metaData.author,
            'jobTitle': 'Frontend Developer',
            'url': metaData.url,
            'sameAs': ['https://github.com/grmnche'],
            'description': metaData.description,
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
