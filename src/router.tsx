import NewPage1 from '@/pages/NewPage1'
import NewPage2 from '@/pages/NewPage2'
import { UrlInternal } from '@/constants/url-internal'
import IntegrationModule from '@/pages/Integration/Integration'

export const routes = {
  HOME_PAGE: {
    url: UrlInternal.HOME_PAGE,
    element: <IntegrationModule />
  },
  PAGE_1: {
    url: UrlInternal.CREATE_VDSC,
    element: <NewPage1 />
  },
  PAGE_2: {
    url: UrlInternal.SUPPORT_VDSC,
    element: <NewPage2 />
  }
}
