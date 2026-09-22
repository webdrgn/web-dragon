import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { ru } from './messages/ru'
import { en } from './messages/en'
import { LOCALE_STORAGE_KEY, isLocale, type Locale } from './locales'

export const SSR_LOCALE: Locale = 'ru'

function readStoredLocale(): Locale | null {
  if (typeof window === 'undefined') {
    return null
  }

  try {
    const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY)
    if (stored && isLocale(stored)) {
      return stored
    }
  } catch (error) {
    console.error('Failed to read locale from storage', error)
  }

  return null
}

function readBrowserLocale(): Locale {
  if (typeof window === 'undefined') {
    return SSR_LOCALE
  }

  const languages = window.navigator.languages?.length
    ? window.navigator.languages
    : [window.navigator.language]

  for (const language of languages) {
    if (language.toLowerCase().startsWith('ru')) {
      return 'ru'
    }
  }

  return 'en'
}

export function resolveClientLocale(): Locale {
  return readStoredLocale() ?? readBrowserLocale()
}

void i18n.use(initReactI18next).init({
  resources: {
    ru: { translation: ru },
    en: { translation: en },
  },
  lng: SSR_LOCALE,
  fallbackLng: 'en',
  supportedLngs: ['ru', 'en'],
  nonExplicitSupportedLngs: true,
  load: 'languageOnly',
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
})

i18n.on('languageChanged', (language) => {
  if (typeof document === 'undefined') {
    return
  }

  const nextLocale: Locale = isLocale(language)
    ? language
    : language.startsWith('ru')
      ? 'ru'
      : 'en'

  document.documentElement.lang = nextLocale

  try {
    window.localStorage.setItem(LOCALE_STORAGE_KEY, nextLocale)
  } catch (error) {
    console.error('Failed to persist locale', error)
  }
})

export function syncClientLocale() {
  const nextLocale = resolveClientLocale()

  if (nextLocale !== i18n.language) {
    void i18n.changeLanguage(nextLocale)
    return
  }

  if (typeof document !== 'undefined') {
    document.documentElement.lang = nextLocale
  }
}

export default i18n
