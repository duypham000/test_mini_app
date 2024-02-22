import { Storage } from '@/constants/storage'
import { deleteAllCookies, getCookie } from './storage/cookie-storage'
import { isAuthenticatedJwt } from './jwt'
import mainAxios from '@/apis/main-axios'
import { removeLocalStorageItem } from './storage/local-storage'
import { UrlInternal } from '@/constants/url-internal'

export const getIsLogin = () => {
  if (typeof window === 'undefined') return false

  const simToken = getCookie(Storage.token)

  if (!simToken) return false

  if (!isAuthenticatedJwt(simToken)) return false

  return true
}

export const logout = () => {
  ;(async () => {
    try {
      await mainAxios.get(`/api/general/auth/logout`)
    } catch (error) {
      console.log(error)
    } finally {
      deleteAllCookies()
      removeLocalStorageItem(Storage.current_user)
      removeLocalStorageItem(Storage.watchlist_select)
      removeLocalStorageItem(Storage.course_review)

      window.location.href = `${UrlInternal.HOME_PAGE}`
    }
  })()
}
