// import CommunityContainer from '@/layouts/CommunityContainer'
import React from 'react'
import ScreenerLayout from '../layout/ScreenerLayout'
import TableScreener from './TableScreener'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { TableScreenerFieldId } from './TableScreener/TableScreener'
import screenerApi from '../screener-api'
import { setDataFilter, setPage } from '../screener-slice'
import { Theme } from '@/themes/theme'
import NoDataScreener from '../components/NoDataScreener'
import NativeMethod from '@/components/NativeMethod'
import Button from '@/components/Button'
import Typography from '@/components/Typography'

const Screener: React.FC = (): JSX.Element => {
  // store
  const dispatch = useAppDispatch()
  const totalFilter = useAppSelector((state) => state.screener.totalFilter)
  const dataFilter = useAppSelector((state) => state.screener.dataFilter)
  const sort = useAppSelector((state) => state.screener.sort)
  const currentScreener = useAppSelector(
    (state) => state.screener.currentScreener
  )
  const tab = useAppSelector((state) => state.screener.tab)
  const page = useAppSelector((state) => state.screener.page)
  const size = useAppSelector((state) => state.screener.size)
  const [isHasMore, setIsHasMore] = React.useState(false)

  // useEffect
  React.useEffect(() => {
    if (!dataFilter) return

    setIsHasMore(dataFilter?.length < totalFilter)
  }, [dataFilter?.length, totalFilter])

  // useMemo
  const columnsIndex = React.useMemo(() => {
    if (!currentScreener) return []

    const columns: TableScreenerFieldId[] = [TableScreenerFieldId.ticker]

    if (!currentScreener?.rules) return columns

    const rules = JSON.parse(currentScreener?.rules)

    rules?.forEach((item) => {
      // Sàn giao dịch
      if (item?.id === 'stockExchange') {
        columns.push(TableScreenerFieldId.stockExchange)
      }

      // Khối lượng
      if (item?.id === 'volume') {
        columns.push(TableScreenerFieldId.volume)
      }

      // Khối lượng TB 10 phiên
      if (item?.id === 'volume10dAvg') {
        columns.push(TableScreenerFieldId.volume10dAvg)
      }

      // Vốn hóa
      if (item?.id === 'marketCapVnd') {
        columns.push(TableScreenerFieldId.marketCapVnd)
      }

      // Biên an toàn
      if (item?.id === 'marginOfSafety') {
        columns.push(TableScreenerFieldId.marginOfSafety)
      }

      // P/E
      if (item?.id === 'peRatio') {
        columns.push(TableScreenerFieldId.peRatio)
      }

      // P/B
      if (item?.id === 'pbRatio') {
        columns.push(TableScreenerFieldId.pbRatio)
      }

      // EV/EBITDA
      if (item?.id === 'evEbitdaRatio') {
        columns.push(TableScreenerFieldId.evEbitdaRatio)
      }

      // Tiền mặt ròng/Vốn hóa
      if (item?.id === 'netCashToMarketCap') {
        columns.push(TableScreenerFieldId.netCashToMarketCap)
      }

      // Tăng trưởng doanh thu so với quý trước
      if (item?.id === 'revenueGrowthPreQ') {
        columns.push(TableScreenerFieldId.revenueGrowthPreQ)
      }

      // Tăng trưởng doanh thu so với quý trước
      if (item?.id === 'revenueGrowthQoq') {
        columns.push(TableScreenerFieldId.revenueGrowthQoq)
      }

      // Tăng trưởng lợi nhuận sau thuế so với quý trước
      if (item?.id === 'netIncomeGrowthPreQ') {
        columns.push(TableScreenerFieldId.netIncomeGrowthPreQ)
      }

      // Tăng trưởng lợi nhuận sau thuế so với quý trước
      if (item?.id === 'netIncomeGrowthQoq') {
        columns.push(TableScreenerFieldId.netIncomeGrowthQoq)
      }

      // Tăng trưởng EPS ltm so với quý trước
      if (item?.id === 'epsLtmGrowthPreQ') {
        columns.push(TableScreenerFieldId.epsLtmGrowthPreQ)
      }

      // Tăng trưởng EPS ltm so với quý trước
      if (item?.id === 'epsLtmGrowthQoq') {
        columns.push(TableScreenerFieldId.epsLtmGrowthQoq)
      }

      // Tăng trưởng doanh thu 12 tháng gần nhất
      if (item?.id === 'revenueLtmGrowth') {
        columns.push(TableScreenerFieldId.revenueLtmGrowth)
      }

      // Tăng trưởng lợi nhuận 12 tháng gần nhất
      if (item?.id === 'netIncomeLtmGrowth') {
        columns.push(TableScreenerFieldId.netIncomeLtmGrowth)
      }

      // Tăng trưởng lợi nhuận 12 tháng gần nhất
      if (item?.id === 'epsGrowthPreQ') {
        columns.push(TableScreenerFieldId.epsGrowthPreQ)
      }

      // Tăng trưởng lợi nhuận 12 tháng gần nhất
      if (item?.id === 'epsGrowthQoq') {
        columns.push(TableScreenerFieldId.epsGrowthQoq)
      }

      // Tăng trưởng doanh thu bình quân 5 năm
      if (item?.id === 'revenue5yGrowth') {
        columns.push(TableScreenerFieldId.revenue5yGrowth)
      }

      // Tăng trưởng lợi nhuận bình quân 5 năm
      if (item?.id === 'netIncome5yGrowth') {
        columns.push(TableScreenerFieldId.netIncome5yGrowth)
      }

      // Tăng trưởng doanh thu bình quân 3 năm dự phóng
      if (item?.id === 'revenueEstGrowth') {
        columns.push(TableScreenerFieldId.revenueEstGrowth)
      }

      // Tăng trưởng lợi nhuận bình quân 3 năm dự phóng
      if (item?.id === 'netIncomeEstGrowth') {
        columns.push(TableScreenerFieldId.netIncomeEstGrowth)
      }

      // Biên lợi nhuận gộp
      if (item?.id === 'grossMarginLtm') {
        columns.push(TableScreenerFieldId.grossMarginLtm)
      }

      // Biên lợi nhuận sau thuế
      if (item?.id === 'profitMarginLtm') {
        columns.push(TableScreenerFieldId.profitMarginLtm)
      }

      // ROE
      if (item?.id === 'returnOnEquity') {
        columns.push(TableScreenerFieldId.returnOnEquity)
      }

      // ROA
      if (item?.id === 'returnOnAssets') {
        columns.push(TableScreenerFieldId.returnOnAssets)
      }

      // Nợ vay trên vốn chủ sở hữu
      if (item?.id === 'debtToEquity') {
        columns.push(TableScreenerFieldId.debtToEquity)
      }

      // Tỷ suất cổ tức hiện tại của cổ phiếu
      if (item?.id === 'dividendYieldCurrent') {
        columns.push(TableScreenerFieldId.dividendYieldCurrent)
      }

      // Tỷ suất cổ tức hiện tại của cổ phiếu
      if (item?.id === 'countCashDiv') {
        columns.push(TableScreenerFieldId.countCashDiv)
      }

      // Chi phí xây dựng dở dang/Tổng tài sản (quý gần nhất)
      if (item?.id === 'constructionInProgressPct') {
        columns.push(TableScreenerFieldId.constructionInProgressPct)
      }

      // Tăng trưởng chi phí xây dựng dở dang so với quý trước
      if (item?.id === 'constructionInProgressGrowthPreQ') {
        columns.push(TableScreenerFieldId.constructionInProgressGrowthPreQ)
      }

      // Hàng tồn kho/Tổng tài sản (quý gần nhất)
      if (item?.id === 'netInventoriesPct') {
        columns.push(TableScreenerFieldId.netInventoriesPct)
      }

      // Tăng trưởng hàng tồn kho so với quý trước
      if (item?.id === 'netInventoriesGrowthPreQ') {
        columns.push(TableScreenerFieldId.netInventoriesGrowthPreQ)
      }

      // Người mua trả tiền trước/Tổng tài sản (quý gần nhất)
      if (item?.id === 'advancesCustomerPct') {
        columns.push(TableScreenerFieldId.advancesCustomerPct)
      }

      // Tăng trưởng người mua trả tiền trước so với quý trước
      if (item?.id === 'advancesCustomerGrowthPreQ') {
        columns.push(TableScreenerFieldId.advancesCustomerGrowthPreQ)
      }

      // Tài sản cố định/Tổng tài sản (quý gần nhất)
      if (item?.id === 'fixedAssetPct') {
        columns.push(TableScreenerFieldId.fixedAssetPct)
      }

      // Tăng trưởng tài sản cố định so với quý trước
      if (item?.id === 'fixedAssetGrowthPreQ') {
        columns.push(TableScreenerFieldId.fixedAssetGrowthPreQ)
      }

      // Khấu hao còn lại/Nguyên giá tài sản cố định
      if (item?.id === 'fixedAssetGrossRatio') {
        columns.push(TableScreenerFieldId.fixedAssetGrossRatio)
      }

      // Ban lãnh đạo | NĐT nước ngoài
      if (item?.id === 'foreignBuyingValue7d') {
        columns.push(TableScreenerFieldId.foreignBuyingValue7d)
      }

      // NĐT nước ngoài mua ròng 30 ngày gần nhất
      if (item?.id === 'foreignBuyingValue30d') {
        columns.push(TableScreenerFieldId.foreignBuyingValue30d)
      }

      // Ban lãnh đạo mua ròng 3 tháng gần nhất
      if (item?.id === 'insiderBuying3m') {
        columns.push(TableScreenerFieldId.insiderBuying3m)
      }

      // NĐT nước ngoài mua ròng 3 tháng gần nhất
      if (item?.id === 'foreignBuyingValue90d') {
        columns.push(TableScreenerFieldId.foreignBuyingValue90d)
      }

      // Quỹ đầu tư mua ròng 3 tháng gần nhất
      if (item?.id === 'fundVolumeBuy3m') {
        columns.push(TableScreenerFieldId.fundVolumeBuy3m)
      }

      // Ban lãnh đạo mua ròng 12 tháng gần nhất
      if (item?.id === 'insiderBuying') {
        columns.push(TableScreenerFieldId.insiderBuying)
      }

      // Tín hiệu kỹ thuật
      if (item?.id === 'taSignal1d') {
        columns.push(TableScreenerFieldId.taSignal1d)
      }

      // Rủi ro
      if (item?.id === 'overallRiskLevel') {
        columns.push(TableScreenerFieldId.overallRiskLevel)
      }

      // Xu hướng giá dài hạn
      if (item?.id === 'pctChgLongTerm') {
        columns.push(TableScreenerFieldId.pctChgLongTerm)
      }

      // Xu hướng giá trung hạn
      if (item?.id === 'pctChgMidTerm') {
        columns.push(TableScreenerFieldId.pctChgMidTerm)
      }

      // Xu hướng giá ngắn hạn
      if (item?.id === 'pctChgShortTerm') {
        columns.push(TableScreenerFieldId.pctChgShortTerm)
      }

      // // Xu hướng dòng tiền ngắn hạn
      // if (item?.id === 'rscD') {
      //   columns.push(TableScreenerFieldId.rscD);
      // }

      // // Xu hướng dòng tiền trung hạn
      // if (item?.id === 'rscW') {
      //   columns.push(TableScreenerFieldId.rscW);
      // }

      // // Xu hướng dòng tiền dài hạn
      // if (item?.id === 'rscM') {
      //   columns.push(TableScreenerFieldId.rscM);
      // }
    })

    return columns
  }, [currentScreener])

  const isEmpty = React.useMemo(() => {
    if (!currentScreener) return false

    return (
      currentScreener?.rules === undefined || currentScreener?.rules === '[]'
    )
  }, [currentScreener])

  // functions
  const handleLoadMore = () => {
    ;(async () => {
      try {
        const res = await screenerApi.filterScreener({
          page: page + 1,
          size: size,
          rules: currentScreener?.rules || JSON.stringify([]),
          sort: sort
        })

        dispatch(setPage(page + 1))
        dispatch(setDataFilter(dataFilter?.concat(res.data)))
      } catch (error: any) {
        console.log(error)

        NativeMethod.toast(error.response.data.message)
      }
    })()
  }

  const getColumnsIndex = (tab) => {
    switch (tab) {
      case 'OVERVIEW':
        return [
          TableScreenerFieldId.ticker,
          TableScreenerFieldId.stockExchange,
          TableScreenerFieldId.marketCapVnd,
          TableScreenerFieldId.priceClose,
          TableScreenerFieldId.peRatio,
          TableScreenerFieldId.pricePctChgYtd
        ]
      case 'FILTER_CRITERIA':
        return columnsIndex
      case 'BASIC':
        return [
          TableScreenerFieldId.ticker,
          TableScreenerFieldId.stockExchange,
          TableScreenerFieldId.marketCapVnd,
          TableScreenerFieldId.peRatio,
          TableScreenerFieldId.pbRatio,
          TableScreenerFieldId.dividendYieldCurrent,
          TableScreenerFieldId.netIncome5yGrowth,
          TableScreenerFieldId.netIncomeEstGrowth
        ]
      case 'PROFITABILITY_EFFICIENCY':
        return [
          TableScreenerFieldId.ticker,
          TableScreenerFieldId.stockExchange,
          TableScreenerFieldId.pricePctChg7d,
          TableScreenerFieldId.pricePctChg30d,
          TableScreenerFieldId.pricePctChgYtd,
          TableScreenerFieldId.pricePctChg3y,
          TableScreenerFieldId.pricePctChg5y
        ]
      default:
        return [
          TableScreenerFieldId.ticker,
          TableScreenerFieldId.stockExchange,
          TableScreenerFieldId.marketCapVnd,
          TableScreenerFieldId.priceClose,
          TableScreenerFieldId.peRatio,
          TableScreenerFieldId.pricePctChgYtd
        ]
    }
  }
  console.log(isEmpty)

  return (
    <>
      <ScreenerLayout>
        {isEmpty && (
          <div>
            <TableScreener
              data={dataFilter}
              columnsIndex={[
                TableScreenerFieldId.ticker,
                TableScreenerFieldId.stockExchange,
                TableScreenerFieldId.marketCapVnd,
                TableScreenerFieldId.priceClose,
                TableScreenerFieldId.peRatio,
                TableScreenerFieldId.pricePctChgYtd
              ]}
            />

            <NoDataScreener />
          </div>
        )}

        {!isEmpty && dataFilter && (
          <TableScreener
            data={dataFilter}
            columnsIndex={getColumnsIndex(tab)}
          />
        )}

        {!isEmpty && dataFilter?.length > 0 && isHasMore && (
          <div css={{ marginTop: 20, marginBottom: 24 }}>
            <Button
              cssCustom={(theme: Theme) => ({
                backgroundColor: theme.color.dc063,
                '&:hover': {
                  backgroundColor: theme.color.dc063
                }
              })}
              isFullWidth={true}
              onClick={handleLoadMore}
            >
              <Typography
                variant='sub_heading_two'
                cssCustom={(theme: Theme) => ({
                  color: theme.color.dc015
                })}
              >{`Xem thêm`}</Typography>
            </Button>
          </div>
        )}
      </ScreenerLayout>
    </>
  )
}

export default Screener
