import React, { SVGProps } from 'react';

export const NextIcon32x50 = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        width={32}
        height={50}
        viewBox="0 0 32 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 3L26 25L4 47"
          stroke="#999999"
          strokeWidth={6}
          strokeLinecap="round"
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  NextIcon32x50.displayName = 'NextIcon32x50';
}
