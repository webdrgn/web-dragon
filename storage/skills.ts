import { Skill } from '@/types';

export const skills: Skill[] = [
  {
    id: 1,
    image: './img/icons/1.png',
    title: 'Основной стек',
    description:
      'Vue 3 · Nuxt 3 · TypeScript · Pinia · Vite',
  },
  {
    id: 2,
    image: './img/icons/3.png',
    title: 'UI и дизайн-системы',
    description:
      'Tailwind · PrimeVue · Storybook · дизайн-токены',
  },
  {
    id: 3,
    image: './img/icons/6.png',
    title: 'Интеграции и данные',
    description:
      'WebSocket · TanStack Query · Highcharts · i18n',
  },
  {
    id: 4,
    image: './img/icons/5.png',
    title: 'Бэкенд',
    description:
      'Node.js · Express',
  },
];
