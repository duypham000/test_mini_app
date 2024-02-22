import { Storage } from '@/constants/storage'

export const getSessionStorageLength = () => sessionStorage.length

export const clearSessionStorage = () => sessionStorage.clear()

export const getSessionStorageItem = (key: string): string | null =>
  sessionStorage.getItem(`${Storage.prefix}-${key}`)

export const setSessionStorageItem = (key: string, value: string) =>
  sessionStorage.setItem(`${Storage.prefix}-${key}`, value)

export const removeSessionStorageItem = (key: string) =>
  sessionStorage.removeItem(`${Storage.prefix}-${key}`)

export const keySessionStorage = (index: number): string | null =>
  sessionStorage.key(index)
