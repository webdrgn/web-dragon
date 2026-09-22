'use client'

import React from 'react'
import SectionHeading from '@/shared/ui/section-heading'
import Skill, { skills } from '@/entities/skill'
import { useTranslation } from 'react-i18next'

export default function Skills() {
  const { t } = useTranslation()

  return (
    <div id="stack" className="skills">
      <header className="skills__header">
        <SectionHeading className="skills__title">
          {t('skills.title')}
        </SectionHeading>
      </header>

      <div className="skills__content">
        <div data-aos="fade-up">
          <p className="section-lead skills__lead">{t('skills.lead')}</p>
        </div>

        <div className="skills__grid grid">
          {skills.map((skill) => (
            <div key={skill.id} className="col-12 col-md-6">
              <Skill skill={skill} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
