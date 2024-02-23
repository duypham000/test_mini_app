import React, { SVGProps } from 'react';

export const StockAdditionIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 2V18"
          stroke="#999999"
          strokeWidth={2}
          strokeLinecap="round"
        />
        <path
          d="M2 10H18"
          stroke="#999999"
          strokeWidth={2}
          strokeLinecap="round"
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  StockAdditionIcon.displayName = 'StockAdditionIcon';
}
