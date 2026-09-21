import React from 'react'
import KitIcon from '@/shared/ui/kit-icon'
import SectionHeading from '@/shared/ui/section-heading'
import DragonAssistant from '@/features/dragon-assistant'
import { AUTHOR_GITHUB_ARTICLE, WEB_DRAGON_TIPS } from '@/shared/config'

export default function SocialProof() {
  return (
    <section
      id="expertise"
      className="social-proof"
      aria-labelledby="social-proof-heading"
    >
      <header className="social-proof__header">
        <SectionHeading id="social-proof-heading">
          Статья на GitHub
        </SectionHeading>
        <DragonAssistant
          tipId={WEB_DRAGON_TIPS.article.tipId}
          icon={WEB_DRAGON_TIPS.article.icon}
          text={WEB_DRAGON_TIPS.article.text}
          className="dragon-guide--section"
        />
      </header>

      <article
        data-aos="fade-up"
        className="social-proof__card"
      >
        <p className="social-proof__excerpt">
          15% времени команды уходило на рутину. Ctrl+C Ctrl+V из спецификации
          в код. Я убрал это. OpenAPI, авто-генерация, предсказуемые обновления.
          Разработчики пишут фичи, рутина осталась в прошлом.
        </p>
        <a
          href={AUTHOR_GITHUB_ARTICLE}
          target="_blank"
          rel="noopener noreferrer"
          className="social-proof__link"
        >
          <KitIcon name="globe" size={25} />
          Читать на GitHub
        </a>
      </article>
    </section>
  )
}
