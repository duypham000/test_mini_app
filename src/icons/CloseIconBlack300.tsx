import React, { SVGProps } from 'react'

export const CloseIconBlack300 = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        width={16}
        height={16}
        viewBox='0 0 16 16'
        fill='#999999'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g clipPath='url(#clip0_4060_3511)'>
          <path d='M9.46586 8.01326L15.696 1.78299C16.1014 1.37774 16.1014 0.722499 15.696 0.317246C15.2907 -0.0880077 14.6355 -0.0880077 14.2302 0.317246L7.99992 6.54752L1.76983 0.317246C1.36439 -0.0880077 0.709337 -0.0880077 0.304083 0.317246C-0.101361 0.722499 -0.101361 1.37774 0.304083 1.78299L6.53417 8.01326L0.304083 14.2435C-0.101361 14.6488 -0.101361 15.304 0.304083 15.7093C0.506046 15.9114 0.771596 16.013 1.03696 16.013C1.30232 16.013 1.56768 15.9114 1.76983 15.7093L7.99992 9.47901L14.2302 15.7093C14.4324 15.9114 14.6977 16.013 14.9631 16.013C15.2284 16.013 15.4938 15.9114 15.696 15.7093C16.1014 15.304 16.1014 14.6488 15.696 14.2435L9.46586 8.01326Z' />
        </g>
        <defs>
          <clipPath id='clip0_4060_3511'>
            <rect width={16} height={16} fill='white' />
          </clipPath>
        </defs>
      </svg>
    )
  }
)

if (process.env.NODE_ENV !== 'production') {
  CloseIconBlack300.displayName = 'CloseIconBlack300'
}
