import React from 'react'
import Image from 'next/image'
import { FiExternalLink } from 'react-icons/fi'
import { publicAsset } from '@/utils/publicAsset'

const PLAYUNMUTE_DEMO = 'https://webdrgn.github.io/playunmute'
const PLAYUNMUTE_PREVIEW = publicAsset('/img/playunmute.png')

const PLAYUNMUTE_STACK =
  'Fullstack · Nuxt 3 · Vue 3 · TypeScript · Node.js · Express'

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
          30+ технических интервью. Кандидаты готовятся не к тому. Учат
          алгоритмы, а валятся на простых вопросах.
        </p>

        <p className="product-showcase__proof">
          Я сделал тренажёр. Симуляция Zoom-интервью. Калибровка темпа мышления.
          Оценка скорости реакции. Разбор по шести этапам с баллами и
          комментариями. Честный вердикт.
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

        <p className="product-showcase__stack">{PLAYUNMUTE_STACK}</p>
      </article>
    </section>
  )
}
