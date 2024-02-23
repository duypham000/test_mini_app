import React, { SVGProps } from 'react';

export const PlusIconGray100 = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        width={12}
        height={12}
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M6 2.25V9.75" stroke="white" strokeLinecap="round" />
        <path d="M9.75 6L2.25 6" stroke="white" strokeLinecap="round" />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  PlusIconGray100.displayName = 'PlusIconGray100';
}
