'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { publicAsset } from '@/shared/lib'

const MOBILE_MAX_WIDTH_PX = 767

function isDesktopViewport() {
  if (typeof window === 'undefined') {
    return true
  }

  return window.matchMedia(`(min-width: ${MOBILE_MAX_WIDTH_PX + 1}px)`).matches
}

export default function DragonAssistant({
  tipId,
  icon,
  text,
  className = '',
}: {
  tipId: string
  icon: string
  text: string
  className?: string
}) {
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    setIsOpen(isDesktopViewport())
  }, [])

  const closeTip = () => {
    setIsOpen(false)
  }

  const openTip = () => {
    setIsOpen(true)
  }

  const rootClass = ['dragon-guide', className].filter(Boolean).join(' ')

  return (
    <div className={rootClass}>
      <button
        type="button"
        className={`dragon-guide__trigger${isOpen ? '' : ' dragon-guide__trigger--pulse'}`}
        onClick={isOpen ? closeTip : openTip}
        aria-expanded={isOpen}
        aria-controls={`dragon-tip-${tipId}`}
        aria-label={isOpen ? 'Скрыть подсказку Веб-дракончика' : 'Открыть подсказку Веб-дракончика'}
      >
        <Image
          src={publicAsset(icon)}
          alt=""
          width={96}
          height={48}
          className="dragon-guide__icon"
          aria-hidden
          unoptimized
          loading="lazy"
        />
      </button>

      {isOpen ? (
        <div
          id={`dragon-tip-${tipId}`}
          className="dragon-guide__bubble"
          role="dialog"
          aria-label="Подсказка Веб-дракончика"
        >
          <p className="dragon-guide__text">{text}</p>
          <button
            type="button"
            className="dragon-guide__close"
            onClick={closeTip}
          >
            Свернуть
          </button>
        </div>
      ) : null}
    </div>
  )
}
