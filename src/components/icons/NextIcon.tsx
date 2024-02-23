import React, { SVGProps } from 'react';

export const NextIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        width={8}
        height={12}
        viewBox="0 0 8 12"
        stroke="#999999"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 1L6 6L1 11" strokeWidth={2} strokeLinecap="round" />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  NextIcon.displayName = 'NextIcon';
}
