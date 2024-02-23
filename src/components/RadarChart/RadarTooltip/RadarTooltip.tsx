import type { FC, ReactNode } from 'react'
import { Container, SnowflakeSlice } from './styled'

export enum Mark {
  PASS,
  FAIL
}

export interface AnalysisCheck {
  mark: Mark
  hash?: string
  title: string
  description: string
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

type RenderProp = (score: number) => ReactNode

interface Props {
  onClick?: (index: SnowflakeIndices) => void
  hasHoverInfo?: boolean
  points?: number[]
  anchors?: string[]
  descriptions?: string[]
  detailedPoints?: AnalysisChecks
  children?: RenderProp
  data?: any
}

const RadarTooltip: FC<Props> = (props) => {
  const {
    // points,
    // anchors,
    // descriptions,
    //hasHoverInfo,
    //detailedPoints,
    onClick
    //children,
  } = props
  /*const descriptionOrNull = (description: ReactNode) => {
    if (hasHoverInfo) {
      return description;
    }
    return null;
  };

  const trackHover = (trackingProp: string) => () => {
    /!*trackEvent({
      subject: 'snowflake',
      action: 'hover',
      properties: trackingProp,
    });*!/
  };*/

  const clickHandler = (_: string, index: SnowflakeIndices) => () => {
    if (onClick) {
      onClick(index)
      /* trackEvent({
         subject: 'snowflake',
         action: 'click',
         properties: trackingProp,
       });*/
    }
  }

  /*const getDetailedScore = (index: SnowflakeIndices) => {
    if (detailedPoints) {
      return detailedPoints[index];
    }
    return [Mark.FAIL, Mark.FAIL, Mark.FAIL, Mark.FAIL, Mark.FAIL, Mark.FAIL];
  };*/

  return (
    <Container>
      <svg
        width='100%'
        height='100%'
        viewBox='0 0 228 228'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={'tooltip-container'}
      >
        <SnowflakeSlice
          onClick={clickHandler('value', SnowflakeIndices.VALUE)}
          d='M46.9925 21.772C66.4691 7.62147 89.9255 1.11925e-05 114 0C138.074 -1.11925e-05 161.531 7.62143 181.007 21.772L114 114L46.9925 21.772Z'
        />
        <SnowflakeSlice
          onClick={clickHandler('future', SnowflakeIndices.FUTURE)}
          d='M181.008 21.7721C200.484 35.9227 214.981 55.8759 222.42 78.7721C229.86 101.668 229.86 126.332 222.42 149.228L114 114L181.008 21.7721Z'
        />
        <SnowflakeSlice
          onClick={clickHandler('past', SnowflakeIndices.PAST)}
          d='M222.42 149.228C214.981 172.124 200.484 192.077 181.008 206.228C161.531 220.379 138.074 228 114 228L114 114L222.42 149.228Z'
        />
        <SnowflakeSlice
          onClick={clickHandler('health', SnowflakeIndices.HEALTH)}
          d='M114 228C89.9256 228 66.4691 220.379 46.9925 206.228C27.5158 192.077 13.019 172.124 5.57955 149.228L114 114L114 228Z'
        />
        <SnowflakeSlice
          onClick={clickHandler('dividend', SnowflakeIndices.DIVIDEND)}
          d='M5.57956 149.228C-1.85985 126.332 -1.85985 101.668 5.57956 78.7721C13.019 55.8759 27.5159 35.9226 46.9925 21.772L114 114L5.57956 149.228Z'
        />
      </svg>
    </Container>
  )
}

RadarTooltip.defaultProps = {
  hasHoverInfo: true
}
export default RadarTooltip
