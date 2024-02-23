import React, { SVGProps } from 'react';

export const StockAnalysisIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx={12} cy={12} r={12} fill="#A73BB9" />
        <path
          d="M7 17L9.5 12.5L13.5 14.5L17 7M17 7L14 8M17 7L18 10"
          stroke="white"
          strokeWidth={2}
          strokeLinecap="round"
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  StockAnalysisIcon.displayName = 'StockAnalysisIcon';
}
