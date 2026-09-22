import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import { ru } from './messages/ru'
import { en } from './messages/en'
import { LOCALE_STORAGE_KEY, isLocale } from './locales'

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ru: { translation: ru },
      en: { translation: en },
    },
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
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: LOCALE_STORAGE_KEY,
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

if (typeof document !== 'undefined') {
  document.documentElement.lang = i18n.resolvedLanguage ?? i18n.language
}

export default i18n
