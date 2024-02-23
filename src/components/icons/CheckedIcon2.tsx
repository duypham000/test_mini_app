import React, { SVGProps } from 'react';

export const CheckedIcon2 = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        width={10}
        height={10}
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_17035_619)">
          <path
            d="M0 5.31906L3.42444 8.75004L10 2.18098L9.05597 1.25L3.42444 6.875L0.930956 4.38153L0 5.31906Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_17035_619">
            <rect width={10} height={10} fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  CheckedIcon2.displayName = 'CheckedIcon2';
}
