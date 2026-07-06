import React from 'react'
import { FiExternalLink } from 'react-icons/fi'
import {
  AUTHOR_HABR_ARTICLE,
  AUTHOR_HABR_ARTICLE_TITLE,
} from '@/config/constants'

export default function SocialProof() {
  return (
    <section
      id="expertise"
      className="social-proof"
      aria-labelledby="social-proof-heading"
    >
      <h2
        id="social-proof-heading"
        className="section-heading"
        data-aos="fade-up"
      >
        Экспертиза
      </h2>

      <article
        data-aos="fade-up"
        className="social-proof__card"
      >
        <p className="social-proof__label">Статья на Habr</p>
        <h3 className="social-proof__title">{AUTHOR_HABR_ARTICLE_TITLE}</h3>
        <p className="social-proof__excerpt">
          Как автоматизировать API-клиент и типы через OpenAPI: единая точка
          входа в контракт, линейный флоу обновлений и предсказуемая разработка
          без ручной типизации.
        </p>
        <a
          href={AUTHOR_HABR_ARTICLE}
          target="_blank"
          rel="noopener noreferrer"
          className="social-proof__link"
        >
          <FiExternalLink aria-hidden />
          Читать на Habr
        </a>
      </article>
    </section>
  )
}
