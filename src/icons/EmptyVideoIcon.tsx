import React, { SVGProps } from 'react'

export const EmptyVideoIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        ref={ref}
        width={64}
        height={64}
        viewBox='0 0 64 64'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
      >
        <path
          d='M31.9573 0C22.6524 0 15.0823 7.57012 15.0823 16.875C15.0823 26.1799 22.6524 33.75 31.9573 33.75C41.2621 33.75 48.8323 26.1799 48.8323 16.875C48.8323 7.57012 41.2621 0 31.9573 0Z'
          fill='#999999'
        />
        <path
          d='M52.953 44.7744C48.333 40.0834 42.2084 37.5 35.7073 37.5H28.2073C21.7063 37.5 15.5815 40.0834 10.9615 44.7744C6.36415 49.4424 3.83228 55.6041 3.83228 62.125C3.83228 63.1605 4.67178 64 5.70728 64H58.2073C59.2428 64 60.0823 63.1605 60.0823 62.125C60.0823 55.6041 57.5504 49.4424 52.953 44.7744Z'
          fill='#999999'
        />
      </svg>
    )
  }
)

if (process.env.NODE_ENV !== 'production') {
  EmptyVideoIcon.displayName = 'EmptyVideoIcon'
}
