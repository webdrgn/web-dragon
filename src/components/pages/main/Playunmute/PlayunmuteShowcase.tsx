import React from 'react'
import Image from 'next/image'
import { FiExternalLink } from 'react-icons/fi'
import { publicAsset } from '@/utils/publicAsset'

const PLAYUNMUTE_DEMO = 'https://webdrgn.github.io/playunmute'
const PLAYUNMUTE_PREVIEW = publicAsset('/img/playunmute.png')

const PLAYUNMUTE_STACK =
  'Fullstack · Nuxt 3 · Vue 3 · TypeScript · Node.js · Express'

const PLAYUNMUTE_HIGHLIGHTS = [
  'Калибровка темпа мышления',
  'Оценка содержания и скорости реакции',
  'Разбор по шести этапам с вердиктом',
  'Архитектура под новые сценарии без изменения ядра',
]

export default function PlayunmuteShowcase() {
  return (
    <section
      id="playunmute"
      className="playunmute"
      aria-labelledby="playunmute-heading"
    >
      <article data-aos="fade-up" className="product-showcase">
        <p className="product-showcase__label">Продукт</p>

        <div className="product-showcase__head">
          <h2 id="playunmute-heading" className="product-showcase__title">
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

        <p className="product-showcase__proof">
          Я сделал браузерный тренажер для подготовки к техническим
          собеседованиям. Полный цикл: калибровка, интервью в Zoom-стиле,
          разбор ошибок с баллами и комментариями.
        </p>

        <p className="product-showcase__proof">
          Зачем? Я провел десятки технических собеседований. Видел, как
          кандидаты готовятся не к тому. Сделал инструмент, который дает именно
          ту обратную связь, которая нужна.
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
