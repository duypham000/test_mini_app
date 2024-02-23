import React, { SVGProps } from 'react';

export const NextIconGray300 = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        width={6}
        height={8}
        viewBox="0 0 6 8"
        stroke="#A7ADB2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_11760_17571)">
          <path
            d="M1.5 1L4.5 4L3 5.5L1.5 7"
            strokeWidth={2}
            strokeLinecap="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_11760_17571">
            <rect width={6} height={8} fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  NextIconGray300.displayName = 'NextIconGray300';
}
