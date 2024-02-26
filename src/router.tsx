import NewPage2 from '@/pages/NewPage2'
import { UrlInternal } from '@/constants/url-internal'
import IntegrationModule from '@/pages/Integration/Integration'
import VdscAccountCreation from './pages/VdscAccountCreation'

export const routes = {
  HOME_PAGE: {
    url: UrlInternal.HOME_PAGE,
    element: <IntegrationModule />
  },
  PAGE_1: {
    url: UrlInternal.CREATE_VDSC,
    element: <VdscAccountCreation />
  },
  PAGE_2: {
    url: UrlInternal.SUPPORT_VDSC,
    element: <NewPage2 />
  }
}
