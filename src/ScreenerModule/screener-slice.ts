import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type IndustryGroup = {
  id: number
  name: string
  subGroups: {
    id: number
    name: string
    sectorId: number
    isSelected?: boolean
  }[]
}[]

type Screener = {
  description: string
  id: number
  name: string
  rules: string
  isPublic?: boolean
  guid: string
  allowSave: boolean
}

type RsMomentum = '' | 'TICH_LUY' | 'TANG_GIA' | 'SUY_YEU' | 'GIAM_GIA'

type Criteria = {
  label?: string
  start: string
  end: string
}

type Suggestion = {
  code: string
  description: string
  id: number
  guid: string
  name: string
  rules: string
}[]

type Tab = 'OVERVIEW' | 'FILTER_CRITERIA' | 'BASIC' | 'PROFITABILITY_EFFICIENCY'

// State Interface
export interface ScreenerState {
  loading: boolean
  tab: Tab

  /**
   * dialog
   */
  visibleAddScreener: boolean
  visibleEditScreener: boolean
  visibleDeleteScreener: boolean
  visibleChangeFilterCriterial: boolean

  /**
   * Criteria
   */
  volume: Criteria
  volume10dAvg: Criteria
  marketCapVnd: Criteria
  marginOfSafety: Criteria
  peRatio: Criteria
  pbRatio: Criteria
  evEbitdaRatio: Criteria
  revenueLtmGrowth: Criteria
  revenue5yGrowth: Criteria
  netIncomeLtmGrowth: Criteria
  netIncome5yGrowth: Criteria
  roe: Criteria
  roa: Criteria
  eps: Criteria
  grossMarginLtm: Criteria
  profitMarginLtm: Criteria
  revenueEstGrowth: Criteria
  netIncomeEstGrowth: Criteria
  debtToEquity: Criteria
  dividendYieldCurrent: Criteria
  insiderBuying: boolean
  fundVolumeBuy3m: boolean
  pctChgLongTerm: Criteria
  pctChgMidTerm: Criteria
  pctChgShortTerm: Criteria
  rscD: RsMomentum
  rscW: RsMomentum
  rscM: RsMomentum

  /**
   * Suggestion
   */
  suggestion: null | Suggestion

  /**
   * Industry-filter
   */
  industryGroup: null | IndustryGroup

  /**
   * Radar-filter
   */
  points: number[]

  /**
   * data-filter
   */
  dataFilter: any

  /**
   * Total-filter
   */
  totalFilter: number

  /**
   * Screener list
   */
  screenerList: undefined | Screener[]

  /**
   * CurrentScreener
   */
  currentScreener: undefined | Screener

  /**
   * page
   */
  page: number
  size: number

  /**
   * create
   */
  rulesCreation: string

  /**
   * sort
   */
  sort: string
}

// State Init
const initialState: ScreenerState = {
  loading: false,
  tab: 'OVERVIEW',
  visibleAddScreener: false,
  visibleEditScreener: false,
  visibleDeleteScreener: false,
  visibleChangeFilterCriterial: false,
  volume: {
    label: '',
    start: '',
    end: ''
  },
  volume10dAvg: {
    label: '',
    start: '',
    end: ''
  },
  marketCapVnd: {
    label: '',
    start: '',
    end: ''
  },
  marginOfSafety: {
    label: '',
    start: '',
    end: ''
  },
  peRatio: {
    label: '',
    start: '',
    end: ''
  },
  pbRatio: {
    label: '',
    start: '',
    end: ''
  },
  evEbitdaRatio: {
    label: '',
    start: '',
    end: ''
  },
  revenueLtmGrowth: {
    label: '',
    start: '',
    end: ''
  },
  revenue5yGrowth: {
    label: '',
    start: '',
    end: ''
  },
  netIncomeLtmGrowth: {
    label: '',
    start: '',
    end: ''
  },
  netIncome5yGrowth: {
    label: '',
    start: '',
    end: ''
  },
  roe: {
    label: '',
    start: '',
    end: ''
  },
  roa: {
    label: '',
    start: '',
    end: ''
  },
  eps: {
    label: '',
    start: '',
    end: ''
  },
  grossMarginLtm: {
    label: '',
    start: '',
    end: ''
  },
  profitMarginLtm: {
    label: '',
    start: '',
    end: ''
  },
  revenueEstGrowth: {
    label: '',
    start: '',
    end: ''
  },
  netIncomeEstGrowth: {
    label: '',
    start: '',
    end: ''
  },
  debtToEquity: {
    label: '',
    start: '',
    end: ''
  },
  dividendYieldCurrent: {
    label: '',
    start: '',
    end: ''
  },
  insiderBuying: false,
  fundVolumeBuy3m: false,
  pctChgLongTerm: {
    label: '',
    start: '',
    end: ''
  },
  pctChgMidTerm: {
    label: '',
    start: '',
    end: ''
  },
  pctChgShortTerm: {
    label: '',
    start: '',
    end: ''
  },
  rscD: '',
  rscW: '',
  rscM: '',

  /**
   * Suggestion
   */
  suggestion: null,

  /**
   * Lọc theo ngành
   */
  industryGroup: null,

  /**
   * Lọc theo radar
   */
  points: [1, 1, 1, 1, 1],

  /**
   * Data filter
   */
  dataFilter: null,

  /**
   * Total filter
   */
  totalFilter: 0,

  /**
   * Screener list
   */
  screenerList: undefined,
  currentScreener: undefined,

  /**
   * page
   */
  page: 0,
  size: 20,

  /**
   * create
   */
  rulesCreation: '[]',

  /**
   * sort
   */
  sort: JSON.stringify({ id: 'marketCapVnd', direction: 'DESC' })
}

