import React from 'react';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="header">
      <nav className="nav">
        <a href="#skills" className="nav__item">
          Скиллы
        </a>

        <a href="#top" className="nav__item">
          <Image
            src="./img/dragon4.png"
            alt="Dragon illustration"
            width={20}
            height={20}
            className="z-10 nav-img w-14"
            quality={100}
            unoptimized={true}
          />
        </a>

        <a href="#projects" className="nav__item">
          Сокровищница
        </a>
      </nav>
    </header>
  );
}
