import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        {/* Базовые мета-теги */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />

        {/* Основные SEO-метатеги */}
        <title>Frontend-разработчик | Веб-дракончик (Vue/React, TypeScript, Node.js)</title>
        <meta name="title" content="Frontend Developer | Фронтенд-разработчик | Веб-дракончик" />
        <meta name="description" content="Создаю быстрые и прибыльные веб-приложения. Специализация: Vue, React, TypeScript, Node.js, e-commerce и event-платформы. Оптимизация производительности +30% к скорости. Ищете frontend-разработчика? Кейсы в портфолио." />
        <meta name="keywords" content="веб-разработчик, React, Vue, Nuxt, JavaScript, Node.js, фронтенд, fullstack, JavaScript, TypeScript, веб-дракончик, e-commerce, оптимизация" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://grmnche.github.io/web-dragon" />
        <meta property="og:title" content="Frontend Developer | Веб-дракончик" />
        <meta property="og:description" content="Превращаю идеи в высоконагруженные приложения. 6+ лет опыта, 50+ успешных проектов." />
        <meta property="og:image" content="https://grmnche.github.io/web-dragon/assets/img/wd.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Фронтенд-разработчик - Портфолио" />
        <meta property="og:locale" content="ru_RU" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://grmnche.github.io/web-dragon" />
        <meta property="twitter:title" content="Frontend Developer | Веб-дракончик" />
        <meta property="twitter:description" content="Реактивные интерфейсы и продуманная архитектура для вашего бизнеса." />
        <meta property="twitter:image" content="https://grmnche.github.io/web-dragon/assets/img/wd.jpg" />

        {/* Дополнительные мета-теги */}
        <meta name="author" content="Герман Чернышёв" />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="7 days" />
        <link rel="canonical" href="https://grmnche.github.io/web-dragon" />

        {/* JSON-LD структурированные данные */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Герман Чернышёв",
              "jobTitle": "Frontend Developer",
              "url": "https://grmnche.github.io/web-dragon",
              "sameAs": ["https://github.com/grmnche"],
              "description": "Специалист по веб-разработке с фокусом на производительность и бизнес-метрики."
            })
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
