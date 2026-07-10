import React from 'react'
import Image from 'next/image'
import { SiNuxtdotjs, SiTypescript, SiVuedotjs } from 'react-icons/si'
import { AUTHOR_NAME, AUTHOR_JOB_TITLE, AUTHOR_PHOTO } from '@/config/constants'
import { publicAsset } from '@/utils/publicAsset'

export default function Greeting() {
  return (
    <div
      data-aos="fade-up"
      id="top"
      className="greeting"
    >
      <div className="greeting__text">
        <div className="greeting__profile">
          <Image
            src={publicAsset(AUTHOR_PHOTO)}
            alt={AUTHOR_NAME}
            width={120}
            height={120}
            className="greeting__photo"
            quality={100}
            unoptimized
            priority
          />

          <div className="greeting__identity">
            <h1 className="greeting__name">{AUTHOR_NAME}</h1>
            <p className="greeting__role">{AUTHOR_JOB_TITLE}</p>
          </div>
        </div>

        <h2 className="greeting__headline">
          Начинал с кода. Сейчас отвечаю за разработку целиком. Но до сих пор
          открываю IDE, когда нужно принять сложное решение.
        </h2>

        <div className="greeting__actions">
          <a
            href="#contacts"
            className="greeting__cta greeting__cta--primary"
          >
            Обсудить сотрудничество
          </a>
          <a
            href="#mentorship"
            className="greeting__cta"
          >
            Менторство
          </a>
        </div>

        <div
          className="greeting__tech-strip"
          aria-label="Основной стек"
        >
          <SiVuedotjs
            size={22}
            aria-hidden
          />
          <SiTypescript
            size={22}
            aria-hidden
          />
          <SiNuxtdotjs
            size={22}
            aria-hidden
          />
          <span className="greeting__tech-label">
            Vue 3 · TypeScript · Nuxt 3
          </span>
        </div>

        <p className="greeting__about">
          Моя работа — чтобы команда выпускала фичи предсказуемо и без лишнего
          стресса. А бизнес получал результат, на который можно рассчитывать.
          Всё остальное — найм, архитектура, процессы, качество в проде — просто
          инструменты.
        </p>
      </div>
    </div>
  )
}
