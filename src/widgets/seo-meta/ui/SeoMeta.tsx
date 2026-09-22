'use client'

import React from 'react'
import Head from 'next/head'
import {
  SITE_URL,
  SITE_NAME,
  SEO_KEYWORDS,
  OG_IMAGE,
  AUTHOR_JOB_TITLE,
} from '@/shared/config'
import { useTranslation } from 'react-i18next'

export default function SeoMeta() {
  const { t, i18n } = useTranslation()
  const description = t('meta.description')
  const authorName = t('meta.authorName')
  const pageTitle = `${authorName} · ${AUTHOR_JOB_TITLE}`
  const isEnglish = i18n.language.startsWith('en')

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={SEO_KEYWORDS.join(', ')} />
      <link rel="canonical" href={SITE_URL} />

      <meta property="og:type" content="profile" />
      <meta property="og:url" content={SITE_URL} />
      <meta property="og:title" content={pageTitle || SITE_NAME} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta
        property="og:image:alt"
        content={`${authorName} · ${AUTHOR_JOB_TITLE}`}
      />
      <meta property="og:locale" content={isEnglish ? 'en_US' : 'ru_RU'} />
      <meta
        property="og:locale:alternate"
        content={isEnglish ? 'ru_RU' : 'en_US'}
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />
    </Head>
  )
}
