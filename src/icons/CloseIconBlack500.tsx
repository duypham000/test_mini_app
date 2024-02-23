import React, { SVGProps } from 'react'

export const CloseIconBlack500 = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        className='MuiSvgIcon-root'
        focusable='false'
        viewBox='0 0 24 24'
        aria-hidden='true'
      >
        <path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z' />
      </svg>
    )
  }
)

if (process.env.NODE_ENV !== 'production') {
  CloseIconBlack500.displayName = 'CloseIconBlack500'
}
