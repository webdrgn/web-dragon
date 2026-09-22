'use client'

import React from 'react'
import { useTranslation } from 'react-i18next'

export default function ErrorFallback() {
  const { t } = useTranslation()

  return (
    <div className="error-boundary">
      <h2>{t('error.title')}</h2>
      <p>{t('error.hint')}</p>
    </div>
  )
}
