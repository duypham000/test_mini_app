import React, { SVGProps } from 'react';

export const CopyIconBlack300 = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        width={16}
        height={16}
        viewBox="0 0 16 16"
        stroke="#999999"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_5550_403)">
          <path d="M11 5V3C11 1.89543 10.1046 1 9 1H3C1.89543 1 1 1.89543 1 3V9C1 10.1046 1.89543 11 3 11H5" />
          <rect x={5} y={5} width={10} height={10} rx={2} />
        </g>
        <defs>
          <clipPath id="clip0_5550_403">
            <rect width={16} height={16} fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  CopyIconBlack300.displayName = 'CopyIconBlack300';
}
