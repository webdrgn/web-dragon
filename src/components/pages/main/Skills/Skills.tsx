import React from "react";
import Image from "next/image";
import { skills } from "../../../../../storage/skills";
import Skill from "./Skill/Skill";

export default function Skills() {
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

      <div className="skills__content">
        <p
          data-aos="fade-up"
          className="text-center max-w-3xl mx-auto mb-12 text-lg"
        >
              Senior Frontend Developer. 4.5+ года опыта в создании frontend-архитектуры для сложных продуктов. Проектирую реализацию бизнес-логики: превращая комплексные задачи в чистый, поддерживаемый и масштабируемый код.
        </p>

        <div className="grid">
          {skills.map((skill) => (
            <div key={skill.id} className="col-12 col-md-6 col-lg-4">
              <Skill skill={skill} />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center" data-aos="fade-up">
          <Image
            src="./img/certificate-yandex.jpg"
            alt="Сертификат Яндекс Практикум"
            width={300}
            height={200}
            className="skills__certificate mx-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            quality={90}
            unoptimized={true}
          />
        </div>
      </div>
    </div>
  );
}
