import { CloseIconBlack500 } from '@/components/icons/CloseIconBlack500'
import Typography from '@/components/Typography'
import {
  setCurrentScreener,
  setDataFilter,
  setDebtToEquity,
  setDividendYieldCurrent,
  setEps,
  setEvEbitdaRatio,
  setFundVolumeBuy3m,
  setGrossMarginLtm,
  setIndustryGroup,
  setInsiderBuying,
  setMarginOfSafety,
  setMarketCapVnd,
  setNetIncome5yGrowth,
  setNetIncomeEstGrowth,
  setNetIncomeLtmGrowth,
  setPage,
  setPbRatio,
  setPctChgLongTerm,
  setPctChgMidTerm,
  setPctChgShortTerm,
  setPeRatio,
  setPoints,
  setProfitMarginLtm,
  setRevenue5yGrowth,
  setRevenueEstGrowth,
  setRevenueLtmGrowth,
  setRoa,
  setRoe,
  setRscD,
  setRscM,
  setRscW,
  setScreenerList,
  setTotalFilter,
  setVisibleChangeFilterCriterial,
  setVolume,
  setVolume10dAvg
} from '@/ScreenerModule/screener-slice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { Theme } from '@/themes/theme'
import DialogWrap from 'rc-dialog'
import React from 'react'
import screenerApi from '../../screener-api'
import Criteria from './Criteria'
import FilterByIndustry from './FilterByIndustry'
import FilterByRadar from './FilterByRadar'
import { styles } from './styles'
import NativeMethod from '@/components/NativeMethod'
import { RefreshIcon } from '@/components/icons/RefreshIcon'

