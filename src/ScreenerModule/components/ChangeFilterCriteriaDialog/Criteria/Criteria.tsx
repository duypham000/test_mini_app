import Typography from '@/components/Typography'
import {
  setDebtToEquity,
  setDividendYieldCurrent,
  setEps,
  setEvEbitdaRatio,
  setFundVolumeBuy3m,
  setGrossMarginLtm,
  setInsiderBuying,
  setMarginOfSafety,
  setMarketCapVnd,
  setNetIncome5yGrowth,
  setNetIncomeEstGrowth,
  setNetIncomeLtmGrowth,
  setPbRatio,
  setPctChgLongTerm,
  setPctChgMidTerm,
  setPctChgShortTerm,
  setPeRatio,
  setProfitMarginLtm,
  setRevenue5yGrowth,
  setRevenueEstGrowth,
  setRevenueLtmGrowth,
  setRoa,
  setRoe,
  setRscD,
  setRscM,
  setRscW,
  setSuggestion,
  setVolume,
  setVolume10dAvg
} from '@/ScreenerModule/screener-slice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { Theme } from '@/themes/theme'
import React from 'react'
import Select from './Select'
import styles from './styles'
import OptionItem from './OptionItem'
import BooleanOption from './BooleanOption'
import utilStyles from '@/styles/util-styles'
import SelectOption from './SelectOption'
import screenerApi from '@/ScreenerModule/screener-api'
import { DropdownIcon } from '@/components/icons/DropdownIcon'

