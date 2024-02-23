import Percentage from '@/components/Percentage'
import Typography from '@/components/Typography'
import { UrlInternal } from '@/constants/url-internal'
import { useResponsive } from '@/hooks'
import utilStyles from '@/styles/util-styles'
import { colors } from '@/themes/colors'
import { Theme } from '@/themes/theme'
import { formatPriceShort, formatPriceVND } from '@/utils/format-price'
import { roundNumber } from '@/utils/round-number'
import Table from 'rc-table'
import React from 'react'
import SortTableAjax from './SortTableAjax'
import { useAppSelector } from '@/redux/hooks'
import { Row } from '@/components/GridLayout'
import LockTooltip from '@/components/LockTooltip'
import { Link } from 'react-router-dom'

export enum TableScreenerFieldId {
  stt = 'stt',
  radar = 'radar',
  ticker = 'ticker',
  stockExchange = 'stockExchange',
  marketCapVnd = 'marketCapVnd',
  priceClose = 'priceClose',
  peRatio = 'peRatio',
  pricePctChgYtd = 'pricePctChgYtd',
  volume = 'volume',
  volume10dAvg = 'volume10dAvg',
  marginOfSafety = 'marginOfSafety',
  pbRatio = 'pbRatio',
  dividendYieldCurrent = 'dividendYieldCurrent',
  countCashDiv = 'countCashDiv',
  netIncome5yGrowth = 'netIncome5yGrowth',
  netIncomeEstGrowth = 'netIncomeEstGrowth',
  pricePctChg7d = 'pricePctChg7d',
  pricePctChg30d = 'pricePctChg30d',
  pricePctChg3y = 'pricePctChg3y',
  pricePctChg5y = 'pricePctChg5y',
  evEbitdaRatio = 'evEbitdaRatio',
  netCashToMarketCap = 'netCashToMarketCap',
  pegRatioEstNtm = 'pegRatioEstNtm',
  revenueLtmGrowth = 'revenueLtmGrowth',
  revenue5yGrowth = 'revenue5yGrowth',
  netIncomeLtmGrowth = 'netIncomeLtmGrowth',
  epsGrowthPreQ = 'epsGrowthPreQ',
  epsGrowthQoq = 'epsGrowthQoq',
  returnOnEquity = 'returnOnEquity',
  returnOnAssets = 'returnOnAssets',
  eps = 'eps',
  grossMarginLtm = 'grossMarginLtm',
  profitMarginLtm = 'profitMarginLtm',
  revenueEstGrowth = 'revenueEstGrowth',
  debtToEquity = 'debtToEquity',
  insiderBuying = 'insiderBuying',
  fundVolumeBuy3m = 'fundVolumeBuy3m',
  pctChgLongTerm = 'pctChgLongTerm',
  pctChgMidTerm = 'pctChgMidTerm',
  pctChgShortTerm = 'pctChgShortTerm',
  rscM = 'rscM',
  rscW = 'rscW',
  rscD = 'rscD',

  revenueGrowthPreQ = 'revenueGrowthPreQ',
  revenueGrowthQoq = 'revenueGrowthQoq',
  netIncomeGrowthPreQ = 'netIncomeGrowthPreQ',
  netIncomeGrowthQoq = 'netIncomeGrowthQoq',
  epsLtmGrowthPreQ = 'epsLtmGrowthPreQ',
  epsLtmGrowthQoq = 'epsLtmGrowthQoq',
  constructionInProgressPct = 'constructionInProgressPct',
  constructionInProgressGrowthPreQ = 'constructionInProgressGrowthPreQ',
  netInventoriesPct = 'netInventoriesPct',
  netInventoriesGrowthPreQ = 'netInventoriesGrowthPreQ',
  advancesCustomerPct = 'advancesCustomerPct',
  advancesCustomerGrowthPreQ = 'advancesCustomerGrowthPreQ',
  fixedAssetPct = 'fixedAssetPct',
  fixedAssetGrowthPreQ = 'fixedAssetGrowthPreQ',
  fixedAssetGrossRatio = 'fixedAssetGrossRatio',

  foreignBuyingValue7d = 'foreignBuyingValue7d',
  foreignBuyingValue30d = 'foreignBuyingValue30d',
  insiderBuying3m = 'insiderBuying3m',
  foreignBuyingValue90d = 'foreignBuyingValue90d',
  taSignal1d = 'taSignal1d',
  overallRiskLevel = 'overallRiskLevel'
}

interface Props {
  data?: any
  columnsIndex?: any
}

