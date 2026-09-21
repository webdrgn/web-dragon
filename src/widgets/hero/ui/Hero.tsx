import React from 'react'
import Image from 'next/image'
import { AUTHOR_NAME, AUTHOR_JOB_TITLE, AUTHOR_PHOTO, WEB_DRAGON_TIPS } from '@/shared/config'
import DragonAssistant from '@/features/dragon-assistant'
import KitIcon from '@/shared/ui/kit-icon'
import { publicAsset } from '@/shared/lib'

export default function Hero() {
  return (
    <div id="top" className="hero">
      <div className="hero__stage">
        <DragonAssistant
          tipId={WEB_DRAGON_TIPS.hero.tipId}
          icon={WEB_DRAGON_TIPS.hero.icon}
          text={WEB_DRAGON_TIPS.hero.text}
          className="dragon-guide--hero"
        />

        <div className="hero__brand hero__reveal hero__reveal--1">
          <Image
            src={publicAsset(AUTHOR_PHOTO)}
            alt={AUTHOR_NAME}
            width={160}
            height={160}
            className="hero__photo"
            quality={75}
            unoptimized
            priority
          />
          <div className="hero__identity">
            <p className="hero__role">{AUTHOR_JOB_TITLE}</p>
            <h1 className="hero__name">{AUTHOR_NAME}</h1>
          </div>
        </div>

        <p className="hero__headline hero__reveal hero__reveal--2">
          Начинал с кода. Сейчас отвечаю за разработку целиком.
        </p>

        <p className="hero__support hero__reveal hero__reveal--3">
          Команда выпускает фичи предсказуемо. Бизнес получает результат, на
          который можно рассчитывать.
        </p>

        <div className="hero__actions hero__reveal hero__reveal--4">
          <a href="#contacts" className="hero__cta hero__cta--primary">
            <KitIcon name="send" size={22} className="hero__cta-icon" />
            Обсудим?
          </a>
          <a href="#mentorship" className="hero__cta">
            <KitIcon name="wand" size={22} className="hero__cta-icon" />
            Нужен ментор? Напиши.
          </a>
        </div>

        <p className="hero__focus hero__reveal hero__reveal--5" aria-label="Фокус">
          Architecture · Team Leadership · Full-cycle Engineering
        </p>
      </div>
    </div>
  )
}