const Criteria: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch()

  const [selectedValue, setSelectedValue] = React.useState('')

  const suggestion = useAppSelector((state) => state.screener.suggestion)

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

  React.useEffect(() => {
    if (suggestion) return
    ;(async () => {
      try {
        const res = await screenerApi.getSuggestions()
        dispatch(setSuggestion(res.data))
      } catch (error) {
        console.log(error)
      }
    })()
  }, [suggestion])

  React.useEffect(() => {
    if (!selectedValue) return

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

    const rules = JSON.parse(selectedValue)

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
  }, [selectedValue])

  return (
    <div>
      <div css={{ marginBottom: 24 }}>
        <div css={{ maxWidth: 142, position: 'relative' }}>
          <Select
            value={selectedValue}
            onChange={(value) => setSelectedValue(value)}
            options={[
              {
                label: 'Mặc định',
                value: ''
              }
            ].concat(
              suggestion
                ? suggestion?.map((item) => ({
                    label: item?.name,
                    value: item?.rules
                  }))
                : []
            )}
          />
          <DropdownIcon
            css={{
              position: 'absolute',
              right: 16,
              top: '50%',
              transform: 'translateY(-50%)'
            }}
          />
        </div>
      </div>
      <div css={[styles.optionList(), utilStyles.scrollBar({ width: 4 })]}>
        {/* Giá và khối lượng */}
        <div css={styles.optionItem()}>
          <Typography
            variant='caption_two'
            cssCustom={(theme: Theme) => ({
              color: theme.color.gray300,
              minWidth: 'fit-content'
            })}
          >{`Giá và khối lượng`}</Typography>
          <div css={styles.optionWrapper()}>
            {/* Khối lượng */}
            <div css={styles.option()}>
              <OptionItem
                value={volume}
                setValue={(value) => dispatch(setVolume(value))}
                suffix={`K`}
                label={`Khối lượng`}
                recommendList={[
                  {
                    label: '< 100K',
                    value: {
                      start: '0',
                      end: '100'
                    }
                  },
                  {
                    label: '100K - 400K',
                    value: {
                      start: '100',
                      end: '400'
                    }
                  },
                  {
                    label: '400K - 700K',
                    value: {
                      start: '400',
                      end: '700'
                    }
                  },
                  {
                    label: '700K - 1Tr',
                    value: {
                      start: '700',
                      end: '1000'
                    }
                  },
                  {
                    label: '> 1Tr',
                    value: {
                      start: '1000',
                      end: ''
                    }
                  }
                ]}
              />
            </div>

            {/* KLTB 10 phiên */}
            <div css={styles.option()}>
              <OptionItem
                value={volume10dAvg}
                setValue={(value) => dispatch(setVolume10dAvg(value))}
                suffix={`K`}
                label={`KLTB 10 phiên`}
                recommendList={[
                  {
                    label: '< 100K',
                    value: {
                      start: '0',
                      end: '100'
                    }
                  },
                  {
                    label: '100K - 400K',
                    value: {
                      start: '100',
                      end: '400'
                    }
                  },
                  {
                    label: '400K - 700K',
                    value: {
                      start: '400',
                      end: '700'
                    }
                  },
                  {
                    label: '700K - 1Tr',
                    value: {
                      start: '700',
                      end: '1000'
                    }
                  },
                  {
                    label: '> 1Tr',
                    value: {
                      start: '1000',
                      end: ''
                    }
                  }
                ]}
              />
            </div>

            {/* Vốn hóa */}
            <div css={styles.option()}>
              <OptionItem
                value={marketCapVnd}
                setValue={(value) => dispatch(setMarketCapVnd(value))}
                suffix={`T`}
                label={`Vốn hóa`}
                recommendList={[
                  {
                    label: '< 100T',
                    value: {
                      start: '0',
                      end: '100'
                    }
                  },
                  {
                    label: '100T - 1,000T',
                    value: {
                      start: '100',
                      end: '1000'
                    }
                  },
                  {
                    label: '1,000T - 10,000T',
                    value: {
                      start: '1000',
                      end: '10000'
                    }
                  },
                  {
                    label: '> 10,000T',
                    value: {
                      start: '10000',
                      end: ''
                    }
                  }
                ]}
              />
            </div>
          </div>
        </div>

        {/* Định giá */}
        <div css={styles.optionItem()}>
          <Typography
            variant='caption_two'
            cssCustom={(theme: Theme) => ({
              color: theme.color.gray300,
              minWidth: 'fit-content'
            })}
          >{`Định giá`}</Typography>
          <div css={styles.optionWrapper()}>
            {/* Biên an toàn */}
            <div css={styles.option()}>
              <OptionItem
                value={marginOfSafety}
                setValue={(value) => dispatch(setMarginOfSafety(value))}
                suffix={`%`}
                label={`Biên an toàn`}
                recommendList={[
                  {
                    label: '< 0%',
                    value: {
                      start: '',
                      end: '0'
                    }
                  },
                  {
                    label: '0% - 10%',
                    value: {
                      start: '0',
                      end: '10'
                    }
                  },
                  {
                    label: '10% - 20%',
                    value: {
                      start: '10',
                      end: '20'
                    }
                  },
                  {
                    label: '20% - 30%',
                    value: {
                      start: '20',
                      end: '30'
                    }
                  },
                  {
                    label: '30% - 40%',
                    value: {
                      start: '30',
                      end: '40'
                    }
                  },
                  {
                    label: '> 40%',
                    value: {
                      start: '40',
                      end: ''
                    }
                  }
                ]}
              />
            </div>

            {/* P/E */}
            <div css={styles.option()}>
              <OptionItem
                value={peRatio}
                setValue={(value) => dispatch(setPeRatio(value))}
                suffix={``}
                label={`P/E`}
                recommendList={[
                  {
                    label: '<= 0',
                    value: {
                      start: '',
                      end: '0'
                    }
                  },
                  {
                    label: '0 - 10',
                    value: {
                      start: '0',
                      end: '10'
                    }
                  },
                  {
                    label: '10 - 25',
                    value: {
                      start: '10',
                      end: '25'
                    }
                  },
                  {
                    label: '25 - 40',
                    value: {
                      start: '25',
                      end: '40'
                    }
                  },
                  {
                    label: '> 40',
                    value: {
                      start: '40',
                      end: ''
                    }
                  }
                ]}
              />
            </div>

            {/* P/B */}
            <div css={styles.option()}>
              <OptionItem
                value={pbRatio}
                setValue={(value) => dispatch(setPbRatio(value))}
                suffix={``}
                label={`P/B`}
                recommendList={[
                  {
                    label: '<= 0',
                    value: {
                      start: '',
                      end: '0'
                    }
                  },
                  {
                    label: '0 - 2',
                    value: {
                      start: '0',
                      end: '2'
                    }
                  },
                  {
                    label: '2 - 4',
                    value: {
                      start: '2',
                      end: '4'
                    }
                  },
                  {
                    label: '4 - 6',
                    value: {
                      start: '4',
                      end: '6'
                    }
                  },
                  {
                    label: '6 - 8',
                    value: {
                      start: '6',
                      end: '8'
                    }
                  },
                  {
                    label: '> 8',
                    value: {
                      start: '8',
                      end: ''
                    }
                  }
                ]}
              />
            </div>

            {/* EV/EBITDA */}
            <div css={styles.option()}>
              <OptionItem
                value={evEbitdaRatio}
                setValue={(value) => dispatch(setEvEbitdaRatio(value))}
                suffix={``}
                label={`EV/EBITDA`}
                recommendList={[
                  {
                    label: '<= 0',
                    value: {
                      start: '',
                      end: '0'
                    }
                  },
                  {
                    label: '0 - 2',
                    value: {
                      start: '0',
                      end: '2'
                    }
                  },
                  {
                    label: '2 - 4',
                    value: {
                      start: '2',
                      end: '4'
                    }
                  },
                  {
                    label: '4 - 6',
                    value: {
                      start: '4',
                      end: '6'
                    }
                  },
                  {
                    label: '6 - 8',
                    value: {
                      start: '6',
                      end: '8'
                    }
                  },
                  {
                    label: '> 8',
                    value: {
                      start: '8',
                      end: ''
                    }
                  }
                ]}
              />
            </div>
          </div>
        </div>

        {/* Kết quả trong quá khứ */}
        <div css={styles.optionItem()}>
          <Typography
            variant='caption_two'
            cssCustom={(theme: Theme) => ({
              color: theme.color.gray300,
              minWidth: 'fit-content'
            })}
          >{`Kết quả trong quá khứ`}</Typography>
          <div css={styles.optionWrapper()}>
            {/* Tăng trưởng doanh thu 4 quý gần nhất */}
            <div css={styles.option()}>
              <OptionItem
                value={revenueLtmGrowth}
                setValue={(value) => dispatch(setRevenueLtmGrowth(value))}
                suffix={`%`}
                label={`Tăng trưởng doanh thu 4 quý gần nhất`}
                recommendList={[
                  {
                    label: '< 0%',
                    value: {
                      start: '',
                      end: '0'
                    }
                  },
                  {
                    label: '0% - 10%',
                    value: {
                      start: '0',
                      end: '10'
                    }
                  },
                  {
                    label: '10% - 20%',
                    value: {
                      start: '10',
                      end: '20'
                    }
                  },
                  {
                    label: '20% - 30%',
                    value: {
                      start: '20',
                      end: '30'
                    }
                  },
                  {
                    label: '30% - 40%',
                    value: {
                      start: '30',
                      end: '40'
                    }
                  },
                  {
                    label: '> 40%',
                    value: {
                      start: '40',
                      end: ''
                    }
                  }
                ]}
              />
            </div>

            {/* Tăng trưởng doanh thu bình quân 5 năm gần nhất */}
            <div css={styles.option()}>
              <OptionItem
                value={revenue5yGrowth}
                setValue={(value) => dispatch(setRevenue5yGrowth(value))}
                suffix={`%`}
                label={`Tăng trưởng doanh thu bình quân 5 năm gần nhất`}
                recommendList={[
                  {
                    label: '< 0%',
                    value: {
                      start: '',
                      end: '0'
                    }
                  },
                  {
                    label: '0% - 10%',
                    value: {
                      start: '0',
                      end: '10'
                    }
                  },
                  {
                    label: '10% - 20%',
                    value: {
                      start: '10',
                      end: '20'
                    }
                  },
                  {
                    label: '20% - 30%',
                    value: {
                      start: '20',
                      end: '30'
                    }
                  },
                  {
                    label: '30% - 40%',
                    value: {
                      start: '30',
                      end: '40'
                    }
                  },
                  {
                    label: '> 40%',
                    value: {
                      start: '40',
                      end: ''
                    }
                  }
                ]}
              />
            </div>

            {/* Tăng trưởng lợi nhuận 4 quý gần nhất */}
            <div css={styles.option()}>
              <OptionItem
                value={netIncomeLtmGrowth}
                setValue={(value) => dispatch(setNetIncomeLtmGrowth(value))}
                suffix={`%`}
                label={`Tăng trưởng lợi nhuận 4 quý gần nhất`}
                recommendList={[
                  {
                    label: '< 0%',
                    value: {
                      start: '',
                      end: '0'
                    }
                  },
                  {
                    label: '0% - 10%',
                    value: {
                      start: '0',
                      end: '10'
                    }
                  },
                  {
                    label: '10% - 20%',
                    value: {
                      start: '10',
                      end: '20'
                    }
                  },
                  {
                    label: '20% - 30%',
                    value: {
                      start: '20',
                      end: '30'
                    }
                  },
                  {
                    label: '30% - 40%',
                    value: {
                      start: '30',
                      end: '40'
                    }
                  },
                  {
                    label: '> 40%',
                    value: {
                      start: '40',
                      end: ''
                    }
                  }
                ]}
              />
            </div>

            {/* Tăng trưởng lợi nhuận bình quân 5 năm gần nhất */}
            <div css={styles.option()}>
              <OptionItem
                value={netIncome5yGrowth}
                setValue={(value) => dispatch(setNetIncome5yGrowth(value))}
                suffix={`%`}
                label={`Tăng trưởng lợi nhuận bình quân 5 năm gần nhất`}
                recommendList={[
                  {
                    label: '< 0%',
                    value: {
                      start: '',
                      end: '0'
                    }
                  },
                  {
                    label: '0% - 10%',
                    value: {
                      start: '0',
                      end: '10'
                    }
                  },
                  {
                    label: '10% - 20%',
                    value: {
                      start: '10',
                      end: '20'
                    }
                  },
                  {
                    label: '20% - 30%',
                    value: {
                      start: '20',
                      end: '30'
                    }
                  },
                  {
                    label: '30% - 40%',
                    value: {
                      start: '30',
                      end: '40'
                    }
                  },
                  {
                    label: '> 40%',
                    value: {
                      start: '40',
                      end: ''
                    }
                  }
                ]}
              />
            </div>

            {/* ROE */}
            <div css={styles.option()}>
              <OptionItem
                value={roe}
                setValue={(value) => dispatch(setRoe(value))}
                suffix={`%`}
                label={`ROE`}
                recommendList={[
                  {
                    label: '< 0%',
                    value: {
                      start: '',
                      end: '0'
                    }
                  },
                  {
                    label: '0% - 10%',
                    value: {
                      start: '0',
                      end: '10'
                    }
                  },
                  {
                    label: '10% - 20%',
                    value: {
                      start: '10',
                      end: '20'
                    }
                  },
                  {
                    label: '20% - 30%',
                    value: {
                      start: '20',
                      end: '30'
                    }
                  },
                  {
                    label: '30% - 40%',
                    value: {
                      start: '30',
                      end: '40'
                    }
                  },
                  {
                    label: '> 40%',
                    value: {
                      start: '40',
                      end: ''
                    }
                  }
                ]}
              />
            </div>

            {/* ROA */}
            <div css={styles.option()}>
              <OptionItem
                value={roa}
                setValue={(value) => dispatch(setRoa(value))}
                suffix={`%`}
                label={`ROA`}
                recommendList={[
                  {
                    label: '< 0%',
                    value: {
                      start: '',
                      end: '0'
                    }
                  },
                  {
                    label: '0% - 10%',
                    value: {
                      start: '0',
                      end: '10'
                    }
                  },
                  {
                    label: '10% - 20%',
                    value: {
                      start: '10',
                      end: '20'
                    }
                  },
                  {
                    label: '20% - 30%',
                    value: {
                      start: '20',
                      end: '30'
                    }
                  },
                  {
                    label: '30% - 40%',
                    value: {
                      start: '30',
                      end: '40'
                    }
                  },
                  {
                    label: '> 40%',
                    value: {
                      start: '40',
                      end: ''
                    }
                  }
                ]}
              />
            </div>

            {/* EPS */}
            <div css={styles.option()}>
              <OptionItem
                value={eps}
                setValue={(value) => dispatch(setEps(value))}
                suffix={``}
                label={`EPS`}
                recommendList={[
                  {
                    label: '< 500',
                    value: {
                      start: '',
                      end: '500'
                    }
                  },
                  {
                    label: '500 - 2K',
                    value: {
                      start: '500',
                      end: '2000'
                    }
                  },
                  {
                    label: '2K - 3K',
                    value: {
                      start: '2000',
                      end: '3000'
                    }
                  },
                  {
                    label: '3K - 4K',
                    value: {
                      start: '3000',
                      end: '4000'
                    }
                  },
                  {
                    label: '4K - 5K',
                    value: {
                      start: '4000',
                      end: '5000'
                    }
                  },
                  {
                    label: '> 5K',
                    value: {
                      start: '5000',
                      end: ''
                    }
                  }
                ]}
              />
            </div>

            {/* Biên lợi nhuận gộp */}
            <div css={styles.option()}>
              <OptionItem
                value={grossMarginLtm}
                setValue={(value) => dispatch(setGrossMarginLtm(value))}
                suffix={`%`}
                label={`Biên lợi nhuận gộp`}
                recommendList={[
                  {
                    label: '< 0%',
                    value: {
                      start: '',
                      end: '0'
                    }
                  },
                  {
                    label: '0% - 10%',
                    value: {
                      start: '0',
                      end: '10'
                    }
                  },
                  {
                    label: '10% - 20%',
                    value: {
                      start: '10',
                      end: '20'
                    }
                  },
                  {
                    label: '20% - 30%',
                    value: {
                      start: '20',
                      end: '30'
                    }
                  },
                  {
                    label: '30% - 40%',
                    value: {
                      start: '30',
                      end: '40'
                    }
                  },
                  {
                    label: '> 40%',
                    value: {
                      start: '40',
                      end: ''
                    }
                  }
                ]}
              />
            </div>

            {/* Biên lợi nhuận ròng */}
            <div css={styles.option()}>
              <OptionItem
                value={profitMarginLtm}
                setValue={(value) => dispatch(setProfitMarginLtm(value))}
                suffix={`%`}
                label={`Biên lợi nhuận ròng`}
                recommendList={[
                  {
                    label: '< 0%',
                    value: {
                      start: '',
                      end: '0'
                    }
                  },
                  {
                    label: '0% - 10%',
                    value: {
                      start: '0',
                      end: '10'
                    }
                  },
                  {
                    label: '10% - 20%',
                    value: {
                      start: '10',
                      end: '20'
                    }
                  },
                  {
                    label: '20% - 30%',
                    value: {
                      start: '20',
                      end: '30'
                    }
                  },
                  {
                    label: '30% - 40%',
                    value: {
                      start: '30',
                      end: '40'
                    }
                  },
                  {
                    label: '> 40%',
                    value: {
                      start: '40',
                      end: ''
                    }
                  }
                ]}
              />
            </div>
          </div>
        </div>

        {/* Tăng trưởng tương lai */}
        <div css={styles.optionItem()}>
          <Typography
            variant='caption_two'
            cssCustom={(theme: Theme) => ({
              color: theme.color.gray300,
              minWidth: 'fit-content'
            })}
          >{`Tăng trưởng tương lai`}</Typography>
          <div css={styles.optionWrapper()}>
            {/* Tăng trưởng doanh thu trung bình 3 năm dự phóng */}
            <div css={styles.option()}>
              <OptionItem
                value={revenueEstGrowth}
                setValue={(value) => dispatch(setRevenueEstGrowth(value))}
                suffix={`%`}
                label={`Tăng trưởng doanh thu trung bình 3 năm dự phóng`}
                recommendList={[
                  {
                    label: '< 0%',
                    value: {
                      start: '',
                      end: '0'
                    }
                  },
                  {
                    label: '0% - 10%',
                    value: {
                      start: '0',
                      end: '10'
                    }
                  },
                  {
                    label: '10% - 20%',
                    value: {
                      start: '10',
                      end: '20'
                    }
                  },
                  {
                    label: '20% - 30%',
                    value: {
                      start: '20',
                      end: '30'
                    }
                  },
                  {
                    label: '30% - 40%',
                    value: {
                      start: '30',
                      end: '40'
                    }
                  },
                  {
                    label: '> 40%',
                    value: {
                      start: '40',
                      end: ''
                    }
                  }
                ]}
              />
            </div>

            {/* Tăng trưởng lợi nhuận trung bình 3 năm dự phóng */}
            <div css={styles.option()}>
              <OptionItem
                value={netIncomeEstGrowth}
                setValue={(value) => dispatch(setNetIncomeEstGrowth(value))}
                suffix={`%`}
                label={`Tăng trưởng lợi nhuận trung bình 3 năm dự phóng`}
                recommendList={[
                  {
                    label: '< 0%',
                    value: {
                      start: '',
                      end: '0'
                    }
                  },
                  {
                    label: '0% - 10%',
                    value: {
                      start: '0',
                      end: '10'
                    }
                  },
                  {
                    label: '10% - 20%',
                    value: {
                      start: '10',
                      end: '20'
                    }
                  },
                  {
                    label: '20% - 30%',
                    value: {
                      start: '20',
                      end: '30'
                    }
                  },
                  {
                    label: '30% - 40%',
                    value: {
                      start: '30',
                      end: '40'
                    }
                  },
                  {
                    label: '> 40%',
                    value: {
                      start: '40',
                      end: ''
                    }
                  }
                ]}
              />
            </div>
          </div>
        </div>

        {/* Sức khỏe tài chính */}
        <div css={styles.optionItem()}>
          <Typography
            variant='caption_two'
            cssCustom={(theme: Theme) => ({
              color: theme.color.gray300,
              minWidth: 'fit-content'
            })}
          >{`Sức khỏe tài chính`}</Typography>
          <div css={styles.optionWrapper()}>
            {/* Nợ vay trên vốn chủ sở hữu */}
            <div css={styles.option()}>
              <OptionItem
                value={debtToEquity}
                setValue={(value) => dispatch(setDebtToEquity(value))}
                suffix={`%`}
                label={`Nợ vay trên vốn chủ sở hữu`}
                recommendList={[
                  {
                    label: 'Không vay nợ',
                    value: {
                      start: '0',
                      end: '0'
                    }
                  },
                  {
                    label: '0% - 50%',
                    value: {
                      start: '0',
                      end: '50'
                    }
                  },
                  {
                    label: '50% - 100%',
                    value: {
                      start: '50',
                      end: '100'
                    }
                  },
                  {
                    label: '100% - 150%',
                    value: {
                      start: '100',
                      end: '150'
                    }
                  },
                  {
                    label: '150% - 200%',
                    value: {
                      start: '150',
                      end: '200'
                    }
                  },
                  {
                    label: '> 200%',
                    value: {
                      start: '200',
                      end: ''
                    }
                  }
                ]}
              />
            </div>
          </div>
        </div>

        {/* Cổ tức */}
        <div css={styles.optionItem()}>
          <Typography
            variant='caption_two'
            cssCustom={(theme: Theme) => ({
              color: theme.color.gray300,
              minWidth: 'fit-content'
            })}
          >{`Cổ tức`}</Typography>
          <div css={styles.optionWrapper()}>
            {/* Tỷ suất cổ tức hiện tại của cổ phiếu */}
            <div css={styles.option()}>
              <OptionItem
                value={dividendYieldCurrent}
                setValue={(value) => dispatch(setDividendYieldCurrent(value))}
                suffix={`%`}
                label={`Tỷ suất cổ tức hiện tại của cổ phiếu`}
                recommendList={[
                  {
                    label: '0% - 5%',
                    value: {
                      start: '0',
                      end: '5'
                    }
                  },
                  {
                    label: '5% - 10%',
                    value: {
                      start: '5',
                      end: '10'
                    }
                  },
                  {
                    label: '10% - 15%',
                    value: {
                      start: '10',
                      end: '15'
                    }
                  },
                  {
                    label: '> 15%',
                    value: {
                      start: '15',
                      end: '0'
                    }
                  }
                ]}
              />
            </div>
          </div>
        </div>

        {/* Ban lãnh đạo */}
        <div css={styles.optionItem()}>
          <Typography
            variant='caption_two'
            cssCustom={(theme: Theme) => ({
              color: theme.color.gray300,
              minWidth: 'fit-content'
            })}
          >{`Ban lãnh đạo`}</Typography>
          <div css={styles.optionWrapper()}>
            {/* Ban lãnh đạo mua ròng trong 12 tháng gần nhất */}
            <div css={styles.option()}>
              <BooleanOption
                label={`Ban lãnh đạo mua ròng trong 12 tháng gần nhất`}
                value={insiderBuying}
                setValue={(value: boolean) => dispatch(setInsiderBuying(value))}
              />
            </div>

            {/* Quỹ đầu tư mua ròng trong 3 tháng gần nhất */}
            <div css={styles.option()}>
              <BooleanOption
                label={`Quỹ đầu tư mua ròng trong 3 tháng gần nhất`}
                value={fundVolumeBuy3m}
                setValue={(value: boolean) =>
                  dispatch(setFundVolumeBuy3m(value))
                }
              />
            </div>
          </div>
        </div>

        {/* Xu hướng giá */}
        <div css={styles.optionItem()}>
          <Typography
            variant='caption_two'
            cssCustom={(theme: Theme) => ({
              color: theme.color.gray300,
              minWidth: 'fit-content'
            })}
          >{`Xu hướng giá`}</Typography>
          <div css={styles.optionWrapper()}>
            {/* Xu hướng giá dài hạn */}
            <div css={styles.option()}>
              <OptionItem
                value={pctChgLongTerm}
                setValue={(value) => dispatch(setPctChgLongTerm(value))}
                suffix={`%`}
                label={`Xu hướng giá dài hạn`}
                recommendList={[
                  {
                    label: '< -70%',
                    value: {
                      start: '',
                      end: '-70'
                    }
                  },
                  {
                    label: '(-70%) - (-40%)',
                    value: {
                      start: '-70',
                      end: '-40'
                    }
                  },
                  {
                    label: '-40% - 0%',
                    value: {
                      start: '-40',
                      end: '0'
                    }
                  },
                  {
                    label: '0% - 40%',
                    value: {
                      start: '0',
                      end: '40'
                    }
                  },
                  {
                    label: '40% - 70%',
                    value: {
                      start: '40',
                      end: '70'
                    }
                  },
                  {
                    label: '> 70%',
                    value: {
                      start: '70',
                      end: ''
                    }
                  }
                ]}
              />
            </div>

            {/* Xu hướng giá trung hạn */}
            <div css={styles.option()}>
              <OptionItem
                value={pctChgMidTerm}
                setValue={(value) => dispatch(setPctChgMidTerm(value))}
                suffix={`%`}
                label={`Xu hướng giá trung hạn`}
                recommendList={[
                  {
                    label: '< -50%',
                    value: {
                      start: '',
                      end: '-50'
                    }
                  },
                  {
                    label: '(-50%) - (-25%)',
                    value: {
                      start: '-50',
                      end: '-25'
                    }
                  },
                  {
                    label: '-25% - 0%',
                    value: {
                      start: '-25',
                      end: '0'
                    }
                  },
                  {
                    label: '0% - 25%',
                    value: {
                      start: '0',
                      end: '25'
                    }
                  },
                  {
                    label: '25% - 50%',
                    value: {
                      start: '25',
                      end: '50'
                    }
                  },
                  {
                    label: '> 50%',
                    value: {
                      start: '50',
                      end: ''
                    }
                  }
                ]}
              />
            </div>

            {/* Xu hướng giá ngắn hạn */}
            <div css={styles.option()}>
              <OptionItem
                value={pctChgShortTerm}
                setValue={(value) => dispatch(setPctChgShortTerm(value))}
                suffix={`%`}
                label={`Xu hướng giá ngắn hạn`}
                recommendList={[
                  {
                    label: '< -50%',
                    value: {
                      start: '',
                      end: '-50'
                    }
                  },
                  {
                    label: '(-50%) - (-25%)',
                    value: {
                      start: '-50',
                      end: '-25'
                    }
                  },
                  {
                    label: '-25% - 0%',
                    value: {
                      start: '-25',
                      end: '0'
                    }
                  },
                  {
                    label: '0% - 25%',
                    value: {
                      start: '0',
                      end: '25'
                    }
                  },
                  {
                    label: '25% - 50%',
                    value: {
                      start: '25',
                      end: '50'
                    }
                  },
                  {
                    label: '> 50%',
                    value: {
                      start: '50',
                      end: ''
                    }
                  }
                ]}
              />
            </div>
          </div>
        </div>

        {/* Xu hướng dòng tiền */}
        <div css={styles.optionItem()}>
          <Typography
            variant='caption_two'
            cssCustom={(theme: Theme) => ({
              color: theme.color.dc014,
              minWidth: 'fit-content'
            })}
          >{`Xu hướng dòng tiền`}</Typography>
          <div css={styles.optionWrapper()}>
            {/* Xu hướng dòng tiền ngắn hạn */}
            <div css={styles.option()}>
              <SelectOption
                value={rscD}
                setValue={(value) => dispatch(setRscD(value))}
                label={`Xu hướng dòng tiền ngắn hạn`}
                recommendList={[
                  {
                    label: 'Tích lũy',
                    value: 'TICH_LUY'
                  },
                  {
                    label: 'Tăng giá',
                    value: 'TANG_GIA'
                  },
                  {
                    label: 'Suy yếu',
                    value: 'SUY_YEU'
                  },
                  {
                    label: 'Giảm giá',
                    value: 'GIAM_GIA'
                  }
                ]}
              />
            </div>

            {/* Xu hướng dòng tiền trung hạn */}
            <div css={styles.option()}>
              <SelectOption
                value={rscW}
                setValue={(value) => dispatch(setRscW(value))}
                label={`Xu hướng dòng tiền trung hạn`}
                recommendList={[
                  {
                    label: 'Tích lũy',
                    value: 'TICH_LUY'
                  },
                  {
                    label: 'Tăng giá',
                    value: 'TANG_GIA'
                  },
                  {
                    label: 'Suy yếu',
                    value: 'SUY_YEU'
                  },
                  {
                    label: 'Giảm giá',
                    value: 'GIAM_GIA'
                  }
                ]}
              />
            </div>

            {/* Xu hướng dòng tiền dài hạn */}
            <div css={styles.option()}>
              <SelectOption
                value={rscM}
                setValue={(value) => dispatch(setRscM(value))}
                label={`Xu hướng dòng tiền dài hạn`}
                recommendList={[
                  {
                    label: 'Tích lũy',
                    value: 'TICH_LUY'
                  },
                  {
                    label: 'Tăng giá',
                    value: 'TANG_GIA'
                  },
                  {
                    label: 'Suy yếu',
                    value: 'SUY_YEU'
                  },
                  {
                    label: 'Giảm giá',
                    value: 'GIAM_GIA'
                  }
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Criteria