// Slice
export const screenerSlice = createSlice({
  name: 'screener',
  initialState,
  reducers: {
    setLoading: (state: ScreenerState, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setTab: (state: ScreenerState, action: PayloadAction<Tab>) => {
      state.tab = action.payload
    },
    setVisibleAddScreener: (
      state: ScreenerState,
      action: PayloadAction<boolean>
    ) => {
      state.visibleAddScreener = action.payload
    },
    setVisibleEditScreener: (
      state: ScreenerState,
      action: PayloadAction<boolean>
    ) => {
      state.visibleEditScreener = action.payload
    },
    setVisibleDeleteScreener: (
      state: ScreenerState,
      action: PayloadAction<boolean>
    ) => {
      state.visibleDeleteScreener = action.payload
    },
    setVisibleChangeFilterCriterial: (
      state: ScreenerState,
      action: PayloadAction<boolean>
    ) => {
      state.visibleChangeFilterCriterial = action.payload
    },
    setVolume: (state: ScreenerState, action: PayloadAction<Criteria>) => {
      state.volume = action.payload
    },
    setVolume10dAvg: (
      state: ScreenerState,
      action: PayloadAction<Criteria>
    ) => {
      state.volume10dAvg = action.payload
    },
    setMarketCapVnd: (
      state: ScreenerState,
      action: PayloadAction<Criteria>
    ) => {
      state.marketCapVnd = action.payload
    },
    setMarginOfSafety: (
      state: ScreenerState,
      action: PayloadAction<Criteria>
    ) => {
      state.marginOfSafety = action.payload
    },
    setPeRatio: (state: ScreenerState, action: PayloadAction<Criteria>) => {
      state.peRatio = action.payload
    },
    setPbRatio: (state: ScreenerState, action: PayloadAction<Criteria>) => {
      state.pbRatio = action.payload
    },
    setEvEbitdaRatio: (
      state: ScreenerState,
      action: PayloadAction<Criteria>
    ) => {
      state.evEbitdaRatio = action.payload
    },
    setRevenueLtmGrowth: (
      state: ScreenerState,
      action: PayloadAction<Criteria>
    ) => {
      state.revenueLtmGrowth = action.payload
    },
    setRevenue5yGrowth: (
      state: ScreenerState,
      action: PayloadAction<Criteria>
    ) => {
      state.revenue5yGrowth = action.payload
    },
    setNetIncomeLtmGrowth: (
      state: ScreenerState,
      action: PayloadAction<Criteria>
    ) => {
      state.netIncomeLtmGrowth = action.payload
    },
    setNetIncome5yGrowth: (
      state: ScreenerState,
      action: PayloadAction<Criteria>
    ) => {
      state.netIncome5yGrowth = action.payload
    },
    setRoe: (state: ScreenerState, action: PayloadAction<Criteria>) => {
      state.roe = action.payload
    },
    setRoa: (state: ScreenerState, action: PayloadAction<Criteria>) => {
      state.roa = action.payload
    },
    setEps: (state: ScreenerState, action: PayloadAction<Criteria>) => {
      state.eps = action.payload
    },
    setGrossMarginLtm: (
      state: ScreenerState,
      action: PayloadAction<Criteria>
    ) => {
      state.grossMarginLtm = action.payload
    },
    setProfitMarginLtm: (
      state: ScreenerState,
      action: PayloadAction<Criteria>
    ) => {
      state.profitMarginLtm = action.payload
    },
    setRevenueEstGrowth: (
      state: ScreenerState,
      action: PayloadAction<Criteria>
    ) => {
      state.revenueEstGrowth = action.payload
    },
    setNetIncomeEstGrowth: (
      state: ScreenerState,
      action: PayloadAction<Criteria>
    ) => {
      state.netIncomeEstGrowth = action.payload
    },
    setDebtToEquity: (
      state: ScreenerState,
      action: PayloadAction<Criteria>
    ) => {
      state.debtToEquity = action.payload
    },
    setDividendYieldCurrent: (
      state: ScreenerState,
      action: PayloadAction<Criteria>
    ) => {
      state.dividendYieldCurrent = action.payload
    },
    setInsiderBuying: (
      state: ScreenerState,
      action: PayloadAction<boolean>
    ) => {
      state.insiderBuying = action.payload
    },
    setFundVolumeBuy3m: (
      state: ScreenerState,
      action: PayloadAction<boolean>
    ) => {
      state.fundVolumeBuy3m = action.payload
    },
    setPctChgLongTerm: (
      state: ScreenerState,
      action: PayloadAction<Criteria>
    ) => {
      state.pctChgLongTerm = action.payload
    },
    setPctChgMidTerm: (
      state: ScreenerState,
      action: PayloadAction<Criteria>
    ) => {
      state.pctChgMidTerm = action.payload
    },
    setPctChgShortTerm: (
      state: ScreenerState,
      action: PayloadAction<Criteria>
    ) => {
      state.pctChgShortTerm = action.payload
    },
    setRscD: (state: ScreenerState, action: PayloadAction<RsMomentum>) => {
      state.rscD = action.payload
    },
    setRscW: (state: ScreenerState, action: PayloadAction<RsMomentum>) => {
      state.rscW = action.payload
    },
    setRscM: (state: ScreenerState, action: PayloadAction<RsMomentum>) => {
      state.rscM = action.payload
    },
    setSuggestion: (
      state: ScreenerState,
      action: PayloadAction<Suggestion>
    ) => {
      state.suggestion = action.payload
    },
    setIndustryGroup: (
      state: ScreenerState,
      action: PayloadAction<IndustryGroup>
    ) => {
      state.industryGroup = action.payload
    },
    setPoints: (state: ScreenerState, action: PayloadAction<number[]>) => {
      state.points = action.payload
    },
    setDataFilter: (state: ScreenerState, action: PayloadAction<any>) => {
      state.dataFilter = action.payload
    },
    setTotalFilter: (state: ScreenerState, action: PayloadAction<number>) => {
      state.totalFilter = action.payload
    },
    setScreenerList: (
      state: ScreenerState,
      action: PayloadAction<Screener[]>
    ) => {
      state.screenerList = action.payload
    },
    setCurrentScreener: (
      state: ScreenerState,
      action: PayloadAction<Screener>
    ) => {
      state.currentScreener = action.payload
    },
    setPage: (state: ScreenerState, action: PayloadAction<number>) => {
      state.page = action.payload
    },
    setSize: (state: ScreenerState, action: PayloadAction<number>) => {
      state.size = action.payload
    },
    setRulesCreation: (state: ScreenerState, action: PayloadAction<string>) => {
      state.rulesCreation = action.payload
    },
    setSort: (state: ScreenerState, action: PayloadAction<string>) => {
      state.sort = action.payload
    }
  }
})

export const {
  setLoading,
  setTab,
  setVisibleAddScreener,
  setVisibleEditScreener,
  setVisibleDeleteScreener,
  setVisibleChangeFilterCriterial,
  setVolume,
  setVolume10dAvg,
  setMarketCapVnd,
  setMarginOfSafety,
  setPeRatio,
  setPbRatio,
  setEvEbitdaRatio,
  setRevenueLtmGrowth,
  setRevenue5yGrowth,
  setNetIncomeLtmGrowth,
  setNetIncome5yGrowth,
  setRoe,
  setRoa,
  setEps,
  setGrossMarginLtm,
  setProfitMarginLtm,
  setRevenueEstGrowth,
  setNetIncomeEstGrowth,
  setDebtToEquity,
  setDividendYieldCurrent,
  setInsiderBuying,
  setFundVolumeBuy3m,
  setPctChgLongTerm,
  setPctChgMidTerm,
  setPctChgShortTerm,
  setRscD,
  setRscW,
  setRscM,
  setSuggestion,
  setIndustryGroup,
  setPoints,
  setDataFilter,
  setTotalFilter,
  setScreenerList,
  setCurrentScreener,
  setPage,
  setSize,
  setRulesCreation,
  setSort
} = screenerSlice.actions

export default screenerSlice.reducer
