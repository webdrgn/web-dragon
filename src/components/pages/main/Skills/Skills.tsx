import React from 'react';
import Image from 'next/image';
import Skill from './Skill/Skill';
import type { Skill as SkillType } from '@/types';

interface SkillsProps {
  skills: SkillType[];
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <div id="skills" className="skills">
      <Image
        src="./img/dragon3.png"
        alt="Dragon illustration"
        width={100}
        height={100}
        className="skills__icon w-64 lg:w-1/3"
        quality={100}
        unoptimized={true}
        data-aos="fade-up"
      />

      <h2 data-aos="fade-up">Скиллы</h2>

      <div data-aos="fade-up" className="skills__text">
        <p>
          Cертифицированный frontend-дракончик — знаю не только как писать код,
          но и как строить масштабируемые, быстрые и прибыльные интерфейсы.
          Прошёл курс «Мидл фронтенд-разработчик» в Яндекс Практикуме, чтобы:
        </p>

        <p>
          Опыт 4.5+ года (4 компании): React/Next.js, Vue 3/Nuxt 3, TypeScript, Redux, Tailwind, GSAP;
          SSR/SEO и high‑load; Core Web Vitals 95+, FCP &lt; 1.5s; создаю UI‑киты 100+ компонентов.
          Москва • открыт к удалённому сотрудничеству.
        </p>

        <ul>
          <li>
            Писать не просто рабочий, а оптимальный код — где каждый компонент,
            хук и стор живут в отлаженной системе
          </li>
          <li>
            Довести до автоматизма паттерны, которые сокращают техдолг на старте
          </li>
          <li>
            Превращаю legacy в реактивные системы — не просто рефакторю, а
            провожу полную трансмутацию кода. Где был хаос унаследованных
            решений — возвожу современную архитектуру
          </li>
        </ul>

        <Image
          src="./img/certificate-yandex.jpg"
          alt="Сертификат Яндекс Практикум"
          width={100}
          height={100}
          className="skills__certificate"
          quality={100}
          unoptimized={true}
          data-aos="fade-up"
        />
      </div>

      <div data-aos="fade-up" className="skills__list grid">
        {skills.map((skill) => (
          <Skill skill={skill} key={skill.id} />
        ))}
      </div>
    </div>
  );
}
