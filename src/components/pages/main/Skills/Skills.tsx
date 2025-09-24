import React from 'react';
import Image from 'next/image';
import { skills } from '../../../../../storage/skills';

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
        <p data-aos="fade-up" className="text-center max-w-3xl mx-auto mb-12 text-lg">
          Frontend-дракончик с 4.5+ годами опыта, который превращает сложные задачи в элегантные решения.
          Прошёл путь от верстальщика до архитектора, но сохранил драконью страсть к созданию
          по-настоящему огненных интерфейсов.
        </p>

        <div data-aos="fade-up">
          <div className="grid">
            {skills.map((skill) => (
              <div key={skill.id} className="col-12 col-md-6 col-lg-4">
                <div className="skills__item bg-white/5 p-6 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors border border-white/10 h-full">
              <div className="skills__item-icon mb-4">
                <Image
                  src={skill.image}
                  alt=""
                  width={48}
                  height={48}
                  className="w-12 h-12"
                  quality={100}
                  unoptimized={true}
                />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{skill.title}</h3>
              <p className="text-sm text-gray-300 leading-relaxed">{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center" data-aos="fade-up">
          <p className="mb-6 text-lg">Сертифицированный frontend-дракончик</p>
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
