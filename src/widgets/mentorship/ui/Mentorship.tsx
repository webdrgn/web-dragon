import React from 'react'
import KitIcon, { KIT_ICON_MD } from '@/shared/ui/kit-icon'
import type { KitIconName } from '@/shared/ui/kit-icon'
import SectionHeading from '@/shared/ui/section-heading'
import DragonAssistant from '@/features/dragon-assistant'
import { AUTHOR_TELEGRAM, WEB_DRAGON_TIPS } from '@/shared/config'

const MENTORSHIP_FORMATS: Array<{
  accent: string
  label: string
  icon: KitIconName
}> = [
  {
    accent: 'Собеседования',
    label: 'Подготовка к реальным вопросам middle+',
    icon: 'chat',
  },
  {
    accent: 'Code review',
    label: 'От страха комментировать к уверенным решениям',
    icon: 'clipboard',
  },
  {
    accent: 'Playunmute',
    label: 'Мой тренажер для подготовки',
    icon: 'diploma',
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
        <SectionHeading id="mentorship-heading">
          Менторство
        </SectionHeading>
        <DragonAssistant
          tipId={WEB_DRAGON_TIPS.mentorship.tipId}
          icon={WEB_DRAGON_TIPS.mentorship.icon}
          text={WEB_DRAGON_TIPS.mentorship.text}
          className="dragon-guide--section"
        />
        <div data-aos="fade-up">
          <p className="section-lead mentorship__lead">
            Боишься собеседований? Я провёл десятки. Знаю, на чём валятся даже
            сильные инженеры. Дам шаблон ответов на каверзные вопросы. Разберу твоё ревью, покажу,
            где ты сливаешься.
          </p>
        </div>
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
              <KitIcon
                name={format.icon}
                className="mentorship__icon"
                size={KIT_ICON_MD}
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
          <KitIcon name="send" size={KIT_ICON_MD} className="mentorship__cta-icon" />
          Нужен ментор? Напиши.
        </a>
      </div>
    </section>
  )
}
