import React from 'react'
import { css } from '@emotion/react'

interface Props {
  children: any
}
const VdscLayout: React.FC<Props> = (props): JSX.Element => {
  const { children } = props
  return (
    <div css={{ margin: '28px 20px', minHeight: '100vh' }}>
      <div
        css={() =>
          css({
            paddingBottom: 48
          })
        }
      >
        {children}
      </div>
    </div>
  )
}

export default VdscLayout
