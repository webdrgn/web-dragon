import React from 'react'
import { AUTHOR_TELEGRAM, SECTION_MASCOTS } from '@/config/constants'
import SectionHeading from '@/components/common/SectionHeading/SectionHeading'
import CaseList from './CaseList'

export default function Projects() {
  return (
    <div
      id="cases"
      className="projects"
    >
      <header className="projects__header">
        <SectionHeading mascot={SECTION_MASCOTS.cases}>
          Кейсы
        </SectionHeading>
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
        <h3>Проекты под NDA</h3>
        <p>
          Ссылки и детали — в личном диалоге.
        </p>
        <a
          href={AUTHOR_TELEGRAM}
          target="_blank"
          rel="noopener noreferrer"
          className="projects__nda-link"
        >
          Написать в Telegram
        </a>
      </aside>
    </div>
  )
}
