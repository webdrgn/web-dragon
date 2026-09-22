import { Skill } from '@/shared/types'

export const skills: Skill[] = [
  {
    id: 1,
    image: './img/icons/1.png',
    titleKey: 'skills.groups.core',
    description:
      'JavaScript · TypeScript · Vue.js · Nuxt.js · React · Pinia · Vuex · Redux Toolkit · Vite · Webpack · FSD · Microfrontends · SSR',
  },
  {
    id: 2,
    image: './img/icons/3.png',
    titleKey: 'skills.groups.ui',
    description: 'Storybook · Design Systems',
  },
  {
    id: 3,
    image: './img/icons/6.png',
    titleKey: 'skills.groups.integrations',
    description: 'REST API · GraphQL · WebSocket · Centrifugo',
  },
  {
    id: 4,
    image: './img/icons/5.png',
    titleKey: 'skills.groups.backend',
    description: 'Node.js · PHP · PostgreSQL · Docker · CI/CD',
  },
  {
    id: 5,
    image: './img/icons/1.png',
    titleKey: 'skills.groups.process',
    description: 'Agile · Scrum · Kanban',
  },
]
