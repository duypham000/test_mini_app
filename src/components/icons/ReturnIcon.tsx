import React, { SVGProps } from 'react';

export const ReturnIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={19}
        height={32}
        viewBox="0 0 19 32"
        fill="none"
      >
        <path
          d="M16 3L4 16L16 29"
          stroke="#999999"
          strokeWidth={5}
          strokeLinecap="round"
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  ReturnIcon.displayName = 'ReturnIcon';
}
