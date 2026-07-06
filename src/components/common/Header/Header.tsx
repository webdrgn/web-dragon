'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import {
  FaBriefcase,
  FaChartColumn,
  FaCode,
  FaEnvelope,
  FaGraduationCap,
  FaRocket,
} from 'react-icons/fa6'
import { publicAsset } from '@/utils/publicAsset'

const NAV_ICON_SIZE = 14

const NAV_SECTIONS = [
  { href: '#metrics', sectionId: 'metrics', label: 'Цифры', Icon: FaChartColumn },
  { href: '#playunmute', sectionId: 'playunmute', label: 'Продукт', Icon: FaRocket },
  { href: '#cases', sectionId: 'cases', label: 'Кейсы', Icon: FaBriefcase },
  { href: '#mentorship', sectionId: 'mentorship', label: 'Менторство', Icon: FaGraduationCap },
  { href: '#stack', sectionId: 'stack', label: 'Стек', Icon: FaCode },
] as const

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const sectionIds = [
      ...NAV_SECTIONS.map(({ sectionId }) => sectionId),
      'contacts',
    ]

    const sectionElements = sectionIds
      .map((sectionId) => document.getElementById(sectionId))
      .filter((element): element is HTMLElement => Boolean(element))

    if (sectionElements.length === 0) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id)
        }
      },
      {
        rootMargin: '-30% 0px -55% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    )

    sectionElements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return (
    <header className="header">
      <div className="header__bar">
        <nav
          className="nav"
          aria-label="Основная навигация"
        >
          {NAV_SECTIONS.slice(0, 2).map(({ href, sectionId, label, Icon }) => (
            <a
              key={sectionId}
              href={href}
              className={`nav__item${activeSection === sectionId ? ' nav__item--active' : ''}`}
              title={label}
              aria-current={activeSection === sectionId ? 'true' : undefined}
            >
              <Icon size={NAV_ICON_SIZE} aria-hidden className="nav__item-icon" />
              <span className="nav__item-text">{label}</span>
            </a>
          ))}

          <a
            href="#top"
            className={`nav__item nav__item--logo${activeSection === '' ? ' nav__item--active' : ''}`}
            title="На главную"
            aria-current={activeSection === '' ? 'true' : undefined}
          >
            <Image
              src={publicAsset('/img/dragon4.png')}
              alt="На главный экран"
              width={40}
              height={40}
              className="nav-img"
              quality={100}
              unoptimized={true}
            />
          </a>

          {NAV_SECTIONS.slice(2).map(({ href, sectionId, label, Icon }) => (
            <a
              key={sectionId}
              href={href}
              className={`nav__item${activeSection === sectionId ? ' nav__item--active' : ''}`}
              title={label}
              aria-current={activeSection === sectionId ? 'true' : undefined}
            >
              <Icon size={NAV_ICON_SIZE} aria-hidden className="nav__item-icon" />
              <span className="nav__item-text">{label}</span>
            </a>
          ))}
        </nav>

        <a
          href="#contacts"
          className={`header__cta${activeSection === 'contacts' ? ' header__cta--active' : ''}`}
          aria-label="Связаться"
          title="Связаться"
          aria-current={activeSection === 'contacts' ? 'true' : undefined}
        >
          <FaEnvelope className="header__cta-icon" aria-hidden size={15} />
          <span className="header__cta-text">Связаться</span>
        </a>
      </div>
    </header>
  )
}
