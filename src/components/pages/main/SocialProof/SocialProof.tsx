import React from 'react'
import { FiExternalLink } from 'react-icons/fi'
import SectionHeading from '@/components/common/SectionHeading/SectionHeading'
import {
  AUTHOR_GITHUB_ARTICLE,
  SECTION_MASCOTS,
} from '@/config/constants'

export default function SocialProof() {
  return (
    <section
      id="expertise"
      className="social-proof"
      aria-labelledby="social-proof-heading"
    >
      <SectionHeading id="social-proof-heading" mascot={SECTION_MASCOTS.expertise}>
        Статья на GitHub
      </SectionHeading>

      <article
        data-aos="fade-up"
        className="social-proof__card"
      >
        <p className="social-proof__excerpt">
          Как мы перестали тратить время на ручную типизацию API. OpenAPI,
          автоматическая генерация и предсказуемый флоу обновлений.
        </p>
        <a
          href={AUTHOR_GITHUB_ARTICLE}
          target="_blank"
          rel="noopener noreferrer"
          className="social-proof__link"
        >
          <FiExternalLink aria-hidden />
          Читать на GitHub
        </a>
      </article>
    </section>
  )
}
