import React from 'react'
import { base, cirSize } from './styles'

export interface Props {
  size?: 'small' | 'default' | 'large'
  color?: 'red' | 'green' | 'blue' | 'yellow' | 'purple' | 'orange'
}

const Spin: React.FC<Props> = (props): JSX.Element => {
  const { size = 'default' } = props

  return <div css={[base, cirSize[size]]}></div>
}

export default Spin
