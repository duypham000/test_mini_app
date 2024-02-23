import React, { SVGProps } from 'react'

export const XIconRed500 = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        width={16}
        height={16}
        viewBox='0 0 16 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx={8} cy={8} r='7.5' stroke='#E14040' />
        <path d='M5 5L11 11M5 11L11 5' stroke='#E14040' strokeLinecap='round' />
      </svg>
    )
  }
)

if (process.env.NODE_ENV !== 'production') {
  XIconRed500.displayName = 'XIconRed500'
}
