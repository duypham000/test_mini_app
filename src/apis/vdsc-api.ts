import mainAxios from '@/apis/main-axios'
import { IResponse } from '@/types'

enum URL {
  GET_REQUEST_OPEN_FORM = `/api/general/securities/account/get-request-open-form`,
  EKYC_FACE_VIDEO = `/api/general/securities/account/ekyc-face-video`,
  EKYC_ORC = `/api/general/securities/account/ekyc-ocr`,
  GENERATE_CLIENT_ID = `/api/general/securities/account/generate-client-id`,
  BANK_LIST = `/api/general/securities/bank-list`,
  ISSUE_PLACE_LIST = `/api/general/securities/issue-place-list`,
  PROVINCE_LIST = `/api/general/securities/province-list`,
  SEND_OTP = `/api/general/securities/account/send-otp`,
  VERIFY_OTP = `/api/general/securities/account/verify-otp`,
  CONTACT_SUPPORT = `/api/general/contact-support/submit`,
  ACCOUNT_DETAIL = `/api/general/securities/account/detail`,
  UPDATE_SEND_OTP = `/api/general/securities/account/update-send-otp`,
  UPDATE_VERIFY_OTP = `/api/general/securities/account/update-verify-otp`
}

const vdscApi = {
  getOpenAccountRequestId: (
    inputType: 'EKYC' | 'MANUAL'
  ): Promise<IResponse<any>> => {
    return mainAxios.get(`${URL.GET_REQUEST_OPEN_FORM}?inputType=${inputType}`)
  },
  ekycFaceLiveVideo: (payload): Promise<IResponse<any>> => {
    return mainAxios.post(`${URL.EKYC_FACE_VIDEO}`, payload)
  },
  ekycOcr: (payload): Promise<IResponse<any>> => {
    return mainAxios.post(`${URL.EKYC_ORC}`, payload)
  },
  generateClientId: (): Promise<IResponse<any>> => {
    return mainAxios.get(`${URL.GENERATE_CLIENT_ID}`)
  },
  getBankList: (): Promise<IResponse<any>> => {
    return mainAxios.get(`${URL.BANK_LIST}`)
  },
  getIssuePlaceList: (): Promise<IResponse<any>> => {
    return mainAxios.get(`${URL.ISSUE_PLACE_LIST}`)
  },
  getProvinceList: (): Promise<IResponse<any>> => {
    return mainAxios.get(`${URL.PROVINCE_LIST}`)
  },
  sendOtp: (payload): Promise<IResponse<any>> => {
    return mainAxios.post(`${URL.SEND_OTP}`, payload)
  },
  verifyOtp: (payload): Promise<IResponse<any>> => {
    return mainAxios.post(`${URL.VERIFY_OTP}`, payload)
  },
  contactFormSupport: (payload): Promise<IResponse<any>> => {
    return mainAxios.post(`${URL.CONTACT_SUPPORT}`, payload)
  },
  getSecuritiesAccountDetail: (payload): Promise<IResponse<any>> => {
    return mainAxios.post(`${URL.ACCOUNT_DETAIL}`, payload)
  },
  sendOtpUpdate: (payload): Promise<IResponse<any>> => {
    return mainAxios.post(`${URL.UPDATE_SEND_OTP}`, payload)
  },
  verifyOtpUpdate: (payload): Promise<IResponse<any>> => {
    return mainAxios.post(`${URL.UPDATE_VERIFY_OTP}`, payload)
  }
}

export default vdscApi
