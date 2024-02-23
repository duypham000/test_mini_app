import { useTheme } from '@emotion/react';
import React, { SVGProps } from 'react';

export const CloseIconBlack200 = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    const theme = useTheme();

    return (
      <svg
        {...props}
        ref={ref}
        width={14}
        height={14}
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.28261 7.0001L13.7339 1.54851C14.0887 1.1939 14.0887 0.620557 13.7339 0.265953C13.3793 -0.088651 12.806 -0.088651 12.4514 0.265953L6.99992 5.71755L1.5486 0.265953C1.19384 -0.088651 0.620668 -0.088651 0.266072 0.265953C-0.0886906 0.620557 -0.0886906 1.1939 0.266072 1.54851L5.71739 7.0001L0.266072 12.4517C-0.0886906 12.8063 -0.0886906 13.3797 0.266072 13.7343C0.442789 13.9111 0.675145 14 0.907335 14C1.13953 14 1.37172 13.9111 1.5486 13.7343L6.99992 8.28266L12.4514 13.7343C12.6283 13.9111 12.8605 14 13.0927 14C13.3249 14 13.557 13.9111 13.7339 13.7343C14.0887 13.3797 14.0887 12.8063 13.7339 12.4517L8.28261 7.0001Z"
          fill={theme.color.dc048}
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  CloseIconBlack200.displayName = 'CloseIconBlack200';
}
