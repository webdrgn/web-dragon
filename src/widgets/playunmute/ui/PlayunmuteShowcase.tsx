'use client'

import React from 'react'
import Image from 'next/image'
import KitIcon, { KIT_ICON_MD } from '@/shared/ui/kit-icon'
import type { KitIconName } from '@/shared/ui/kit-icon'
import { publicAsset } from '@/shared/lib'
import { useTranslation } from 'react-i18next'

const PLAYUNMUTE_DEMO = 'https://webdrgn.github.io/playunmute'
const PLAYUNMUTE_PREVIEW = publicAsset('/img/playunmute.webp')

const PLAYUNMUTE_STACK =
  'Fullstack · Nuxt 3 · Vue 3 · TypeScript · Node.js · Express'

const PLAYUNMUTE_FEATURES: Array<{
  labelKey: 'playunmute.features.zoom' | 'playunmute.features.pace' | 'playunmute.features.verdict'
  icon: KitIconName
}> = [
  { labelKey: 'playunmute.features.zoom', icon: 'headset' },
  { labelKey: 'playunmute.features.pace', icon: 'terminal' },
  { labelKey: 'playunmute.features.verdict', icon: 'trophy' },
]

export default function PlayunmuteShowcase() {
  const { t } = useTranslation()

  return (
    <section
      id="playunmute"
      className="playunmute"
      aria-labelledby="playunmute-heading"
    >
      <article data-aos="fade-up" className="product-showcase">
        <p className="product-showcase__label">{t('playunmute.label')}</p>

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
            <KitIcon name="star" size={KIT_ICON_MD} />
            {t('playunmute.tryDemo')}
          </a>
        </div>

        <p className="product-showcase__proof">{t('playunmute.proof1')}</p>
        <p className="product-showcase__proof">{t('playunmute.proof2')}</p>

        <ul className="product-showcase__features">
          {PLAYUNMUTE_FEATURES.map((feature) => (
            <li key={feature.labelKey} className="product-showcase__feature">
              <KitIcon
                name={feature.icon}
                size={KIT_ICON_MD}
                className="product-showcase__feature-icon"
              />
              <span>{t(feature.labelKey)}</span>
            </li>
          ))}
        </ul>

        <div className="product-showcase__preview">
          <Image
            src={PLAYUNMUTE_PREVIEW}
            alt={t('playunmute.previewAlt')}
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
