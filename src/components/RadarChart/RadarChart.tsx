import RadarCanvas from './RadarCanvas'
// import { CopyBlock, ScoreLabel } from './RadarTooltip/styled';
import Slider from './RadarSlider/Slider'
import {
  LockOverlay,
  MediaWrapper,
  RotateLoading,
  RotateLoadingContainer,
  SnowflakeWrapper
} from './styled'

// import Router from 'next/router'
import React from 'react'
import If from './If'
// import LockMemberIcon from "@/components/Membership/LockMemberIcon/LockMemberIcon"
// import { MembershipFeature } from "@/constant/membership"
export enum SnowflakeType {
  PORTFOLIO,
  WATCHLIST,
  COMPANY,
  TOC
}

export interface SnowflakeProps {
  type?: SnowflakeType
  anchors?: number[]
  points?: number[]
  isDark?: boolean
  routes?: string[]
  width?: number
  dark?: boolean
  light?: boolean
  editable?: boolean
  disabled?: boolean
  tooltip?: boolean
  description?: string
  disableLabel?: boolean
  currentHoldingCount?: number
  loading?: boolean
  detailedPoints?: AnalysisChecks
  handleClick?: (route: string) => void
  handleChange?: (points: number[]) => void
  executiveData?: any
  showLock?: any
}

interface State {
  selectedIndex: number
}

export enum Mark {
  PASS,
  FAIL
}

export enum SnowflakeIndices {
  VALUE,
  FUTURE,
  PAST,
  HEALTH,
  DIVIDEND
}

export interface AnalysisChecks {
  [SnowflakeIndices.VALUE]: Mark[]
  [SnowflakeIndices.FUTURE]: Mark[]
  [SnowflakeIndices.PAST]: Mark[]
  [SnowflakeIndices.HEALTH]: Mark[]
  [SnowflakeIndices.DIVIDEND]: Mark[]
}

// const companyDescriptions = [
//   'Is the company undervalued compared to its fair value and peers?',
//   'How is the company forecast to perform in the next 1-3 years?',
//   'How has the company performed over the past 5 years?',
//   'Does the company have strong financial health and manageable debt?',
//   'Does the company pay a good, reliable and sustainable dividend?',
// ];

// const companyReportAnchors = ['3', '4', '5', '6', '7'];
// const portfolioAnchors = ['6', '7', '8', '9', '10'];
class RadarChart extends React.PureComponent<SnowflakeProps, State> {
  static defaultProps = {
    dark: false,
    light: false,
    routes: [],
    editable: false,
    disabled: false,
    description: '',
    disableLabel: false,
    tooltip: false,
    points: [1, 1, 1, 1, 1],
    width: 300,
    loading: false,
    showLock: false,
    handleClick: () => true,
    handleChange: () => null
  }

  state = {
    selectedIndex: -1
  }

  handleClickChart = (i: any) => {
    const {
      handleClick,
      routes
      //  theme
    } = this.props
    // const screenWidth = theme?.lgMinRaw;

    if (routes && routes.length) {
      handleClick && handleClick(routes[i])
    }
  }

  // redirectWithIndex = (index: number) => {
  //   switch (index) {
  //     case 0:
  //       Router.push(
  //         `${UrlInternal.COMPANY_PAGE}/${Router.query?.ticker}/phan-tich#dinh-gia-co-phieu-$`
  //       )
  //       break
  //     case 1:
  //       Router.push(
  //         `${UrlInternal.COMPANY_PAGE}/${Router.query?.ticker}/phan-tich#du-bao-tang-truong-$`
  //       )
  //       break
  //     case 2:
  //       Router.push(
  //         `${UrlInternal.COMPANY_PAGE}/${Router.query?.ticker}/phan-tich#hieu-qua-hoat-dong-$`
  //       )
  //       break
  //     case 3:
  //       Router.push(
  //         `${UrlInternal.COMPANY_PAGE}/${Router.query?.ticker}/phan-tich#suc-khoe-tai-chinh-$`
  //       )
  //       break
  //     case 4:
  //       Router.push(
  //         `${UrlInternal.COMPANY_PAGE}/${Router.query?.ticker}/phan-tich#co-tuc-$`
  //       )
  //       break
  //     default:
  //       break
  //   }
  // }

  render() {
    // const { handleClickChart } = this;

    const {
      handleChange
      // executiveData
    } = this.props

    const { selectedIndex } = this.state

    const {
      dark,
      light,
      width,
      points,
      // detailedPoints,
      disabled,
      disableLabel,
      tooltip,
      editable,
      type,
      loading,
      showLock,
      isDark
      // currentHoldingCount,
    } = this.props
    const enableTooltip = tooltip && !editable && !disabled

    // let pointsMinusOne: number[] = [1, 1, 1, 1, 1];
    // try {
    //   // sometimes `points` is `null`
    //   pointsMinusOne = (points as number[]).map((point) => point - 1);
    // } catch (e) {
    //   // noop
    // }
    // const portfolioDescriptions = [
    //   `This portfolios average Value score from ${currentHoldingCount} holdings`,
    //   `This portfolios average Future Growth score from ${currentHoldingCount} holdings`,
    //   `This portfolios average Past Performance score from ${currentHoldingCount} holdings`,
    //   `This portfolios average Financial Health score from ${currentHoldingCount} holdings`,
    //   `This portfolios average Dividend score from ${currentHoldingCount} holdings`,
    // ];

    return (
      <SnowflakeWrapper style={{ width: width, height: width }}>
        <MediaWrapper>
          <RadarCanvas
            isDark={isDark}
            dark={dark}
            width={width}
            light={light}
            points={points as number[]}
            disabled={disabled}
            disableLabel={disableLabel}
          />
          {loading && (
            <RotateLoadingContainer style={{ width: width, height: width }}>
              <RotateLoading />
            </RotateLoadingContainer>
          )}
          {showLock && (
            <RotateLoadingContainer
              className={showLock ? 'isLocked' : ''}
              style={{ width: width, height: width }}
            >
              <LockOverlay>
                {/* <LockMemberIcon
                  type={'hover'}
                  isActive={!showLock}
                  featureKey={MembershipFeature.LOC_CO_PHIEU_NANG_CAO}
                  iconStyle={{ width: 25, height: 25 }}
                /> */}
              </LockOverlay>
            </RotateLoadingContainer>
          )}
          <If
            conditions={{
              showCompanyTooltips:
                enableTooltip === true && type === SnowflakeType.COMPANY,
              showTOCSnowflake:
                enableTooltip === true && type === SnowflakeType.TOC,
              showPortfolioTooltips:
                enableTooltip === true &&
                (type === SnowflakeType.PORTFOLIO ||
                  type === SnowflakeType.WATCHLIST)
            }}
          >
            {/* {{
              showCompanyTooltips: (
                <RadarTooltip
                  onClick={(index) => this.redirectWithIndex(index)}
                />
              ),
              showTOCSnowflake: (
                <RadarTooltip
                  onClick={(index) => this.redirectWithIndex(index)}
                />
              ),
              showPortfolioTooltips: (
                <RadarTooltip
                  onClick={(index) => this.redirectWithIndex(index)}
                />
              )
            }} */}
          </If>
          {editable && !tooltip && !disabled && (
            <Slider
              points={points as number[]}
              selectedIndex={selectedIndex}
              onChange={handleChange}
              dimension={width}
            />
          )}
        </MediaWrapper>
      </SnowflakeWrapper>
    )
  }
}

export default RadarChart
