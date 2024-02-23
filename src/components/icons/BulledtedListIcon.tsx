import React, { SVGProps } from 'react';

export const BulledtedListIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="#999999"
        stroke="#999999"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx={4} cy={6} r={2} />
        <circle cx={4} cy={12} r={2} />
        <circle cx={4} cy={18} r={2} />
        <path d="M9 6H21" strokeWidth={2} strokeLinecap="round" />
        <path d="M9 12H21" strokeWidth={2} strokeLinecap="round" />
        <path d="M9 18H21" strokeWidth={2} strokeLinecap="round" />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  BulledtedListIcon.displayName = 'BulledtedListIcon';
}
