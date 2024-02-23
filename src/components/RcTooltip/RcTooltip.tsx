import Tooltip from 'rc-tooltip'
import { TooltipProps } from 'rc-tooltip/lib/Tooltip'
import React from 'react'

const RcTooltip = React.forwardRef<any, TooltipProps>((props, ref) => (
  <Tooltip
    prefixCls='simplize-tooltip'
    arrowContent={<span className='simplize-tooltip-arrow-content' />}
    ref={ref}
    {...props}
  />
))

export type { TooltipProps }

if (process.env.NODE_ENV !== 'production') {
  RcTooltip.displayName = 'RcTooltip'
}

export default RcTooltip
