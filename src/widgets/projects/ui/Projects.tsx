import React from 'react'
import { AUTHOR_TELEGRAM, WEB_DRAGON_TIPS } from '@/shared/config'
import SectionHeading from '@/shared/ui/section-heading'
import KitIcon, { KIT_ICON_MD } from '@/shared/ui/kit-icon'
import DragonAssistant from '@/features/dragon-assistant'
import CaseList from './CaseList'

export default function Projects() {
  return (
    <div
      id="cases"
      className="projects"
    >
      <header className="projects__header">
        <SectionHeading>
          Кейсы
        </SectionHeading>
        <DragonAssistant
          tipId={WEB_DRAGON_TIPS.cases.tipId}
          icon={WEB_DRAGON_TIPS.cases.icon}
          text={WEB_DRAGON_TIPS.cases.text}
          className="dragon-guide--section"
        />
        <p
          className="projects__kicker"
          data-aos="fade-up"
        >
          Три проекта. Три результата.
        </p>
      </header>

      <CaseList />

      <aside
        className="projects__nda"
        data-aos="fade-up"
        aria-label="Проекты под NDA"
      >
        <h3 className="projects__nda-title">
          <KitIcon name="key" size={KIT_ICON_MD} className="projects__nda-icon" />
          Проекты под NDA
        </h3>
        <p>
          Ссылки и детали — в личном диалоге.
        </p>
        <a
          href={AUTHOR_TELEGRAM}
          target="_blank"
          rel="noopener noreferrer"
          className="projects__nda-link"
        >
          <KitIcon name="send" size={KIT_ICON_MD} />
          Написать в Telegram
        </a>
      </aside>
    </div>
  )
}
