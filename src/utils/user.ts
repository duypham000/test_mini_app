import { Storage } from '@/constants/storage'
import { decodeJwt } from './jwt'
import { getLocalStorageItem } from './storage/local-storage'

export const getRequiredPhone = (token: any) => {
  if (token) {
    const user_info: any = decodeJwt(token, { complete: false })
    return user_info?.requiredPhoneNumber
  }
}

export const convertLocalStorageUser = () => {
  let user
  if (typeof window !== 'undefined') {
    user = getLocalStorageItem(Storage.user_info)
  }
  return user
}