const ChangeFilterCriteriaDialog: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const screenerList = useAppSelector((state) => state.screener.screenerList)
  const currentScreener = useAppSelector(
    (state) => state.screener.currentScreener
  )
  const size = useAppSelector((state) => state.screener.size)

  /**
   * Lọc theo radar
   */
  const points = useAppSelector((state) => state.screener.points)

  /**
   * Lọc theo ngành
   */
  const industryGroup = useAppSelector((state) => state.screener.industryGroup)

  /**
   * Giá và khối lượng
   */
  const volume = useAppSelector((state) => state.screener.volume)
  const volume10dAvg = useAppSelector((state) => state.screener.volume10dAvg)
  const marketCapVnd = useAppSelector((state) => state.screener.marketCapVnd)

  /**
   * Định giá
   */
  const marginOfSafety = useAppSelector(
    (state) => state.screener.marginOfSafety
  )
  const peRatio = useAppSelector((state) => state.screener.peRatio)
  const pbRatio = useAppSelector((state) => state.screener.pbRatio)
  const evEbitdaRatio = useAppSelector((state) => state.screener.evEbitdaRatio)

  /**
   * Kết quả trong quá khứ
   */
  const revenueLtmGrowth = useAppSelector(
    (state) => state.screener.revenueLtmGrowth
  )
  const revenue5yGrowth = useAppSelector(
    (state) => state.screener.revenue5yGrowth
  )
  const netIncomeLtmGrowth = useAppSelector(
    (state) => state.screener.netIncomeLtmGrowth
  )
  const netIncome5yGrowth = useAppSelector(
    (state) => state.screener.netIncome5yGrowth
  )
  const roe = useAppSelector((state) => state.screener.roe)
  const roa = useAppSelector((state) => state.screener.roa)
  const eps = useAppSelector((state) => state.screener.eps)
  const grossMarginLtm = useAppSelector(
    (state) => state.screener.grossMarginLtm
  )
  const profitMarginLtm = useAppSelector(
    (state) => state.screener.profitMarginLtm
  )

  /**
   * Tăng trưởng tương lai
   */
  const revenueEstGrowth = useAppSelector(
    (state) => state.screener.revenueEstGrowth
  )
  const netIncomeEstGrowth = useAppSelector(
    (state) => state.screener.netIncomeEstGrowth
  )

  /**
   * Sức khỏe tài chính
   */
  const debtToEquity = useAppSelector((state) => state.screener.debtToEquity)

  /**
   * Cổ tức
   */
  const dividendYieldCurrent = useAppSelector(
    (state) => state.screener.dividendYieldCurrent
  )

  /**
   * Ban lãnh đạo
   */
  const insiderBuying = useAppSelector((state) => state.screener.insiderBuying)
  const fundVolumeBuy3m = useAppSelector(
    (state) => state.screener.fundVolumeBuy3m
  )

  /**
   * Xu hướng giá
   */
  const pctChgLongTerm = useAppSelector(
    (state) => state.screener.pctChgLongTerm
  )
  const pctChgMidTerm = useAppSelector((state) => state.screener.pctChgMidTerm)
  const pctChgShortTerm = useAppSelector(
    (state) => state.screener.pctChgShortTerm
  )

  /**
   * Xu hướng dòng tiền
   */
  const rscD = useAppSelector((state) => state.screener.rscD)
  const rscW = useAppSelector((state) => state.screener.rscW)
  const rscM = useAppSelector((state) => state.screener.rscM)

  const visibleChangeFilterCriterial = useAppSelector(
    (state) => state.screener.visibleChangeFilterCriterial
  )

  const [tab, setTab] = React.useState<'CRITERIA' | 'INDUSTRY' | 'CHART'>(
    'CRITERIA'
  )

  const dataPayload = React.useMemo(() => {
    const data: any = []

    // Khối lượng
    if (volume.start || volume.end) {
      // min
      if (volume.start && !volume.end) {
        data.push({
          id: 'volume',
          val: Number(volume.start) * 1000,
          op: '>='
        })
      }
      // max
      if (!volume.start && volume.end) {
        data.push({
          id: 'volume',
          val: Number(volume.end) * 1000,
          op: '<='
        })
      }
      // range
      if (volume.start && volume.end) {
        data.push({
          id: 'volume',
          val: Number(volume.start) * 1000,
          max: Number(volume.end) * 1000,
          op: 'range'
        })
      }
    }

    // Khối lượng trung bình 10 phiên
    if (volume10dAvg.start || volume10dAvg.end) {
      // min
      if (volume10dAvg.start && !volume10dAvg.end) {
        data.push({
          id: 'volume10dAvg',
          val: Number(volume10dAvg.start) * 1000,
          op: '>='
        })
      }
      // max
      if (!volume10dAvg.start && volume10dAvg.end) {
        data.push({
          id: 'volume10dAvg',
          val: Number(volume10dAvg.end) * 1000,
          op: '<='
        })
      }
      // range
      if (volume10dAvg.start && volume10dAvg.end) {
        data.push({
          id: 'volume10dAvg',
          val: Number(volume10dAvg.start) * 1000,
          max: Number(volume10dAvg.end) * 1000,
          op: 'range'
        })
      }
    }

    // Vốn hóa
    if (marketCapVnd.start || marketCapVnd.end) {
      // min
      if (marketCapVnd.start && !marketCapVnd.end) {
        data.push({
          id: 'marketCapVnd',
          val: Number(marketCapVnd.start) * 1000000000,
          op: '>='
        })
      }
      // max
      if (!marketCapVnd.start && marketCapVnd.end) {
        data.push({
          id: 'marketCapVnd',
          val: Number(marketCapVnd.end) * 1000000000,
          op: '<='
        })
      }
      // range
      if (marketCapVnd.start && marketCapVnd.end) {
        data.push({
          id: 'marketCapVnd',
          val: Number(marketCapVnd.start) * 1000000000,
          max: Number(marketCapVnd.end) * 1000000000,
          op: 'range'
        })
      }
    }

    // Biên an toàn
    if (marginOfSafety.start || marginOfSafety.end) {
      // min
      if (marginOfSafety.start && !marginOfSafety.end) {
        data.push({
          id: 'marginOfSafety',
          val: Number(marginOfSafety.start),
          op: '>='
        })
      }
      // max
      if (!marginOfSafety.start && marginOfSafety.end) {
        data.push({
          id: 'marginOfSafety',
          val: Number(marginOfSafety.end),
          op: '<='
        })
      }
      // range
      if (marginOfSafety.start && marginOfSafety.end) {
        data.push({
          id: 'marginOfSafety',
          val: Number(marginOfSafety.start),
          max: Number(marginOfSafety.end),
          op: 'range'
        })
      }
    }

    // P/E
    if (peRatio.start || peRatio.end) {
      // min
      if (peRatio.start && !peRatio.end) {
        data.push({
          id: 'peRatio',
          val: Number(peRatio.start),
          op: '>='
        })
      }
      // max
      if (!peRatio.start && peRatio.end) {
        data.push({
          id: 'peRatio',
          val: Number(peRatio.end),
          op: '<='
        })
      }
      // range
      if (peRatio.start && peRatio.end) {
        data.push({
          id: 'peRatio',
          val: Number(peRatio.start),
          max: Number(peRatio.end),
          op: 'range'
        })
      }
    }

    // P/B
    if (pbRatio.start || pbRatio.end) {
      // min
      if (pbRatio.start && !pbRatio.end) {
        data.push({
          id: 'pbRatio',
          val: Number(pbRatio.start),
          op: '>='
        })
      }
      // max
      if (!pbRatio.start && pbRatio.end) {
        data.push({
          id: 'pbRatio',
          val: Number(pbRatio.end),
          op: '<='
        })
      }
      // range
      if (pbRatio.start && pbRatio.end) {
        data.push({
          id: 'pbRatio',
          val: Number(pbRatio.start),
          max: Number(pbRatio.end),
          op: 'range'
        })
      }
    }

    // EV/EBITDA
    if (evEbitdaRatio.start || evEbitdaRatio.end) {
      // min
      if (evEbitdaRatio.start && !evEbitdaRatio.end) {
        data.push({
          id: 'evEbitdaRatio',
          val: Number(evEbitdaRatio.start),
          op: '>='
        })
      }
      // max
      if (!evEbitdaRatio.start && evEbitdaRatio.end) {
        data.push({
          id: 'evEbitdaRatio',
          val: Number(evEbitdaRatio.end),
          op: '<='
        })
      }
      // range
      if (evEbitdaRatio.start && evEbitdaRatio.end) {
        data.push({
          id: 'evEbitdaRatio',
          val: Number(evEbitdaRatio.start),
          max: Number(evEbitdaRatio.end),
          op: 'range'
        })
      }
    }

    // Tăng trưởng doanh thu 4 quý gần nhất
    if (revenueLtmGrowth.start || revenueLtmGrowth.end) {
      // min
      if (revenueLtmGrowth.start && !revenueLtmGrowth.end) {
        data.push({
          id: 'revenueLtmGrowth',
          val: Number(revenueLtmGrowth.start),
          op: '>='
        })
      }
      // max
      if (!revenueLtmGrowth.start && revenueLtmGrowth.end) {
        data.push({
          id: 'revenueLtmGrowth',
          val: Number(revenueLtmGrowth.end),
          op: '<='
        })
      }
      // range
      if (revenueLtmGrowth.start && revenueLtmGrowth.end) {
        data.push({
          id: 'revenueLtmGrowth',
          val: Number(revenueLtmGrowth.start),
          max: Number(revenueLtmGrowth.end),
          op: 'range'
        })
      }
    }

    // Tăng trưởng doanh thu bình quân 5 năm gần nhất
    if (revenue5yGrowth.start || revenue5yGrowth.end) {
      // min
      if (revenue5yGrowth.start && !revenue5yGrowth.end) {
        data.push({
          id: 'revenue5yGrowth',
          val: Number(revenue5yGrowth.start),
          op: '>='
        })
      }
      // max
      if (!revenue5yGrowth.start && revenue5yGrowth.end) {
        data.push({
          id: 'revenue5yGrowth',
          val: Number(revenue5yGrowth.end),
          op: '<='
        })
      }
      // range
      if (revenue5yGrowth.start && revenue5yGrowth.end) {
        data.push({
          id: 'revenue5yGrowth',
          val: Number(revenue5yGrowth.start),
          max: Number(revenue5yGrowth.end),
          op: 'range'
        })
      }
    }

    // Tăng trưởng lợi nhuận 4 quý gần nhất
    if (netIncomeLtmGrowth.start || netIncomeLtmGrowth.end) {
      // min
      if (netIncomeLtmGrowth.start && !netIncomeLtmGrowth.end) {
        data.push({
          id: 'netIncomeLtmGrowth',
          val: Number(netIncomeLtmGrowth.start),
          op: '>='
        })
      }
      // max
      if (!netIncomeLtmGrowth.start && netIncomeLtmGrowth.end) {
        data.push({
          id: 'netIncomeLtmGrowth',
          val: Number(netIncomeLtmGrowth.end),
          op: '<='
        })
      }
      // range
      if (netIncomeLtmGrowth.start && netIncomeLtmGrowth.end) {
        data.push({
          id: 'netIncomeLtmGrowth',
          val: Number(netIncomeLtmGrowth.start),
          max: Number(netIncomeLtmGrowth.end),
          op: 'range'
        })
      }
    }

    // Tăng trưởng lợi nhuận bình quân 5 năm gần nhất
    if (netIncome5yGrowth.start || netIncome5yGrowth.end) {
      // min
      if (netIncome5yGrowth.start && !netIncome5yGrowth.end) {
        data.push({
          id: 'netIncome5yGrowth',
          val: Number(netIncome5yGrowth.start),
          op: '>='
        })
      }
      // max
      if (!netIncome5yGrowth.start && netIncome5yGrowth.end) {
        data.push({
          id: 'netIncome5yGrowth',
          val: Number(netIncome5yGrowth.end),
          op: '<='
        })
      }
      // range
      if (netIncome5yGrowth.start && netIncome5yGrowth.end) {
        data.push({
          id: 'netIncome5yGrowth',
          val: Number(netIncome5yGrowth.start),
          max: Number(netIncome5yGrowth.end),
          op: 'range'
        })
      }
    }

    // ROE
    if (roe.start || roe.end) {
      // min
      if (roe.start && !roe.end) {
        data.push({
          id: 'returnOnEquity',
          val: Number(roe.start),
          op: '>='
        })
      }
      // max
      if (!roe.start && roe.end) {
        data.push({
          id: 'returnOnEquity',
          val: Number(roe.end),
          op: '<='
        })
      }
      // range
      if (roe.start && roe.end) {
        data.push({
          id: 'returnOnEquity',
          val: Number(roe.start),
          max: Number(roe.end),
          op: 'range'
        })
      }
    }

    // ROA
    if (roa.start || roa.end) {
      // min
      if (roa.start && !roa.end) {
        data.push({
          id: 'returnOnAssets',
          val: Number(roa.start),
          op: '>='
        })
      }
      // max
      if (!roa.start && roa.end) {
        data.push({
          id: 'returnOnAssets',
          val: Number(roa.end),
          op: '<='
        })
      }
      // range
      if (roa.start && roa.end) {
        data.push({
          id: 'returnOnAssets',
          val: Number(roa.start),
          max: Number(roa.end),
          op: 'range'
        })
      }
    }

    // EPS
    if (eps.start || eps.end) {
      // min
      if (eps.start && !eps.end) {
        data.push({
          id: 'eps',
          val: Number(eps.start),
          op: '>='
        })
      }
      // max
      if (!eps.start && eps.end) {
        data.push({
          id: 'eps',
          val: Number(eps.end),
          op: '<='
        })
      }
      // range
      if (eps.start && eps.end) {
        data.push({
          id: 'eps',
          val: Number(eps.start),
          max: Number(eps.end),
          op: 'range'
        })
      }
    }

    // Biên lợi nhuận gộp
    if (grossMarginLtm.start || grossMarginLtm.end) {
      // min
      if (grossMarginLtm.start && !grossMarginLtm.end) {
        data.push({
          id: 'grossMarginLtm',
          val: Number(grossMarginLtm.start),
          op: '>='
        })
      }
      // max
      if (!grossMarginLtm.start && grossMarginLtm.end) {
        data.push({
          id: 'grossMarginLtm',
          val: Number(grossMarginLtm.end),
          op: '<='
        })
      }
      // range
      if (grossMarginLtm.start && grossMarginLtm.end) {
        data.push({
          id: 'grossMarginLtm',
          val: Number(grossMarginLtm.start),
          max: Number(grossMarginLtm.end),
          op: 'range'
        })
      }
    }

    // Biên lợi nhuận ròng
    if (profitMarginLtm.start || profitMarginLtm.end) {
      // min
      if (profitMarginLtm.start && !profitMarginLtm.end) {
        data.push({
          id: 'profitMarginLtm',
          val: Number(profitMarginLtm.start),
          op: '>='
        })
      }
      // max
      if (!profitMarginLtm.start && profitMarginLtm.end) {
        data.push({
          id: 'profitMarginLtm',
          val: Number(profitMarginLtm.end),
          op: '<='
        })
      }
      // range
      if (profitMarginLtm.start && profitMarginLtm.end) {
        data.push({
          id: 'profitMarginLtm',
          val: Number(profitMarginLtm.start),
          max: Number(profitMarginLtm.end),
          op: 'range'
        })
      }
    }

    // Tăng trưởng doanh thu trung bình 3 năm dự phóng
    if (revenueEstGrowth.start || revenueEstGrowth.end) {
      // min
      if (revenueEstGrowth.start && !revenueEstGrowth.end) {
        data.push({
          id: 'revenueEstGrowth',
          val: Number(revenueEstGrowth.start),
          op: '>='
        })
      }
      // max
      if (!revenueEstGrowth.start && revenueEstGrowth.end) {
        data.push({
          id: 'revenueEstGrowth',
          val: Number(revenueEstGrowth.end),
          op: '<='
        })
      }
      // range
      if (revenueEstGrowth.start && revenueEstGrowth.end) {
        data.push({
          id: 'revenueEstGrowth',
          val: Number(revenueEstGrowth.start),
          max: Number(revenueEstGrowth.end),
          op: 'range'
        })
      }
    }

    // Tăng trưởng lợi nhuận trung bình 3 năm dự phóng
    if (netIncomeEstGrowth.start || netIncomeEstGrowth.end) {
      // min
      if (netIncomeEstGrowth.start && !netIncomeEstGrowth.end) {
        data.push({
          id: 'netIncomeEstGrowth',
          val: Number(netIncomeEstGrowth.start),
          op: '>='
        })
      }
      // max
      if (!netIncomeEstGrowth.start && netIncomeEstGrowth.end) {
        data.push({
          id: 'netIncomeEstGrowth',
          val: Number(netIncomeEstGrowth.end),
          op: '<='
        })
      }
      // range
      if (netIncomeEstGrowth.start && netIncomeEstGrowth.end) {
        data.push({
          id: 'netIncomeEstGrowth',
          val: Number(netIncomeEstGrowth.start),
          max: Number(netIncomeEstGrowth.end),
          op: 'range'
        })
      }
    }

    // Nợ vay trên vốn chủ sở hữu
    if (debtToEquity.start || debtToEquity.end) {
      // min
      if (debtToEquity.start && !debtToEquity.end) {
        data.push({
          id: 'debtToEquity',
          val: Number(debtToEquity.start),
          op: '>='
        })
      }
      // max
      if (!debtToEquity.start && debtToEquity.end) {
        data.push({
          id: 'debtToEquity',
          val: Number(debtToEquity.end),
          op: '<='
        })
      }
      // range
      if (debtToEquity.start && debtToEquity.end) {
        data.push({
          id: 'debtToEquity',
          val: Number(debtToEquity.start),
          max: Number(debtToEquity.end),
          op: 'range'
        })
      }
    }

    // Tỷ suất cổ tức hiện tại của cổ phiếu
    if (dividendYieldCurrent.start || dividendYieldCurrent.end) {
      // min
      if (dividendYieldCurrent.start && !dividendYieldCurrent.end) {
        data.push({
          id: 'dividendYieldCurrent',
          val: Number(dividendYieldCurrent.start),
          op: '>='
        })
      }
      // max
      if (!dividendYieldCurrent.start && dividendYieldCurrent.end) {
        data.push({
          id: 'dividendYieldCurrent',
          val: Number(dividendYieldCurrent.end),
          op: '<='
        })
      }
      // range
      if (dividendYieldCurrent.start && dividendYieldCurrent.end) {
        data.push({
          id: 'dividendYieldCurrent',
          val: Number(dividendYieldCurrent.start),
          max: Number(dividendYieldCurrent.end),
          op: 'range'
        })
      }
    }

    // Ban lãnh đạo mua ròng trong 12 tháng gần nhất
    if (insiderBuying) {
      data.push({
        id: 'insiderBuying',
        val: 1,
        op: '>='
      })
    }

    // Quỹ đầu tư mua ròng trong 3 tháng gần nhất
    if (fundVolumeBuy3m) {
      data.push({
        id: 'fundVolumeBuy3m',
        val: 1,
        op: '>='
      })
    }

    // Xu hướng giá dài hạn
    if (pctChgLongTerm.start || pctChgLongTerm.end) {
      // min
      if (pctChgLongTerm.start && !pctChgLongTerm.end) {
        data.push({
          id: 'pctChgLongTerm',
          val: Number(pctChgLongTerm.start),
          op: '>='
        })
      }
      // max
      if (!pctChgLongTerm.start && pctChgLongTerm.end) {
        data.push({
          id: 'pctChgLongTerm',
          val: Number(pctChgLongTerm.end),
          op: '<='
        })
      }
      // range
      if (pctChgLongTerm.start && pctChgLongTerm.end) {
        data.push({
          id: 'pctChgLongTerm',
          val: Number(pctChgLongTerm.start),
          max: Number(pctChgLongTerm.end),
          op: 'range'
        })
      }
    }

    // Xu hướng giá trung hạn
    if (pctChgMidTerm.start || pctChgMidTerm.end) {
      // min
      if (pctChgMidTerm.start && !pctChgMidTerm.end) {
        data.push({
          id: 'pctChgMidTerm',
          val: Number(pctChgMidTerm.start),
          op: '>='
        })
      }
      // max
      if (!pctChgMidTerm.start && pctChgMidTerm.end) {
        data.push({
          id: 'pctChgMidTerm',
          val: Number(pctChgMidTerm.end),
          op: '<='
        })
      }
      // range
      if (pctChgMidTerm.start && pctChgMidTerm.end) {
        data.push({
          id: 'pctChgMidTerm',
          val: Number(pctChgMidTerm.start),
          max: Number(pctChgMidTerm.end),
          op: 'range'
        })
      }
    }

    // Xu hướng giá ngắn hạn
    if (pctChgShortTerm.start || pctChgShortTerm.end) {
      // min
      if (pctChgShortTerm.start && !pctChgShortTerm.end) {
        data.push({
          id: 'pctChgShortTerm',
          val: Number(pctChgShortTerm.start),
          op: '>='
        })
      }
      // max
      if (!pctChgShortTerm.start && pctChgShortTerm.end) {
        data.push({
          id: 'pctChgShortTerm',
          val: Number(pctChgShortTerm.end),
          op: '<='
        })
      }
      // range
      if (pctChgShortTerm.start && pctChgShortTerm.end) {
        data.push({
          id: 'pctChgShortTerm',
          val: Number(pctChgShortTerm.start),
          max: Number(pctChgShortTerm.end),
          op: 'range'
        })
      }
    }

    // Xu hướng dòng tiền ngắn hạn
    if (rscD === 'TICH_LUY') {
      data.push({
        id: 'rscD',
        val: '1',
        op: '='
      })
    }
    if (rscD === 'TANG_GIA') {
      data.push({
        id: 'rscD',
        val: '2',
        op: '='
      })
    }
    if (rscD === 'SUY_YEU') {
      data.push({
        id: 'rscD',
        val: '3',
        op: '='
      })
    }
    if (rscD === 'GIAM_GIA') {
      data.push({
        id: 'rscD',
        val: '4',
        op: '='
      })
    }

    // Xu hướng dòng tiền trung hạn
    if (rscW === 'TICH_LUY') {
      data.push({
        id: 'rscW',
        val: '1',
        op: '='
      })
    }
    if (rscW === 'TANG_GIA') {
      data.push({
        id: 'rscW',
        val: '2',
        op: '='
      })
    }
    if (rscW === 'SUY_YEU') {
      data.push({
        id: 'rscW',
        val: '3',
        op: '='
      })
    }
    if (rscW === 'GIAM_GIA') {
      data.push({
        id: 'rscW',
        val: '4',
        op: '='
      })
    }

    // Xu hướng dòng tiền dài hạn
    if (rscM === 'TICH_LUY') {
      data.push({
        id: 'rscM',
        val: '1',
        op: '='
      })
    }
    if (rscM === 'TANG_GIA') {
      data.push({
        id: 'rscM',
        val: '2',
        op: '='
      })
    }
    if (rscM === 'SUY_YEU') {
      data.push({
        id: 'rscM',
        val: '3',
        op: '='
      })
    }
    if (rscM === 'GIAM_GIA') {
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
  }, [
    volume,
    volume10dAvg,
    marketCapVnd,
    marginOfSafety,
    peRatio,
    pbRatio,
    evEbitdaRatio,
    revenueLtmGrowth,
    revenue5yGrowth,
    netIncomeLtmGrowth,
    netIncome5yGrowth,
    roe,
    roa,
    eps,
    grossMarginLtm,
    profitMarginLtm,
    revenueEstGrowth,
    netIncomeEstGrowth,
    debtToEquity,
    dividendYieldCurrent,
    insiderBuying,
    fundVolumeBuy3m,
    pctChgLongTerm,
    pctChgMidTerm,
    pctChgShortTerm,
    rscD,
    rscW,
    rscM,
    industryGroup,
    points
  ])

  React.useEffect(() => {
    if (!currentScreener || !currentScreener?.rules) return

    const rules = JSON.parse(currentScreener?.rules)

    rules?.forEach((item) => {
      // Khối lượng
      if (item?.id === 'volume') {
        if (item?.op === '>=') {
          dispatch(
            setVolume({
              start: `${item?.val / 1000}`,
              end: ''
            })
          )
        }
        if (item?.op === '<=') {
          dispatch(
            setVolume({
              start: '0',
              end: `${item?.val / 1000}`
            })
          )
        }
        if (item?.op === 'range') {
          dispatch(
            setVolume({
              start: `${item?.val / 1000}`,
              end: `${item?.max / 1000}`
            })
          )
        }
      }

      // Khối lượng trung bình 10 phiên
      if (item?.id === 'volume10dAvg') {
        if (item?.op === '>=') {
          dispatch(
            setVolume10dAvg({
              start: `${item?.val / 1000}`,
              end: ''
            })
          )
        }
        if (item?.op === '<=') {
          dispatch(
            setVolume10dAvg({
              start: '0',
              end: `${item?.val / 1000}`
            })
          )
        }
        if (item?.op === 'range') {
          dispatch(
            setVolume10dAvg({
              start: `${item?.val / 1000}`,
              end: `${item?.max / 1000}`
            })
          )
        }
      }

      // Vốn hóa
      if (item?.id === 'marketCapVnd') {
        if (item?.op === '>=') {
          dispatch(
            setMarketCapVnd({
              start: `${item?.val / 1000000000}`,
              end: ''
            })
          )
        }
        if (item?.op === '<=') {
          dispatch(
            setMarketCapVnd({
              start: '0',
              end: `${item?.val / 1000000000}`
            })
          )
        }
        if (item?.op === 'range') {
          dispatch(
            setMarketCapVnd({
              start: `${item?.val / 1000000000}`,
              end: `${item?.max / 1000000000}`
            })
          )
        }
      }

      // Biên an toàn
      if (item?.id === 'marginOfSafety') {
        if (item?.op === '>=') {
          dispatch(
            setMarginOfSafety({
              start: `${item?.val}`,
              end: ''
            })
          )
        }
        if (item?.op === '<=') {
          dispatch(
            setMarginOfSafety({
              start: '',
              end: `${item?.val}`
            })
          )
        }
        if (item?.op === 'range') {
          dispatch(
            setMarginOfSafety({
              start: `${item?.val}`,
              end: `${item?.max}`
            })
          )
        }
      }

      // P/E
      if (item?.id === 'peRatio') {
        if (item?.op === '>=') {
          dispatch(
            setPeRatio({
              start: `${item?.val}`,
              end: ''
            })
          )
        }
        if (item?.op === '<=') {
          dispatch(
            setPeRatio({
              start: '',
              end: `${item?.val}`
            })
          )
        }
        if (item?.op === 'range') {
          dispatch(
            setPeRatio({
              start: `${item?.val}`,
              end: `${item?.max}`
            })
          )
        }
      }

      // P/B
      if (item?.id === 'pbRatio') {
        if (item?.op === '>=') {
          dispatch(
            setPbRatio({
              start: `${item?.val}`,
              end: ''
            })
          )
        }
        if (item?.op === '<=') {
          dispatch(
            setPbRatio({
              start: '',
              end: `${item?.val}`
            })
          )
        }
        if (item?.op === 'range') {
          dispatch(
            setPbRatio({
              start: `${item?.val}`,
              end: `${item?.max}`
            })
          )
        }
      }

      // EV/EBITDA
      if (item?.id === 'evEbitdaRatio') {
        if (item?.op === '>=') {
          dispatch(
            setEvEbitdaRatio({
              start: `${item?.val}`,
              end: ''
            })
          )
        }
        if (item?.op === '<=') {
          dispatch(
            setEvEbitdaRatio({
              start: '',
              end: `${item?.val}`
            })
          )
        }
        if (item?.op === 'range') {
          dispatch(
            setEvEbitdaRatio({
              start: `${item?.val}`,
              end: `${item?.max}`
            })
          )
        }
      }

      // Tăng trưởng doanh thu 4 quý gần nhất
      if (item?.id === 'revenueLtmGrowth') {
        if (item?.op === '>=') {
          dispatch(
            setRevenueLtmGrowth({
              start: `${item?.val}`,
              end: ''
            })
          )
        }
        if (item?.op === '<=') {
          dispatch(
            setRevenueLtmGrowth({
              start: '',
              end: `${item?.val}`
            })
          )
        }
        if (item?.op === 'range') {
          dispatch(
            setRevenueLtmGrowth({
              start: `${item?.val}`,
              end: `${item?.max}`
            })
          )
        }
      }

      // Tăng trưởng doanh thu bình quân 5 năm gần nhất
      if (item?.id === 'revenue5yGrowth') {
        if (item?.op === '>=') {
          dispatch(
            setRevenue5yGrowth({
              start: `${item?.val}`,
              end: ''
            })
          )
        }
        if (item?.op === '<=') {
          dispatch(
            setRevenue5yGrowth({
              start: '',
              end: `${item?.val}`
            })
          )
        }
        if (item?.op === 'range') {
          dispatch(
            setRevenue5yGrowth({
              start: `${item?.val}`,
              end: `${item?.max}`
            })
          )
        }
      }

      // Tăng trưởng lợi nhuận 4 quý gần nhất
      if (item?.id === 'netIncomeLtmGrowth') {
        if (item?.op === '>=') {
          dispatch(
            setNetIncomeLtmGrowth({
              start: `${item?.val}`,
              end: ''
            })
          )
        }
        if (item?.op === '<=') {
          dispatch(
            setNetIncomeLtmGrowth({
              start: '',
              end: `${item?.val}`
            })
          )
        }
        if (item?.op === 'range') {
          dispatch(
            setNetIncomeLtmGrowth({
              start: `${item?.val}`,
              end: `${item?.max}`
            })
          )
        }
      }

      // Tăng trưởng lợi nhuận bình quân 5 năm gần nhất
      if (item?.id === 'netIncome5yGrowth') {
        if (item?.op === '>=') {
          dispatch(
            setNetIncome5yGrowth({
              start: `${item?.val}`,
              end: ''
            })
          )
        }
        if (item?.op === '<=') {
          dispatch(
            setNetIncome5yGrowth({
              start: '',
              end: `${item?.val}`
            })
          )
        }
        if (item?.op === 'range') {
          dispatch(
            setNetIncome5yGrowth({
              start: `${item?.val}`,
              end: `${item?.max}`
            })
          )
        }
      }

      // ROE
      if (item?.id === 'returnOnEquity') {
        if (item?.op === '>=') {
          dispatch(
            setRoe({
              start: `${item?.val}`,
              end: ''
            })
          )
        }
        if (item?.op === '<=') {
          dispatch(
            setRoe({
              start: '',
              end: `${item?.val}`
            })
          )
        }
        if (item?.op === 'range') {
          dispatch(
            setRoe({
              start: `${item?.val}`,
              end: `${item?.max}`
            })
          )
        }
      }

      // ROA
      if (item?.id === 'returnOnAssets') {
        if (item?.op === '>=') {
          dispatch(
            setRoa({
              start: `${item?.val}`,
              end: ''
            })
          )
        }
        if (item?.op === '<=') {
          dispatch(
            setRoa({
              start: '',
              end: `${item?.val}`
            })
          )
        }
        if (item?.op === 'range') {
          dispatch(
            setRoa({
              start: `${item?.val}`,
              end: `${item?.max}`
            })
          )
        }
      }

      // EPS
      if (item?.id === 'eps') {
        if (item?.op === '>=') {
          dispatch(
            setEps({
              start: `${item?.val}`,
              end: ''
            })
          )
        }
        if (item?.op === '<=') {
          dispatch(
            setEps({
              start: '',
              end: `${item?.val}`
            })
          )
        }
        if (item?.op === 'range') {
          dispatch(
            setEps({
              start: `${item?.val}`,
              end: `${item?.max}`
            })
          )
        }
      }

      // Biên lợi nhuận gộp
      if (item?.id === 'grossMarginLtm') {
        if (item?.op === '>=') {
          dispatch(
            setGrossMarginLtm({
              start: `${item?.val}`,
              end: ''
            })
          )
        }
        if (item?.op === '<=') {
          dispatch(
            setGrossMarginLtm({
              start: '',
              end: `${item?.val}`
            })
          )
        }
        if (item?.op === 'range') {
          dispatch(
            setGrossMarginLtm({
              start: `${item?.val}`,
              end: `${item?.max}`
            })
          )
        }
      }

      // Biên lợi nhuận ròng
      if (item?.id === 'profitMarginLtm') {
        if (item?.op === '>=') {
          dispatch(
            setProfitMarginLtm({
              start: `${item?.val}`,
              end: ''
            })
          )
        }
        if (item?.op === '<=') {
          dispatch(
            setProfitMarginLtm({
              start: '',
              end: `${item?.val}`
            })
          )
        }
        if (item?.op === 'range') {
          dispatch(
            setProfitMarginLtm({
              start: `${item?.val}`,
              end: `${item?.max}`
            })
          )
        }
      }

      // Tăng trưởng doanh thu trung bình 3 năm dự phóng
      if (item?.id === 'revenueEstGrowth') {
        if (item?.op === '>=') {
          dispatch(
            setRevenueEstGrowth({
              start: `${item?.val}`,
              end: ''
            })
          )
        }
        if (item?.op === '<=') {
          dispatch(
            setRevenueEstGrowth({
              start: '',
              end: `${item?.val}`
            })
          )
        }
        if (item?.op === 'range') {
          dispatch(
            setRevenueEstGrowth({
              start: `${item?.val}`,
              end: `${item?.max}`
            })
          )
        }
      }

      // Tăng trưởng lợi nhuận trung bình 3 năm dự phóng
      if (item?.id === 'netIncomeEstGrowth') {
        if (item?.op === '>=') {
          dispatch(
            setNetIncomeEstGrowth({
              start: `${item?.val}`,
              end: ''
            })
          )
        }
        if (item?.op === '<=') {
          dispatch(
            setNetIncomeEstGrowth({
              start: '',
              end: `${item?.val}`
            })
          )
        }
        if (item?.op === 'range') {
          dispatch(
            setNetIncomeEstGrowth({
              start: `${item?.val}`,
              end: `${item?.max}`
            })
          )
        }
      }

      // Nợ vay trên vốn chủ sở hữu
      if (item?.id === 'debtToEquity') {
        if (item?.op === '>=') {
          dispatch(
            setDebtToEquity({
              start: `${item?.val}`,
              end: ''
            })
          )
        }
        if (item?.op === '<=') {
          dispatch(
            setDebtToEquity({
              start: '',
              end: `${item?.val}`
            })
          )
        }
        if (item?.op === 'range') {
          dispatch(
            setDebtToEquity({
              start: `${item?.val}`,
              end: `${item?.max}`
            })
          )
        }
      }

      // Tỷ suất cổ tức hiện tại của cổ phiếu
      if (item?.id === 'dividendYieldCurrent') {
        if (item?.op === '>=') {
          dispatch(
            setDividendYieldCurrent({
              start: `${item?.val}`,
              end: ''
            })
          )
        }
        if (item?.op === '<=') {
          dispatch(
            setDividendYieldCurrent({
              start: '',
              end: `${item?.val}`
            })
          )
        }
        if (item?.op === 'range') {
          dispatch(
            setDividendYieldCurrent({
              start: `${item?.val}`,
              end: `${item?.max}`
            })
          )
        }
      }

      // Ban lãnh đạo mua ròng trong 12 tháng gần nhất
      if (item?.id === 'insiderBuying') {
        dispatch(setInsiderBuying(true))
      }

      // Quỹ đầu tư mua ròng trong 3 tháng gần nhất
      if (item?.id === 'fundVolumeBuy3m') {
        dispatch(setFundVolumeBuy3m(true))
      }

      // Xu hướng giá dài hạn
      if (item?.id === 'pctChgLongTerm') {
        if (item?.op === '>=') {
          dispatch(
            setPctChgLongTerm({
              start: `${item?.val}`,
              end: ''
            })
          )
        }
        if (item?.op === '<=') {
          dispatch(
            setPctChgLongTerm({
              start: '',
              end: `${item?.val}`
            })
          )
        }
        if (item?.op === 'range') {
          dispatch(
            setPctChgLongTerm({
              start: `${item?.val}`,
              end: `${item?.max}`
            })
          )
        }
      }

      // Xu hướng giá trung hạn
      if (item?.id === 'pctChgMidTerm') {
        if (item?.op === '>=') {
          dispatch(
            setPctChgMidTerm({
              start: `${item?.val}`,
              end: ''
            })
          )
        }
        if (item?.op === '<=') {
          dispatch(
            setPctChgMidTerm({
              start: '',
              end: `${item?.val}`
            })
          )
        }
        if (item?.op === 'range') {
          dispatch(
            setPctChgMidTerm({
              start: `${item?.val}`,
              end: `${item?.max}`
            })
          )
        }
      }

      // Xu hướng giá ngắn hạn
      if (item?.id === 'pctChgShortTerm') {
        if (item?.op === '>=') {
          dispatch(
            setPctChgShortTerm({
              start: `${item?.val}`,
              end: ''
            })
          )
        }
        if (item?.op === '<=') {
          dispatch(
            setPctChgShortTerm({
              start: '',
              end: `${item?.val}`
            })
          )
        }
        if (item?.op === 'range') {
          dispatch(
            setPctChgShortTerm({
              start: `${item?.val}`,
              end: `${item?.max}`
            })
          )
        }
      }

      // Xu hướng dòng tiền ngắn hạn
      if (item?.id === 'rscD') {
        if (item?.val == '1') {
          dispatch(setRscD('TICH_LUY'))
        }
        if (item?.val == '2') {
          dispatch(setRscD('TANG_GIA'))
        }
        if (item?.val == '3') {
          dispatch(setRscD('SUY_YEU'))
        }
        if (item?.val == '4') {
          dispatch(setRscD('GIAM_GIA'))
        }
      }

      // Xu hướng dòng tiền trung hạn
      if (item?.id === 'rscW') {
        if (item?.val == '1') {
          dispatch(setRscW('TICH_LUY'))
        }
        if (item?.val == '2') {
          dispatch(setRscW('TANG_GIA'))
        }
        if (item?.val == '3') {
          dispatch(setRscW('SUY_YEU'))
        }
        if (item?.val == '4') {
          dispatch(setRscW('GIAM_GIA'))
        }
      }

      // Xu hướng dòng tiền dài hạn
      if (item?.id === 'rscM') {
        if (item?.val == '1') {
          dispatch(setRscM('TICH_LUY'))
        }
        if (item?.val == '2') {
          dispatch(setRscM('TANG_GIA'))
        }
        if (item?.val == '3') {
          dispatch(setRscM('SUY_YEU'))
        }
        if (item?.val == '4') {
          dispatch(setRscM('GIAM_GIA'))
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
        dispatch(
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
        )
      }
    })
  }, [currentScreener])

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

      dispatch(setPoints(newPoints))
    })
  }, [currentScreener])

  const handleSubmit = async () => {
    const updateScreenerApi = screenerApi.updateScreener({
      id: currentScreener?.id as number,
      name: currentScreener?.name as string,
      description: currentScreener?.description as string,
      rules: JSON.stringify(dataPayload)
    })
    const filterScreenerApi = screenerApi.filterScreener({
      page: 0,
      size: size,
      rules: JSON.stringify(dataPayload)
    })
    try {
      const [_, res] = await Promise.all([updateScreenerApi, filterScreenerApi])
      dispatch(
        setCurrentScreener({
          ...currentScreener,
          rules: JSON.stringify(dataPayload)
        } as any)
      )
      dispatch(
        setScreenerList(
          screenerList?.map((item) =>
            item?.id === currentScreener?.id
              ? { ...item, rules: JSON.stringify(dataPayload) }
              : item
          ) as any
        )
      )
      dispatch(setPage(0))
      dispatch(setTotalFilter(res?.total as number))
      dispatch(setDataFilter(res.data))
      dispatch(setVisibleChangeFilterCriterial(false))
    } catch (error: any) {
      NativeMethod.toast(error.response.data.message)
    }
  }

  const handleReset = () => {
    // Criteria
    const value = {
      label: '',
      start: '',
      end: ''
    }
    dispatch(setVolume(value))
    dispatch(setVolume10dAvg(value))
    dispatch(setMarketCapVnd(value))
    dispatch(setMarginOfSafety(value))
    dispatch(setPeRatio(value))
    dispatch(setPbRatio(value))
    dispatch(setEvEbitdaRatio(value))
    dispatch(setRevenueLtmGrowth(value))
    dispatch(setRevenue5yGrowth(value))
    dispatch(setNetIncomeLtmGrowth(value))
    dispatch(setNetIncome5yGrowth(value))
    dispatch(setRoe(value))
    dispatch(setRoa(value))
    dispatch(setEps(value))
    dispatch(setGrossMarginLtm(value))
    dispatch(setProfitMarginLtm(value))
    dispatch(setRevenueEstGrowth(value))
    dispatch(setNetIncomeEstGrowth(value))
    dispatch(setDebtToEquity(value))
    dispatch(setDividendYieldCurrent(value))
    dispatch(setInsiderBuying(false))
    dispatch(setFundVolumeBuy3m(false))
    dispatch(setPctChgLongTerm(value))
    dispatch(setPctChgMidTerm(value))
    dispatch(setPctChgShortTerm(value))
    dispatch(setRscD(''))
    dispatch(setRscW(''))
    dispatch(setRscM(''))

    // FilterByIndustry
    if (industryGroup) {
      dispatch(
        setIndustryGroup(
          industryGroup?.map((itemIndustry) => ({
            ...itemIndustry,
            subGroups: itemIndustry?.subGroups?.map((itemSub) => ({
              ...itemSub,
              isSelected: false
            }))
          }))
        )
      )
    }

    // FilterByRadar
    dispatch(setPoints([1, 1, 1, 1, 1]))
  }

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

  return (
    <DialogWrap
      prefixCls='simplize-dialog'
      visible={visibleChangeFilterCriterial}
      title={<Typography variant='heading_three'>{`Tiêu chí lọc`}</Typography>}
      onClose={() => {
        handleReset()
        dispatch(setVisibleChangeFilterCriterial(false))
      }}
      closeIcon={<CloseIconBlack500 width={28} height={28} />}
      css={styles.wrapper()}
    >
      <div
        css={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 20
        }}
      >
        <div css={styles.tabList()}>
          <div
            css={styles.tabItem({ active: tab === 'CRITERIA' })}
            onClick={() => setTab('CRITERIA')}
          >
            <Typography
              variant='sub_heading_four'
              cssCustom={(theme: Theme) => ({
                color:
                  tab === 'CRITERIA' ? theme.color.dc011 : theme.color.dc015
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
                  tab === 'INDUSTRY' ? theme.color.dc011 : theme.color.dc015
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
            <Typography
              variant='sub_heading_four'
              cssCustom={(theme: Theme) => ({
                color: tab === 'CHART' ? theme.color.dc011 : theme.color.dc015
              })}
            >{`Lọc theo biểu đồ 360`}</Typography>
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
        <div>
          <button css={styles.refreshBtn()} onClick={handleReset}>
            <RefreshIcon />
            <Typography
              variant='caption_three'
              cssCustom={(theme: Theme) => ({
                color: theme.color.dc014,
                marginLeft: 8
              })}
            >{`Làm mới`}</Typography>
          </button>
        </div>
      </div>
      {tab === 'CRITERIA' && <Criteria />}
      {tab === 'INDUSTRY' && <FilterByIndustry />}
      {tab === 'CHART' && <FilterByRadar />}
      <div css={styles.btnGroupBottom()}>
        <div
          onClick={() => {
            handleReset()
            dispatch(setVisibleChangeFilterCriterial(false))
          }}
        >
          <Typography
            variant='sub_heading_four'
            cssCustom={(theme: Theme) => ({
              color: theme.color.dc014,
              cursor: 'pointer',
              '&:hover': {
                textDecoration: 'underline'
              }
            })}
          >{`Hủy`}</Typography>
        </div>
        <button css={styles.btnSave()} onClick={handleSubmit}>
          <Typography
            variant='sub_heading_four'
            cssCustom={(theme: Theme) => ({
              color: theme.color.gray100
            })}
          >{`Lưu lại`}</Typography>
        </button>
      </div>
    </DialogWrap>
  )
}

export default ChangeFilterCriteriaDialog
