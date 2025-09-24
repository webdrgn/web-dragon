export interface Skill {
  id: number;
  image: string;
  title: string;
  description: string;
}

export interface ProjectItem {
  id: number;
  title: string;
  image: string;
  link?: string;
  github?: string;
  stack: string;
  achievements: string[];
}
