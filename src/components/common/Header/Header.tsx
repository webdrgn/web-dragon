import React from "react";
import Image from "next/image";
import {
  FaBriefcase,
  FaChartColumn,
  FaCode,
  FaEnvelope,
} from "react-icons/fa6";

const NAV_ICON_SIZE = 14;

export default function Navbar() {
  return (
    <header className="header">
      <nav className="nav" aria-label="Основная навигация">
        <a href="#metrics" className="nav__item">
          <FaChartColumn size={NAV_ICON_SIZE} aria-hidden className="nav__item-icon" />
          Метрики
        </a>

        <a href="#cases" className="nav__item">
          <FaBriefcase size={NAV_ICON_SIZE} aria-hidden className="nav__item-icon" />
          Кейсы
        </a>

        <a href="#top" className="nav__item nav__item--logo">
          <Image
            src="./img/dragon4.png"
            alt="На главный экран"
            width={40}
            height={40}
            className="nav-img"
            quality={100}
            unoptimized={true}
          />
        </a>

        <a href="#stack" className="nav__item">
          <FaCode size={NAV_ICON_SIZE} aria-hidden className="nav__item-icon" />
          Стек
        </a>

        <a href="#contacts" className="nav__item">
          <FaEnvelope size={NAV_ICON_SIZE} aria-hidden className="nav__item-icon" />
          Контакты
        </a>
      </nav>
    </header>
  );
}
