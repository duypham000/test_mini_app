import mainAxios from '@/apis/main-axios'
import { IResponse } from '@/types'

enum URL {
  GET_ACCOUNT_LIST = `/api/general/securities/account/list`,
  CLOSED_SECURITIES_ACCOUNT = `/api/general/securities/account/closed`
}

export const integrationApi = {
  getAccountList(): Promise<IResponse<any[]>> {
    return mainAxios.get(URL.GET_ACCOUNT_LIST)
  },
  closedSecuritiesAccount(payload: {
    formId: string
    clientId: string
    partner: string
    code: string
  }): Promise<IResponse<any>> {
    return mainAxios.post(URL.CLOSED_SECURITIES_ACCOUNT, payload)
  }
}
