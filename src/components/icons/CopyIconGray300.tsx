import React, { SVGProps } from 'react';

export const CopyIconGray300 = React.forwardRef<any, SVGProps<SVGSVGElement>>(
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
        <g clipPath="url(#clip0_6273_1223)">
          <path
            d="M11 5V3C11 1.89543 10.1046 1 9 1H3C1.89543 1 1 1.89543 1 3V9C1 10.1046 1.89543 11 3 11H5"
            stroke="#999999"
          />
          <rect x={5} y={5} width={10} height={10} rx={2} stroke="#999999" />
        </g>
        <defs>
          <clipPath id="clip0_6273_1223">
            <rect width={16} height={16} fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  CopyIconGray300.displayName = 'CopyIconGray300';
}
