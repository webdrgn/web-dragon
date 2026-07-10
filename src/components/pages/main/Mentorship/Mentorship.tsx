import React from 'react'
import { FaChalkboardUser, FaComments, FaUserGraduate } from 'react-icons/fa6'
import SectionHeading from '@/components/common/SectionHeading/SectionHeading'
import { AUTHOR_TELEGRAM, SECTION_MASCOTS } from '@/config/constants'

const MENTORSHIP_FORMATS = [
  {
    accent: 'Собеседования',
    label: 'Подготовка к реальным вопросам middle+ и senior',
    Icon: FaComments,
  },
  {
    accent: 'Code review',
    label: 'От страха комментировать до уверенных решений',
    Icon: FaUserGraduate,
  },
  {
    accent: 'Playunmute',
    label: 'Мой тренажер для подготовки',
    Icon: FaChalkboardUser,
  },
]

export default function Mentorship() {
  return (
    <section
      id="mentorship"
      className="mentorship"
      aria-labelledby="mentorship-heading"
    >
      <header className="mentorship__header">
        <SectionHeading id="mentorship-heading" mascot={SECTION_MASCOTS.mentorship}>
          Менторство
        </SectionHeading>
        <p
          className="section-lead mentorship__lead"
          data-aos="fade-up"
        >
          Провел десятки собеседований. Знаю, что там проверяют на самом деле.
          Помогаю готовиться, прокачивать ревью, выходить на уровень middle+.
        </p>
      </header>

      <ul className="mentorship__grid">
        {MENTORSHIP_FORMATS.map((format) => (
          <li
            key={format.accent}
            data-aos="fade-up"
            className="mentorship__card"
          >
            <div className="mentorship__accent">{format.accent}</div>
            <div className="mentorship__label-row">
              <format.Icon
                className="mentorship__icon"
                aria-hidden
                size={18}
              />
              <div className="mentorship__label">{format.label}</div>
            </div>
          </li>
        ))}
      </ul>

      <div
        className="mentorship__cta"
        data-aos="fade-up"
      >
        <a
          href={AUTHOR_TELEGRAM}
          target="_blank"
          rel="noopener noreferrer"
          className="mentorship__cta-link"
        >
          Обсудить менторство в Telegram
        </a>
      </div>
    </section>
  )
}
