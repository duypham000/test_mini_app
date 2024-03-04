import NewPage2 from '@/pages/NewPage2'
import { UrlInternal } from '@/constants/url-internal'
// import VdscAccountCreation from '@/pages/VdscAccountCreation'
import AutoInput from '@/pages/AutoInput'
import EkycAuthentication from '@/pages/EkycAuthentication'
import ChooseAccountAuthenticationMethod from '@/pages/ChooseAccountAuthenticationMethod'

export const routes = {
  HOME_PAGE: {
    url: UrlInternal.HOME_PAGE,
    element: (
      <div
        css={{
          position: 'relative'
        }}
      >
        <ChooseAccountAuthenticationMethod />
      </div>
    )
    // element: <ChooseAccountAuthenticationMethod />
  },
  // CREATE_VDSC: {
  //   url: UrlInternal.CREATE_VDSC,
  //   element: <ChooseAccountAuthenticationMethod />
  // },
  CREATE_VDSC_AUTO_INPUT: {
    url: UrlInternal.CREATE_VDSC_AUTO_INPUT,
    element: (
      <div
        css={{
          position: 'relative'
        }}
      >
        <AutoInput />
      </div>
    )
  },
  CREATE_VDSC_EKYC: {
    url: UrlInternal.CREATE_VDSC_EKYC,
    element: (
      <div
        css={{
          position: 'relative'
        }}
      >
        <EkycAuthentication />
      </div>
    )
  },
  SUPPORT_VDSC: {
    url: UrlInternal.SUPPORT_VDSC,
    element: <NewPage2 />
  }
}
