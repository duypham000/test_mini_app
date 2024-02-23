import React, { SVGProps } from 'react';

export const GoUpIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx={12} cy={12} r={12} fill="#A73BB9" />
        <path
          d="M7 15L9.67301 11.5402L12.8806 13.8467L17 9M17 9L13.6353 9.72601M17 9V12.6301"
          stroke="white"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  GoUpIcon.displayName = 'GoUpIcon';
}
