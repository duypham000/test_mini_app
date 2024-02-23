import React, { SVGProps } from 'react';

export const ArrowDownIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        width={8}
        height={6}
        viewBox="0 0 8 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_17114_3993)">
          <path
            d="M7 1.5L4 4.5L2.5 3L1 1.5"
            stroke="#999999"
            strokeWidth={2}
            strokeLinecap="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_17114_3993">
            <rect
              width={6}
              height={8}
              fill="white"
              transform="translate(8) rotate(90)"
            />
          </clipPath>
        </defs>
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  ArrowDownIcon.displayName = 'ArrowDownIcon';
}
