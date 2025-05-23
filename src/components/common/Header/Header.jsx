import React from 'react';

function Navbar() {
  return (
    <header className="header">
      <nav className="nav">
        <a href="#skills" className="nav__item">
          Скиллы
        </a>

        <a href="#top" className="nav__item">
          <img
            src="./img/dragon4.png"
            className="z-10 nav-img w-14"
            alt=""
          />
        </a>

        <a href="#projects" className="nav__item">
          Сокровищница
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
