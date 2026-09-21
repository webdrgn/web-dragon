import React from 'react'
import type { IconType } from 'react-icons'
import {
  FaBookOpen,
  FaCubes,
  FaShieldHalved,
  FaUserCheck,
} from 'react-icons/fa6'
import SectionHeading from '@/components/common/SectionHeading/SectionHeading'
import { SECTION_MASCOTS } from '@/config/constants'

const WHAT_REMAINS_ITEMS: Array<{
  title: string
  detail: string
  Icon: IconType
}> = [
  {
    title: 'Дизайн-система',
    detail:
      'Storybook, версии, changelog. Новый экран собирается из готовых блоков, а не с нуля.',
    Icon: FaCubes,
  },
  {
    title: 'Релизы без пожаров',
    detail:
      'Пайплайн и ревью, которые реально ловят баги до прода. Деплой — кнопка, не тревога.',
    Icon: FaShieldHalved,
  },
  {
    title: 'Онбординг за неделю',
    detail:
      'Порядок в коде и документации. Новичок выходит на задачи без няньки рядом.',
    Icon: FaBookOpen,
  },
  {
    title: 'Команда без ручного управления',
    detail:
      'Процессы, договорённости и люди, которые держат продукт, когда меня нет в чате.',
    Icon: FaUserCheck,
  },
]

export default function WhatRemains() {
  return (
    <section
      id="what-remains"
      className="what-remains"
      aria-labelledby="what-remains-heading"
    >
      <header className="what-remains__header">
        <SectionHeading
          id="what-remains-heading"
          mascot={SECTION_MASCOTS.whatRemains}
        >
          Что остаётся после меня
        </SectionHeading>
      </header>

      <p className="section-lead what-remains__lead" data-aos="fade-up">
        Система, которая живёт без моего вмешательства.
      </p>

      <ul className="what-remains__grid">
        {WHAT_REMAINS_ITEMS.map((item) => (
          <li key={item.title} data-aos="fade-up" className="what-remains__card">
            <div className="what-remains__title-row">
              <item.Icon
                className="what-remains__icon"
                aria-hidden
                size={18}
              />
              <div className="what-remains__title">{item.title}</div>
            </div>
            <p className="what-remains__detail">{item.detail}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
