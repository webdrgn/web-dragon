import './config'

export type { Locale } from './locales'
export { LOCALES, isLocale } from './locales'
export {
  default as i18n,
  SSR_LOCALE,
  resolveClientLocale,
  syncClientLocale,
} from './config'
