import { Skill } from '@/types';

export const skills: Skill[] = [
  {
    id: 1,
    image: './img/icons/1.png',
    title: 'Основной стек',
    description:
      'Vue 3 · Nuxt 3 · TypeScript · Pinia · Vite: приложения, платформа, производственный контур.',
  },
  {
    id: 2,
    image: './img/icons/3.png',
    title: 'UI и дизайн-системы',
    description:
      'Tailwind CSS · PrimeVue · Storybook · дизайн-токены · согласование с дизайном и версионирование UI.',
  },
  {
    id: 3,
    image: './img/icons/6.png',
    title: 'Интеграции и данные на клиенте',
    description:
      'WebSocket · TanStack Query · Highcharts · i18n · типизированные контракты с API.',
  },
  {
    id: 4,
    image: './img/icons/5.png',
    title: 'Бэкенд и полный цикл',
    description:
      'Node.js · Express.js: прототипы API, SSR и согласование контрактов с backend-командой.',
  },
];
