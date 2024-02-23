import React, { SVGProps } from 'react';

export const CaretUpIcon2 = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        width={28}
        height={17}
        viewBox="0 0 28 17"
        stroke="#999999"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M26 15L14 3L2 15" strokeWidth={4} strokeLinecap="round" />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  CaretUpIcon2.displayName = 'CaretUpIcon2';
}
