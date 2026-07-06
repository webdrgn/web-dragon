import React from 'react'
import Image from 'next/image'
import { FiExternalLink } from 'react-icons/fi'
import { publicAsset } from '@/utils/publicAsset'

const PLAYUNMUTE_DEMO = 'https://webdrgn.github.io/playunmute'
const PLAYUNMUTE_PREVIEW = publicAsset('/img/candidate_interviewer.svg')

const PLAYUNMUTE_STACK =
  'Fullstack · Nuxt · Vue 3 · TypeScript · Node.js · Express'

const PLAYUNMUTE_HIGHLIGHTS = [
  'Спроектировал полный цикл: калибровка → иммерсивное интервью → разбор с вердиктом',
  'Алгоритм оценки: содержание ответа и тайминг относительно индивидуального темпа мышления',
  'Детальный фидбек по 6 этапам — баллы, pass/fail и комментарий к каждому ответу',
  'Контент-ориентированная архитектура: новые сценарии без изменения ядра продукта',
]

export default function PlayunmuteShowcase() {
  return (
    <section
      id="playunmute"
      className="playunmute"
      aria-labelledby="playunmute-heading"
    >
      <article
        data-aos="fade-up"
        className="case-study product-showcase"
      >
        <p className="product-showcase__label">Продукт</p>

        <div className="product-showcase__head">
          <h2
            id="playunmute-heading"
            className="case-study__title"
          >
            Playunmute
          </h2>
          <a
            href={PLAYUNMUTE_DEMO}
            target="_blank"
            rel="noopener noreferrer"
            className="product-showcase__demo"
          >
            <FiExternalLink aria-hidden />
            Демо
          </a>
        </div>

        <p className="case-study__proof">
          Fullstack-приложение — браузерный симулятор технического
          собеседования: калибровка темпа → Zoom-интервью → разбор с оценками.
        </p>

        <div className="product-showcase__preview">
          <Image
            src={PLAYUNMUTE_PREVIEW}
            alt="Playunmute — симуляция Zoom-собеседования"
            width={1000}
            height={400}
            className="product-showcase__preview-img"
            unoptimized
          />
        </div>

        <ul className="product-showcase__highlights">
          {PLAYUNMUTE_HIGHLIGHTS.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <p className="product-showcase__stack">{PLAYUNMUTE_STACK}</p>
      </article>
    </section>
  )
}
