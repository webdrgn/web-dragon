import { ProjectItem } from '@/types';

export const projects: ProjectItem[] = [
  {
    id: 1,
    title: 'Кинокомпания «8 Студия» — лендинг',
    image: './img/8studio.jpg',
    link: 'https://8studiofilm.ru',
    stack: 'Next.js 13 • TypeScript • Tailwind CSS • Framer Motion • Vercel Edge Network',
    achievements: [],
  },
  {
    id: 2,
    title: 'Flappy Progger — мультиплеерная игра с рейтингами',
    image: './img/flappy-progger.jpg',
    link: 'https://github.com/Mansur903/game.praktikum.yandex',
    stack: 'React 18 • TypeScript • Redux Toolkit • WebSocket • Node.js • Express • PostgreSQL • Docker',
    achievements: [],
  },
  {
    id: 3,
    title: 'Web Dragon Messenger — защищенный корпоративный мессенджер',
    image: './img/wd.jpg',
    link: 'https://github.com/grmnche/wdm',
    stack: 'TypeScript • WebRTC • E2EE • IndexedDB • Service Workers • Jest • GitHub Actions',
    achievements: [],
  },
  {
    id: 4,
    title: 'Классическая игра в крестики-нолики',
    image: './img/swords-and-shields.jpg',
    link: 'https://github.com/grmnche/tic-tac-toe',
    stack: 'React 18 • TypeScript • CSS Modules',
    achievements: [],
  }
];
