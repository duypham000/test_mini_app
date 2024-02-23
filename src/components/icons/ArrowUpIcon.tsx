import React, { SVGProps } from 'react';

export const ArrowUpIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        width="8"
        height="6"
        viewBox="0 0 8 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_17114_3997)">
          <path
            d="M7 4.5L4 1.5L2.5 3L1 4.5"
            stroke="#999999"
            stroke-width="2"
            stroke-linecap="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_17114_3997">
            <rect
              width="6"
              height="8"
              fill="white"
              transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 8 6)"
            />
          </clipPath>
        </defs>
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  ArrowUpIcon.displayName = 'ArrowUpIcon';
}
