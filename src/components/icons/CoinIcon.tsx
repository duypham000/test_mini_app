import React, { SVGProps } from 'react';

export const CoinIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        width={16}
        height={16}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z"
          fill="#FFC701"
        />
        <path
          d="M8.00161 13.396C10.9818 13.396 13.3978 10.9801 13.3978 7.9999C13.3978 5.01969 10.9818 2.60376 8.00161 2.60376C5.0214 2.60376 2.60547 5.01969 2.60547 7.9999C2.60547 10.9801 5.0214 13.396 8.00161 13.396Z"
          fill="#EC8000"
        />
        <path
          d="M7.99868 3.85327L9.22589 6.33987L11.9699 6.73862L9.98434 8.67418L10.4531 11.4071L7.99868 10.1168L5.54426 11.4071L6.01301 8.67418L4.02734 6.73862L6.77147 6.33987L7.99868 3.85327Z"
          fill="#FFC701"
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  CoinIcon.displayName = 'CoinIcon';
}
