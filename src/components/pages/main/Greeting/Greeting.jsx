import React from 'react';
import Image from 'next/image';

export default function Greeting() {
  return (
    <div data-aos="fade-up" id="top" className="greeting">
      <Image
        src="/img/dragon.png"
        alt="Dragon illustration"
        width={100}
        height={100}
        className="greeting__img w-32 lg:w-48"
        quality={100}
        unoptimized={true}
      />

      <div className="greeting__text">
        <h3>Герман Чернышёв</h3>

        <h2>Frontend Developer / WebDragon</h2>

        <p>
          Огнеупорная бизнес-логика и пламенный UX/UI. Сжигаю legacy-код, строю
          реактивные e-commerce-крепости.
        </p>
      </div>


    </div>
  );
}
