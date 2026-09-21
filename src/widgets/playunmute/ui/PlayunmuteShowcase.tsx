import React from 'react'
import Image from 'next/image'
import KitIcon from '@/shared/ui/kit-icon'
import type { KitIconName } from '@/shared/ui/kit-icon'
import { publicAsset } from '@/shared/lib'

const PLAYUNMUTE_DEMO = 'https://webdrgn.github.io/playunmute'
const PLAYUNMUTE_PREVIEW = publicAsset('/img/playunmute.webp')

const PLAYUNMUTE_STACK =
  'Fullstack · Nuxt 3 · Vue 3 · TypeScript · Node.js · Express'

const PLAYUNMUTE_FEATURES: Array<{
  label: string
  icon: KitIconName
}> = [
  { label: 'Симуляция Zoom-интервью', icon: 'headset' },
  { label: 'Оценка темпа и реакции', icon: 'terminal' },
  { label: 'Вердикт по шести этапам', icon: 'trophy' },
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
            <KitIcon name="globe" size={25} />
            Попробовать
          </a>
        </div>

        <p className="product-showcase__proof">
          Десятки технических интервью. Кандидаты готовятся не к тому. Учат
          алгоритмы, а валятся на простых вопросах.
        </p>

        <p className="product-showcase__proof">
          Я сделал тренажёр. Симуляция Zoom-интервью. Калибровка темпа мышления.
          Оценка скорости реакции. Разбор по шести этапам с баллами и
          комментариями. Честный вердикт.
        </p>

        <ul className="product-showcase__features">
          {PLAYUNMUTE_FEATURES.map((feature) => (
            <li key={feature.label} className="product-showcase__feature">
              <KitIcon
                name={feature.icon}
                size={24}
                className="product-showcase__feature-icon"
              />
              <span>{feature.label}</span>
            </li>
          ))}
        </ul>

        <div className="product-showcase__preview">
          <Image
            src={PLAYUNMUTE_PREVIEW}
            alt="Playunmute — симуляция Zoom-собеседования"
            width={1000}
            height={400}
            className="product-showcase__preview-img"
            unoptimized
            loading="lazy"
          />
        </div>

        <p className="product-showcase__stack">{PLAYUNMUTE_STACK}</p>
      </article>
    </section>
  )
}
