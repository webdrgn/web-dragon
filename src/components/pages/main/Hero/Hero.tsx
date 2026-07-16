import React from 'react'
import Image from 'next/image'
import { SiNuxtdotjs, SiTypescript, SiVuedotjs } from 'react-icons/si'
import { AUTHOR_NAME, AUTHOR_JOB_TITLE, AUTHOR_PHOTO } from '@/config/constants'
import { publicAsset } from '@/utils/publicAsset'

export default function Hero() {
  return (
    <div
      data-aos="fade-up"
      id="top"
      className="hero"
    >
      <div className="hero__text">
        <div className="hero__profile">
          <Image
            src={publicAsset(AUTHOR_PHOTO)}
            alt={AUTHOR_NAME}
            width={120}
            height={120}
            className="hero__photo"
            quality={100}
            unoptimized
            priority
          />

          <div className="hero__identity">
            <h1 className="hero__name">{AUTHOR_NAME}</h1>
            <p className="hero__role">{AUTHOR_JOB_TITLE}</p>
          </div>
        </div>

        <p className="hero__headline">
          Начинал с кода. Сейчас отвечаю за разработку целиком. Но до сих пор
          открываю IDE, когда нужно принять сложное решение.
        </p>

        <div className="hero__actions">
          <a
            href="#contacts"
            className="hero__cta hero__cta--primary"
          >
            Обсудить сотрудничество
          </a>
          <a
            href="#mentorship"
            className="hero__cta"
          >
            Менторство
          </a>
        </div>

        <div
          className="hero__tech-strip"
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
          <span className="hero__tech-label">
            Vue 3 · TypeScript · Nuxt 3
          </span>
        </div>

        <p className="hero__about">
          Моя работа — чтобы команда выпускала фичи предсказуемо и без лишнего
          стресса. А бизнес получал результат, на который можно рассчитывать.
          Всё остальное — найм, архитектура, процессы, качество в проде — просто
          инструменты.
        </p>
      </div>
    </div>
  )
}
