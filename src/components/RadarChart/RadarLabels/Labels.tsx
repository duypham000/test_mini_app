import React from 'react'
import {
  SvgContainer,
  ValueLabelGroup,
  DividendLabelGroup,
  FutureLabelGroup,
  HealthLabelGroup,
  PastLabelGroup
} from './styled'
import { Theme } from '@/themes/theme'

interface Props {
  dimension: number
}

const Labels: React.FC<Props> = ({ dimension }) => {
  return (
    <SvgContainer
      width={dimension}
      height={dimension}
      viewBox='0 0 241 231'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <ValueLabelGroup>
        <text
          transform='translate(98,10)'
          fontSize='0.75em'
          css={(theme: Theme) => ({
            fill: theme.color.dc015
          })}
        >
          <tspan x={0} dy='0'>
            Định giá
          </tspan>
        </text>
      </ValueLabelGroup>
      <DividendLabelGroup>
        <text
          transform='translate(10,105) rotate(-73)'
          fontSize='0.75em'
          css={(theme: Theme) => ({
            fill: theme.color.dc015
          })}
        >
          <tspan x={0} dy='0'>
            Cổ tức
          </tspan>
        </text>
      </DividendLabelGroup>
      <FutureLabelGroup>
        <text
          transform='translate(215,53) rotate(73)'
          fontSize='0.75em'
          css={(theme: Theme) => ({
            fill: theme.color.dc015
          })}
        >
          <tspan x={0} dy='0'>
            Tăng trưởng
          </tspan>
        </text>
      </FutureLabelGroup>
      <HealthLabelGroup>
        <text
          x={0}
          y={0}
          transform='translate(27,200) rotate(38)'
          fontSize='0.75em'
          css={(theme: Theme) => ({
            fill: theme.color.dc015
          })}
        >
          <tspan x={0} dy='0'>
            Sức khỏe
          </tspan>
          <tspan x={0} dy='15'>
            tài chính
          </tspan>
        </text>
      </HealthLabelGroup>
      <PastLabelGroup>
        <text
          x={0}
          y={0}
          transform='translate(172,230) rotate(-38)'
          fontSize='0.75em'
          css={(theme: Theme) => ({
            fill: theme.color.dc015
          })}
        >
          <tspan x={0} dy='0'>
            Hiệu quả{' '}
          </tspan>
          <tspan x={0} dy='15'>
            hoạt động
          </tspan>
        </text>
      </PastLabelGroup>
    </SvgContainer>
  )
}

export default Labels
