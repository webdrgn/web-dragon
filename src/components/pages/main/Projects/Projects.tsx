import React from 'react'
import { AUTHOR_TELEGRAM } from '@/config/constants'
import CaseStudyList from './CaseStudyList'

export default function Projects() {
  return (
    <div
      id="cases"
      className="projects"
    >
      <header className="projects__header">
        <h2
          className="section-heading"
          data-aos="fade-up"
        >
          Кейсы
        </h2>
        <p
          className="projects__kicker"
          data-aos="fade-up"
        >
          Кейсы из продуктовой работы
        </p>
      </header>

      <p
        className="projects__intro section-lead"
        data-aos="fade-up"
      >
        Три кейса в формате{' '}
        <abbr title="Situation, Task, Action, Result">STAR</abbr>: ситуация,
        задача, действия и измеримый результат. Раскройте кейс, чтобы увидеть
        детали.
      </p>

      <CaseStudyList />

      <p
        className="projects__micro-cta"
        data-aos="fade-up"
      >
        Похожая задача?{' '}
        <a
          href={AUTHOR_TELEGRAM}
          target="_blank"
          rel="noopener noreferrer"
        >
          Напишите в Telegram
        </a>
      </p>
    </div>
  )
}
