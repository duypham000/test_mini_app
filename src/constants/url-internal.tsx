export enum UrlInternal {
  HOME_PAGE = '/',
  SUPPORT_VDSC = '/support_vdsc',
  CREATE_VDSC_AUTO_INPUT = '/create_vdsc_auto_input',
  CREATE_VDSC_EKYC = '/ekyc_authentication'
  // CREATE_VDSC_EKYC = '/ekyc_authentication/step-1/sub-1'
}

export const choseStepRedirect = (req: { step: any; sub?: any }) => {
  return (
    UrlInternal.CREATE_VDSC_EKYC +
    '?step==' +
    req.step +
    (req.sub ? '&&sub=' + req.sub : req.step === 1 ? '&&sub=1' : '')
  )
}
