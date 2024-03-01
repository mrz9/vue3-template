import { type I18n, createI18n } from 'vue-i18n'
import { nextTick } from 'vue'

export const SUPPORT_LOCALES = ['en', 'zh-CN']
export const DEFAULT_LOCALE = 'en'

const CACHE_LOCALES: Record<string, any> = {}

export function setupI18n(options = { locale: 'en' }) {
  const i18n = createI18n(options)
  setI18nLanguage(i18n, options.locale)
  return i18n
}

export function setI18nLanguage(i18n: I18n, locale: string) {
  if (i18n.mode === 'legacy')
    i18n.global.locale = locale
  else (i18n.global.locale as any).value = locale

  /**
   * NOTE:
   * If you need to specify the language setting for headers, such as the `fetch` API, set it here.
   * The following is an example for axios.
   *
   * axios.defaults.headers.common['Accept-Language'] = locale
   */
  document.querySelector('html')?.setAttribute('lang', locale)
}

export async function loadLocaleMessages(i18n: I18n, locale: string) {
  // load locale messages with dynamic import
  let messages
  if (CACHE_LOCALES[locale]) {
    messages = CACHE_LOCALES[locale]
  }
  else {
    messages = await import(
      /* webpackChunkName: "locale-[request]" */ `./lang/${locale}.json`
    )
  }

  // set locale and locale message
  i18n.global.setLocaleMessage(locale, messages.default)

  return nextTick()
}

// export default i18n
export const i18n = createI18n({
  legacy: false,
  locale: DEFAULT_LOCALE, // set locale
  fallbackLocale: DEFAULT_LOCALE, // set fallback locale
  //   availableLocales: SUPPORT_LOCALES,

})
