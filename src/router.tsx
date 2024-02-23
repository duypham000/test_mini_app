import { urlExternal } from '@/constants/url-internal'
import NewPage1 from '@/pages/NewPage1'
import NewPage2 from '@/pages/NewPage2'

export const routes = {
  HOME_PAGE: {
    url: urlExternal.HOME_PAGE,
    element: <NewPage1 />
  },
  PAGE_1: {
    url: urlExternal.NEW_PAGE_1,
    element: <NewPage1 />
  },
  PAGE_2: {
    url: urlExternal.NEW_PAGE_2,
    element: <NewPage2 />
  }
}
