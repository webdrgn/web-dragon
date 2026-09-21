import React from 'react'
import KitIcon from '@/shared/ui/kit-icon'
import type { KitIconName } from '@/shared/ui/kit-icon'
import SectionHeading from '@/shared/ui/section-heading'
import DragonAssistant from '@/features/dragon-assistant'
import { WEB_DRAGON_TIPS } from '@/shared/config'

const WHAT_REMAINS_ITEMS: Array<{
  title: string
  detail: string
  icon: KitIconName
}> = [
  {
    title: 'Дизайн-система',
    detail:
      'Storybook, версии, changelog. Новый экран собирается из готовых блоков.',
    icon: 'presentation',
  },
  {
    title: 'Релизы без пожаров',
    detail:
      'Пайплайн и ревью, которые реально ловят баги до прода.',
    icon: 'shield',
  },
  {
    title: 'Онбординг за неделю',
    detail:
      'Порядок в коде и документации. Новичок выходит на задачи без ментора рядом.',
    icon: 'book',
  },
  {
    title: 'Команда без ручного управления',
    detail:
      'Процессы, договорённости и люди, которые держат продукт, когда меня нет в чате.',
    icon: 'users',
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
        <SectionHeading id="what-remains-heading">
          Что остаётся после меня
        </SectionHeading>
        <DragonAssistant
          tipId={WEB_DRAGON_TIPS.whatRemains.tipId}
          icon={WEB_DRAGON_TIPS.whatRemains.icon}
          text={WEB_DRAGON_TIPS.whatRemains.text}
          className="dragon-guide--section"
        />
      </header>

      <p className="section-lead what-remains__lead" data-aos="fade-up">
        Система, которая живёт без моего вмешательства.
      </p>

      <ul className="what-remains__grid">
        {WHAT_REMAINS_ITEMS.map((item) => (
          <li key={item.title} data-aos="fade-up" className="what-remains__card">
            <div className="what-remains__title-row">
              <KitIcon
                name={item.icon}
                className="what-remains__icon"
                size={28}
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
