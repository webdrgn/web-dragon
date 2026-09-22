export const WEB_DRAGON_TIPS = {
  hero: {
    tipId: 'hero',
    icon: '/img/dragon.png',
    text: 'Привет! Я Веб-дракончик, ассистент Германа. Проведу по странице — покажу, что тут важно. Полетели?',
  },
  metrics: {
    tipId: 'metrics',
    icon: '/img/dragon4.png',
    text: 'Тут я собрал цифры. 70–100+ компонентов, 20+ специалистов, 30–70% быстрее. Я, конечно, не бухгалтер, но считаю неплохо. Дракон же.',
  },
  whatRemains: {
    tipId: 'what-remains',
    icon: '/img/dragon3.png',
    text: 'Ушёл в отпуск — а оно всё ещё работает. Магия? Нет, процессы.',
  },
  cases: {
    tipId: 'cases',
    icon: '/img/dragon2.png',
    text: 'Три проекта. Каждый — про боль, которую решали. Ох... как вспомню эти данные — до сих пор чешусь. Но получилось же!',
  },
  article: {
    tipId: 'article',
    icon: '/img/dragon3.png',
    text: 'Убрали рутину через OpenAPI. Разработчики перестали копипастить. Я помогал считать сэкономленное время. Драконы — не зло, а вот дублирование — да.',
  },
  mentorship: {
    tipId: 'mentorship',
    icon: '/img/dragon4.png',
    text: 'Страх перед интервью давит так, что не взлететь? Поможем подготовиться. Я в этом деле не первый век.',
  },
} as const;

export const AOS_DURATION_MS = 700;
export const FIREFLIES_COUNT = 5;
export const REPO_NAME = 'web-dragon';
export const BASE_PATH = `/${REPO_NAME}`;
export const SITE_URL = `https://webdrgn.github.io${BASE_PATH}`;
export const AUTHOR_NAME = 'Герман Чернышёв';
export const AUTHOR_JOB_TITLE = 'Head of Development / Architect';
export const SITE_NAME = `${AUTHOR_NAME} · ${AUTHOR_JOB_TITLE}`;
export const AUTHOR_PHOTO = '/img/resume.webp';
export const SEO_DESCRIPTION =
  'Head of Development / Architect. Architecture · Team Leadership · Full-cycle Engineering. Стратегия, архитектура, команда, качество. Дизайн-система 70–100+ компонентов, 20+ специалистов, ускорение разработки 30–70%, онбординг месяц → неделя. Vue, React, TypeScript, Node.js.';
export const SEO_KEYWORDS = [
  'Head of Development',
  'Frontend Architect',
  'Tech Lead',
  'архитектор фронтенда',
  'руководитель разработки',
  'team leadership',
  'full-cycle engineering',
  'дизайн-система',
  'design system',
  'Storybook',
  'Vue.js',
  'Nuxt.js',
  'React',
  'TypeScript',
  'JavaScript',
  'Node.js',
  'PHP',
  'PostgreSQL',
  'Centrifugo',
  'WebSocket',
  'GraphQL',
  'REST API',
  'Microfrontends',
  'FSD',
  'SSR',
  'Pinia',
  'Redux Toolkit',
  'Vite',
  'Webpack',
  'Docker',
  'CI/CD',
  'Agile',
  'Scrum',
  'Kanban',
  'менторство frontend',
  'технические собеседования',
  'Герман Чернышёв',
  'webdragon',
];
export const AUTHOR_GITHUB = 'https://github.com/webdrgn';
export const AUTHOR_TELEGRAM = 'https://t.me/grmnche';
export const AUTHOR_HABR_PROFILE = 'https://habr.com/ru/users/grmnche/';
export const AUTHOR_HABR_ARTICLE =
  'https://habr.com/ru/articles/1053396/';
export const AUTHOR_HABR_ARTICLE_TITLE =
  'Оптимизация без AI: как я автоматизировал API-ручки и типы';
export const AUTHOR_GITHUB_ARTICLE = 'https://github.com/webdrgn/articles/blob/main/optimizaciya-bez-ai.md';
export const AUTHOR_LINKEDIN = '';
export const AUTHOR_SITE = SITE_URL;
export const AUTHOR_EMAIL = 'grmnche@yandex.ru';
export const AUTHOR_REMOTE = true;
export const AUTHOR_EXPERIENCE_YEARS = 5;
export const OG_IMAGE = SITE_URL + '/img/resume.webp';
export const SAME_AS: string[] = [
  AUTHOR_GITHUB,
  AUTHOR_TELEGRAM,
  AUTHOR_HABR_PROFILE,
  AUTHOR_SITE,
].filter(Boolean);
export const SKILLS_LIST: string[] = [
  'Architecture',
  'Team Leadership',
  'Full-cycle Engineering',
  'Design Systems',
  'JavaScript',
  'TypeScript',
  'Vue.js',
  'Nuxt.js',
  'React',
  'Node.js',
  'PHP',
  'Pinia',
  'Vuex',
  'Redux Toolkit',
  'Vite',
  'Webpack',
  'Docker',
  'CI/CD',
  'REST API',
  'GraphQL',
  'WebSocket',
  'Centrifugo',
  'PostgreSQL',
  'Storybook',
  'Microfrontends',
  'FSD',
  'SSR',
  'Agile',
  'Scrum',
  'Kanban',
];
