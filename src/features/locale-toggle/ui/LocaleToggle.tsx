'use client'

import React from 'react'
import { useTranslation } from 'react-i18next'
import type { Locale } from '@/shared/i18n'

export default function LocaleToggle() {
  const { t, i18n } = useTranslation()
  const locale: Locale = i18n.language.startsWith('en') ? 'en' : 'ru'
  const nextLocale: Locale = locale === 'ru' ? 'en' : 'ru'

  return (
    <button
      type="button"
      className="locale-toggle"
      aria-label={t('locale.switchAria')}
      title={t('locale.switchAria')}
      onClick={() => void i18n.changeLanguage(nextLocale)}
    >
      <span
        className={`locale-toggle__code${locale === 'ru' ? ' locale-toggle__code--active' : ''}`}
        aria-hidden={locale !== 'ru'}
      >
        {t('locale.ru')}
      </span>
      <span className="locale-toggle__divider" aria-hidden>
        /
      </span>
      <span
        className={`locale-toggle__code${locale === 'en' ? ' locale-toggle__code--active' : ''}`}
        aria-hidden={locale !== 'en'}
      >
        {t('locale.en')}
      </span>
    </button>
  )
}