const TableScreener: React.FC<Props> = (props) => {
  const { data, columnsIndex } = props

  const { isMobile } = useResponsive()

  const userInfo = useAppSelector((state) => state.profile.userInfo)

  const [columnData, setColumnData] = React.useState<any>([])
  const [rowData, setRowData] = React.useState<any>(null)

  React.useEffect(() => {
    const allColumns = createColumns()

    if (!columnsIndex) {
      setColumnData(allColumns)
      return
    }

    const columns = allColumns.filter((item) =>
      columnsIndex.includes(item.dataIndex)
    )
    setColumnData(columns)
  }, [columnsIndex])

  React.useEffect(() => {
    setRowData(
      data?.map((item: any) => ({
        ...item,
        companyName: item?.companyNameVi
      })) || []
    )
  }, [data])

  const getTaSignal1dText = (taSignal1d) => {
    switch (taSignal1d) {
      case 'bullish':
        return 'Tăng giá'
      case 'bearish':
        return 'Giảm giá'
      default:
        break
    }
  }

  const getTaSignal1dColor = (taSignal1d) => {
    switch (taSignal1d) {
      case 'bullish':
        return colors.green500
      case 'bearish':
        return colors.red500
      default:
        break
    }
  }

  const getOverallRiskLevelText = (overallRiskLevel: string) => {
    switch (overallRiskLevel) {
      case 'low':
        return 'Thấp'
      case 'medium':
        return 'Trung bình'
      case 'high':
        return 'Cao'
      case 'extreme':
        return 'Rất cao'
      default:
        break
    }
  }

  const getOverallRiskLevelColor = (overallRiskLevel: string) => {
    switch (overallRiskLevel) {
      case 'low':
        return colors.green500
      case 'medium':
        return colors.yellow500
      case 'high':
        return colors.red500
      case 'extreme':
        return colors.red500
      default:
        break
    }
  }

  const createColumns = () => [
    {
      key: TableScreenerFieldId.ticker,
      title: `Mã cổ phiếu`,
      dataIndex: TableScreenerFieldId.ticker,
      width: isMobile ? 80 : 230,
      fixed: 'left',
      align: 'left',
      render: (_, record) => (
        <>
          <Link
            to={`${UrlInternal.COMPANY_PAGE}/${record.ticker}`}
            css={{
              display: 'flex',
              alignItems: 'center',
              padding: '0px 16px'
            }}
          >
            <Typography
              variant='sub_heading_three'
              cssCustom={(theme: Theme) => ({
                color: theme.color.dc011,
                marginBottom: 4,
                width: 'fit-content'
              })}
            >
              {record?.ticker}
            </Typography>
          </Link>
        </>
      )
    },
    {
      key: TableScreenerFieldId.stockExchange,
      title: 'Sàn giao dịch',
      dataIndex: TableScreenerFieldId.stockExchange,
      width: 100,
      align: 'right',
      render: (_, record) => (
        <Typography
          variant='sub_heading_four'
          cssCustom={(theme: Theme) => ({
            color: theme.color.dc013
          })}
        >
          {record?.stockExchange || `-`}
        </Typography>
      )
    },
    {
      key: TableScreenerFieldId.volume,
      title: 'Khối lượng',
      dataIndex: TableScreenerFieldId.volume,
      width: 100,
      align: 'right',
      render: (_, record) => (
        <Typography
          variant='sub_heading_four'
          cssCustom={(theme: Theme) => ({
            color: theme.color.dc013
          })}
        >
          {formatPriceVND(record?.volume) || `-`}
        </Typography>
      )
    },
    {
      key: TableScreenerFieldId.volume10dAvg,
      title: (
        <>
          {`KLGD TB`}
          <br />
          {`10 phiên`}
        </>
      ),
      dataIndex: TableScreenerFieldId.volume10dAvg,
      width: 100,
      align: 'right',
      render: (_, record) => (
        <Typography
          variant='sub_heading_four'
          cssCustom={(theme: Theme) => ({
            color: theme.color.dc013
          })}
        >
          {formatPriceVND(record?.volume10dAvg) || `-`}
        </Typography>
      )
    },
    {
      key: TableScreenerFieldId.marketCapVnd,
      title: 'Vốn hóa',
      dataIndex: TableScreenerFieldId.marketCapVnd,
      width: 100,
      align: 'right',
      render: (_, record) => (
        <Typography
          variant='sub_heading_four'
          cssCustom={(theme: Theme) => ({
            color: theme.color.dc013
          })}
        >
          {formatPriceShort(record?.marketCapVnd) || `-`}
        </Typography>
      )
    },
    {
      key: TableScreenerFieldId.marginOfSafety,
      title: 'Biên an toàn',
      dataIndex: TableScreenerFieldId.marginOfSafety,
      width: 120,
      align: 'right',
      render: (_, record) => (
        <>
          {userInfo?.membershipStatus ? (
            <div css={{ display: 'flex', justifyContent: 'flex-end' }}>
              {record?.marginOfSafety ? (
                <Percentage
                  variant='sub_heading_four'
                  value={record?.marginOfSafety}
                  hasIcon={false}
                />
              ) : (
                `-`
              )}
            </div>
          ) : (
            <Row justify='end' align='middle'>
              <LockTooltip />
            </Row>
          )}
        </>
      )
    },
    {
      key: TableScreenerFieldId.peRatio,
      title: 'P/E',
      dataIndex: TableScreenerFieldId.peRatio,
      width: 80,
      align: 'right',
      render: (_, record) => (
        <Typography
          variant='sub_heading_four'
          cssCustom={(theme: Theme) => ({
            color:
              record?.peRatio > 0 ? theme.color.green500 : theme.color.red500
          })}
        >
          {record?.peRatio ? roundNumber(record?.peRatio) : `-`}
        </Typography>
      )
    },
    {
      key: TableScreenerFieldId.pbRatio,
      title: 'P/B',
      dataIndex: TableScreenerFieldId.pbRatio,
      width: 80,
      align: 'right',
      render: (_, record) => (
        <Typography
          variant='sub_heading_four'
          cssCustom={(theme: Theme) => ({
            color:
              record?.pbRatio > 0 ? theme.color.green500 : theme.color.red500
          })}
        >
          {record?.pbRatio || `-`}
        </Typography>
      )
    },
    {
      key: TableScreenerFieldId.evEbitdaRatio,
      title: 'EV/EBITDA',
      dataIndex: TableScreenerFieldId.evEbitdaRatio,
      width: 120,
      align: 'right',
      render: (_, record) => (
        <Typography
          variant='sub_heading_four'
          cssCustom={(theme: Theme) => ({
            color:
              record?.evEbitdaRatio > 0
                ? theme.color.green500
                : theme.color.red500
          })}
        >
          {record?.evEbitdaRatio || `-`}
        </Typography>
      )
    },
    {
      key: TableScreenerFieldId.netCashToMarketCap,
      title: (
        <>
          {`Tiền mặt ròng`}
          <br />
          {`/Vốn hóa`}
        </>
      ),
      dataIndex: TableScreenerFieldId.netCashToMarketCap,
      width: 120,
      align: 'right',
      render: (_, record) => (
        <>
          {userInfo?.membershipStatus ? (
            <div css={{ display: 'flex', justifyContent: 'flex-end' }}>
              {record?.netCashToMarketCap ? (
                <Percentage
                  variant='sub_heading_four'
                  value={record?.netCashToMarketCap}
                  hasIcon={false}
                />
              ) : (
                `-`
              )}
            </div>
          ) : (
            <Row justify='end' align='middle'>
              <LockTooltip />
            </Row>
          )}
        </>
      )
    },
    {
      key: TableScreenerFieldId.revenueGrowthPreQ,
      title: (
        <>
          {`Tăng trưởng doanh thu quý`}
          <br />
          {`so với quý liền trước`}
        </>
      ),
      dataIndex: TableScreenerFieldId.revenueGrowthPreQ,
      width: 120,
      align: 'right',
      render: (_, record) => (
        <div css={{ display: 'flex', justifyContent: 'flex-end' }}>
          {record?.revenueGrowthPreQ ? (
            <Percentage
              variant='sub_heading_four'
              value={record?.revenueGrowthPreQ}
              hasIcon={false}
              isFormatPrice={true}
            />
          ) : (
            `-`
          )}
        </div>
      )
    },
    {
      key: TableScreenerFieldId.revenueGrowthQoq,
      title: (
        <>
          {`Tăng trưởng doanh thu quý`}
          <br />
          {`so với cùng kỳ`}
        </>
      ),
      dataIndex: TableScreenerFieldId.revenueGrowthQoq,
      width: 120,
      align: 'right',
      render: (_, record) => (
        <div css={{ display: 'flex', justifyContent: 'flex-end' }}>
          {record?.revenueGrowthQoq ? (
            <Percentage
              variant='sub_heading_four'
              value={record?.revenueGrowthQoq}
              hasIcon={false}
              isFormatPrice={true}
            />
          ) : (
            `-`
          )}
        </div>
      )
    },
    {
      key: TableScreenerFieldId.netIncomeGrowthPreQ,
      title: (
        <>
          {`Tăng trưởng lợi nhuận quý`}
          <br />
          {`so với quý liền trước`}
        </>
      ),
      dataIndex: TableScreenerFieldId.netIncomeGrowthPreQ,
      width: 120,
      align: 'right',
      render: (_, record) => (
        <div css={{ display: 'flex', justifyContent: 'flex-end' }}>
          {record?.netIncomeGrowthPreQ ? (
            <Percentage
              variant='sub_heading_four'
              value={record?.netIncomeGrowthPreQ}
              hasIcon={false}
              isFormatPrice={true}
            />
          ) : (
            `-`
          )}
        </div>
      )
    },
    {
      key: TableScreenerFieldId.netIncomeGrowthQoq,
      title: (
        <>
          {`Tăng trưởng lợi nhuận quý`}
          <br />
          {`so với cùng kỳ`}
        </>
      ),
      dataIndex: TableScreenerFieldId.netIncomeGrowthQoq,
      width: 120,
      align: 'right',
      render: (_, record) => (
        <div css={{ display: 'flex', justifyContent: 'flex-end' }}>
          {record?.netIncomeGrowthQoq ? (
            <Percentage
              variant='sub_heading_four'
              value={record?.netIncomeGrowthQoq}
              hasIcon={false}
              isFormatPrice={true}
            />
          ) : (
            `-`
          )}
        </div>
      )
    },
    {
      key: TableScreenerFieldId.epsLtmGrowthPreQ,
      title: (
        <>
          {`Tăng trưởng EPS LTM`}
          <br />
          {`so với quý trước`}
        </>
      ),
      dataIndex: TableScreenerFieldId.epsLtmGrowthPreQ,
      width: 120,
      align: 'right',
      render: (_, record) => (
        <div css={{ display: 'flex', justifyContent: 'flex-end' }}>
          {record?.epsLtmGrowthPreQ ? (
            <Percentage
              variant='sub_heading_four'
              value={record?.epsLtmGrowthPreQ}
              hasIcon={false}
            />
          ) : (
            `-`
          )}
        </div>
      )
    },
    {
      key: TableScreenerFieldId.epsLtmGrowthQoq,
      title: (
        <>
          {`Tăng trưởng EPS LTM`}
          <br />
          {`so với cùng kỳ`}
        </>
      ),
      dataIndex: TableScreenerFieldId.epsLtmGrowthQoq,
      width: 120,
      align: 'right',
      render: (_, record) => (
        <div css={{ display: 'flex', justifyContent: 'flex-end' }}>
          {record?.epsLtmGrowthQoq ? (
            <Percentage
              variant='sub_heading_four'
              value={record?.epsLtmGrowthQoq}
              hasIcon={false}
              isFormatPrice={true}
            />
          ) : (
            `-`
          )}
        </div>
      )
    },
    {
      key: TableScreenerFieldId.revenueLtmGrowth,
      title: (
        <>
          {`Tăng trưởng doanh thu`}
          <br />
          {`12 tháng gần nhất`}
        </>
      ),
      dataIndex: TableScreenerFieldId.revenueLtmGrowth,
      width: 120,
      align: 'right',
      render: (_, record) => (
        <div css={{ display: 'flex', justifyContent: 'flex-end' }}>
          {record?.revenueLtmGrowth ? (
            <Percentage
              variant='sub_heading_four'
              value={record?.revenueLtmGrowth}
              hasIcon={false}
            />
          ) : (
            `-`
          )}
        </div>
      )
    },
    {
      key: TableScreenerFieldId.netIncomeLtmGrowth,
      title: (
        <>
          {`Tăng trưởng lợi nhuận`}
          <br />
          {`12 tháng gần nhất`}
        </>
      ),
      dataIndex: TableScreenerFieldId.netIncomeLtmGrowth,
      width: 120,
      align: 'right',
      render: (_, record) => (
        <div css={{ display: 'flex', justifyContent: 'flex-end' }}>
          {record?.netIncomeLtmGrowth ? (
            <Percentage
              variant='sub_heading_four'
              value={record?.netIncomeLtmGrowth}
              hasIcon={false}
            />
          ) : (
            `-`
          )}
        </div>
      )
    },
    {
      key: TableScreenerFieldId.epsGrowthPreQ,
      title: (
        <>
          {`Tăng trưởng EPS quý`}
          <br />
          {`so với quý liền trước`}
        </>
      ),
      dataIndex: TableScreenerFieldId.epsGrowthPreQ,
      width: 120,
      align: 'right',
      render: (_, record) => (
        <div css={{ display: 'flex', justifyContent: 'flex-end' }}>
          {record?.epsGrowthPreQ ? (
            <Percentage
              variant='sub_heading_four'
              value={record?.epsGrowthPreQ}
              hasIcon={false}
              isFormatPrice={true}
            />
          ) : (
            `-`
          )}
        </div>
      )
    },
    {
      key: TableScreenerFieldId.epsGrowthQoq,
      title: (
        <>
          {`Tăng trưởng EPS quý`}
          <br />
          {`so với cùng kỳ`}
        </>
      ),
      dataIndex: TableScreenerFieldId.epsGrowthQoq,
      width: 120,
      align: 'right',
      render: (_, record) => (
        <div css={{ display: 'flex', justifyContent: 'flex-end' }}>
          {record?.epsGrowthQoq ? (
            <Percentage
              variant='sub_heading_four'
              value={record?.epsGrowthQoq}
              hasIcon={false}
              isFormatPrice={true}
            />
          ) : (
            `-`
          )}
        </div>
      )
    },
    {
      key: TableScreenerFieldId.revenue5yGrowth,
      title: (
        <>
          {`Tăng trưởng doanh thu`}
          <br />
          {`bình quân 5 năm`}
        </>
      ),
      dataIndex: TableScreenerFieldId.revenue5yGrowth,
      width: 160,
      align: 'right',
      render: (_, record) => (
        <div css={{ display: 'flex', justifyContent: 'flex-end' }}>
          {record?.revenue5yGrowth ? (
            <Percentage
              variant='sub_heading_four'
              value={record?.revenue5yGrowth}
              hasIcon={false}
            />
          ) : (
            `-`
          )}
        </div>
      )
    },
    {
      key: TableScreenerFieldId.netIncome5yGrowth,
      title: (
        <>
          {`Tăng trưởng lợi nhuận`}
          <br />
          {`bình quân 5 năm`}
        </>
      ),
      dataIndex: TableScreenerFieldId.netIncome5yGrowth,
      width: 160,
      align: 'right',
      render: (_, record) => (
        <div css={{ display: 'flex', justifyContent: 'flex-end' }}>
          {record?.netIncome5yGrowth ? (
            <Percentage
              variant='sub_heading_four'
              value={record?.netIncome5yGrowth}
              hasIcon={false}
            />
          ) : (
            `-`
          )}
        </div>
      )
    },
    {
      key: TableScreenerFieldId.revenueEstGrowth,
      title: (
        <>
          {`Tăng trưởng doanh thu`}
          <br />
          {`bình quân 3 năm dự phóng`}
        </>
      ),
      dataIndex: TableScreenerFieldId.revenueEstGrowth,
      width: 160,
      align: 'right',
      render: (_, record) => (
        <>
          {userInfo?.membershipStatus ? (
            <div css={{ display: 'flex', justifyContent: 'flex-end' }}>
              {record?.revenueEstGrowth ? (
                <Percentage
                  variant='sub_heading_four'
                  value={record?.revenueEstGrowth}
                  hasIcon={false}
                />
              ) : (
                `-`
              )}
            </div>
          ) : (
            <Row justify='end' align='middle'>
              <LockTooltip />
            </Row>
          )}
        </>
      )
    },
    {
      key: TableScreenerFieldId.netIncomeEstGrowth,
      title: (
        <>
          {`Tăng trưởng lợi nhuận`}
          <br />
          {`bình quân 3 năm dự phóng`}
        </>
      ),
      dataIndex: TableScreenerFieldId.netIncomeEstGrowth,
      width: 150,
      align: 'right',
      render: (_, record) => (
        <>
          {userInfo?.membershipStatus ? (
            <div css={{ display: 'flex', justifyContent: 'flex-end' }}>
              {record?.netIncomeEstGrowth ? (
                <Percentage
                  variant='sub_heading_four'
                  value={record?.netIncomeEstGrowth}
                  hasIcon={false}
                />
              ) : (
                `-`
              )}
            </div>
          ) : (
            <Row justify='end' align='middle'>
              <LockTooltip />
            </Row>
          )}
        </>
      )
    },
    {
      key: TableScreenerFieldId.grossMarginLtm,
      title: 'Biên lợi nhuận gộp',
      dataIndex: TableScreenerFieldId.grossMarginLtm,
      width: 100,
      align: 'right',
      render: (_, record) => (
        <div css={{ display: 'flex', justifyContent: 'flex-end' }}>
          {record?.grossMarginLtm ? (
            <Percentage
              variant='sub_heading_four'
              value={record?.grossMarginLtm}
              hasIcon={false}
            />
          ) : (
            `-`
          )}
        </div>
      )
    },
    {
      key: TableScreenerFieldId.profitMarginLtm,
      title: 'Biên lợi nhuận sau thuế',
      dataIndex: TableScreenerFieldId.profitMarginLtm,
      width: 100,
      align: 'right',
      render: (_, record) => (
        <div css={{ display: 'flex', justifyContent: 'flex-end' }}>
          {record?.profitMarginLtm ? (
            <Percentage
              variant='sub_heading_four'
              value={record?.profitMarginLtm}
              hasIcon={false}
            />
          ) : (
            `-`
          )}
        </div>
      )
    },
    {
      key: TableScreenerFieldId.returnOnEquity,
      title: 'ROE',
      dataIndex: TableScreenerFieldId.returnOnEquity,
      width: 80,
      align: 'right',
      render: (_, record) => (
        <div css={{ display: 'flex', justifyContent: 'flex-end' }}>
          {record?.returnOnEquity ? (
            <Percentage
              variant='sub_heading_four'
              value={record?.returnOnEquity}
              hasIcon={false}
            />
          ) : (
            `-`
          )}
        </div>
      )
    },
    {
      key: TableScreenerFieldId.returnOnAssets,
      title: 'ROA',
      dataIndex: TableScreenerFieldId.returnOnAssets,
      width: 80,
      align: 'right',
      render: (_, record) => (
        <div css={{ display: 'flex', justifyContent: 'flex-end' }}>
          {record?.returnOnAssets ? (
            <Percentage
              variant='sub_heading_four'
              value={record?.returnOnAssets}
              hasIcon={false}
            />
          ) : (
            `-`
          )}
        </div>
      )
    },
    {
      key: TableScreenerFieldId.debtToEquity,
      title: 'Nợ vay/Vốn chủ sở hữu',
      dataIndex: TableScreenerFieldId.debtToEquity,
      width: 150,
      align: 'right',
      render: (_, record) => (
        <Typography
          variant='sub_heading_four'
          cssCustom={(theme: Theme) => ({
            color: theme.color.dc013
          })}
        >
          {record?.debtToEquity ? `${record?.debtToEquity}%` : `-`}
        </Typography>
      )
    },
    {
      key: TableScreenerFieldId.dividendYieldCurrent,
      title: 'Tỷ suất cổ tức hiện tại',
      dataIndex: TableScreenerFieldId.dividendYieldCurrent,
      width: 120,
      align: 'right',
      render: (_, record) => (
        <Typography
          variant='sub_heading_four'
          cssCustom={(theme: Theme) => ({
            color: theme.color.dc013
          })}
        >
          {record?.dividendYieldCurrent
            ? `${record?.dividendYieldCurrent}%`
            : `-`}
        </Typography>
      )
    },
    {
      key: TableScreenerFieldId.countCashDiv,
      title: 'Trả cổ tức liên tục',
      dataIndex: TableScreenerFieldId.countCashDiv,
      width: 120,
      align: 'right',
      render: (_, record) => (
        <Typography
          variant='sub_heading_four'
          cssCustom={(theme: Theme) => ({
            color: theme.color.dc013
          })}
        >
          {`${record?.countCashDiv} năm`}
        </Typography>
      )
    },
    {
      key: TableScreenerFieldId.constructionInProgressPct,
      title: (
        <>
          {`Chi phí xây dựng dở dang`}
          <br />
          {`/Tổng tài sản`}
        </>
      ),
      dataIndex: TableScreenerFieldId.constructionInProgressPct,
      width: 120,
      align: 'right',
      render: (_, record) => (
        <Typography
          variant='sub_heading_four'
          cssCustom={(theme: Theme) => ({
            color: theme.color.dc013
          })}
        >
          {record?.constructionInProgressPct
            ? `${record?.constructionInProgressPct}%`
            : `-`}
        </Typography>
      )
    },
    {
      key: TableScreenerFieldId.constructionInProgressGrowthPreQ,
      title: (
        <>
          {`Tăng trưởng chi phí xây dựng dở dang`}
          <br />
          {`so với quý trước`}
        </>
      ),
      dataIndex: TableScreenerFieldId.constructionInProgressGrowthPreQ,
      width: 120,
      align: 'right',
      render: (_, record) => (
        <Typography
          variant='sub_heading_four'
          cssCustom={(theme: Theme) => ({
            color: theme.color.dc013
          })}
        >
          {record?.constructionInProgressGrowthPreQ
            ? `${record?.constructionInProgressGrowthPreQ}%`
            : `-`}
        </Typography>
      )
    },
    {
      key: TableScreenerFieldId.netInventoriesPct,
      title: (
        <>
          {`Hàng tồn kho`}
          <br />
          {`/Tổng tài sản`}
        </>
      ),
      dataIndex: TableScreenerFieldId.netInventoriesPct,
      width: 120,
      align: 'right',
      render: (_, record) => (
        <Typography
          variant='sub_heading_four'
          cssCustom={(theme: Theme) => ({
            color: theme.color.dc013
          })}
        >
          {record?.netInventoriesPct ? `${record?.netInventoriesPct}%` : `-`}
        </Typography>
      )
    },
    {
      key: TableScreenerFieldId.netInventoriesGrowthPreQ,
      title: (
        <>
          {`Tăng trưởng hàng tồn kho`}
          <br />
          {`so với quý trước`}
        </>
      ),
      dataIndex: TableScreenerFieldId.netInventoriesGrowthPreQ,
      width: 120,
      align: 'right',
      render: (_, record) => (
        <Typography
          variant='sub_heading_four'
          cssCustom={(theme: Theme) => ({
            color: theme.color.dc013
          })}
        >
          {record?.netInventoriesGrowthPreQ
            ? `${record?.netInventoriesGrowthPreQ}%`
            : `-`}
        </Typography>
      )
    },
    {
      key: TableScreenerFieldId.advancesCustomerPct,
      title: (
        <>
          {`Người mua trả tiền trước`}
          <br />
          {`/Tổng tài sản`}
        </>
      ),
      dataIndex: TableScreenerFieldId.advancesCustomerPct,
      width: 120,
      align: 'right',
      render: (_, record) => (
        <Typography
          variant='sub_heading_four'
          cssCustom={(theme: Theme) => ({
            color: theme.color.dc013
          })}
        >
          {record?.advancesCustomerPct
            ? `${record?.advancesCustomerPct}%`
            : `-`}
        </Typography>
      )
    },
    {
      key: TableScreenerFieldId.advancesCustomerGrowthPreQ,
      title: (
        <>
          {`Tăng trưởng người mua trả tiền trước`}
          <br />
          {`so với quý trước`}
        </>
      ),
      dataIndex: TableScreenerFieldId.advancesCustomerGrowthPreQ,
      width: 120,
      align: 'right',
      render: (_, record) => (
        <Typography
          variant='sub_heading_four'
          cssCustom={(theme: Theme) => ({
            color: theme.color.dc013
          })}
        >
          {record?.advancesCustomerGrowthPreQ
            ? `${record?.advancesCustomerGrowthPreQ}%`
            : `-`}
        </Typography>
      )
    },
    {
      key: TableScreenerFieldId.fixedAssetPct,
      title: (
        <>
          {`Tài sản cố định`}
          <br />
          {`/Tổng tài sản`}
        </>
      ),
      dataIndex: TableScreenerFieldId.fixedAssetPct,
      width: 120,
      align: 'right',
      render: (_, record) => (
        <Typography
          variant='sub_heading_four'
          cssCustom={(theme: Theme) => ({
            color: theme.color.dc013
          })}
        >
          {record?.fixedAssetPct ? `${record?.fixedAssetPct}%` : `-`}
        </Typography>
      )
    },
    {
      key: TableScreenerFieldId.fixedAssetGrowthPreQ,
      title: (
        <>
          {`Tăng trưởng tài sản cố định`}
          <br />
          {`so với quý trước`}
        </>
      ),
      dataIndex: TableScreenerFieldId.fixedAssetGrowthPreQ,
      width: 120,
      align: 'right',
      render: (_, record) => (
        <Typography
          variant='sub_heading_four'
          cssCustom={(theme: Theme) => ({
            color: theme.color.dc013
          })}
        >
          {record?.fixedAssetGrowthPreQ
            ? `${record?.fixedAssetGrowthPreQ}%`
            : `-`}
        </Typography>
      )
    },
    {
      key: TableScreenerFieldId.fixedAssetGrossRatio,
      title: (
        <>
          {`Khấu hao còn lại`}
          <br />
          {`/Nguyên giá tài sản cố định`}
        </>
      ),
      dataIndex: TableScreenerFieldId.fixedAssetGrossRatio,
      width: 120,
      align: 'right',
      render: (_, record) => (
        <Typography
          variant='sub_heading_four'
          cssCustom={(theme: Theme) => ({
            color: theme.color.dc013
          })}
        >
          {record?.fixedAssetGrossRatio
            ? `${record?.fixedAssetGrossRatio}%`
            : `-`}
        </Typography>
      )
    },
    {
      key: TableScreenerFieldId.insiderBuying3m,
      title: (
        <>
          {`BLĐ mua ròng`}
          <br />
          {`3 tháng gần nhất`}
        </>
      ),
      dataIndex: TableScreenerFieldId.insiderBuying3m,
      width: 120,
      align: 'right',
      render: (_, record) => (
        <>
          {userInfo?.membershipStatus ? (
            <div css={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Typography
                variant='sub_heading_four'
                cssCustom={(theme: Theme) => ({
                  color: theme.color.dc013
                })}
              >
                {record?.insiderBuying3m
                  ? `${formatPriceVND(record?.insiderBuying3m)}`
                  : `-`}
              </Typography>
            </div>
          ) : (
            <Row justify='end' align='middle'>
              <LockTooltip />
            </Row>
          )}
        </>
      )
    },
    {
      key: TableScreenerFieldId.insiderBuying,
      title: (
        <>
          {`BLĐ mua ròng`}
          <br />
          {`12 tháng gần nhất`}
        </>
      ),
      dataIndex: TableScreenerFieldId.insiderBuying,
      width: 150,
      align: 'right',
      render: (_, record) => (
        <>
          {userInfo?.membershipStatus ? (
            <Typography
              variant='sub_heading_four'
              cssCustom={(theme: Theme) => ({
                color: theme.color.dc013
              })}
            >
              {record?.insiderBuying
                ? `${formatPriceVND(record?.insiderBuying)}`
                : `-`}
            </Typography>
          ) : (
            <Row justify='end' align='middle'>
              <LockTooltip />
            </Row>
          )}
        </>
      )
    },
    {
      key: TableScreenerFieldId.fundVolumeBuy3m,
      title: (
        <>
          {`Quỹ đầu tư mua ròng`}
          <br />
          {`3 tháng gần nhất`}
        </>
      ),
      dataIndex: TableScreenerFieldId.fundVolumeBuy3m,
      width: 180,
      align: 'right',
      render: (_, record) => (
        <>
          {userInfo?.membershipStatus ? (
            <Typography
              variant='sub_heading_four'
              cssCustom={(theme: Theme) => ({
                color: theme.color.dc013
              })}
            >
              {record?.fundVolumeBuy3m
                ? `${formatPriceVND(record?.fundVolumeBuy3m)}`
                : `-`}
            </Typography>
          ) : (
            <Row justify='end' align='middle'>
              <LockTooltip />
            </Row>
          )}
        </>
      )
    },
    {
      key: TableScreenerFieldId.foreignBuyingValue7d,
      title: (
        <>
          {`NĐT nước ngoài mua ròng`}
          <br />
          {`7 ngày gần nhất`}
        </>
      ),
      dataIndex: TableScreenerFieldId.foreignBuyingValue7d,
      width: 120,
      align: 'right',
      render: (_, record) => (
        <>
          {userInfo?.membershipStatus ? (
            <div css={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Typography
                variant='sub_heading_four'
                cssCustom={(theme: Theme) => ({
                  color: theme.color.dc013
                })}
              >
                {record?.foreignBuyingValue7d
                  ? formatPriceShort(record?.foreignBuyingValue7d)
                  : `-`}
              </Typography>
            </div>
          ) : (
            <Row justify='end' align='middle'>
              <LockTooltip />
            </Row>
          )}
        </>
      )
    },
    {
      key: TableScreenerFieldId.foreignBuyingValue30d,
      title: (
        <>
          {`NĐT nước ngoài mua ròng`}
          <br />
          {`30 ngày gần nhất`}
        </>
      ),
      dataIndex: TableScreenerFieldId.foreignBuyingValue30d,
      width: 120,
      align: 'right',
      render: (_, record) => (
        <>
          {userInfo?.membershipStatus ? (
            <div css={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Typography
                variant='sub_heading_four'
                cssCustom={(theme: Theme) => ({
                  color: theme.color.dc013
                })}
              >
                {record?.foreignBuyingValue30d
                  ? formatPriceShort(record?.foreignBuyingValue30d)
                  : `-`}
              </Typography>
            </div>
          ) : (
            <Row justify='end' align='middle'>
              <LockTooltip />
            </Row>
          )}
        </>
      )
    },
    {
      key: TableScreenerFieldId.foreignBuyingValue90d,
      title: (
        <>
          {`NĐT nước ngoài mua ròng`}
          <br />
          {`3 tháng gần nhất`}
        </>
      ),
      dataIndex: TableScreenerFieldId.foreignBuyingValue90d,
      width: 120,
      align: 'right',
      render: (_, record) => (
        <>
          {userInfo?.membershipStatus ? (
            <div css={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Typography
                variant='sub_heading_four'
                cssCustom={(theme: Theme) => ({
                  color: theme.color.dc013
                })}
              >
                {record?.foreignBuyingValue90d
                  ? formatPriceShort(record?.foreignBuyingValue90d)
                  : `-`}
              </Typography>
            </div>
          ) : (
            <Row justify='end' align='middle'>
              <LockTooltip />
            </Row>
          )}
        </>
      )
    },
    {
      key: TableScreenerFieldId.taSignal1d,
      title: 'Tín hiệu kỹ thuật',
      dataIndex: TableScreenerFieldId.taSignal1d,
      width: 120,
      align: 'right',
      render: (_, record) => (
        <>
          {userInfo?.membershipStatus ? (
            <div css={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Typography
                variant='sub_heading_four'
                cssCustom={() => ({
                  color: getTaSignal1dColor(record?.taSignal1d)
                })}
              >
                {record?.taSignal1d
                  ? getTaSignal1dText(record?.taSignal1d)
                  : `-`}
              </Typography>
            </div>
          ) : (
            <Row justify='end' align='middle'>
              <LockTooltip />
            </Row>
          )}
        </>
      )
    },
    {
      key: TableScreenerFieldId.overallRiskLevel,
      title: 'Rủi ro',
      dataIndex: TableScreenerFieldId.overallRiskLevel,
      width: 120,
      align: 'right',
      render: (_, record) => (
        <>
          {userInfo?.membershipStatus ? (
            <div css={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Typography
                variant='sub_heading_four'
                cssCustom={() => ({
                  color: getOverallRiskLevelColor(record?.overallRiskLevel)
                })}
              >
                {record?.overallRiskLevel
                  ? getOverallRiskLevelText(record?.overallRiskLevel)
                  : `-`}
              </Typography>
            </div>
          ) : (
            <Row justify='end' align='middle'>
              <LockTooltip />
            </Row>
          )}
        </>
      )
    },
    {
      key: TableScreenerFieldId.rscD,
      title: 'Xu hướng dòng tiền ngắn hạn',
      dataIndex: TableScreenerFieldId.rscD,
      width: 120,
      align: 'right',
      render: (_, record) => (
        <>
          {userInfo?.membershipStatus ? (
            <div css={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Typography
                variant='sub_heading_four'
                cssCustom={(theme: Theme) => ({
                  color: theme.color.dc013
                })}
              >
                {record?.rscD || `-`}
              </Typography>
            </div>
          ) : (
            <Row justify='end' align='middle'>
              <LockTooltip />
            </Row>
          )}
        </>
      )
    },
    {
      key: TableScreenerFieldId.rscW,
      title: 'Xu hướng dòng tiền trung hạn',
      dataIndex: TableScreenerFieldId.rscW,
      width: 120,
      align: 'right',
      render: (_, record) => (
        <>
          {userInfo?.membershipStatus ? (
            <div css={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Typography
                variant='sub_heading_four'
                cssCustom={(theme: Theme) => ({
                  color: theme.color.dc013
                })}
              >
                {record?.rscW || `-`}
              </Typography>
            </div>
          ) : (
            <Row justify='end' align='middle'>
              <LockTooltip />
            </Row>
          )}
        </>
      )
    },
    {
      key: TableScreenerFieldId.rscM,
      title: 'Xu hướng dòng tiền dài hạn',
      dataIndex: TableScreenerFieldId.rscM,
      width: 120,
      align: 'right',
      render: (_, record) => (
        <>
          {userInfo?.membershipStatus ? (
            <div css={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Typography
                variant='sub_heading_four'
                cssCustom={(theme: Theme) => ({
                  color: theme.color.dc013
                })}
              >
                {record?.rscM || `-`}
              </Typography>
            </div>
          ) : (
            <Row justify='end' align='middle'>
              <LockTooltip />
            </Row>
          )}
        </>
      )
    },
    // -----------------------
    {
      key: TableScreenerFieldId.priceClose,
      title: 'Giá đóng cửa',
      dataIndex: TableScreenerFieldId.priceClose,
      width: 120,
      align: 'right',
      render: (_, record) => (
        <Typography
          variant='sub_heading_four'
          cssCustom={(theme: Theme) => ({
            color: theme.color.dc013
          })}
        >
          {formatPriceVND(record?.priceClose) || `-`}
        </Typography>
      )
    },
    {
      key: TableScreenerFieldId.pegRatioEstNtm,
      title: 'PEG',
      dataIndex: TableScreenerFieldId.pegRatioEstNtm,
      width: 80,
      align: 'right',
      render: (_, record) => (
        <Typography
          variant='sub_heading_four'
          cssCustom={(theme: Theme) => ({
            color: theme.color.dc013
          })}
        >
          {record?.pegRatioEstNtm || `-`}
        </Typography>
      )
    },
    {
      key: TableScreenerFieldId.pricePctChg7d,
      title: '7 ngày',
      dataIndex: TableScreenerFieldId.pricePctChg7d,
      width: 80,
      align: 'right',
      render: (_, record) => (
        <div css={{ display: 'flex', justifyContent: 'flex-end' }}>
          {record?.pricePctChg7d ? (
            <Percentage
              variant='sub_heading_four'
              value={record?.pricePctChg7d}
              hasIcon={false}
            />
          ) : (
            `-`
          )}
        </div>
      )
    },
    {
      key: TableScreenerFieldId.pricePctChg30d,
      title: '30 ngày',
      dataIndex: TableScreenerFieldId.pricePctChg30d,
      width: 120,
      align: 'right',
      render: (_, record) => (
        <div css={{ display: 'flex', justifyContent: 'flex-end' }}>
          {record?.pricePctChg30d ? (
            <Percentage
              variant='sub_heading_four'
              value={record?.pricePctChg30d}
              hasIcon={false}
            />
          ) : (
            `-`
          )}
        </div>
      )
    },
    {
      key: TableScreenerFieldId.pricePctChgYtd,
      title: 'Từ đầu năm',
      dataIndex: TableScreenerFieldId.pricePctChgYtd,
      width: 120,
      align: 'right',
      render: (_, record) => (
        <div css={{ display: 'flex', justifyContent: 'flex-end' }}>
          {record?.pricePctChgYtd ? (
            <Percentage
              variant='sub_heading_four'
              value={record?.pricePctChgYtd}
              hasIcon={false}
            />
          ) : (
            `-`
          )}
        </div>
      )
    },
    {
      key: TableScreenerFieldId.pricePctChg3y,
      title: '3 năm',
      dataIndex: TableScreenerFieldId.pricePctChg3y,
      width: 120,
      align: 'right',
      render: (_, record) => (
        <div css={{ display: 'flex', justifyContent: 'flex-end' }}>
          {record?.pricePctChg3y ? (
            <Percentage
              variant='sub_heading_four'
              value={record?.pricePctChg3y}
              hasIcon={false}
            />
          ) : (
            `-`
          )}
        </div>
      )
    },
    {
      key: TableScreenerFieldId.pricePctChg5y,
      title: '5 năm',
      dataIndex: TableScreenerFieldId.pricePctChg5y,
      width: 120,
      align: 'right',
      render: (_, record) => (
        <div css={{ display: 'flex', justifyContent: 'flex-end' }}>
          {record?.pricePctChg5y ? (
            <Percentage
              variant='sub_heading_four'
              value={record?.pricePctChg5y}
              hasIcon={false}
            />
          ) : (
            `-`
          )}
        </div>
      )
    },
    {
      key: TableScreenerFieldId.eps,
      title: 'EPS',
      dataIndex: TableScreenerFieldId.eps,
      width: 80,
      align: 'right',
      render: (_, record) => (
        <Typography
          variant='sub_heading_four'
          cssCustom={(theme: Theme) => ({
            color: theme.color.dc013
          })}
        >
          {formatPriceVND(record?.eps) || `-`}
        </Typography>
      )
    },
    {
      key: TableScreenerFieldId.pctChgLongTerm,
      title: 'Xu hướng giá dài hạn',
      dataIndex: TableScreenerFieldId.pctChgLongTerm,
      width: 120,
      align: 'right',
      render: (_, record) => (
        <div css={{ display: 'flex', justifyContent: 'flex-end' }}>
          {record?.pctChgLongTerm ? (
            <Percentage
              variant='sub_heading_four'
              value={record?.pctChgLongTerm}
              hasIcon={false}
            />
          ) : (
            `-`
          )}
        </div>
      )
    },
    {
      key: TableScreenerFieldId.pctChgMidTerm,
      title: 'Xu hướng giá trung hạn',
      dataIndex: TableScreenerFieldId.pctChgMidTerm,
      width: 120,
      align: 'right',
      render: (_, record) => (
        <div css={{ display: 'flex', justifyContent: 'flex-end' }}>
          {record?.pctChgMidTerm ? (
            <Percentage
              variant='sub_heading_four'
              value={record?.pctChgMidTerm}
              hasIcon={false}
            />
          ) : (
            `-`
          )}
        </div>
      )
    },
    {
      key: TableScreenerFieldId.pctChgShortTerm,
      title: 'Xu hướng giá ngắn hạn',
      dataIndex: TableScreenerFieldId.pctChgShortTerm,
      width: 120,
      align: 'right',
      render: (_, record) => (
        <div css={{ display: 'flex', justifyContent: 'flex-end' }}>
          {record?.pctChgShortTerm ? (
            <Percentage
              variant='sub_heading_four'
              value={record?.pctChgShortTerm}
              hasIcon={false}
            />
          ) : (
            `-`
          )}
        </div>
      )
    }
  ]

  return (
    <>
      {rowData && (
        <Table
          prefixCls={`simplize-table`}
          css={[
            utilStyles.table({ emptyData: rowData?.length === 0 }),
            (theme: Theme) => ({
              'div.simplize-table-body': {
                cursor: `pointer`,
                overflow: 'auto',

                '&:hover::-webkit-scrollbar-thumb': {
                  visibility: 'visible'
                },

                '&::-webkit-scrollbar': {
                  width: 8,
                  height: 8
                },

                '&::-webkit-scrollbar-track': {
                  borderRadius: 0
                },

                '&::-webkit-scrollbar-thumb': {
                  borderRadius: 4,
                  backgroundColor: theme.color.black400,
                  visibility: 'hidden'
                },

                '&::-webkit-scrollbar-thumb:hover': {
                  backgroundColor: theme.color.black300
                }
              },

              'div.simplize-table-sticky-scroll': {
                borderRadius: 12,
                padding: 8,
                cursor: `pointer`,

                '&:hover::-webkit-scrollbar-thumb': {
                  visibility: 'visible'
                },

                '&::-webkit-scrollbar': {
                  width: 8,
                  height: 8
                },

                '&::-webkit-scrollbar-track': {
                  borderRadius: 0
                },

                '&::-webkit-scrollbar-thumb': {
                  borderRadius: 4,
                  backgroundColor: theme.color.black400,
                  visibility: 'hidden'
                },

                '&::-webkit-scrollbar-thumb:hover': {
                  backgroundColor: theme.color.black300
                }
              }
            })
          ]}
          columns={columnData?.map((item) => ({
            ...item,
            title: (
              <SortTableAjax
                title={item?.title}
                key={item?.key}
                sortKey={item?.key}
                rowData={rowData}
                setRowData={setRowData}
                align={item?.align}
              />
            )
          }))}
          data={rowData}
          scroll={{ x: 'max-content' }}
          sticky={{ offsetHeader: 56 }}
        />
      )}
    </>
  )
}

export default TableScreener
