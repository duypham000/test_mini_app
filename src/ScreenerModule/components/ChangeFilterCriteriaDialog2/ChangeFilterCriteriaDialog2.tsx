import DialogBottom from '@/components/DialogBottom'
import LockTooltip from '@/components/LockTooltip'
import Typography from '@/components/Typography'
import { Storage } from '@/constants/storage'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import utilStyles from '@/styles/util-styles'
import { Theme } from '@/themes/theme'
import { setLocalStorageItem } from '@/utils/storage/local-storage'
import React from 'react'
import screenerApi from '../../screener-api'
import {
  setCurrentScreener,
  setDataFilter,
  setPage,
  setSort,
  setTotalFilter,
  setVisibleChangeFilterCriterial
} from '../../screener-slice'
import Criteria from './Criteria'
import FilterByIndustry from './FilterByIndustry'
import FilterByRadar from './FilterByRadar'
import { styles } from './styles'
import NativeMethod from '@/components/NativeMethod'
import { RefreshIcon } from '@/components/icons/RefreshIcon'

const criteriaDefault = {
  stockExchange: [],
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
  netCashToMarketCap: {
    label: '',
    start: '',
    end: ''
  },
  revenueGrowthPreQ: {
    label: '',
    start: '',
    end: ''
  },
  revenueGrowthQoq: {
    label: '',
    start: '',
    end: ''
  },
  netIncomeGrowthPreQ: {
    label: '',
    start: '',
    end: ''
  },
  netIncomeGrowthQoq: {
    label: '',
    start: '',
    end: ''
  },
  epsLtmGrowthPreQ: {
    label: '',
    start: '',
    end: ''
  },
  epsLtmGrowthQoq: {
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
  epsGrowthPreQ: {
    label: '',
    start: '',
    end: ''
  },
  epsGrowthQoq: {
    label: '',
    start: '',
    end: ''
  },
  netIncome5yGrowth: {
    label: '',
    start: '',
    end: ''
  },
  returnOnEquity: {
    label: '',
    start: '',
    end: ''
  },
  returnOnAssets: {
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
  countCashDiv: '',
  constructionInProgressPct: {
    label: '',
    start: '',
    end: ''
  },
  constructionInProgressGrowthPreQ: {
    label: '',
    start: '',
    end: ''
  },
  netInventoriesPct: {
    label: '',
    start: '',
    end: ''
  },
  netInventoriesGrowthPreQ: {
    label: '',
    start: '',
    end: ''
  },
  advancesCustomerPct: {
    label: '',
    start: '',
    end: ''
  },
  advancesCustomerGrowthPreQ: {
    label: '',
    start: '',
    end: ''
  },
  fixedAssetPct: {
    label: '',
    start: '',
    end: ''
  },
  fixedAssetGrowthPreQ: {
    label: '',
    start: '',
    end: ''
  },
  fixedAssetGrossRatio: {
    label: '',
    start: '',
    end: ''
  },
  foreignBuyingValue7d: false,
  foreignBuyingValue30d: false,
  insiderBuying3m: false,
  foreignBuyingValue90d: false,
  fundVolumeBuy3m: false,
  insiderBuying: false,
  taSignal1d: '',
  overallRiskLevel: [],
  rscD: '',
  rscW: '',
  rscM: ''
}

type IndustryGroup = {
  id: number
  name: string
  subGroups: {
    id: number
    name: string
    sectorId: number
    isSelected?: boolean
  }[]
}

const ChangeFilterCriteriaDialog2: React.FC = (): JSX.Element => {
  /**
   * ==================== dispatch ====================
   */
  const dispatch = useAppDispatch()

  /**
   * ==================== store ====================
   */
  const visibleChangeFilterCriterial = useAppSelector(
    (state) => state.screener.visibleChangeFilterCriterial
  )
  const currentScreener = useAppSelector(
    (state) => state.screener.currentScreener
  )
  const size = useAppSelector((state) => state.screener.size)
  const userInfo = useAppSelector((state) => state.profile.userInfo)
  const suggestion = useAppSelector((state) => state.screener.suggestion)

  /**
   * ==================== useState ====================
   */
  const [tab, setTab] = React.useState<'CRITERIA' | 'INDUSTRY' | 'CHART'>(
    'CRITERIA'
  )
  const [selectedValue, setSelectedValue] = React.useState('')
  const [criteria, setCriteria] = React.useState(criteriaDefault)
  const [industryGroup, setIndustryGroup] = React.useState<IndustryGroup[]>()
  const [industryGroupDefault, setIndustryGroupDefault] =
    React.useState<IndustryGroup[]>()
  const [pointsDefault] = React.useState([1, 1, 1, 1, 1])
  const [points, setPoints] = React.useState(pointsDefault)

  /**
   * ==================== useEffect ====================
   */
  React.useEffect(() => {
    if (!selectedValue) return

    setCriteria(criteriaDefault)

    const rules = JSON.parse(selectedValue)

    rules?.forEach((item) => {
      // Sàn giao dịch
      if (item?.id === 'stockExchange') {
        if (item?.op === 'in') {
          setCriteria((criteria) => ({
            ...criteria,
            stockExchange: item?.val
          }))
        }
      }

      // Khối lượng
      if (item?.id === 'volume') {
        if (item?.op === '>=') {
          setCriteria((criteria) => ({
            ...criteria,
            volume: {
              label: '',
              start: `${item?.val / 1000}`,
              end: ''
            }
          }))
        }
        if (item?.op === '<=') {
          setCriteria((criteria) => ({
            ...criteria,
            volume: {
              label: '',
              start: '0',
              end: `${item?.val / 1000}`
            }
          }))
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            volume: {
              label: '',
              start: `${item?.val / 1000}`,
              end: `${item?.max / 1000}`
            }
          }))
        }
      }

      // Khối lượng trung bình 10 phiên
      if (item?.id === 'volume10dAvg') {
        if (item?.op === '>=') {
          setCriteria((criteria) => ({
            ...criteria,
            volume10dAvg: {
              label: '',
              start: `${item?.val / 1000}`,
              end: ''
            }
          }))
        }
        if (item?.op === '<=') {
          setCriteria((criteria) => ({
            ...criteria,
            volume10dAvg: {
              label: '',
              start: '0',
              end: `${item?.val / 1000}`
            }
          }))
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            volume10dAvg: {
              label: '',
              start: `${item?.val / 1000}`,
              end: `${item?.max / 1000}`
            }
          }))
        }
      }

      // Vốn hóa
      if (item?.id === 'marketCapVnd') {
        if (item?.op === '>=') {
          setCriteria((criteria) => ({
            ...criteria,
            marketCapVnd: {
              label: '',
              start: `${item?.val / 1000000000}`,
              end: ''
            }
          }))
        }
        if (item?.op === '<=') {
          setCriteria((criteria) => ({
            ...criteria,
            marketCapVnd: {
              label: '',
              start: '0',
              end: `${item?.val / 1000000000}`
            }
          }))
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            marketCapVnd: {
              label: '',
              start: `${item?.val / 1000000000}`,
              end: `${item?.max / 1000000000}`
            }
          }))
        }
      }

      // Biên an toàn
      if (item?.id === 'marginOfSafety') {
        if (item?.op === '>=') {
          setCriteria((criteria) => ({
            ...criteria,
            marginOfSafety: {
              label: '',
              start: `${item?.val}`,
              end: ''
            }
          }))
        }
        if (item?.op === '<=') {
          setCriteria((criteria) => ({
            ...criteria,
            marginOfSafety: {
              label: '',
              start: '',
              end: `${item?.val}`
            }
          }))
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            marginOfSafety: {
              label: '',
              start: `${item?.val}`,
              end: `${item?.max}`
            }
          }))
        }
      }

      // P/E
      if (item?.id === 'peRatio') {
        if (item?.op === '>=') {
          setCriteria((criteria) => ({
            ...criteria,
            peRatio: {
              label: '',
              start: `${item?.val}`,
              end: ''
            }
          }))
        }
        if (item?.op === '<=') {
          if (item?.type === 'field') {
            setCriteria((criteria) => ({
              ...criteria,
              peRatio: {
                label: '< TB 5 năm',
                start: '',
                end: `peRatioAverage`
              }
            }))
          } else {
            setCriteria((criteria) => ({
              ...criteria,
              peRatio: {
                label: '',
                start: '',
                end: `${item?.val}`
              }
            }))
          }
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            peRatio: {
              label: '',
              start: `${item?.val}`,
              end: `${item?.max}`
            }
          }))
        }
      }

      // P/B
      if (item?.id === 'pbRatio') {
        if (item?.op === '>=') {
          setCriteria((criteria) => ({
            ...criteria,
            pbRatio: {
              label: '',
              start: `${item?.val}`,
              end: ''
            }
          }))
        }
        if (item?.op === '<=') {
          if (item?.type === 'field') {
            setCriteria((criteria) => ({
              ...criteria,
              pbRatio: {
                label: '< TB 5 năm',
                start: '',
                end: `pbRatioAverage`
              }
            }))
          } else {
            setCriteria((criteria) => ({
              ...criteria,
              pbRatio: {
                label: '',
                start: '',
                end: `${item?.val}`
              }
            }))
          }
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            pbRatio: {
              label: '',
              start: `${item?.val}`,
              end: `${item?.max}`
            }
          }))
        }
      }

      // EV/EBITDA
      if (item?.id === 'evEbitdaRatio') {
        if (item?.op === '>=') {
          setCriteria((criteria) => ({
            ...criteria,
            evEbitdaRatio: {
              label: '',
              start: `${item?.val}`,
              end: ''
            }
          }))
        }
        if (item?.op === '<=') {
          setCriteria((criteria) => ({
            ...criteria,
            evEbitdaRatio: {
              label: '',
              start: '',
              end: `${item?.val}`
            }
          }))
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            evEbitdaRatio: {
              label: '',
              start: `${item?.val}`,
              end: `${item?.max}`
            }
          }))
        }
      }

      // Tiền mặt ròng/Vốn hóa
      if (item?.id === 'netCashToMarketCap') {
        if (item?.op === '>=') {
          setCriteria((criteria) => ({
            ...criteria,
            netCashToMarketCap: {
              label: '',
              start: `${item?.val}`,
              end: ''
            }
          }))
        }
        if (item?.op === '<=') {
          setCriteria((criteria) => ({
            ...criteria,
            netCashToMarketCap: {
              label: '',
              start: '',
              end: `${item?.val}`
            }
          }))
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            netCashToMarketCap: {
              label: '',
              start: `${item?.val}`,
              end: `${item?.max}`
            }
          }))
        }
      }

      // Tăng trưởng doanh thu so với quý trước
      if (item?.id === 'revenueGrowthPreQ') {
        if (item?.op === '>=') {
          setCriteria((criteria) => ({
            ...criteria,
            revenueGrowthPreQ: {
              label: '',
              start: `${item?.val}`,
              end: ''
            }
          }))
        }
        if (item?.op === '<=') {
          setCriteria((criteria) => ({
            ...criteria,
            revenueGrowthPreQ: {
              label: '',
              start: '',
              end: `${item?.val}`
            }
          }))
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            revenueGrowthPreQ: {
              label: '',
              start: `${item?.val}`,
              end: `${item?.max}`
            }
          }))
        }
      }

      // Tăng trưởng doanh thu so với quý trước
      if (item?.id === 'revenueGrowthQoq') {
        if (item?.op === '>=') {
          setCriteria((criteria) => ({
            ...criteria,
            revenueGrowthQoq: {
              label: '',
              start: `${item?.val}`,
              end: ''
            }
          }))
        }
        if (item?.op === '<=') {
          setCriteria((criteria) => ({
            ...criteria,
            revenueGrowthQoq: {
              label: '',
              start: '',
              end: `${item?.val}`
            }
          }))
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            revenueGrowthQoq: {
              label: '',
              start: `${item?.val}`,
              end: `${item?.max}`
            }
          }))
        }
      }

      // Tăng trưởng lợi nhuận sau thuế so với quý trước
      if (item?.id === 'netIncomeGrowthPreQ') {
        if (item?.op === '>=') {
          setCriteria((criteria) => ({
            ...criteria,
            netIncomeGrowthPreQ: {
              label: '',
              start: `${item?.val}`,
              end: ''
            }
          }))
        }
        if (item?.op === '<=') {
          setCriteria((criteria) => ({
            ...criteria,
            netIncomeGrowthPreQ: {
              label: '',
              start: '',
              end: `${item?.val}`
            }
          }))
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            netIncomeGrowthPreQ: {
              label: '',
              start: `${item?.val}`,
              end: `${item?.max}`
            }
          }))
        }
      }

      // Tăng trưởng lợi nhuận sau thuế so với quý trước
      if (item?.id === 'netIncomeGrowthQoq') {
        if (item?.op === '>=') {
          setCriteria((criteria) => ({
            ...criteria,
            netIncomeGrowthQoq: {
              label: '',
              start: `${item?.val}`,
              end: ''
            }
          }))
        }
        if (item?.op === '<=') {
          setCriteria((criteria) => ({
            ...criteria,
            netIncomeGrowthQoq: {
              label: '',
              start: '',
              end: `${item?.val}`
            }
          }))
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            netIncomeGrowthQoq: {
              label: '',
              start: `${item?.val}`,
              end: `${item?.max}`
            }
          }))
        }
      }

      // Tăng trưởng EPS ltm so với quý trước
      if (item?.id === 'epsLtmGrowthPreQ') {
        if (item?.op === '>=') {
          setCriteria((criteria) => ({
            ...criteria,
            epsLtmGrowthPreQ: {
              label: '',
              start: `${item?.val}`,
              end: ''
            }
          }))
        }
        if (item?.op === '<=') {
          setCriteria((criteria) => ({
            ...criteria,
            epsLtmGrowthPreQ: {
              label: '',
              start: '',
              end: `${item?.val}`
            }
          }))
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            epsLtmGrowthPreQ: {
              label: '',
              start: `${item?.val}`,
              end: `${item?.max}`
            }
          }))
        }
      }

      // Tăng trưởng EPS ltm so với quý trước
      if (item?.id === 'epsLtmGrowthQoq') {
        if (item?.op === '>=') {
          setCriteria((criteria) => ({
            ...criteria,
            epsLtmGrowthQoq: {
              label: '',
              start: `${item?.val}`,
              end: ''
            }
          }))
        }
        if (item?.op === '<=') {
          setCriteria((criteria) => ({
            ...criteria,
            epsLtmGrowthQoq: {
              label: '',
              start: '',
              end: `${item?.val}`
            }
          }))
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            epsLtmGrowthQoq: {
              label: '',
              start: `${item?.val}`,
              end: `${item?.max}`
            }
          }))
        }
      }

      // Tăng trưởng doanh thu 12 tháng gần nhất
      if (item?.id === 'revenueLtmGrowth') {
        if (item?.op === '>=') {
          setCriteria((criteria) => ({
            ...criteria,
            revenueLtmGrowth: {
              label: '',
              start: `${item?.val}`,
              end: ''
            }
          }))
        }
        if (item?.op === '<=') {
          setCriteria((criteria) => ({
            ...criteria,
            revenueLtmGrowth: {
              label: '',
              start: '',
              end: `${item?.val}`
            }
          }))
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            revenueLtmGrowth: {
              label: '',
              start: `${item?.val}`,
              end: `${item?.max}`
            }
          }))
        }
      }

      // Tăng trưởng lợi nhuận 12 tháng gần nhất
      if (item?.id === 'netIncomeLtmGrowth') {
        if (item?.op === '>=') {
          setCriteria((criteria) => ({
            ...criteria,
            netIncomeLtmGrowth: {
              label: '',
              start: `${item?.val}`,
              end: ''
            }
          }))
        }
        if (item?.op === '<=') {
          setCriteria((criteria) => ({
            ...criteria,
            netIncomeLtmGrowth: {
              label: '',
              start: '',
              end: `${item?.val}`
            }
          }))
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            netIncomeLtmGrowth: {
              label: '',
              start: `${item?.val}`,
              end: `${item?.max}`
            }
          }))
        }
      }

      // Tăng trưởng lợi nhuận 12 tháng gần nhất
      if (item?.id === 'epsGrowthPreQ') {
        if (item?.op === '>=') {
          setCriteria((criteria) => ({
            ...criteria,
            epsGrowthPreQ: {
              label: '',
              start: `${item?.val}`,
              end: ''
            }
          }))
        }
        if (item?.op === '<=') {
          setCriteria((criteria) => ({
            ...criteria,
            epsGrowthPreQ: {
              label: '',
              start: '',
              end: `${item?.val}`
            }
          }))
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            epsGrowthPreQ: {
              label: '',
              start: `${item?.val}`,
              end: `${item?.max}`
            }
          }))
        }
      }

      // Tăng trưởng lợi nhuận 12 tháng gần nhất
      if (item?.id === 'epsGrowthQoq') {
        if (item?.op === '>=') {
          setCriteria((criteria) => ({
            ...criteria,
            epsGrowthQoq: {
              label: '',
              start: `${item?.val}`,
              end: ''
            }
          }))
        }
        if (item?.op === '<=') {
          setCriteria((criteria) => ({
            ...criteria,
            epsGrowthQoq: {
              label: '',
              start: '',
              end: `${item?.val}`
            }
          }))
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            epsGrowthQoq: {
              label: '',
              start: `${item?.val}`,
              end: `${item?.max}`
            }
          }))
        }
      }

      // Tăng trưởng doanh thu bình quân 5 năm
      if (item?.id === 'revenue5yGrowth') {
        if (item?.op === '>=') {
          setCriteria((criteria) => ({
            ...criteria,
            revenue5yGrowth: {
              label: '',
              start: `${item?.val}`,
              end: ''
            }
          }))
        }
        if (item?.op === '<=') {
          setCriteria((criteria) => ({
            ...criteria,
            revenue5yGrowth: {
              label: '',
              start: '',
              end: `${item?.val}`
            }
          }))
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            revenue5yGrowth: {
              label: '',
              start: `${item?.val}`,
              end: `${item?.max}`
            }
          }))
        }
      }

      // Tăng trưởng lợi nhuận bình quân 5 năm
      if (item?.id === 'netIncome5yGrowth') {
        if (item?.op === '>=') {
          setCriteria((criteria) => ({
            ...criteria,
            netIncome5yGrowth: {
              label: '',
              start: `${item?.val}`,
              end: ''
            }
          }))
        }
        if (item?.op === '<=') {
          setCriteria((criteria) => ({
            ...criteria,
            netIncome5yGrowth: {
              label: '',
              start: '',
              end: `${item?.val}`
            }
          }))
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            netIncome5yGrowth: {
              label: '',
              start: `${item?.val}`,
              end: `${item?.max}`
            }
          }))
        }
      }

      // Tăng trưởng doanh thu bình quân 3 năm dự phóng
      if (item?.id === 'revenueEstGrowth') {
        if (item?.op === '>=') {
          setCriteria((criteria) => ({
            ...criteria,
            revenueEstGrowth: {
              label: '',
              start: `${item?.val}`,
              end: ''
            }
          }))
        }
        if (item?.op === '<=') {
          setCriteria((criteria) => ({
            ...criteria,
            revenueEstGrowth: {
              label: '',
              start: '',
              end: `${item?.val}`
            }
          }))
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            revenueEstGrowth: {
              label: '',
              start: `${item?.val}`,
              end: `${item?.max}`
            }
          }))
        }
      }

      // Tăng trưởng lợi nhuận bình quân 3 năm dự phóng
      if (item?.id === 'netIncomeEstGrowth') {
        if (item?.op === '>=') {
          setCriteria((criteria) => ({
            ...criteria,
            netIncomeEstGrowth: {
              label: '',
              start: `${item?.val}`,
              end: ''
            }
          }))
        }
        if (item?.op === '<=') {
          setCriteria((criteria) => ({
            ...criteria,
            netIncomeEstGrowth: {
              label: '',
              start: '',
              end: `${item?.val}`
            }
          }))
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            netIncomeEstGrowth: {
              label: '',
              start: `${item?.val}`,
              end: `${item?.max}`
            }
          }))
        }
      }

      // Biên lợi nhuận gộp
      if (item?.id === 'grossMarginLtm') {
        if (item?.op === '>=') {
          if (item?.type === 'field') {
            setCriteria((criteria) => ({
              ...criteria,
              grossMarginLtm: {
                label: 'Tăng trưởng so cùng kỳ',
                start: `grossMarginLtmYoy`,
                end: ''
              }
            }))
          } else {
            setCriteria((criteria) => ({
              ...criteria,
              grossMarginLtm: {
                label: '',
                start: `${item?.val}`,
                end: ''
              }
            }))
          }
        }
        if (item?.op === '<=') {
          setCriteria((criteria) => ({
            ...criteria,
            grossMarginLtm: {
              label: '',
              start: '',
              end: `${item?.val}`
            }
          }))
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            grossMarginLtm: {
              label: '',
              start: `${item?.val}`,
              end: `${item?.max}`
            }
          }))
        }
      }

      // Biên lợi nhuận sau thuế
      if (item?.id === 'profitMarginLtm') {
        if (item?.op === '>=') {
          if (item?.type === 'field') {
            setCriteria((criteria) => ({
              ...criteria,
              profitMarginLtm: {
                label: 'Tăng trưởng so cùng kỳ',
                start: `netMarginLtmYoy`,
                end: ''
              }
            }))
          } else {
            setCriteria((criteria) => ({
              ...criteria,
              profitMarginLtm: {
                label: '',
                start: `${item?.val}`,
                end: ''
              }
            }))
          }
        }
        if (item?.op === '<=') {
          setCriteria((criteria) => ({
            ...criteria,
            profitMarginLtm: {
              label: '',
              start: '',
              end: `${item?.val}`
            }
          }))
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            profitMarginLtm: {
              label: '',
              start: `${item?.val}`,
              end: `${item?.max}`
            }
          }))
        }
      }

      // ROE 12 tháng
      if (item?.id === 'returnOnEquity') {
        if (item?.op === '>=') {
          if (item?.type === 'field') {
            setCriteria((criteria) => ({
              ...criteria,
              returnOnEquity: {
                label: 'Tăng so cùng kỳ',
                start: `returnOnEquityYoy`,
                end: ''
              }
            }))
          } else {
            setCriteria((criteria) => ({
              ...criteria,
              returnOnEquity: {
                label: '',
                start: `${item?.val}`,
                end: ''
              }
            }))
          }
        }
        if (item?.op === '<=') {
          setCriteria((criteria) => ({
            ...criteria,
            returnOnEquity: {
              label: '',
              start: '',
              end: `${item?.val}`
            }
          }))
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            returnOnEquity: {
              label: '',
              start: `${item?.val}`,
              end: `${item?.max}`
            }
          }))
        }
      }

      // ROA
      if (item?.id === 'returnOnAssets') {
        if (item?.op === '>=') {
          if (item?.type === 'field') {
            setCriteria((criteria) => ({
              ...criteria,
              returnOnAssets: {
                label: 'Tăng so cùng kỳ',
                start: `returnOnAssetsYoy`,
                end: ''
              }
            }))
          } else {
            setCriteria((criteria) => ({
              ...criteria,
              returnOnAssets: {
                label: '',
                start: `${item?.val}`,
                end: ''
              }
            }))
          }
        }
        if (item?.op === '<=') {
          setCriteria((criteria) => ({
            ...criteria,
            returnOnAssets: {
              label: '',
              start: '',
              end: `${item?.val}`
            }
          }))
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            returnOnAssets: {
              label: '',
              start: `${item?.val}`,
              end: `${item?.max}`
            }
          }))
        }
      }

      // Nợ vay trên vốn chủ sở hữu
      if (item?.id === 'debtToEquity') {
        if (item?.op === '>=') {
          setCriteria((criteria) => ({
            ...criteria,
            debtToEquity: {
              label: '',
              start: `${item?.val}`,
              end: ''
            }
          }))
        }
        if (item?.op === '<=') {
          setCriteria((criteria) => ({
            ...criteria,
            debtToEquity: {
              label: '',
              start: '',
              end: `${item?.val}`
            }
          }))
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            debtToEquity: {
              label: '',
              start: `${item?.val}`,
              end: `${item?.max}`
            }
          }))
        }
      }

      // Tỷ suất cổ tức hiện tại của cổ phiếu
      if (item?.id === 'dividendYieldCurrent') {
        if (item?.op === '>=') {
          if (item?.type === 'field') {
            setCriteria((criteria) => ({
              ...criteria,
              dividendYieldCurrent: {
                label: 'Cao hơn lãi tiền gửi',
                start: `depositRate12m`,
                end: ''
              }
            }))
          } else {
            setCriteria((criteria) => ({
              ...criteria,
              dividendYieldCurrent: {
                label: '',
                start: `${item?.val}`,
                end: ''
              }
            }))
          }
        }
        if (item?.op === '<=') {
          setCriteria((criteria) => ({
            ...criteria,
            dividendYieldCurrent: {
              label: '',
              start: '',
              end: `${item?.val}`
            }
          }))
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            dividendYieldCurrent: {
              label: '',
              start: `${item?.val}`,
              end: `${item?.max}`
            }
          }))
        }
      }

      // Tín hiệu kỹ thuật
      if (item?.id === 'countCashDiv') {
        if (item?.op === '>=') {
          setCriteria((criteria) => ({
            ...criteria,
            countCashDiv: item?.val
          }))
        }
      }

      // Chi phí xây dựng dở dang/Tổng tài sản (quý gần nhất)
      if (item?.id === 'constructionInProgressPct') {
        if (item?.op === '>=') {
          setCriteria((criteria) => ({
            ...criteria,
            constructionInProgressPct: {
              label: '',
              start: `${item?.val}`,
              end: ''
            }
          }))
        }
        if (item?.op === '<=') {
          setCriteria((criteria) => ({
            ...criteria,
            constructionInProgressPct: {
              label: '',
              start: '',
              end: `${item?.val}`
            }
          }))
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            constructionInProgressPct: {
              label: '',
              start: `${item?.val}`,
              end: `${item?.max}`
            }
          }))
        }
      }

      // Tăng trưởng chi phí xây dựng dở dang so với quý trước
      if (item?.id === 'constructionInProgressGrowthPreQ') {
        if (item?.op === '>=') {
          setCriteria((criteria) => ({
            ...criteria,
            constructionInProgressGrowthPreQ: {
              label: '',
              start: `${item?.val}`,
              end: ''
            }
          }))
        }
        if (item?.op === '<=') {
          setCriteria((criteria) => ({
            ...criteria,
            constructionInProgressGrowthPreQ: {
              label: '',
              start: '',
              end: `${item?.val}`
            }
          }))
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            constructionInProgressGrowthPreQ: {
              label: '',
              start: `${item?.val}`,
              end: `${item?.max}`
            }
          }))
        }
      }

      // Hàng tồn kho/Tổng tài sản (quý gần nhất)
      if (item?.id === 'netInventoriesPct') {
        if (item?.op === '>=') {
          setCriteria((criteria) => ({
            ...criteria,
            netInventoriesPct: {
              label: '',
              start: `${item?.val}`,
              end: ''
            }
          }))
        }
        if (item?.op === '<=') {
          setCriteria((criteria) => ({
            ...criteria,
            netInventoriesPct: {
              label: '',
              start: '',
              end: `${item?.val}`
            }
          }))
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            netInventoriesPct: {
              label: '',
              start: `${item?.val}`,
              end: `${item?.max}`
            }
          }))
        }
      }

      // Tăng trưởng hàng tồn kho so với quý trước
      if (item?.id === 'netInventoriesGrowthPreQ') {
        if (item?.op === '>=') {
          setCriteria((criteria) => ({
            ...criteria,
            netInventoriesGrowthPreQ: {
              label: '',
              start: `${item?.val}`,
              end: ''
            }
          }))
        }
        if (item?.op === '<=') {
          setCriteria((criteria) => ({
            ...criteria,
            netInventoriesGrowthPreQ: {
              label: '',
              start: '',
              end: `${item?.val}`
            }
          }))
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            netInventoriesGrowthPreQ: {
              label: '',
              start: `${item?.val}`,
              end: `${item?.max}`
            }
          }))
        }
      }

      // Người mua trả tiền trước/Tổng tài sản (quý gần nhất)
      if (item?.id === 'advancesCustomerPct') {
        if (item?.op === '>=') {
          setCriteria((criteria) => ({
            ...criteria,
            advancesCustomerPct: {
              label: '',
              start: `${item?.val}`,
              end: ''
            }
          }))
        }
        if (item?.op === '<=') {
          setCriteria((criteria) => ({
            ...criteria,
            advancesCustomerPct: {
              label: '',
              start: '',
              end: `${item?.val}`
            }
          }))
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            advancesCustomerPct: {
              label: '',
              start: `${item?.val}`,
              end: `${item?.max}`
            }
          }))
        }
      }

      // Tăng trưởng người mua trả tiền trước so với quý trước
      if (item?.id === 'advancesCustomerGrowthPreQ') {
        if (item?.op === '>=') {
          setCriteria((criteria) => ({
            ...criteria,
            advancesCustomerGrowthPreQ: {
              label: '',
              start: `${item?.val}`,
              end: ''
            }
          }))
        }
        if (item?.op === '<=') {
          setCriteria((criteria) => ({
            ...criteria,
            advancesCustomerGrowthPreQ: {
              label: '',
              start: '',
              end: `${item?.val}`
            }
          }))
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            advancesCustomerGrowthPreQ: {
              label: '',
              start: `${item?.val}`,
              end: `${item?.max}`
            }
          }))
        }
      }

      // Tài sản cố định/Tổng tài sản (quý gần nhất)
      if (item?.id === 'fixedAssetPct') {
        if (item?.op === '>=') {
          setCriteria((criteria) => ({
            ...criteria,
            fixedAssetPct: {
              label: '',
              start: `${item?.val}`,
              end: ''
            }
          }))
        }
        if (item?.op === '<=') {
          setCriteria((criteria) => ({
            ...criteria,
            fixedAssetPct: {
              label: '',
              start: '',
              end: `${item?.val}`
            }
          }))
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            fixedAssetPct: {
              label: '',
              start: `${item?.val}`,
              end: `${item?.max}`
            }
          }))
        }
      }

      // Tăng trưởng tài sản cố định so với quý trước
      if (item?.id === 'fixedAssetGrowthPreQ') {
        if (item?.op === '>=') {
          setCriteria((criteria) => ({
            ...criteria,
            fixedAssetGrowthPreQ: {
              label: '',
              start: `${item?.val}`,
              end: ''
            }
          }))
        }
        if (item?.op === '<=') {
          setCriteria((criteria) => ({
            ...criteria,
            fixedAssetGrowthPreQ: {
              label: '',
              start: '',
              end: `${item?.val}`
            }
          }))
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            fixedAssetGrowthPreQ: {
              label: '',
              start: `${item?.val}`,
              end: `${item?.max}`
            }
          }))
        }
      }

      // Khấu hao còn lại/Nguyên giá tài sản cố định
      if (item?.id === 'fixedAssetGrossRatio') {
        if (item?.op === '>=') {
          setCriteria((criteria) => ({
            ...criteria,
            fixedAssetGrossRatio: {
              label: '',
              start: `${item?.val}`,
              end: ''
            }
          }))
        }
        if (item?.op === '<=') {
          setCriteria((criteria) => ({
            ...criteria,
            fixedAssetGrossRatio: {
              label: '',
              start: '',
              end: `${item?.val}`
            }
          }))
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            fixedAssetGrossRatio: {
              label: '',
              start: `${item?.val}`,
              end: `${item?.max}`
            }
          }))
        }
      }

      // Ban lãnh đạo | NĐT nước ngoài
      if (item?.id === 'foreignBuyingValue7d') {
        setCriteria((criteria) => ({
          ...criteria,
          foreignBuyingValue7d: true
        }))
      }

      // NĐT nước ngoài mua ròng 30 ngày gần nhất
      if (item?.id === 'foreignBuyingValue30d') {
        setCriteria((criteria) => ({
          ...criteria,
          foreignBuyingValue30d: true
        }))
      }

      // Ban lãnh đạo mua ròng 3 tháng gần nhất
      if (item?.id === 'insiderBuying3m') {
        setCriteria((criteria) => ({
          ...criteria,
          insiderBuying3m: true
        }))
      }

      // NĐT nước ngoài mua ròng 3 tháng gần nhất
      if (item?.id === 'foreignBuyingValue90d') {
        setCriteria((criteria) => ({
          ...criteria,
          foreignBuyingValue90d: true
        }))
      }

      // Quỹ đầu tư mua ròng 3 tháng gần nhất
      if (item?.id === 'fundVolumeBuy3m') {
        setCriteria((criteria) => ({
          ...criteria,
          fundVolumeBuy3m: true
        }))
      }

      // Ban lãnh đạo mua ròng 12 tháng gần nhất
      if (item?.id === 'insiderBuying') {
        setCriteria((criteria) => ({
          ...criteria,
          insiderBuying: true
        }))
      }

      // Tín hiệu kỹ thuật
      if (item?.id === 'taSignal1d') {
        if (item?.op === '=') {
          setCriteria((criteria) => ({
            ...criteria,
            taSignal1d: item?.val
          }))
        }
      }

      // Rủi ro
      if (item?.id === 'overallRiskLevel') {
        if (item?.op === 'in') {
          setCriteria((criteria) => ({
            ...criteria,
            overallRiskLevel: item?.val
          }))
        }
      }

      // Xu hướng giá dài hạn
      if (item?.id === 'pctChgLongTerm') {
        if (item?.op === '>=') {
          setCriteria((criteria) => ({
            ...criteria,
            pctChgLongTerm: {
              label: '',
              start: `${item?.val}`,
              end: ''
            }
          }))
        }
        if (item?.op === '<=') {
          setCriteria((criteria) => ({
            ...criteria,
            pctChgLongTerm: {
              label: '',
              start: '',
              end: `${item?.val}`
            }
          }))
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            pctChgLongTerm: {
              label: '',
              start: `${item?.val}`,
              end: `${item?.max}`
            }
          }))
        }
      }

      // Xu hướng giá trung hạn
      if (item?.id === 'pctChgMidTerm') {
        if (item?.op === '>=') {
          setCriteria((criteria) => ({
            ...criteria,
            pctChgMidTerm: {
              label: '',
              start: `${item?.val}`,
              end: ''
            }
          }))
        }
        if (item?.op === '<=') {
          setCriteria((criteria) => ({
            ...criteria,
            pctChgMidTerm: {
              label: '',
              start: '',
              end: `${item?.val}`
            }
          }))
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            pctChgMidTerm: {
              label: '',
              start: `${item?.val}`,
              end: `${item?.max}`
            }
          }))
        }
      }

      // Xu hướng giá ngắn hạn
      if (item?.id === 'pctChgShortTerm') {
        if (item?.op === '>=') {
          setCriteria((criteria) => ({
            ...criteria,
            pctChgShortTerm: {
              label: '',
              start: `${item?.val}`,
              end: ''
            }
          }))
        }
        if (item?.op === '<=') {
          setCriteria((criteria) => ({
            ...criteria,
            pctChgShortTerm: {
              label: '',
              start: '',
              end: `${item?.val}`
            }
          }))
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            pctChgShortTerm: {
              label: '',
              start: `${item?.val}`,
              end: `${item?.max}`
            }
          }))
        }
      }

      // Xu hướng dòng tiền ngắn hạn
      if (item?.id === 'rscD') {
        if (item?.val == '1') {
          setCriteria((criteria) => ({
            ...criteria,
            rscD: 'TICH_LUY'
          }))
        }
        if (item?.val == '2') {
          setCriteria((criteria) => ({
            ...criteria,
            rscD: 'TANG_GIA'
          }))
        }
        if (item?.val == '3') {
          setCriteria((criteria) => ({
            ...criteria,
            rscD: 'SUY_YEU'
          }))
        }
        if (item?.val == '4') {
          setCriteria((criteria) => ({
            ...criteria,
            rscD: 'GIAM_GIA'
          }))
        }
      }

      // Xu hướng dòng tiền trung hạn
      if (item?.id === 'rscW') {
        if (item?.val == '1') {
          setCriteria((criteria) => ({
            ...criteria,
            rscW: 'TICH_LUY'
          }))
        }
        if (item?.val == '2') {
          setCriteria((criteria) => ({
            ...criteria,
            rscW: 'TANG_GIA'
          }))
        }
        if (item?.val == '3') {
          setCriteria((criteria) => ({
            ...criteria,
            rscW: 'SUY_YEU'
          }))
        }
        if (item?.val == '4') {
          setCriteria((criteria) => ({
            ...criteria,
            rscW: 'GIAM_GIA'
          }))
        }
      }

      // Xu hướng dòng tiền dài hạn
      if (item?.id === 'rscM') {
        if (item?.val == '1') {
          setCriteria((criteria) => ({
            ...criteria,
            rscM: 'TICH_LUY'
          }))
        }
        if (item?.val == '2') {
          setCriteria((criteria) => ({
            ...criteria,
            rscM: 'TANG_GIA'
          }))
        }
        if (item?.val == '3') {
          setCriteria((criteria) => ({
            ...criteria,
            rscM: 'SUY_YEU'
          }))
        }
        if (item?.val == '4') {
          setCriteria((criteria) => ({
            ...criteria,
            rscM: 'GIAM_GIA'
          }))
        }
      }
    })
  }, [selectedValue])

  React.useEffect(() => {
    if (!currentScreener || !currentScreener?.rules) return

    const rules = JSON.parse(currentScreener?.rules)

    rules?.forEach((item) => {
      // Sàn giao dịch
      if (item?.id === 'stockExchange') {
        if (item?.op === 'in') {
          setCriteria((criteria) => ({
            ...criteria,
            stockExchange: item?.val
          }))
        }
      }

      // Khối lượng
      if (item?.id === 'volume') {
        if (item?.op === '>=') {
          setCriteria((criteria) => ({
            ...criteria,
            volume: {
              label: '',
              start: `${item?.val / 1000}`,
              end: ''
            }
          }))
        }
        if (item?.op === '<=') {
          setCriteria((criteria) => ({
            ...criteria,
            volume: {
              label: '',
              start: '0',
              end: `${item?.val / 1000}`
            }
          }))
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            volume: {
              label: '',
              start: `${item?.val / 1000}`,
              end: `${item?.max / 1000}`
            }
          }))
        }
      }

      // Khối lượng trung bình 10 phiên
      if (item?.id === 'volume10dAvg') {
        if (item?.op === '>=') {
          setCriteria((criteria) => ({
            ...criteria,
            volume10dAvg: {
              label: '',
              start: `${item?.val / 1000}`,
              end: ''
            }
          }))
        }
        if (item?.op === '<=') {
          setCriteria((criteria) => ({
            ...criteria,
            volume10dAvg: {
              label: '',
              start: '0',
              end: `${item?.val / 1000}`
            }
          }))
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            volume10dAvg: {
              label: '',
              start: `${item?.val / 1000}`,
              end: `${item?.max / 1000}`
            }
          }))
        }
      }

      // Vốn hóa
      if (item?.id === 'marketCapVnd') {
        if (item?.op === '>=') {
          setCriteria((criteria) => ({
            ...criteria,
            marketCapVnd: {
              label: '',
              start: `${item?.val / 1000000000}`,
              end: ''
            }
          }))
        }
        if (item?.op === '<=') {
          setCriteria((criteria) => ({
            ...criteria,
            marketCapVnd: {
              label: '',
              start: '0',
              end: `${item?.val / 1000000000}`
            }
          }))
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            marketCapVnd: {
              label: '',
              start: `${item?.val / 1000000000}`,
              end: `${item?.max / 1000000000}`
            }
          }))
        }
      }

      // Biên an toàn
      if (item?.id === 'marginOfSafety') {
        if (item?.op === '>=') {
          setCriteria((criteria) => ({
            ...criteria,
            marginOfSafety: {
              label: '',
              start: `${item?.val}`,
              end: ''
            }
          }))
        }
        if (item?.op === '<=') {
          setCriteria((criteria) => ({
            ...criteria,
            marginOfSafety: {
              label: '',
              start: '',
              end: `${item?.val}`
            }
          }))
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            marginOfSafety: {
              label: '',
              start: `${item?.val}`,
              end: `${item?.max}`
            }
          }))
        }
      }

      // P/E
      if (item?.id === 'peRatio') {
        if (item?.op === '>=') {
          setCriteria((criteria) => ({
            ...criteria,
            peRatio: {
              label: '',
              start: `${item?.val}`,
              end: ''
            }
          }))
        }
        if (item?.op === '<=') {
          if (item?.type === 'field') {
            setCriteria((criteria) => ({
              ...criteria,
              peRatio: {
                label: '< TB 5 năm',
                start: '',
                end: `peRatioAverage`
              }
            }))
          } else {
            setCriteria((criteria) => ({
              ...criteria,
              peRatio: {
                label: '',
                start: '',
                end: `${item?.val}`
              }
            }))
          }
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            peRatio: {
              label: '',
              start: `${item?.val}`,
              end: `${item?.max}`
            }
          }))
        }
      }

      // P/B
      if (item?.id === 'pbRatio') {
        if (item?.op === '>=') {
          setCriteria((criteria) => ({
            ...criteria,
            pbRatio: {
              label: '',
              start: `${item?.val}`,
              end: ''
            }
          }))
        }
        if (item?.op === '<=') {
          if (item?.type === 'field') {
            setCriteria((criteria) => ({
              ...criteria,
              pbRatio: {
                label: '< TB 5 năm',
                start: '',
                end: `pbRatioAverage`
              }
            }))
          } else {
            setCriteria((criteria) => ({
              ...criteria,
              pbRatio: {
                label: '',
                start: '',
                end: `${item?.val}`
              }
            }))
          }
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            pbRatio: {
              label: '',
              start: `${item?.val}`,
              end: `${item?.max}`
            }
          }))
        }
      }

      // EV/EBITDA
      if (item?.id === 'evEbitdaRatio') {
        if (item?.op === '>=') {
          setCriteria((criteria) => ({
            ...criteria,
            evEbitdaRatio: {
              label: '',
              start: `${item?.val}`,
              end: ''
            }
          }))
        }
        if (item?.op === '<=') {
          setCriteria((criteria) => ({
            ...criteria,
            evEbitdaRatio: {
              label: '',
              start: '',
              end: `${item?.val}`
            }
          }))
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            evEbitdaRatio: {
              label: '',
              start: `${item?.val}`,
              end: `${item?.max}`
            }
          }))
        }
      }

      // Tiền mặt ròng/Vốn hóa
      if (item?.id === 'netCashToMarketCap') {
        if (item?.op === '>=') {
          setCriteria((criteria) => ({
            ...criteria,
            netCashToMarketCap: {
              label: '',
              start: `${item?.val}`,
              end: ''
            }
          }))
        }
        if (item?.op === '<=') {
          setCriteria((criteria) => ({
            ...criteria,
            netCashToMarketCap: {
              label: '',
              start: '',
              end: `${item?.val}`
            }
          }))
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            netCashToMarketCap: {
              label: '',
              start: `${item?.val}`,
              end: `${item?.max}`
            }
          }))
        }
      }

      // Tăng trưởng doanh thu so với quý trước
      if (item?.id === 'revenueGrowthPreQ') {
        if (item?.op === '>=') {
          setCriteria((criteria) => ({
            ...criteria,
            revenueGrowthPreQ: {
              label: '',
              start: `${item?.val}`,
              end: ''
            }
          }))
        }
        if (item?.op === '<=') {
          setCriteria((criteria) => ({
            ...criteria,
            revenueGrowthPreQ: {
              label: '',
              start: '',
              end: `${item?.val}`
            }
          }))
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            revenueGrowthPreQ: {
              label: '',
              start: `${item?.val}`,
              end: `${item?.max}`
            }
          }))
        }
      }

      // Tăng trưởng doanh thu so với quý trước
      if (item?.id === 'revenueGrowthQoq') {
        if (item?.op === '>=') {
          setCriteria((criteria) => ({
            ...criteria,
            revenueGrowthQoq: {
              label: '',
              start: `${item?.val}`,
              end: ''
            }
          }))
        }
        if (item?.op === '<=') {
          setCriteria((criteria) => ({
            ...criteria,
            revenueGrowthQoq: {
              label: '',
              start: '',
              end: `${item?.val}`
            }
          }))
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            revenueGrowthQoq: {
              label: '',
              start: `${item?.val}`,
              end: `${item?.max}`
            }
          }))
        }
      }

      // Tăng trưởng lợi nhuận sau thuế so với quý trước
      if (item?.id === 'netIncomeGrowthPreQ') {
        if (item?.op === '>=') {
          setCriteria((criteria) => ({
            ...criteria,
            netIncomeGrowthPreQ: {
              label: '',
              start: `${item?.val}`,
              end: ''
            }
          }))
        }
        if (item?.op === '<=') {
          setCriteria((criteria) => ({
            ...criteria,
            netIncomeGrowthPreQ: {
              label: '',
              start: '',
              end: `${item?.val}`
            }
          }))
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            netIncomeGrowthPreQ: {
              label: '',
              start: `${item?.val}`,
              end: `${item?.max}`
            }
          }))
        }
      }

      // Tăng trưởng lợi nhuận sau thuế so với quý trước
      if (item?.id === 'netIncomeGrowthQoq') {
        if (item?.op === '>=') {
          setCriteria((criteria) => ({
            ...criteria,
            netIncomeGrowthQoq: {
              label: '',
              start: `${item?.val}`,
              end: ''
            }
          }))
        }
        if (item?.op === '<=') {
          setCriteria((criteria) => ({
            ...criteria,
            netIncomeGrowthQoq: {
              label: '',
              start: '',
              end: `${item?.val}`
            }
          }))
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            netIncomeGrowthQoq: {
              label: '',
              start: `${item?.val}`,
              end: `${item?.max}`
            }
          }))
        }
      }

      // Tăng trưởng EPS ltm so với quý trước
      if (item?.id === 'epsLtmGrowthPreQ') {
        if (item?.op === '>=') {
          setCriteria((criteria) => ({
            ...criteria,
            epsLtmGrowthPreQ: {
              label: '',
              start: `${item?.val}`,
              end: ''
            }
          }))
        }
        if (item?.op === '<=') {
          setCriteria((criteria) => ({
            ...criteria,
            epsLtmGrowthPreQ: {
              label: '',
              start: '',
              end: `${item?.val}`
            }
          }))
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            epsLtmGrowthPreQ: {
              label: '',
              start: `${item?.val}`,
              end: `${item?.max}`
            }
          }))
        }
      }

      // Tăng trưởng EPS ltm so với quý trước
      if (item?.id === 'epsLtmGrowthQoq') {
        if (item?.op === '>=') {
          setCriteria((criteria) => ({
            ...criteria,
            epsLtmGrowthQoq: {
              label: '',
              start: `${item?.val}`,
              end: ''
            }
          }))
        }
        if (item?.op === '<=') {
          setCriteria((criteria) => ({
            ...criteria,
            epsLtmGrowthQoq: {
              label: '',
              start: '',
              end: `${item?.val}`
            }
          }))
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            epsLtmGrowthQoq: {
              label: '',
              start: `${item?.val}`,
              end: `${item?.max}`
            }
          }))
        }
      }

      // Tăng trưởng doanh thu 12 tháng gần nhất
      if (item?.id === 'revenueLtmGrowth') {
        if (item?.op === '>=') {
          setCriteria((criteria) => ({
            ...criteria,
            revenueLtmGrowth: {
              label: '',
              start: `${item?.val}`,
              end: ''
            }
          }))
        }
        if (item?.op === '<=') {
          setCriteria((criteria) => ({
            ...criteria,
            revenueLtmGrowth: {
              label: '',
              start: '',
              end: `${item?.val}`
            }
          }))
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            revenueLtmGrowth: {
              label: '',
              start: `${item?.val}`,
              end: `${item?.max}`
            }
          }))
        }
      }

      // Tăng trưởng lợi nhuận 12 tháng gần nhất
      if (item?.id === 'netIncomeLtmGrowth') {
        if (item?.op === '>=') {
          setCriteria((criteria) => ({
            ...criteria,
            netIncomeLtmGrowth: {
              label: '',
              start: `${item?.val}`,
              end: ''
            }
          }))
        }
        if (item?.op === '<=') {
          setCriteria((criteria) => ({
            ...criteria,
            netIncomeLtmGrowth: {
              label: '',
              start: '',
              end: `${item?.val}`
            }
          }))
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            netIncomeLtmGrowth: {
              label: '',
              start: `${item?.val}`,
              end: `${item?.max}`
            }
          }))
        }
      }

      // Tăng trưởng lợi nhuận 12 tháng gần nhất
      if (item?.id === 'epsGrowthPreQ') {
        if (item?.op === '>=') {
          setCriteria((criteria) => ({
            ...criteria,
            epsGrowthPreQ: {
              label: '',
              start: `${item?.val}`,
              end: ''
            }
          }))
        }
        if (item?.op === '<=') {
          setCriteria((criteria) => ({
            ...criteria,
            epsGrowthPreQ: {
              label: '',
              start: '',
              end: `${item?.val}`
            }
          }))
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            epsGrowthPreQ: {
              label: '',
              start: `${item?.val}`,
              end: `${item?.max}`
            }
          }))
        }
      }

      // Tăng trưởng lợi nhuận 12 tháng gần nhất
      if (item?.id === 'epsGrowthQoq') {
        if (item?.op === '>=') {
          setCriteria((criteria) => ({
            ...criteria,
            epsGrowthQoq: {
              label: '',
              start: `${item?.val}`,
              end: ''
            }
          }))
        }
        if (item?.op === '<=') {
          setCriteria((criteria) => ({
            ...criteria,
            epsGrowthQoq: {
              label: '',
              start: '',
              end: `${item?.val}`
            }
          }))
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            epsGrowthQoq: {
              label: '',
              start: `${item?.val}`,
              end: `${item?.max}`
            }
          }))
        }
      }

      // Tăng trưởng doanh thu bình quân 5 năm
      if (item?.id === 'revenue5yGrowth') {
        if (item?.op === '>=') {
          setCriteria((criteria) => ({
            ...criteria,
            revenue5yGrowth: {
              label: '',
              start: `${item?.val}`,
              end: ''
            }
          }))
        }
        if (item?.op === '<=') {
          setCriteria((criteria) => ({
            ...criteria,
            revenue5yGrowth: {
              label: '',
              start: '',
              end: `${item?.val}`
            }
          }))
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            revenue5yGrowth: {
              label: '',
              start: `${item?.val}`,
              end: `${item?.max}`
            }
          }))
        }
      }

      // Tăng trưởng lợi nhuận bình quân 5 năm
      if (item?.id === 'netIncome5yGrowth') {
        if (item?.op === '>=') {
          setCriteria((criteria) => ({
            ...criteria,
            netIncome5yGrowth: {
              label: '',
              start: `${item?.val}`,
              end: ''
            }
          }))
        }
        if (item?.op === '<=') {
          setCriteria((criteria) => ({
            ...criteria,
            netIncome5yGrowth: {
              label: '',
              start: '',
              end: `${item?.val}`
            }
          }))
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            netIncome5yGrowth: {
              label: '',
              start: `${item?.val}`,
              end: `${item?.max}`
            }
          }))
        }
      }

      // Tăng trưởng doanh thu bình quân 3 năm dự phóng
      if (item?.id === 'revenueEstGrowth') {
        if (item?.op === '>=') {
          setCriteria((criteria) => ({
            ...criteria,
            revenueEstGrowth: {
              label: '',
              start: `${item?.val}`,
              end: ''
            }
          }))
        }
        if (item?.op === '<=') {
          setCriteria((criteria) => ({
            ...criteria,
            revenueEstGrowth: {
              label: '',
              start: '',
              end: `${item?.val}`
            }
          }))
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            revenueEstGrowth: {
              label: '',
              start: `${item?.val}`,
              end: `${item?.max}`
            }
          }))
        }
      }

      // Tăng trưởng lợi nhuận bình quân 3 năm dự phóng
      if (item?.id === 'netIncomeEstGrowth') {
        if (item?.op === '>=') {
          setCriteria((criteria) => ({
            ...criteria,
            netIncomeEstGrowth: {
              label: '',
              start: `${item?.val}`,
              end: ''
            }
          }))
        }
        if (item?.op === '<=') {
          setCriteria((criteria) => ({
            ...criteria,
            netIncomeEstGrowth: {
              label: '',
              start: '',
              end: `${item?.val}`
            }
          }))
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            netIncomeEstGrowth: {
              label: '',
              start: `${item?.val}`,
              end: `${item?.max}`
            }
          }))
        }
      }

      // Biên lợi nhuận gộp
      if (item?.id === 'grossMarginLtm') {
        if (item?.op === '>=') {
          if (item?.type === 'field') {
            setCriteria((criteria) => ({
              ...criteria,
              grossMarginLtm: {
                label: 'Tăng trưởng so cùng kỳ',
                start: `grossMarginLtmYoy`,
                end: ''
              }
            }))
          } else {
            setCriteria((criteria) => ({
              ...criteria,
              grossMarginLtm: {
                label: '',
                start: `${item?.val}`,
                end: ''
              }
            }))
          }
        }
        if (item?.op === '<=') {
          setCriteria((criteria) => ({
            ...criteria,
            grossMarginLtm: {
              label: '',
              start: '',
              end: `${item?.val}`
            }
          }))
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            grossMarginLtm: {
              label: '',
              start: `${item?.val}`,
              end: `${item?.max}`
            }
          }))
        }
      }

      // Biên lợi nhuận sau thuế
      if (item?.id === 'profitMarginLtm') {
        if (item?.op === '>=') {
          if (item?.type === 'field') {
            setCriteria((criteria) => ({
              ...criteria,
              profitMarginLtm: {
                label: 'Tăng trưởng so cùng kỳ',
                start: `netMarginLtmYoy`,
                end: ''
              }
            }))
          } else {
            setCriteria((criteria) => ({
              ...criteria,
              profitMarginLtm: {
                label: '',
                start: `${item?.val}`,
                end: ''
              }
            }))
          }
        }
        if (item?.op === '<=') {
          setCriteria((criteria) => ({
            ...criteria,
            profitMarginLtm: {
              label: '',
              start: '',
              end: `${item?.val}`
            }
          }))
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            profitMarginLtm: {
              label: '',
              start: `${item?.val}`,
              end: `${item?.max}`
            }
          }))
        }
      }

      // ROE 12 tháng
      if (item?.id === 'returnOnEquity') {
        if (item?.op === '>=') {
          if (item?.type === 'field') {
            setCriteria((criteria) => ({
              ...criteria,
              returnOnEquity: {
                label: 'Tăng so cùng kỳ',
                start: `returnOnEquityYoy`,
                end: ''
              }
            }))
          } else {
            setCriteria((criteria) => ({
              ...criteria,
              returnOnEquity: {
                label: '',
                start: `${item?.val}`,
                end: ''
              }
            }))
          }
        }
        if (item?.op === '<=') {
          setCriteria((criteria) => ({
            ...criteria,
            returnOnEquity: {
              label: '',
              start: '',
              end: `${item?.val}`
            }
          }))
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            returnOnEquity: {
              label: '',
              start: `${item?.val}`,
              end: `${item?.max}`
            }
          }))
        }
      }

      // ROA
      if (item?.id === 'returnOnAssets') {
        if (item?.op === '>=') {
          if (item?.type === 'field') {
            setCriteria((criteria) => ({
              ...criteria,
              returnOnAssets: {
                label: 'Tăng so cùng kỳ',
                start: `returnOnAssetsYoy`,
                end: ''
              }
            }))
          } else {
            setCriteria((criteria) => ({
              ...criteria,
              returnOnAssets: {
                label: '',
                start: `${item?.val}`,
                end: ''
              }
            }))
          }
        }
        if (item?.op === '<=') {
          setCriteria((criteria) => ({
            ...criteria,
            returnOnAssets: {
              label: '',
              start: '',
              end: `${item?.val}`
            }
          }))
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            returnOnAssets: {
              label: '',
              start: `${item?.val}`,
              end: `${item?.max}`
            }
          }))
        }
      }

      // Nợ vay trên vốn chủ sở hữu
      if (item?.id === 'debtToEquity') {
        if (item?.op === '>=') {
          setCriteria((criteria) => ({
            ...criteria,
            debtToEquity: {
              label: '',
              start: `${item?.val}`,
              end: ''
            }
          }))
        }
        if (item?.op === '<=') {
          setCriteria((criteria) => ({
            ...criteria,
            debtToEquity: {
              label: '',
              start: '',
              end: `${item?.val}`
            }
          }))
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            debtToEquity: {
              label: '',
              start: `${item?.val}`,
              end: `${item?.max}`
            }
          }))
        }
      }

      // Tỷ suất cổ tức hiện tại của cổ phiếu
      if (item?.id === 'dividendYieldCurrent') {
        if (item?.op === '>=') {
          if (item?.type === 'field') {
            setCriteria((criteria) => ({
              ...criteria,
              dividendYieldCurrent: {
                label: 'Cao hơn lãi tiền gửi',
                start: `depositRate12m`,
                end: ''
              }
            }))
          } else {
            setCriteria((criteria) => ({
              ...criteria,
              dividendYieldCurrent: {
                label: '',
                start: `${item?.val}`,
                end: ''
              }
            }))
          }
        }
        if (item?.op === '<=') {
          setCriteria((criteria) => ({
            ...criteria,
            dividendYieldCurrent: {
              label: '',
              start: '',
              end: `${item?.val}`
            }
          }))
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            dividendYieldCurrent: {
              label: '',
              start: `${item?.val}`,
              end: `${item?.max}`
            }
          }))
        }
      }

      // Tín hiệu kỹ thuật
      if (item?.id === 'countCashDiv') {
        if (item?.op === '>=') {
          setCriteria((criteria) => ({
            ...criteria,
            countCashDiv: item?.val
          }))
        }
      }

      // Chi phí xây dựng dở dang/Tổng tài sản (quý gần nhất)
      if (item?.id === 'constructionInProgressPct') {
        if (item?.op === '>=') {
          setCriteria((criteria) => ({
            ...criteria,
            constructionInProgressPct: {
              label: '',
              start: `${item?.val}`,
              end: ''
            }
          }))
        }
        if (item?.op === '<=') {
          setCriteria((criteria) => ({
            ...criteria,
            constructionInProgressPct: {
              label: '',
              start: '',
              end: `${item?.val}`
            }
          }))
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            constructionInProgressPct: {
              label: '',
              start: `${item?.val}`,
              end: `${item?.max}`
            }
          }))
        }
      }

      // Tăng trưởng chi phí xây dựng dở dang so với quý trước
      if (item?.id === 'constructionInProgressGrowthPreQ') {
        if (item?.op === '>=') {
          setCriteria((criteria) => ({
            ...criteria,
            constructionInProgressGrowthPreQ: {
              label: '',
              start: `${item?.val}`,
              end: ''
            }
          }))
        }
        if (item?.op === '<=') {
          setCriteria((criteria) => ({
            ...criteria,
            constructionInProgressGrowthPreQ: {
              label: '',
              start: '',
              end: `${item?.val}`
            }
          }))
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            constructionInProgressGrowthPreQ: {
              label: '',
              start: `${item?.val}`,
              end: `${item?.max}`
            }
          }))
        }
      }

      // Hàng tồn kho/Tổng tài sản (quý gần nhất)
      if (item?.id === 'netInventoriesPct') {
        if (item?.op === '>=') {
          setCriteria((criteria) => ({
            ...criteria,
            netInventoriesPct: {
              label: '',
              start: `${item?.val}`,
              end: ''
            }
          }))
        }
        if (item?.op === '<=') {
          setCriteria((criteria) => ({
            ...criteria,
            netInventoriesPct: {
              label: '',
              start: '',
              end: `${item?.val}`
            }
          }))
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            netInventoriesPct: {
              label: '',
              start: `${item?.val}`,
              end: `${item?.max}`
            }
          }))
        }
      }

      // Tăng trưởng hàng tồn kho so với quý trước
      if (item?.id === 'netInventoriesGrowthPreQ') {
        if (item?.op === '>=') {
          setCriteria((criteria) => ({
            ...criteria,
            netInventoriesGrowthPreQ: {
              label: '',
              start: `${item?.val}`,
              end: ''
            }
          }))
        }
        if (item?.op === '<=') {
          setCriteria((criteria) => ({
            ...criteria,
            netInventoriesGrowthPreQ: {
              label: '',
              start: '',
              end: `${item?.val}`
            }
          }))
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            netInventoriesGrowthPreQ: {
              label: '',
              start: `${item?.val}`,
              end: `${item?.max}`
            }
          }))
        }
      }

      // Người mua trả tiền trước/Tổng tài sản (quý gần nhất)
      if (item?.id === 'advancesCustomerPct') {
        if (item?.op === '>=') {
          setCriteria((criteria) => ({
            ...criteria,
            advancesCustomerPct: {
              label: '',
              start: `${item?.val}`,
              end: ''
            }
          }))
        }
        if (item?.op === '<=') {
          setCriteria((criteria) => ({
            ...criteria,
            advancesCustomerPct: {
              label: '',
              start: '',
              end: `${item?.val}`
            }
          }))
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            advancesCustomerPct: {
              label: '',
              start: `${item?.val}`,
              end: `${item?.max}`
            }
          }))
        }
      }

      // Tăng trưởng người mua trả tiền trước so với quý trước
      if (item?.id === 'advancesCustomerGrowthPreQ') {
        if (item?.op === '>=') {
          setCriteria((criteria) => ({
            ...criteria,
            advancesCustomerGrowthPreQ: {
              label: '',
              start: `${item?.val}`,
              end: ''
            }
          }))
        }
        if (item?.op === '<=') {
          setCriteria((criteria) => ({
            ...criteria,
            advancesCustomerGrowthPreQ: {
              label: '',
              start: '',
              end: `${item?.val}`
            }
          }))
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            advancesCustomerGrowthPreQ: {
              label: '',
              start: `${item?.val}`,
              end: `${item?.max}`
            }
          }))
        }
      }

      // Tài sản cố định/Tổng tài sản (quý gần nhất)
      if (item?.id === 'fixedAssetPct') {
        if (item?.op === '>=') {
          setCriteria((criteria) => ({
            ...criteria,
            fixedAssetPct: {
              label: '',
              start: `${item?.val}`,
              end: ''
            }
          }))
        }
        if (item?.op === '<=') {
          setCriteria((criteria) => ({
            ...criteria,
            fixedAssetPct: {
              label: '',
              start: '',
              end: `${item?.val}`
            }
          }))
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            fixedAssetPct: {
              label: '',
              start: `${item?.val}`,
              end: `${item?.max}`
            }
          }))
        }
      }

      // Tăng trưởng tài sản cố định so với quý trước
      if (item?.id === 'fixedAssetGrowthPreQ') {
        if (item?.op === '>=') {
          setCriteria((criteria) => ({
            ...criteria,
            fixedAssetGrowthPreQ: {
              label: '',
              start: `${item?.val}`,
              end: ''
            }
          }))
        }
        if (item?.op === '<=') {
          setCriteria((criteria) => ({
            ...criteria,
            fixedAssetGrowthPreQ: {
              label: '',
              start: '',
              end: `${item?.val}`
            }
          }))
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            fixedAssetGrowthPreQ: {
              label: '',
              start: `${item?.val}`,
              end: `${item?.max}`
            }
          }))
        }
      }

      // Khấu hao còn lại/Nguyên giá tài sản cố định
      if (item?.id === 'fixedAssetGrossRatio') {
        if (item?.op === '>=') {
          setCriteria((criteria) => ({
            ...criteria,
            fixedAssetGrossRatio: {
              label: '',
              start: `${item?.val}`,
              end: ''
            }
          }))
        }
        if (item?.op === '<=') {
          setCriteria((criteria) => ({
            ...criteria,
            fixedAssetGrossRatio: {
              label: '',
              start: '',
              end: `${item?.val}`
            }
          }))
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            fixedAssetGrossRatio: {
              label: '',
              start: `${item?.val}`,
              end: `${item?.max}`
            }
          }))
        }
      }

      // Ban lãnh đạo | NĐT nước ngoài
      if (item?.id === 'foreignBuyingValue7d') {
        setCriteria((criteria) => ({
          ...criteria,
          foreignBuyingValue7d: true
        }))
      }

      // NĐT nước ngoài mua ròng 30 ngày gần nhất
      if (item?.id === 'foreignBuyingValue30d') {
        setCriteria((criteria) => ({
          ...criteria,
          foreignBuyingValue30d: true
        }))
      }

      // Ban lãnh đạo mua ròng 3 tháng gần nhất
      if (item?.id === 'insiderBuying3m') {
        setCriteria((criteria) => ({
          ...criteria,
          insiderBuying3m: true
        }))
      }

      // NĐT nước ngoài mua ròng 3 tháng gần nhất
      if (item?.id === 'foreignBuyingValue90d') {
        setCriteria((criteria) => ({
          ...criteria,
          foreignBuyingValue90d: true
        }))
      }

      // Quỹ đầu tư mua ròng 3 tháng gần nhất
      if (item?.id === 'fundVolumeBuy3m') {
        setCriteria((criteria) => ({
          ...criteria,
          fundVolumeBuy3m: true
        }))
      }

      // Ban lãnh đạo mua ròng 12 tháng gần nhất
      if (item?.id === 'insiderBuying') {
        setCriteria((criteria) => ({
          ...criteria,
          insiderBuying: true
        }))
      }

      // Tín hiệu kỹ thuật
      if (item?.id === 'taSignal1d') {
        if (item?.op === '=') {
          setCriteria((criteria) => ({
            ...criteria,
            taSignal1d: item?.val
          }))
        }
      }

      // Rủi ro
      if (item?.id === 'overallRiskLevel') {
        if (item?.op === 'in') {
          setCriteria((criteria) => ({
            ...criteria,
            overallRiskLevel: item?.val
          }))
        }
      }

      // Xu hướng giá dài hạn
      if (item?.id === 'pctChgLongTerm') {
        if (item?.op === '>=') {
          setCriteria((criteria) => ({
            ...criteria,
            pctChgLongTerm: {
              label: '',
              start: `${item?.val}`,
              end: ''
            }
          }))
        }
        if (item?.op === '<=') {
          setCriteria((criteria) => ({
            ...criteria,
            pctChgLongTerm: {
              label: '',
              start: '',
              end: `${item?.val}`
            }
          }))
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            pctChgLongTerm: {
              label: '',
              start: `${item?.val}`,
              end: `${item?.max}`
            }
          }))
        }
      }

      // Xu hướng giá trung hạn
      if (item?.id === 'pctChgMidTerm') {
        if (item?.op === '>=') {
          setCriteria((criteria) => ({
            ...criteria,
            pctChgMidTerm: {
              label: '',
              start: `${item?.val}`,
              end: ''
            }
          }))
        }
        if (item?.op === '<=') {
          setCriteria((criteria) => ({
            ...criteria,
            pctChgMidTerm: {
              label: '',
              start: '',
              end: `${item?.val}`
            }
          }))
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            pctChgMidTerm: {
              label: '',
              start: `${item?.val}`,
              end: `${item?.max}`
            }
          }))
        }
      }

      // Xu hướng giá ngắn hạn
      if (item?.id === 'pctChgShortTerm') {
        if (item?.op === '>=') {
          setCriteria((criteria) => ({
            ...criteria,
            pctChgShortTerm: {
              label: '',
              start: `${item?.val}`,
              end: ''
            }
          }))
        }
        if (item?.op === '<=') {
          setCriteria((criteria) => ({
            ...criteria,
            pctChgShortTerm: {
              label: '',
              start: '',
              end: `${item?.val}`
            }
          }))
        }
        if (item?.op === 'range') {
          setCriteria((criteria) => ({
            ...criteria,
            pctChgShortTerm: {
              label: '',
              start: `${item?.val}`,
              end: `${item?.max}`
            }
          }))
        }
      }

      // Xu hướng dòng tiền ngắn hạn
      if (item?.id === 'rscD') {
        if (item?.val == '1') {
          setCriteria((criteria) => ({
            ...criteria,
            rscD: 'TICH_LUY'
          }))
        }
        if (item?.val == '2') {
          setCriteria((criteria) => ({
            ...criteria,
            rscD: 'TANG_GIA'
          }))
        }
        if (item?.val == '3') {
          setCriteria((criteria) => ({
            ...criteria,
            rscD: 'SUY_YEU'
          }))
        }
        if (item?.val == '4') {
          setCriteria((criteria) => ({
            ...criteria,
            rscD: 'GIAM_GIA'
          }))
        }
      }

      // Xu hướng dòng tiền trung hạn
      if (item?.id === 'rscW') {
        if (item?.val == '1') {
          setCriteria((criteria) => ({
            ...criteria,
            rscW: 'TICH_LUY'
          }))
        }
        if (item?.val == '2') {
          setCriteria((criteria) => ({
            ...criteria,
            rscW: 'TANG_GIA'
          }))
        }
        if (item?.val == '3') {
          setCriteria((criteria) => ({
            ...criteria,
            rscW: 'SUY_YEU'
          }))
        }
        if (item?.val == '4') {
          setCriteria((criteria) => ({
            ...criteria,
            rscW: 'GIAM_GIA'
          }))
        }
      }

      // Xu hướng dòng tiền dài hạn
      if (item?.id === 'rscM') {
        if (item?.val == '1') {
          setCriteria((criteria) => ({
            ...criteria,
            rscM: 'TICH_LUY'
          }))
        }
        if (item?.val == '2') {
          setCriteria((criteria) => ({
            ...criteria,
            rscM: 'TANG_GIA'
          }))
        }
        if (item?.val == '3') {
          setCriteria((criteria) => ({
            ...criteria,
            rscM: 'SUY_YEU'
          }))
        }
        if (item?.val == '4') {
          setCriteria((criteria) => ({
            ...criteria,
            rscM: 'GIAM_GIA'
          }))
        }
      }
    })
  }, [currentScreener])

  React.useEffect(() => {
    if (!currentScreener || !currentScreener?.rules) return
    if (!industryGroup) return

    const rules = JSON.parse(currentScreener?.rules)

    rules?.forEach((item) => {
      if (item?.id === 'bcIndustryGroupId') {
        setIndustryGroup(
          industryGroup?.map((itemIndustry) => ({
            ...itemIndustry,
            subGroups: itemIndustry?.subGroups?.map((itemSub) =>
              item?.val?.includes(itemSub?.id)
                ? { ...itemSub, isSelected: true }
                : itemSub
            )
          }))
        )
      }
    })
  }, [currentScreener, industryGroup?.length])

  React.useEffect(() => {
    if (!currentScreener || !currentScreener?.rules) return

    const rules = JSON.parse(currentScreener?.rules)

    let newPoints = [...points]

    rules?.forEach((item) => {
      if (item?.id === 'valuationPoint') {
        newPoints = newPoints?.map((point, index) =>
          index === 0 ? Number(item?.val) + 1 : point
        )
      }
      if (item?.id === 'futureGrowthPoint') {
        newPoints = newPoints?.map((point, index) =>
          index === 1 ? Number(item?.val) + 1 : point
        )
      }
      if (item?.id === 'pastPerformancePoint') {
        newPoints = newPoints?.map((point, index) =>
          index === 2 ? Number(item?.val) + 1 : point
        )
      }
      if (item?.id === 'financialHealthPoint') {
        newPoints = newPoints?.map((point, index) =>
          index === 3 ? Number(item?.val) + 1 : point
        )
      }
      if (item?.id === 'dividendPoint') {
        newPoints = newPoints?.map((point, index) =>
          index === 4 ? Number(item?.val) + 1 : point
        )
      }

      setPoints(newPoints)
    })
  }, [currentScreener])

  React.useEffect(() => {
    ;(async () => {
      try {
        const res = await screenerApi.getIndustryGroupTree()
        setIndustryGroup(res.data)
        setIndustryGroupDefault(res.data)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  /**
   * ==================== useMemo ====================
   */
  const dataPayload = React.useMemo(() => {
    const data: any = []

    // Sàn giao dịch
    if (criteria?.stockExchange?.length > 0) {
      data.push({
        id: 'stockExchange',
        val: criteria?.stockExchange,
        op: 'in'
      })
    }

    // Khối lượng
    if (criteria?.volume.start || criteria?.volume.end) {
      // min
      if (criteria?.volume.start && !criteria?.volume.end) {
        data.push({
          id: 'volume',
          val: Number(criteria?.volume.start) * 1000,
          op: '>='
        })
      }
      // max
      if (!criteria?.volume.start && criteria?.volume.end) {
        data.push({
          id: 'volume',
          val: Number(criteria?.volume.end) * 1000,
          op: '<='
        })
      }
      // range
      if (criteria?.volume.start && criteria?.volume.end) {
        data.push({
          id: 'volume',
          val: Number(criteria?.volume.start) * 1000,
          max: Number(criteria?.volume.end) * 1000,
          op: 'range'
        })
      }
    }

    // Khối lượng trung bình 10 phiên
    if (criteria?.volume10dAvg.start || criteria?.volume10dAvg.end) {
      // min
      if (criteria?.volume10dAvg.start && !criteria?.volume10dAvg.end) {
        data.push({
          id: 'volume10dAvg',
          val: Number(criteria?.volume10dAvg.start) * 1000,
          op: '>='
        })
      }
      // max
      if (!criteria?.volume10dAvg.start && criteria?.volume10dAvg.end) {
        data.push({
          id: 'volume10dAvg',
          val: Number(criteria?.volume10dAvg.end) * 1000,
          op: '<='
        })
      }
      // range
      if (criteria?.volume10dAvg.start && criteria?.volume10dAvg.end) {
        data.push({
          id: 'volume10dAvg',
          val: Number(criteria?.volume10dAvg.start) * 1000,
          max: Number(criteria?.volume10dAvg.end) * 1000,
          op: 'range'
        })
      }
    }

    // Vốn hóa
    if (criteria?.marketCapVnd.start || criteria?.marketCapVnd.end) {
      // min
      if (criteria?.marketCapVnd.start && !criteria?.marketCapVnd.end) {
        data.push({
          id: 'marketCapVnd',
          val: Number(criteria?.marketCapVnd.start) * 1000000000,
          op: '>='
        })
      }
      // max
      if (!criteria?.marketCapVnd.start && criteria?.marketCapVnd.end) {
        data.push({
          id: 'marketCapVnd',
          val: Number(criteria?.marketCapVnd.end) * 1000000000,
          op: '<='
        })
      }
      // range
      if (criteria?.marketCapVnd.start && criteria?.marketCapVnd.end) {
        data.push({
          id: 'marketCapVnd',
          val: Number(criteria?.marketCapVnd.start) * 1000000000,
          max: Number(criteria?.marketCapVnd.end) * 1000000000,
          op: 'range'
        })
      }
    }

    // Biên an toàn
    if (criteria?.marginOfSafety.start || criteria?.marginOfSafety.end) {
      // min
      if (criteria?.marginOfSafety.start && !criteria?.marginOfSafety.end) {
        data.push({
          id: 'marginOfSafety',
          val: Number(criteria?.marginOfSafety.start),
          op: '>='
        })
      }
      // max
      if (!criteria?.marginOfSafety.start && criteria?.marginOfSafety.end) {
        data.push({
          id: 'marginOfSafety',
          val: Number(criteria?.marginOfSafety.end),
          op: '<='
        })
      }
      // range
      if (criteria?.marginOfSafety.start && criteria?.marginOfSafety.end) {
        data.push({
          id: 'marginOfSafety',
          val: Number(criteria?.marginOfSafety.start),
          max: Number(criteria?.marginOfSafety.end),
          op: 'range'
        })
      }
    }

    // P/E
    if (criteria?.peRatio.start || criteria?.peRatio.end) {
      // min
      if (criteria?.peRatio.start && !criteria?.peRatio.end) {
        data.push({
          id: 'peRatio',
          val: Number(criteria?.peRatio.start),
          op: '>='
        })
      }
      // max
      if (!criteria?.peRatio.start && criteria?.peRatio.end) {
        if (criteria?.peRatio.end === 'peRatioAverage') {
          data.push({
            id: 'peRatio',
            val: 'peRatioAverage',
            op: '<=',
            type: 'field'
          })
        } else {
          data.push({
            id: 'peRatio',
            val: Number(criteria?.peRatio.end),
            op: '<='
          })
        }
      }
      // range
      if (criteria?.peRatio.start && criteria?.peRatio.end) {
        data.push({
          id: 'peRatio',
          val: Number(criteria?.peRatio.start),
          max: Number(criteria?.peRatio.end),
          op: 'range'
        })
      }
    }

    // P/B
    if (criteria?.pbRatio.start || criteria?.pbRatio.end) {
      // min
      if (criteria?.pbRatio.start && !criteria?.pbRatio.end) {
        data.push({
          id: 'pbRatio',
          val: Number(criteria?.pbRatio.start),
          op: '>='
        })
      }
      // max
      if (!criteria?.pbRatio.start && criteria?.pbRatio.end) {
        if (criteria?.pbRatio.end === 'pbRatioAverage') {
          data.push({
            id: 'pbRatio',
            val: 'pbRatioAverage',
            op: '<=',
            type: 'field'
          })
        } else {
          data.push({
            id: 'pbRatio',
            val: Number(criteria?.pbRatio.end),
            op: '<='
          })
        }
      }
      // range
      if (criteria?.pbRatio.start && criteria?.pbRatio.end) {
        data.push({
          id: 'pbRatio',
          val: Number(criteria?.pbRatio.start),
          max: Number(criteria?.pbRatio.end),
          op: 'range'
        })
      }
    }

    // EV/EBITDA
    if (criteria?.evEbitdaRatio.start || criteria?.evEbitdaRatio.end) {
      // min
      if (criteria?.evEbitdaRatio.start && !criteria?.evEbitdaRatio.end) {
        data.push({
          id: 'evEbitdaRatio',
          val: Number(criteria?.evEbitdaRatio.start),
          op: '>='
        })
      }
      // max
      if (!criteria?.evEbitdaRatio.start && criteria?.evEbitdaRatio.end) {
        data.push({
          id: 'evEbitdaRatio',
          val: Number(criteria?.evEbitdaRatio.end),
          op: '<='
        })
      }
      // range
      if (criteria?.evEbitdaRatio.start && criteria?.evEbitdaRatio.end) {
        data.push({
          id: 'evEbitdaRatio',
          val: Number(criteria?.evEbitdaRatio.start),
          max: Number(criteria?.evEbitdaRatio.end),
          op: 'range'
        })
      }
    }

    // Tiền mặt ròng/Vốn hóa
    if (
      criteria?.netCashToMarketCap.start ||
      criteria?.netCashToMarketCap.end
    ) {
      // min
      if (
        criteria?.netCashToMarketCap.start &&
        !criteria?.netCashToMarketCap.end
      ) {
        data.push({
          id: 'netCashToMarketCap',
          val: Number(criteria?.netCashToMarketCap.start),
          op: '>='
        })
      }
      // max
      if (
        !criteria?.netCashToMarketCap.start &&
        criteria?.netCashToMarketCap.end
      ) {
        data.push({
          id: 'netCashToMarketCap',
          val: Number(criteria?.netCashToMarketCap.end),
          op: '<='
        })
      }
      // range
      if (
        criteria?.netCashToMarketCap.start &&
        criteria?.netCashToMarketCap.end
      ) {
        data.push({
          id: 'netCashToMarketCap',
          val: Number(criteria?.netCashToMarketCap.start),
          max: Number(criteria?.netCashToMarketCap.end),
          op: 'range'
        })
      }
    }

    // Tăng trưởng doanh thu so với quý trước
    if (criteria?.revenueGrowthPreQ.start || criteria?.revenueGrowthPreQ.end) {
      // min
      if (
        criteria?.revenueGrowthPreQ.start &&
        !criteria?.revenueGrowthPreQ.end
      ) {
        data.push({
          id: 'revenueGrowthPreQ',
          val: Number(criteria?.revenueGrowthPreQ.start),
          op: '>='
        })
      }
      // max
      if (
        !criteria?.revenueGrowthPreQ.start &&
        criteria?.revenueGrowthPreQ.end
      ) {
        data.push({
          id: 'revenueGrowthPreQ',
          val: Number(criteria?.revenueGrowthPreQ.end),
          op: '<='
        })
      }
      // range
      if (
        criteria?.revenueGrowthPreQ.start &&
        criteria?.revenueGrowthPreQ.end
      ) {
        data.push({
          id: 'revenueGrowthPreQ',
          val: Number(criteria?.revenueGrowthPreQ.start),
          max: Number(criteria?.revenueGrowthPreQ.end),
          op: 'range'
        })
      }
    }

    // Tăng trưởng doanh thu so với quý trước
    if (criteria?.revenueGrowthQoq.start || criteria?.revenueGrowthQoq.end) {
      // min
      if (criteria?.revenueGrowthQoq.start && !criteria?.revenueGrowthQoq.end) {
        data.push({
          id: 'revenueGrowthQoq',
          val: Number(criteria?.revenueGrowthQoq.start),
          op: '>='
        })
      }
      // max
      if (!criteria?.revenueGrowthQoq.start && criteria?.revenueGrowthQoq.end) {
        data.push({
          id: 'revenueGrowthQoq',
          val: Number(criteria?.revenueGrowthQoq.end),
          op: '<='
        })
      }
      // range
      if (criteria?.revenueGrowthQoq.start && criteria?.revenueGrowthQoq.end) {
        data.push({
          id: 'revenueGrowthQoq',
          val: Number(criteria?.revenueGrowthQoq.start),
          max: Number(criteria?.revenueGrowthQoq.end),
          op: 'range'
        })
      }
    }

    // Tăng trưởng lợi nhuận sau thuế so với quý trước
    if (
      criteria?.netIncomeGrowthPreQ.start ||
      criteria?.netIncomeGrowthPreQ.end
    ) {
      // min
      if (
        criteria?.netIncomeGrowthPreQ.start &&
        !criteria?.netIncomeGrowthPreQ.end
      ) {
        data.push({
          id: 'netIncomeGrowthPreQ',
          val: Number(criteria?.netIncomeGrowthPreQ.start),
          op: '>='
        })
      }
      // max
      if (
        !criteria?.netIncomeGrowthPreQ.start &&
        criteria?.netIncomeGrowthPreQ.end
      ) {
        data.push({
          id: 'netIncomeGrowthPreQ',
          val: Number(criteria?.netIncomeGrowthPreQ.end),
          op: '<='
        })
      }
      // range
      if (
        criteria?.netIncomeGrowthPreQ.start &&
        criteria?.netIncomeGrowthPreQ.end
      ) {
        data.push({
          id: 'netIncomeGrowthPreQ',
          val: Number(criteria?.netIncomeGrowthPreQ.start),
          max: Number(criteria?.netIncomeGrowthPreQ.end),
          op: 'range'
        })
      }
    }

    // Tăng trưởng lợi nhuận sau thuế so với quý trước
    if (
      criteria?.netIncomeGrowthQoq.start ||
      criteria?.netIncomeGrowthQoq.end
    ) {
      // min
      if (
        criteria?.netIncomeGrowthQoq.start &&
        !criteria?.netIncomeGrowthQoq.end
      ) {
        data.push({
          id: 'netIncomeGrowthQoq',
          val: Number(criteria?.netIncomeGrowthQoq.start),
          op: '>='
        })
      }
      // max
      if (
        !criteria?.netIncomeGrowthQoq.start &&
        criteria?.netIncomeGrowthQoq.end
      ) {
        data.push({
          id: 'netIncomeGrowthQoq',
          val: Number(criteria?.netIncomeGrowthQoq.end),
          op: '<='
        })
      }
      // range
      if (
        criteria?.netIncomeGrowthQoq.start &&
        criteria?.netIncomeGrowthQoq.end
      ) {
        data.push({
          id: 'netIncomeGrowthQoq',
          val: Number(criteria?.netIncomeGrowthQoq.start),
          max: Number(criteria?.netIncomeGrowthQoq.end),
          op: 'range'
        })
      }
    }

    // Tăng trưởng EPS ltm so với quý trước
    if (criteria?.epsLtmGrowthPreQ.start || criteria?.epsLtmGrowthPreQ.end) {
      // min
      if (criteria?.epsLtmGrowthPreQ.start && !criteria?.epsLtmGrowthPreQ.end) {
        data.push({
          id: 'epsLtmGrowthPreQ',
          val: Number(criteria?.epsLtmGrowthPreQ.start),
          op: '>='
        })
      }
      // max
      if (!criteria?.epsLtmGrowthPreQ.start && criteria?.epsLtmGrowthPreQ.end) {
        data.push({
          id: 'epsLtmGrowthPreQ',
          val: Number(criteria?.epsLtmGrowthPreQ.end),
          op: '<='
        })
      }
      // range
      if (criteria?.epsLtmGrowthPreQ.start && criteria?.epsLtmGrowthPreQ.end) {
        data.push({
          id: 'epsLtmGrowthPreQ',
          val: Number(criteria?.epsLtmGrowthPreQ.start),
          max: Number(criteria?.epsLtmGrowthPreQ.end),
          op: 'range'
        })
      }
    }

    // Tăng trưởng EPS ltm so với quý trước
    if (criteria?.epsLtmGrowthQoq.start || criteria?.epsLtmGrowthQoq.end) {
      // min
      if (criteria?.epsLtmGrowthQoq.start && !criteria?.epsLtmGrowthQoq.end) {
        data.push({
          id: 'epsLtmGrowthQoq',
          val: Number(criteria?.epsLtmGrowthQoq.start),
          op: '>='
        })
      }
      // max
      if (!criteria?.epsLtmGrowthQoq.start && criteria?.epsLtmGrowthQoq.end) {
        data.push({
          id: 'epsLtmGrowthQoq',
          val: Number(criteria?.epsLtmGrowthQoq.end),
          op: '<='
        })
      }
      // range
      if (criteria?.epsLtmGrowthQoq.start && criteria?.epsLtmGrowthQoq.end) {
        data.push({
          id: 'epsLtmGrowthQoq',
          val: Number(criteria?.epsLtmGrowthQoq.start),
          max: Number(criteria?.epsLtmGrowthQoq.end),
          op: 'range'
        })
      }
    }

    // Tăng trưởng doanh thu 12 tháng gần nhất
    if (criteria?.revenueLtmGrowth.start || criteria?.revenueLtmGrowth.end) {
      // min
      if (criteria?.revenueLtmGrowth.start && !criteria?.revenueLtmGrowth.end) {
        data.push({
          id: 'revenueLtmGrowth',
          val: Number(criteria?.revenueLtmGrowth.start),
          op: '>='
        })
      }
      // max
      if (!criteria?.revenueLtmGrowth.start && criteria?.revenueLtmGrowth.end) {
        data.push({
          id: 'revenueLtmGrowth',
          val: Number(criteria?.revenueLtmGrowth.end),
          op: '<='
        })
      }
      // range
      if (criteria?.revenueLtmGrowth.start && criteria?.revenueLtmGrowth.end) {
        data.push({
          id: 'revenueLtmGrowth',
          val: Number(criteria?.revenueLtmGrowth.start),
          max: Number(criteria?.revenueLtmGrowth.end),
          op: 'range'
        })
      }
    }

    // Tăng trưởng lợi nhuận 12 tháng gần nhất
    if (
      criteria?.netIncomeLtmGrowth.start ||
      criteria?.netIncomeLtmGrowth.end
    ) {
      // min
      if (
        criteria?.netIncomeLtmGrowth.start &&
        !criteria?.netIncomeLtmGrowth.end
      ) {
        data.push({
          id: 'netIncomeLtmGrowth',
          val: Number(criteria?.netIncomeLtmGrowth.start),
          op: '>='
        })
      }
      // max
      if (
        !criteria?.netIncomeLtmGrowth.start &&
        criteria?.netIncomeLtmGrowth.end
      ) {
        data.push({
          id: 'netIncomeLtmGrowth',
          val: Number(criteria?.netIncomeLtmGrowth.end),
          op: '<='
        })
      }
      // range
      if (
        criteria?.netIncomeLtmGrowth.start &&
        criteria?.netIncomeLtmGrowth.end
      ) {
        data.push({
          id: 'netIncomeLtmGrowth',
          val: Number(criteria?.netIncomeLtmGrowth.start),
          max: Number(criteria?.netIncomeLtmGrowth.end),
          op: 'range'
        })
      }
    }

    // Tăng trưởng lợi nhuận 12 tháng gần nhất
    if (criteria?.epsGrowthPreQ.start || criteria?.epsGrowthPreQ.end) {
      // min
      if (criteria?.epsGrowthPreQ.start && !criteria?.epsGrowthPreQ.end) {
        data.push({
          id: 'epsGrowthPreQ',
          val: Number(criteria?.epsGrowthPreQ.start),
          op: '>='
        })
      }
      // max
      if (!criteria?.epsGrowthPreQ.start && criteria?.epsGrowthPreQ.end) {
        data.push({
          id: 'epsGrowthPreQ',
          val: Number(criteria?.epsGrowthPreQ.end),
          op: '<='
        })
      }
      // range
      if (criteria?.epsGrowthPreQ.start && criteria?.epsGrowthPreQ.end) {
        data.push({
          id: 'epsGrowthPreQ',
          val: Number(criteria?.epsGrowthPreQ.start),
          max: Number(criteria?.epsGrowthPreQ.end),
          op: 'range'
        })
      }
    }

    // Tăng trưởng lợi nhuận 12 tháng gần nhất
    if (criteria?.epsGrowthQoq.start || criteria?.epsGrowthQoq.end) {
      // min
      if (criteria?.epsGrowthQoq.start && !criteria?.epsGrowthQoq.end) {
        data.push({
          id: 'epsGrowthQoq',
          val: Number(criteria?.epsGrowthQoq.start),
          op: '>='
        })
      }
      // max
      if (!criteria?.epsGrowthQoq.start && criteria?.epsGrowthQoq.end) {
        data.push({
          id: 'epsGrowthQoq',
          val: Number(criteria?.epsGrowthQoq.end),
          op: '<='
        })
      }
      // range
      if (criteria?.epsGrowthQoq.start && criteria?.epsGrowthQoq.end) {
        data.push({
          id: 'epsGrowthQoq',
          val: Number(criteria?.epsGrowthQoq.start),
          max: Number(criteria?.epsGrowthQoq.end),
          op: 'range'
        })
      }
    }

    // Tăng trưởng doanh thu bình quân 5 năm
    if (criteria?.revenue5yGrowth.start || criteria?.revenue5yGrowth.end) {
      // min
      if (criteria?.revenue5yGrowth.start && !criteria?.revenue5yGrowth.end) {
        data.push({
          id: 'revenue5yGrowth',
          val: Number(criteria?.revenue5yGrowth.start),
          op: '>='
        })
      }
      // max
      if (!criteria?.revenue5yGrowth.start && criteria?.revenue5yGrowth.end) {
        data.push({
          id: 'revenue5yGrowth',
          val: Number(criteria?.revenue5yGrowth.end),
          op: '<='
        })
      }
      // range
      if (criteria?.revenue5yGrowth.start && criteria?.revenue5yGrowth.end) {
        data.push({
          id: 'revenue5yGrowth',
          val: Number(criteria?.revenue5yGrowth.start),
          max: Number(criteria?.revenue5yGrowth.end),
          op: 'range'
        })
      }
    }

    // Tăng trưởng lợi nhuận bình quân 5 năm
    if (criteria?.netIncome5yGrowth.start || criteria?.netIncome5yGrowth.end) {
      // min
      if (
        criteria?.netIncome5yGrowth.start &&
        !criteria?.netIncome5yGrowth.end
      ) {
        data.push({
          id: 'netIncome5yGrowth',
          val: Number(criteria?.netIncome5yGrowth.start),
          op: '>='
        })
      }
      // max
      if (
        !criteria?.netIncome5yGrowth.start &&
        criteria?.netIncome5yGrowth.end
      ) {
        data.push({
          id: 'netIncome5yGrowth',
          val: Number(criteria?.netIncome5yGrowth.end),
          op: '<='
        })
      }
      // range
      if (
        criteria?.netIncome5yGrowth.start &&
        criteria?.netIncome5yGrowth.end
      ) {
        data.push({
          id: 'netIncome5yGrowth',
          val: Number(criteria?.netIncome5yGrowth.start),
          max: Number(criteria?.netIncome5yGrowth.end),
          op: 'range'
        })
      }
    }

    // Tăng trưởng doanh thu bình quân 3 năm dự phóng
    if (criteria?.revenueEstGrowth.start || criteria?.revenueEstGrowth.end) {
      // min
      if (criteria?.revenueEstGrowth.start && !criteria?.revenueEstGrowth.end) {
        data.push({
          id: 'revenueEstGrowth',
          val: Number(criteria?.revenueEstGrowth.start),
          op: '>='
        })
      }
      // max
      if (!criteria?.revenueEstGrowth.start && criteria?.revenueEstGrowth.end) {
        data.push({
          id: 'revenueEstGrowth',
          val: Number(criteria?.revenueEstGrowth.end),
          op: '<='
        })
      }
      // range
      if (criteria?.revenueEstGrowth.start && criteria?.revenueEstGrowth.end) {
        data.push({
          id: 'revenueEstGrowth',
          val: Number(criteria?.revenueEstGrowth.start),
          max: Number(criteria?.revenueEstGrowth.end),
          op: 'range'
        })
      }
    }

    // Tăng trưởng lợi nhuận bình quân 3 năm dự phóng
    if (
      criteria?.netIncomeEstGrowth.start ||
      criteria?.netIncomeEstGrowth.end
    ) {
      // min
      if (
        criteria?.netIncomeEstGrowth.start &&
        !criteria?.netIncomeEstGrowth.end
      ) {
        data.push({
          id: 'netIncomeEstGrowth',
          val: Number(criteria?.netIncomeEstGrowth.start),
          op: '>='
        })
      }
      // max
      if (
        !criteria?.netIncomeEstGrowth.start &&
        criteria?.netIncomeEstGrowth.end
      ) {
        data.push({
          id: 'netIncomeEstGrowth',
          val: Number(criteria?.netIncomeEstGrowth.end),
          op: '<='
        })
      }
      // range
      if (
        criteria?.netIncomeEstGrowth.start &&
        criteria?.netIncomeEstGrowth.end
      ) {
        data.push({
          id: 'netIncomeEstGrowth',
          val: Number(criteria?.netIncomeEstGrowth.start),
          max: Number(criteria?.netIncomeEstGrowth.end),
          op: 'range'
        })
      }
    }

    // // EPS
    // if (criteria?.eps.start || criteria?.eps.end) {
    //   // min
    //   if (criteria?.eps.start && !criteria?.eps.end) {
    //     data.push({
    //       id: 'eps',
    //       val: Number(criteria?.eps.start),
    //       op: '>=',
    //     });
    //   }
    //   // max
    //   if (!criteria?.eps.start && criteria?.eps.end) {
    //     data.push({
    //       id: 'eps',
    //       val: Number(criteria?.eps.end),
    //       op: '<=',
    //     });
    //   }
    //   // range
    //   if (criteria?.eps.start && criteria?.eps.end) {
    //     data.push({
    //       id: 'eps',
    //       val: Number(criteria?.eps.start),
    //       max: Number(criteria?.eps.end),
    //       op: 'range',
    //     });
    //   }
    // }

    // Biên lợi nhuận gộp
    if (criteria?.grossMarginLtm.start || criteria?.grossMarginLtm.end) {
      // min
      if (criteria?.grossMarginLtm.start && !criteria?.grossMarginLtm.end) {
        if (criteria?.grossMarginLtm.start === 'grossMarginLtmYoy') {
          data.push({
            id: 'grossMarginLtm',
            val: 'grossMarginLtmYoy',
            op: '>=',
            type: 'field'
          })
        } else {
          data.push({
            id: 'grossMarginLtm',
            val: Number(criteria?.grossMarginLtm.start),
            op: '>='
          })
        }
      }
      // max
      if (!criteria?.grossMarginLtm.start && criteria?.grossMarginLtm.end) {
        data.push({
          id: 'grossMarginLtm',
          val: Number(criteria?.grossMarginLtm.end),
          op: '<='
        })
      }
      // range
      if (criteria?.grossMarginLtm.start && criteria?.grossMarginLtm.end) {
        data.push({
          id: 'grossMarginLtm',
          val: Number(criteria?.grossMarginLtm.start),
          max: Number(criteria?.grossMarginLtm.end),
          op: 'range'
        })
      }
    }

    // Biên lợi nhuận sau thuế
    if (criteria?.profitMarginLtm.start || criteria?.profitMarginLtm.end) {
      // min
      if (criteria?.profitMarginLtm.start && !criteria?.profitMarginLtm.end) {
        if (criteria?.profitMarginLtm.start === 'netMarginLtmYoy') {
          data.push({
            id: 'profitMarginLtm',
            val: 'netMarginLtmYoy',
            op: '>=',
            type: 'field'
          })
        } else {
          data.push({
            id: 'profitMarginLtm',
            val: Number(criteria?.profitMarginLtm.start),
            op: '>='
          })
        }
      }
      // max
      if (!criteria?.profitMarginLtm.start && criteria?.profitMarginLtm.end) {
        data.push({
          id: 'profitMarginLtm',
          val: Number(criteria?.profitMarginLtm.end),
          op: '<='
        })
      }
      // range
      if (criteria?.profitMarginLtm.start && criteria?.profitMarginLtm.end) {
        data.push({
          id: 'profitMarginLtm',
          val: Number(criteria?.profitMarginLtm.start),
          max: Number(criteria?.profitMarginLtm.end),
          op: 'range'
        })
      }
    }

    // ROE 12 tháng
    if (criteria?.returnOnEquity.start || criteria?.returnOnEquity.end) {
      // min
      if (criteria?.returnOnEquity.start && !criteria?.returnOnEquity.end) {
        if (criteria?.returnOnEquity.start === 'returnOnEquityYoy') {
          data.push({
            id: 'returnOnEquity',
            val: 'returnOnEquityYoy',
            op: '>=',
            type: 'field'
          })
        } else {
          data.push({
            id: 'returnOnEquity',
            val: Number(criteria?.returnOnEquity.start),
            op: '>='
          })
        }
      }
      // max
      if (!criteria?.returnOnEquity.start && criteria?.returnOnEquity.end) {
        data.push({
          id: 'returnOnEquity',
          val: Number(criteria?.returnOnEquity.end),
          op: '<='
        })
      }
      // range
      if (criteria?.returnOnEquity.start && criteria?.returnOnEquity.end) {
        data.push({
          id: 'returnOnEquity',
          val: Number(criteria?.returnOnEquity.start),
          max: Number(criteria?.returnOnEquity.end),
          op: 'range'
        })
      }
    }

    // ROA
    if (criteria?.returnOnAssets.start || criteria?.returnOnAssets.end) {
      // min
      if (criteria?.returnOnAssets.start && !criteria?.returnOnAssets.end) {
        if (criteria?.returnOnAssets.start === 'returnOnAssetsYoy') {
          data.push({
            id: 'returnOnAssets',
            val: 'returnOnAssetsYoy',
            op: '>=',
            type: 'field'
          })
        } else {
          data.push({
            id: 'returnOnAssets',
            val: Number(criteria?.returnOnAssets.start),
            op: '>='
          })
        }
      }
      // max
      if (!criteria?.returnOnAssets.start && criteria?.returnOnAssets.end) {
        data.push({
          id: 'returnOnAssets',
          val: Number(criteria?.returnOnAssets.end),
          op: '<='
        })
      }
      // range
      if (criteria?.returnOnAssets.start && criteria?.returnOnAssets.end) {
        data.push({
          id: 'returnOnAssets',
          val: Number(criteria?.returnOnAssets.start),
          max: Number(criteria?.returnOnAssets.end),
          op: 'range'
        })
      }
    }

    // Nợ vay trên vốn chủ sở hữu
    if (criteria?.debtToEquity.start || criteria?.debtToEquity.end) {
      // min
      if (criteria?.debtToEquity.start && !criteria?.debtToEquity.end) {
        data.push({
          id: 'debtToEquity',
          val: Number(criteria?.debtToEquity.start),
          op: '>='
        })
      }
      // max
      if (!criteria?.debtToEquity.start && criteria?.debtToEquity.end) {
        data.push({
          id: 'debtToEquity',
          val: Number(criteria?.debtToEquity.end),
          op: '<='
        })
      }
      // range
      if (criteria?.debtToEquity.start && criteria?.debtToEquity.end) {
        data.push({
          id: 'debtToEquity',
          val: Number(criteria?.debtToEquity.start),
          max: Number(criteria?.debtToEquity.end),
          op: 'range'
        })
      }
    }

    // Tỷ suất cổ tức hiện tại của cổ phiếu
    if (
      criteria?.dividendYieldCurrent.start ||
      criteria?.dividendYieldCurrent.end
    ) {
      // min
      if (
        criteria?.dividendYieldCurrent.start &&
        !criteria?.dividendYieldCurrent.end
      ) {
        if (criteria?.dividendYieldCurrent.start === 'depositRate12m') {
          data.push({
            id: 'dividendYieldCurrent',
            val: 'depositRate12m',
            op: '>=',
            type: 'field'
          })
        } else {
          data.push({
            id: 'dividendYieldCurrent',
            val: Number(criteria?.dividendYieldCurrent.start),
            op: '>='
          })
        }
      }
      // max
      if (
        !criteria?.dividendYieldCurrent.start &&
        criteria?.dividendYieldCurrent.end
      ) {
        data.push({
          id: 'dividendYieldCurrent',
          val: Number(criteria?.dividendYieldCurrent.end),
          op: '<='
        })
      }
      // range
      if (
        criteria?.dividendYieldCurrent.start &&
        criteria?.dividendYieldCurrent.end
      ) {
        data.push({
          id: 'dividendYieldCurrent',
          val: Number(criteria?.dividendYieldCurrent.start),
          max: Number(criteria?.dividendYieldCurrent.end),
          op: 'range'
        })
      }
    }

    // Tín hiệu kỹ thuật
    if (criteria?.countCashDiv) {
      data.push({
        id: 'countCashDiv',
        val: criteria?.countCashDiv,
        op: '>='
      })
    }

    // Chi phí xây dựng dở dang/Tổng tài sản (quý gần nhất)
    if (
      criteria?.constructionInProgressPct.start ||
      criteria?.constructionInProgressPct.end
    ) {
      // min
      if (
        criteria?.constructionInProgressPct.start &&
        !criteria?.constructionInProgressPct.end
      ) {
        data.push({
          id: 'constructionInProgressPct',
          val: Number(criteria?.constructionInProgressPct.start),
          op: '>='
        })
      }
      // max
      if (
        !criteria?.constructionInProgressPct.start &&
        criteria?.constructionInProgressPct.end
      ) {
        data.push({
          id: 'constructionInProgressPct',
          val: Number(criteria?.constructionInProgressPct.end),
          op: '<='
        })
      }
      // range
      if (
        criteria?.constructionInProgressPct.start &&
        criteria?.constructionInProgressPct.end
      ) {
        data.push({
          id: 'constructionInProgressPct',
          val: Number(criteria?.constructionInProgressPct.start),
          max: Number(criteria?.constructionInProgressPct.end),
          op: 'range'
        })
      }
    }

    // Tăng trưởng chi phí xây dựng dở dang so với quý trước
    if (
      criteria?.constructionInProgressGrowthPreQ.start ||
      criteria?.constructionInProgressGrowthPreQ.end
    ) {
      // min
      if (
        criteria?.constructionInProgressGrowthPreQ.start &&
        !criteria?.constructionInProgressGrowthPreQ.end
      ) {
        data.push({
          id: 'constructionInProgressGrowthPreQ',
          val: Number(criteria?.constructionInProgressGrowthPreQ.start),
          op: '>='
        })
      }
      // max
      if (
        !criteria?.constructionInProgressGrowthPreQ.start &&
        criteria?.constructionInProgressGrowthPreQ.end
      ) {
        data.push({
          id: 'constructionInProgressGrowthPreQ',
          val: Number(criteria?.constructionInProgressGrowthPreQ.end),
          op: '<='
        })
      }
      // range
      if (
        criteria?.constructionInProgressGrowthPreQ.start &&
        criteria?.constructionInProgressGrowthPreQ.end
      ) {
        data.push({
          id: 'constructionInProgressGrowthPreQ',
          val: Number(criteria?.constructionInProgressGrowthPreQ.start),
          max: Number(criteria?.constructionInProgressGrowthPreQ.end),
          op: 'range'
        })
      }
    }

    // Hàng tồn kho/Tổng tài sản (quý gần nhất)
    if (criteria?.netInventoriesPct.start || criteria?.netInventoriesPct.end) {
      // min
      if (
        criteria?.netInventoriesPct.start &&
        !criteria?.netInventoriesPct.end
      ) {
        data.push({
          id: 'netInventoriesPct',
          val: Number(criteria?.netInventoriesPct.start),
          op: '>='
        })
      }
      // max
      if (
        !criteria?.netInventoriesPct.start &&
        criteria?.netInventoriesPct.end
      ) {
        data.push({
          id: 'netInventoriesPct',
          val: Number(criteria?.netInventoriesPct.end),
          op: '<='
        })
      }
      // range
      if (
        criteria?.netInventoriesPct.start &&
        criteria?.netInventoriesPct.end
      ) {
        data.push({
          id: 'netInventoriesPct',
          val: Number(criteria?.netInventoriesPct.start),
          max: Number(criteria?.netInventoriesPct.end),
          op: 'range'
        })
      }
    }

    // Tăng trưởng hàng tồn kho so với quý trước
    if (
      criteria?.netInventoriesGrowthPreQ.start ||
      criteria?.netInventoriesGrowthPreQ.end
    ) {
      // min
      if (
        criteria?.netInventoriesGrowthPreQ.start &&
        !criteria?.netInventoriesGrowthPreQ.end
      ) {
        data.push({
          id: 'netInventoriesGrowthPreQ',
          val: Number(criteria?.netInventoriesGrowthPreQ.start),
          op: '>='
        })
      }
      // max
      if (
        !criteria?.netInventoriesGrowthPreQ.start &&
        criteria?.netInventoriesGrowthPreQ.end
      ) {
        data.push({
          id: 'netInventoriesGrowthPreQ',
          val: Number(criteria?.netInventoriesGrowthPreQ.end),
          op: '<='
        })
      }
      // range
      if (
        criteria?.netInventoriesGrowthPreQ.start &&
        criteria?.netInventoriesGrowthPreQ.end
      ) {
        data.push({
          id: 'netInventoriesGrowthPreQ',
          val: Number(criteria?.netInventoriesGrowthPreQ.start),
          max: Number(criteria?.netInventoriesGrowthPreQ.end),
          op: 'range'
        })
      }
    }

    // Người mua trả tiền trước/Tổng tài sản (quý gần nhất)
    if (
      criteria?.advancesCustomerPct.start ||
      criteria?.advancesCustomerPct.end
    ) {
      // min
      if (
        criteria?.advancesCustomerPct.start &&
        !criteria?.advancesCustomerPct.end
      ) {
        data.push({
          id: 'advancesCustomerPct',
          val: Number(criteria?.advancesCustomerPct.start),
          op: '>='
        })
      }
      // max
      if (
        !criteria?.advancesCustomerPct.start &&
        criteria?.advancesCustomerPct.end
      ) {
        data.push({
          id: 'advancesCustomerPct',
          val: Number(criteria?.advancesCustomerPct.end),
          op: '<='
        })
      }
      // range
      if (
        criteria?.advancesCustomerPct.start &&
        criteria?.advancesCustomerPct.end
      ) {
        data.push({
          id: 'advancesCustomerPct',
          val: Number(criteria?.advancesCustomerPct.start),
          max: Number(criteria?.advancesCustomerPct.end),
          op: 'range'
        })
      }
    }

    // Tăng trưởng người mua trả tiền trước so với quý trước
    if (
      criteria?.advancesCustomerGrowthPreQ.start ||
      criteria?.advancesCustomerGrowthPreQ.end
    ) {
      // min
      if (
        criteria?.advancesCustomerGrowthPreQ.start &&
        !criteria?.advancesCustomerGrowthPreQ.end
      ) {
        data.push({
          id: 'advancesCustomerGrowthPreQ',
          val: Number(criteria?.advancesCustomerGrowthPreQ.start),
          op: '>='
        })
      }
      // max
      if (
        !criteria?.advancesCustomerGrowthPreQ.start &&
        criteria?.advancesCustomerGrowthPreQ.end
      ) {
        data.push({
          id: 'advancesCustomerGrowthPreQ',
          val: Number(criteria?.advancesCustomerGrowthPreQ.end),
          op: '<='
        })
      }
      // range
      if (
        criteria?.advancesCustomerGrowthPreQ.start &&
        criteria?.advancesCustomerGrowthPreQ.end
      ) {
        data.push({
          id: 'advancesCustomerGrowthPreQ',
          val: Number(criteria?.advancesCustomerGrowthPreQ.start),
          max: Number(criteria?.advancesCustomerGrowthPreQ.end),
          op: 'range'
        })
      }
    }

    // Tài sản cố định/Tổng tài sản (quý gần nhất)
    if (criteria?.fixedAssetPct.start || criteria?.fixedAssetPct.end) {
      // min
      if (criteria?.fixedAssetPct.start && !criteria?.fixedAssetPct.end) {
        data.push({
          id: 'fixedAssetPct',
          val: Number(criteria?.fixedAssetPct.start),
          op: '>='
        })
      }
      // max
      if (!criteria?.fixedAssetPct.start && criteria?.fixedAssetPct.end) {
        data.push({
          id: 'fixedAssetPct',
          val: Number(criteria?.fixedAssetPct.end),
          op: '<='
        })
      }
      // range
      if (criteria?.fixedAssetPct.start && criteria?.fixedAssetPct.end) {
        data.push({
          id: 'fixedAssetPct',
          val: Number(criteria?.fixedAssetPct.start),
          max: Number(criteria?.fixedAssetPct.end),
          op: 'range'
        })
      }
    }

    // Tăng trưởng tài sản cố định so với quý trước
    if (
      criteria?.fixedAssetGrowthPreQ.start ||
      criteria?.fixedAssetGrowthPreQ.end
    ) {
      // min
      if (
        criteria?.fixedAssetGrowthPreQ.start &&
        !criteria?.fixedAssetGrowthPreQ.end
      ) {
        data.push({
          id: 'fixedAssetGrowthPreQ',
          val: Number(criteria?.fixedAssetGrowthPreQ.start),
          op: '>='
        })
      }
      // max
      if (
        !criteria?.fixedAssetGrowthPreQ.start &&
        criteria?.fixedAssetGrowthPreQ.end
      ) {
        data.push({
          id: 'fixedAssetGrowthPreQ',
          val: Number(criteria?.fixedAssetGrowthPreQ.end),
          op: '<='
        })
      }
      // range
      if (
        criteria?.fixedAssetGrowthPreQ.start &&
        criteria?.fixedAssetGrowthPreQ.end
      ) {
        data.push({
          id: 'fixedAssetGrowthPreQ',
          val: Number(criteria?.fixedAssetGrowthPreQ.start),
          max: Number(criteria?.fixedAssetGrowthPreQ.end),
          op: 'range'
        })
      }
    }

    // Khấu hao còn lại/Nguyên giá tài sản cố định
    if (
      criteria?.fixedAssetGrossRatio.start ||
      criteria?.fixedAssetGrossRatio.end
    ) {
      // min
      if (
        criteria?.fixedAssetGrossRatio.start &&
        !criteria?.fixedAssetGrossRatio.end
      ) {
        data.push({
          id: 'fixedAssetGrossRatio',
          val: Number(criteria?.fixedAssetGrossRatio.start),
          op: '>='
        })
      }
      // max
      if (
        !criteria?.fixedAssetGrossRatio.start &&
        criteria?.fixedAssetGrossRatio.end
      ) {
        data.push({
          id: 'fixedAssetGrossRatio',
          val: Number(criteria?.fixedAssetGrossRatio.end),
          op: '<='
        })
      }
      // range
      if (
        criteria?.fixedAssetGrossRatio.start &&
        criteria?.fixedAssetGrossRatio.end
      ) {
        data.push({
          id: 'fixedAssetGrossRatio',
          val: Number(criteria?.fixedAssetGrossRatio.start),
          max: Number(criteria?.fixedAssetGrossRatio.end),
          op: 'range'
        })
      }
    }

    // Ban lãnh đạo | NĐT nước ngoài
    if (criteria?.foreignBuyingValue7d) {
      data.push({
        id: 'foreignBuyingValue7d',
        val: 1,
        op: '>='
      })
    }

    // NĐT nước ngoài mua ròng 30 ngày gần nhất
    if (criteria?.foreignBuyingValue30d) {
      data.push({
        id: 'foreignBuyingValue30d',
        val: 1,
        op: '>='
      })
    }

    // Ban lãnh đạo mua ròng 3 tháng gần nhất
    if (criteria?.insiderBuying3m) {
      data.push({
        id: 'insiderBuying3m',
        val: 1,
        op: '>='
      })
    }

    // NĐT nước ngoài mua ròng 3 tháng gần nhất
    if (criteria?.foreignBuyingValue90d) {
      data.push({
        id: 'foreignBuyingValue90d',
        val: 1,
        op: '>='
      })
    }

    // Quỹ đầu tư mua ròng 3 tháng gần nhất
    if (criteria?.fundVolumeBuy3m) {
      data.push({
        id: 'fundVolumeBuy3m',
        val: 1,
        op: '>='
      })
    }

    // Ban lãnh đạo mua ròng 12 tháng gần nhất
    if (criteria?.insiderBuying) {
      data.push({
        id: 'insiderBuying',
        val: 1,
        op: '>='
      })
    }

    // Tín hiệu kỹ thuật
    if (criteria?.taSignal1d) {
      data.push({
        id: 'taSignal1d',
        val: criteria?.taSignal1d,
        op: '='
      })
    }

    // Rủi ro
    if (criteria?.overallRiskLevel?.length > 0) {
      data.push({
        id: 'overallRiskLevel',
        val: criteria?.overallRiskLevel,
        op: 'in'
      })
    }

    // Xu hướng dòng tiền ngắn hạn
    if (criteria?.rscD === 'TICH_LUY') {
      data.push({
        id: 'rscD',
        val: '1',
        op: '='
      })
    }
    if (criteria?.rscD === 'TANG_GIA') {
      data.push({
        id: 'rscD',
        val: '2',
        op: '='
      })
    }
    if (criteria?.rscD === 'SUY_YEU') {
      data.push({
        id: 'rscD',
        val: '3',
        op: '='
      })
    }
    if (criteria?.rscD === 'GIAM_GIA') {
      data.push({
        id: 'rscD',
        val: '4',
        op: '='
      })
    }

    // Xu hướng dòng tiền trung hạn
    if (criteria?.rscW === 'TICH_LUY') {
      data.push({
        id: 'rscW',
        val: '1',
        op: '='
      })
    }
    if (criteria?.rscW === 'TANG_GIA') {
      data.push({
        id: 'rscW',
        val: '2',
        op: '='
      })
    }
    if (criteria?.rscW === 'SUY_YEU') {
      data.push({
        id: 'rscW',
        val: '3',
        op: '='
      })
    }
    if (criteria?.rscW === 'GIAM_GIA') {
      data.push({
        id: 'rscW',
        val: '4',
        op: '='
      })
    }

    // Xu hướng dòng tiền dài hạn
    if (criteria?.rscM === 'TICH_LUY') {
      data.push({
        id: 'rscM',
        val: '1',
        op: '='
      })
    }
    if (criteria?.rscM === 'TANG_GIA') {
      data.push({
        id: 'rscM',
        val: '2',
        op: '='
      })
    }
    if (criteria?.rscM === 'SUY_YEU') {
      data.push({
        id: 'rscM',
        val: '3',
        op: '='
      })
    }
    if (criteria?.rscM === 'GIAM_GIA') {
      data.push({
        id: 'rscM',
        val: '4',
        op: '='
      })
    }

    // Lọc theo ngành
    if (industryGroup) {
      const listVal: number[] = []

      industryGroup?.forEach((item) => {
        if (item?.subGroups?.length > 0) {
          item?.subGroups?.forEach((element) => {
            if (element.isSelected) {
              listVal.push(element.id)
            }
          })
        }
      })

      if (listVal.length > 0) {
        data.push({
          id: 'bcIndustryGroupId',
          max: '',
          op: 'in',
          val: listVal
        })
      }
    }

    // Lọc theo radar
    if (points[0] > 1) {
      data.push({
        id: 'valuationPoint',
        max: '',
        op: '>=',
        val: points[0] - 1
      })
    }
    if (points[1] > 1) {
      data.push({
        id: 'futureGrowthPoint',
        max: '',
        op: '>=',
        val: points[1] - 1
      })
    }
    if (points[2] > 1) {
      data.push({
        id: 'pastPerformancePoint',
        max: '',
        op: '>=',
        val: points[2] - 1
      })
    }
    if (points[3] > 1) {
      data.push({
        id: 'financialHealthPoint',
        max: '',
        op: '>=',
        val: points[3] - 1
      })
    }
    if (points[4] > 1) {
      data.push({
        id: 'dividendPoint',
        max: '',
        op: '>=',
        val: points[4] - 1
      })
    }

    return data
  }, [criteria, industryGroup, points])

  const criteriaCount = React.useMemo(
    () =>
      dataPayload?.filter(
        (item) =>
          ![
            'bcIndustryGroupId',
            'valuationPoint',
            'futureGrowthPoint',
            'pastPerformancePoint',
            'financialHealthPoint',
            'dividendPoint'
          ].includes(item?.id)
      )?.length,
    [dataPayload]
  )

  const industryCount = React.useMemo(
    () =>
      dataPayload?.filter((item) => item?.id === 'bcIndustryGroupId')[0]?.val
        ?.length,
    [dataPayload]
  )

  const radarCount = React.useMemo(
    () =>
      dataPayload?.filter((item) =>
        [
          'valuationPoint',
          'futureGrowthPoint',
          'pastPerformancePoint',
          'financialHealthPoint',
          'dividendPoint'
        ].includes(item?.id)
      )?.length,
    [dataPayload]
  )

  const isLocked = React.useMemo(
    () =>
      !userInfo?.membershipStatus ||
      userInfo?.features?.LOC_CO_PHIEU_NANG_CAO !== '1',
    [userInfo]
  )

  /**
   * ==================== callback ====================
   */
  const handleReset = () => {
    setIndustryGroup(industryGroupDefault)
    setCriteria(criteriaDefault)
    setPoints(pointsDefault)
  }

  const handleSave = async () => {
    try {
      const res = await screenerApi.filterScreener({
        page: 0,
        size: size,
        rules: JSON.stringify(dataPayload),
        sort: JSON.stringify({ id: 'marketCapVnd', direction: 'DESC' })
      })
      dispatch(
        setSort(JSON.stringify({ id: 'marketCapVnd', direction: 'DESC' }))
      )
      dispatch(
        setCurrentScreener({
          ...currentScreener,
          rules: JSON.stringify(dataPayload),
          allowSave: true
        } as any)
      )
      setLocalStorageItem(
        Storage.current_screener,
        JSON.stringify({
          ...currentScreener,
          rules: JSON.stringify(dataPayload),
          allowSave: true
        })
      )
      dispatch(setPage(0))
      dispatch(setTotalFilter(res?.total as number))
      dispatch(setDataFilter(res.data))
      handleClose()
    } catch (error: any) {
      NativeMethod.toast(error.response.data.message)
    }
  }

  const handleClose = () => {
    dispatch(setVisibleChangeFilterCriterial(false))
  }

  return (
    <>
      <DialogBottom
        title={`Tiêu chí lọc`}
        visible={visibleChangeFilterCriterial}
        onClose={handleClose}
      >
        <div css={{ marginBottom: 20 }}>
          <div
            css={[styles.tabList(), utilStyles.scrollBarMobile({ width: 4 })]}
          >
            <div
              css={styles.tabItem({ active: tab === 'CRITERIA' })}
              onClick={() => setTab('CRITERIA')}
            >
              <Typography
                variant='sub_heading_four'
                cssCustom={(theme: Theme) => ({
                  color:
                    tab === 'CRITERIA' ? theme.color.dc011 : theme.color.dc014
                })}
              >{`Các tiêu chí`}</Typography>

              {criteriaCount > 0 && (
                <Typography
                  variant='sub_heading_four'
                  cssCustom={(theme: Theme) => ({
                    marginLeft: 4,
                    color: theme.color.blue500
                  })}
                >
                  {criteriaCount}
                </Typography>
              )}
            </div>

            <div
              css={styles.tabItem({ active: tab === 'INDUSTRY' })}
              onClick={() => setTab('INDUSTRY')}
            >
              <Typography
                variant='sub_heading_four'
                cssCustom={(theme: Theme) => ({
                  color:
                    tab === 'INDUSTRY' ? theme.color.dc011 : theme.color.dc014
                })}
              >{`Lọc theo ngành`}</Typography>
              {industryCount > 0 && (
                <Typography
                  variant='sub_heading_four'
                  cssCustom={(theme: Theme) => ({
                    marginLeft: 4,
                    color: theme.color.blue500
                  })}
                >
                  {industryCount}
                </Typography>
              )}
            </div>

            <div
              css={styles.tabItem({ active: tab === 'CHART' })}
              onClick={() => setTab('CHART')}
            >
              {isLocked && (
                <div
                  css={{
                    display: 'flex',
                    alignItems: 'center',
                    marginRight: 4
                  }}
                >
                  <LockTooltip
                    message={`Bạn cần nâng cấp Hội viên hoặc đổi khoai để điều chỉnh được tiêu chí này!`}
                  />
                </div>
              )}
              <Typography
                variant='sub_heading_four'
                cssCustom={(theme: Theme) => ({
                  color: tab === 'CHART' ? theme.color.dc011 : theme.color.dc014
                })}
              >
                {`Lọc theo biểu đồ 360`}
              </Typography>
              {radarCount > 0 && (
                <Typography
                  variant='sub_heading_four'
                  cssCustom={(theme: Theme) => ({
                    marginLeft: 4,
                    color: theme.color.blue500
                  })}
                >
                  {radarCount}
                </Typography>
              )}
            </div>
          </div>
        </div>

        <div
          css={[
            utilStyles.scrollBarMobile({
              width: 4
            }),
            { height: `calc(100% - 130px)` }
          ]}
        >
          {tab === 'CRITERIA' && suggestion && (
            <Criteria
              criteria={criteria}
              setCriteria={setCriteria}
              suggestion={suggestion}
              selectedValue={selectedValue}
              setSelectedValue={setSelectedValue}
            />
          )}
          {tab === 'INDUSTRY' && (
            <FilterByIndustry
              industryGroup={industryGroup}
              setIndustryGroup={setIndustryGroup}
            />
          )}
          {tab === 'CHART' && (
            <FilterByRadar points={points} setPoints={setPoints} />
          )}
        </div>

        <div css={styles.btnGroupBottom()}>
          <button
            css={[
              styles.refreshBtn(),
              {
                padding: '12px',
                width: '32%',
                display: 'flex',
                justifyContent: 'center'
              }
            ]}
            onClick={handleReset}
          >
            <RefreshIcon css={utilStyles.fillIcon()} />
          </button>
          <div
            css={[
              styles.refreshBtn(),
              {
                padding: '10px',
                width: '32%',
                display: 'flex',
                justifyContent: 'center'
              }
            ]}
            onClick={handleClose}
          >
            <Typography
              variant='sub_heading_four'
              cssCustom={(theme: Theme) => ({
                color: theme.color.dc014
              })}
            >{`Hủy`}</Typography>
          </div>

          <button
            disabled={dataPayload?.length === 0}
            css={[
              styles.btnSave(),
              {
                width: '32%',
                marginLeft: 0
              }
            ]}
            onClick={handleSave}
          >
            <Typography
              variant='sub_heading_four'
              cssCustom={(theme: Theme) => ({
                color:
                  dataPayload?.length === 0
                    ? theme.color.gray300
                    : theme.color.gray100
              })}
            >{`Lọc`}</Typography>
          </button>
        </div>
      </DialogBottom>
    </>
  )
}

export default ChangeFilterCriteriaDialog2
