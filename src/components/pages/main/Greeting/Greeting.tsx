import React from "react";
import Image from "next/image";
import { SiNuxtdotjs, SiTypescript, SiVuedotjs } from "react-icons/si";

export default function Greeting() {
  return (
    <div data-aos="fade-up" id="top" className="greeting">
      <Image
        src="./img/dragon.png"
        alt="WebDragon"
        width={220}
        height={220}
        className="greeting__icon"
        quality={100}
        unoptimized={true}
        sizes="(max-width: 640px) min(88vw, 220px), (max-width: 1024px) 180px, 220px"
        priority
      />

      <div className="greeting__text">
        <h3>Герман Чернышёв</h3>

        <p className="greeting__role">
          Frontend Architect / Tech Lead, платформенная разработка и
          техническое лидерство
        </p>

        <h2 className="greeting__headline">
          За 5 лет прошёл путь от разработчика до архитектора фронтенд-платформ:
          спроектировал систему компонентов из{" "}
          <strong>100+ компонентов</strong> и ускорил разработку на{" "}
          <strong>40–70%</strong>.
        </h2>

        <p className="greeting__subtitle">
          Vue 3 · TypeScript · Nuxt 3 · платформенные решения · техническое
          лидерство
        </p>

        <div
          className="greeting__tech-strip"
          aria-hidden
        >
          <SiVuedotjs size={22} title="Vue 3" />
          <SiTypescript size={22} title="TypeScript" />
          <SiNuxtdotjs size={22} title="Nuxt 3" />
        </div>

        <p className="greeting__about">
          Строю фронтенд-платформы, которые комфортно живут при росте нагрузки и
          команды: от выбора стека до обновлений без постоянных поломок в проде.
          Код воспринимаю как часть экономики продукта, не как самоцель.
        </p>
      </div>
    </div>
  );
}
