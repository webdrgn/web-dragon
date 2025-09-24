import React from 'react';
import Image from 'next/image';

export default function Greeting() {
  return (
    <div data-aos="fade-up" id="top" className="greeting">
      <Image
        src="./img/dragon.png"
        alt="Dragon illustration"
        width={100}
        height={100}
        className="greeting__icon w-32 lg:w-48"
        quality={100}
        unoptimized={true}
      />

      <div className="greeting__text">
        <h3>Герман Чернышёв</h3>

        <h2>Senior Frontend Developer / WebDragon</h2>

        <p>
          Огнедышащий frontend-архитектор, превращающий legacy-руины в современные реактивные крепости.
          Специализируюсь на сложных e-commerce проектах, где важны не только технологии, но и бизнес-результаты.
        </p>
      </div>
    </div>
  );
}
