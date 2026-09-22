'use client'

import React from 'react'
import { AUTHOR_TELEGRAM, WEB_DRAGON_TIPS } from '@/shared/config'
import SectionHeading from '@/shared/ui/section-heading'
import KitIcon, { KIT_ICON_MD } from '@/shared/ui/kit-icon'
import DragonAssistant from '@/features/dragon-assistant'
import { useTranslation } from 'react-i18next'
import CaseList from './CaseList'

export default function Projects() {
  const { t } = useTranslation()

  return (
    <div
      id="cases"
      className="projects"
    >
      <header className="projects__header">
        <SectionHeading>{t('projects.title')}</SectionHeading>
        <DragonAssistant
          tipId={WEB_DRAGON_TIPS.cases.tipId}
          icon={WEB_DRAGON_TIPS.cases.icon}
          text={t(WEB_DRAGON_TIPS.cases.tipKey)}
          className="dragon-guide--section"
        />
        <p
          className="projects__kicker"
          data-aos="fade-up"
        >
          {t('projects.kicker')}
        </p>
      </header>

      <CaseList />

      <aside
        className="projects__nda"
        data-aos="fade-up"
        aria-label={t('projects.ndaAria')}
      >
        <h3 className="projects__nda-title">
          <KitIcon name="key" size={KIT_ICON_MD} className="projects__nda-icon" />
          {t('projects.ndaTitle')}
        </h3>
        <p>{t('projects.ndaText')}</p>
        <a
          href={AUTHOR_TELEGRAM}
          target="_blank"
          rel="noopener noreferrer"
          className="projects__nda-link"
        >
          <KitIcon name="send" size={KIT_ICON_MD} />
          {t('projects.ndaLink')}
        </a>
      </aside>
    </div>
  )
}
