import {
  type RouteLocationNormalized,
  createRouter,
  createWebHashHistory,
} from 'vue-router'
import routes from './routes'
import { useCachedViewStoreHook } from '@/store/modules/cachedView'
import NProgress from '@/utils/progress'
import setPageTitle from '@/utils/set-page-title'
import { DEFAULT_LOCALE, SUPPORT_LOCALES, i18n, loadLocaleMessages, setI18nLanguage } from '@/locale'

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export interface toRouteType extends RouteLocationNormalized {
  meta: {
    title?: string
    noCache?: boolean
  }
}

router.beforeEach((to: toRouteType, from, next) => {
  NProgress.start()
  // cached page
  useCachedViewStoreHook().addCachedView(to)
  // page title
  setPageTitle(to.meta.title)
  next()
})

router.beforeEach(async (to, _from, next) => {
  const paramsLocale = to.params.locale as string
  // // use locale if paramsLocale is not in SUPPORT_LOCALES
  if (!SUPPORT_LOCALES.includes(paramsLocale))
    return next(`/${DEFAULT_LOCALE}`)
  // // load locale messages
  await loadLocaleMessages(i18n, paramsLocale)

  // // set i18n language
  setI18nLanguage(i18n, paramsLocale)

  return next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
