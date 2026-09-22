export const LOCALES = ['ru', 'en'] as const

export type Locale = (typeof LOCALES)[number]

export const LOCALE_STORAGE_KEY = 'webdragon-locale'

export function isLocale(value: string): value is Locale {
  return LOCALES.includes(value as Locale)
}
