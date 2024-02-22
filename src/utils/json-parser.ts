import { clearLocalStorage } from './storage/local-storage'

export const jsonParser = (jsonString: string) => {
  try {
    return JSON.parse(jsonString)
  } catch (e) {
    console.error(e)
    clearLocalStorage()
    return {}
  }
}
