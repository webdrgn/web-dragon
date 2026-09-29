import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { ru } from './messages/ru'
import { en } from './messages/en'
import { isLocale, type Locale } from './locales'

export const SSR_LOCALE: Locale = 'ru'

export function resolveClientLocale(): Locale {
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

  document.documentElement.lang = isLocale(language)
    ? language
    : language.startsWith('ru')
      ? 'ru'
      : 'en'
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
