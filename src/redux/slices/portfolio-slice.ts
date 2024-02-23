import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface PortfolioState {
  listPortfolio: any
  currentPortfolio: any
  portfolioReturn: any

  /**
   * dialog
   */
  visibleAddPortfolio: boolean
  visibleDeletePortfolio: boolean
  visibleEditPortfolio: boolean
  visibleWarningPortfolio: boolean
  visibleChooseTypeTransaction: boolean
  visibleDepositTransaction: boolean
  visibleStockTransaction: boolean
  visibleEnterStock: boolean
  visibleConnectToVdsc: boolean
  visibleSynchronizedToVdsc: boolean

  /**
   * transaction
   */
  historyTransactions: any
  historyTransactionsOption: any
  stockTransactions: any
  stockTransactionsOption: any

  /**
   * Statistical
   */
  stockSummary: any
  distributionRecord: Record<string, any>

  /**
   * re-call-api
   */
  isReCallApi: boolean
}

const initialState: PortfolioState = {
  listPortfolio: null,
  currentPortfolio: null,
  portfolioReturn: null,

  /**
   * dialog
   */
  visibleAddPortfolio: false,
  visibleDeletePortfolio: false,
  visibleEditPortfolio: false,
  visibleWarningPortfolio: false,
  visibleChooseTypeTransaction: false,
  visibleDepositTransaction: false,
  visibleStockTransaction: false,
  visibleEnterStock: false,
  visibleConnectToVdsc: false,
  visibleSynchronizedToVdsc: false,

  /**
   * transaction
   */
  historyTransactions: null,
  historyTransactionsOption: [],
  stockTransactions: null,
  stockTransactionsOption: [],

  /**
   * Statistical
   */
  stockSummary: null,
  distributionRecord: {},

  /**
   * re-call-api
   */
  isReCallApi: false
}

export const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    setListPortfolio: (state, action: PayloadAction<any>) => {
      state.listPortfolio = action.payload
    },
    setCurrentPortfolio: (state, action: PayloadAction<any>) => {
      state.currentPortfolio = action.payload
    },
    setPortfolioReturn: (state, action: PayloadAction<any>) => {
      state.portfolioReturn = action.payload
    },
    setVisibleAddPortfolio: (state, action: PayloadAction<boolean>) => {
      state.visibleAddPortfolio = action.payload
    },
    setVisibleDeletePortfolio: (state, action: PayloadAction<boolean>) => {
      state.visibleDeletePortfolio = action.payload
    },
    setVisibleEditPortfolio: (state, action: PayloadAction<boolean>) => {
      state.visibleEditPortfolio = action.payload
    },
    setVisibleWarningPortfolio: (state, action: PayloadAction<boolean>) => {
      state.visibleWarningPortfolio = action.payload
    },
    setVisibleChooseTypeTransaction: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.visibleChooseTypeTransaction = action.payload
    },
    setVisibleDepositTransaction: (state, action: PayloadAction<boolean>) => {
      state.visibleDepositTransaction = action.payload
    },
    setVisibleStockTransaction: (state, action: PayloadAction<boolean>) => {
      state.visibleStockTransaction = action.payload
    },
    setVisibleEnterStock: (state, action: PayloadAction<boolean>) => {
      state.visibleEnterStock = action.payload
    },
    setHistoryTransactions: (state, action: PayloadAction<any>) => {
      state.historyTransactions = action.payload
    },
    setStockTransactions: (state, action: PayloadAction<any>) => {
      state.stockTransactions = action.payload
    },
    setStockSummary: (state, action: PayloadAction<any>) => {
      state.stockSummary = action.payload
    },
    setIsReCallApi: (state, action: PayloadAction<boolean>) => {
      state.isReCallApi = action.payload
    },
    setDistributionRecord: (state, action: PayloadAction<any>) => {
      state.distributionRecord = action.payload
    },
    addDistributionRecord: (
      state,
      action: PayloadAction<{ key: string; value: any }>
    ) => {
      state.distributionRecord = {
        ...state.distributionRecord,
        [action.payload.key]: action.payload.value
      }
    },
    setHistoryTransactionsOption: (state, action: PayloadAction<any>) => {
      state.historyTransactionsOption = action.payload
    },
    setStockTransactionsOption: (state, action: PayloadAction<any>) => {
      state.stockTransactionsOption = action.payload
    },
    setVisibleConnectToVdsc: (state, action: PayloadAction<boolean>) => {
      state.visibleConnectToVdsc = action.payload
    },
    setVisibleSynchronizedToVdsc: (state, action: PayloadAction<boolean>) => {
      state.visibleSynchronizedToVdsc = action.payload
    }
  }
})

export const {
  setListPortfolio,
  setCurrentPortfolio,
  setPortfolioReturn,
  setVisibleAddPortfolio,
  setVisibleDeletePortfolio,
  setVisibleEditPortfolio,
  setVisibleWarningPortfolio,
  setVisibleChooseTypeTransaction,
  setVisibleDepositTransaction,
  setVisibleStockTransaction,
  setVisibleEnterStock,
  setHistoryTransactions,
  setStockSummary,
  setStockTransactions,
  setIsReCallApi,
  setDistributionRecord,
  addDistributionRecord,
  setHistoryTransactionsOption,
  setStockTransactionsOption,
  setVisibleConnectToVdsc,
  setVisibleSynchronizedToVdsc
} = portfolioSlice.actions

export default portfolioSlice.reducer
