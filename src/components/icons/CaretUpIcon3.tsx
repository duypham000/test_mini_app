import React, { SVGProps } from 'react';

export const CaretUpIcon3 = React.forwardRef<any, SVGProps<SVGSVGElement>>(
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
          d="M14 11L8 5L2 11"
          stroke="#999999"
          strokeWidth={2}
          strokeLinecap="round"
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  CaretUpIcon3.displayName = 'CaretUpIcon3';
}
