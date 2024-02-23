import React, { SVGProps } from 'react';

export const EyeIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
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
          d="M8.00033 4C4.33366 4 1.66699 7 1.66699 8C1.66699 9 4.33366 12 8.00033 12C11.667 12 14.3337 9 14.3337 8C14.3337 7 11.667 4 8.00033 4Z"
          stroke="#999999"
          strokeLinecap="round"
        />
        <circle cx={8} cy={8} r={2} stroke="#999999" />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  EyeIcon.displayName = 'EyeIcon';
}
