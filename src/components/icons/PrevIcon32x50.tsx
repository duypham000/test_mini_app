import React, { SVGProps } from 'react';

export const PrevIcon32x50 = React.forwardRef<any, SVGProps<SVGSVGElement>>(
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
          d="M28 3L6 25L28 47"
          stroke="#999999"
          // stroke="#4D4D4D"
          strokeWidth={6}
          strokeLinecap="round"
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  PrevIcon32x50.displayName = 'PrevIcon32x50';
}
