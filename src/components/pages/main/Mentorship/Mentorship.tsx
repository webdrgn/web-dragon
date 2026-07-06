import React from 'react'
import { FaChalkboardUser, FaComments, FaUserGraduate } from 'react-icons/fa6'
import { AUTHOR_TELEGRAM } from '@/config/constants'

const MENTORSHIP_VALUES = [
  {
    accent: 'Собеседования',
    label: 'Знаю вопросы изнутри',
    context:
      'Провожу технические интервью как нанимающий — понимаю, что проверяют на middle+ и senior',
    Icon: FaComments,
  },
  {
    accent: 'Code review',
    label: 'От страха к уверенности',
    context:
      'Выстраиваю привычку ревью: от «боюсь комментировать» до самостоятельных задач без микроменеджмента',
    Icon: FaUserGraduate,
  },
  {
    accent: 'Playunmute',
    label: 'Тренажёр в браузере',
    context:
      'Симулятор технического интервью с разбором ответов — готовый инструмент для подготовки',
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
        <h2
          id="mentorship-heading"
          className="section-heading"
          data-aos="fade-up"
        >
          Менторство
        </h2>
        <p
          className="section-lead mentorship__lead"
          data-aos="fade-up"
        >
          Помогаю разработчикам готовиться к собеседованиям, прокачивать ревью
          и выходить на уровень middle+.
        </p>
      </header>

      <ul className="mentorship__grid">
        {MENTORSHIP_VALUES.map((point) => (
          <li
            key={point.accent}
            data-aos="fade-up"
            className="mentorship__card"
          >
            <div className="mentorship__accent">{point.accent}</div>
            <div className="mentorship__label-row">
              <point.Icon
                className="mentorship__icon"
                aria-hidden
                size={18}
              />
              <div className="mentorship__label">{point.label}</div>
            </div>
            <p className="mentorship__context">{point.context}</p>
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
