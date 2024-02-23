import { IResponse } from '@/types'
import mainAxios from '@/apis/main-axios'

enum URL {
  SUGGEST = '/api/personalize/screener/suggest',
  INDUSTRY_GROUP_TREE = '/api/company/industry-group/tree',
  SCREENER_FILTER = '/api/company/screener/filter',
  SCREENER_FILTER_SINGLE = '/api/company/screener/filter-single',
  SCREENER_LIST = '/api/personalize/screener/list',
  SCREENER_UPDATE = '/api/personalize/screener/update',
  SCREENER_CREATE = '/api/personalize/screener/create',
  SCREENER_DELETE = '/api/personalize/screener/delete',
  SCREENER_COPY = '/api/personalize/screener/copy',
  SCREENER_UPDATE_PUBLIC = '/api/personalize/screener/update-public',
  SCREENER_DETAIL_PUBLIC = '/api/personalize/screener/detail-public'
}

const screenerApi = {
  filterScreener: (payload: {
    page: number
    size: number
    rules: string
    sort?: string
  }): Promise<IResponse<any>> => {
    return mainAxios.post(`${URL.SCREENER_FILTER}`, payload)
  },
  filterSingleScreener: (payload: {
    page: number
    size: number
    rules: string
    sort?: string
  }): Promise<IResponse<any>> => {
    return mainAxios.post(`${URL.SCREENER_FILTER_SINGLE}`, payload)
  },
  getScreenerList: (): Promise<IResponse<any>> => {
    return mainAxios.get(`${URL.SCREENER_LIST}`)
  },
  getScreenerDetailPublic: (payload: {
    guid: string
  }): Promise<IResponse<any>> => {
    return mainAxios.get(`${URL.SCREENER_DETAIL_PUBLIC}/${payload.guid}`)
  },
  getSuggestions: (): Promise<IResponse<any>> => {
    return mainAxios.get(`${URL.SUGGEST}`)
  },
  getIndustryGroupTree: (): Promise<IResponse<any>> => {
    return mainAxios.get(`${URL.INDUSTRY_GROUP_TREE}`)
  },
  updateScreener: (payload: {
    id: string | number
    description: string
    name: string
    rules: string
    isPublic?: boolean
  }): Promise<IResponse<any>> => {
    return mainAxios.post(`${URL.SCREENER_UPDATE}/${payload.id}`, {
      description: payload.description,
      name: payload.name,
      rules: payload.rules,
      isPublic: payload.isPublic
    })
  },
  createScreener: (payload: {
    description: string
    name: string
    rules?: string
    isPublic?: boolean
  }): Promise<IResponse<any>> => {
    return mainAxios.post(`${URL.SCREENER_CREATE}`, payload)
  },
  deleteScreener: (payload: {
    id: string | number
  }): Promise<IResponse<any>> => {
    return mainAxios.post(`${URL.SCREENER_DELETE}/${payload.id}`)
  },
  copyCurrentScreener: (payload: {
    id: string | number
  }): Promise<IResponse<any>> => {
    return mainAxios.post(`${URL.SCREENER_COPY}/${payload.id}`)
  },
  updatePublicScreener: (payload: {
    isPublic: boolean
    id: number
  }): Promise<IResponse<any>> => {
    return mainAxios.post(`${URL.SCREENER_UPDATE_PUBLIC}`, payload)
  }
}

export default screenerApi
