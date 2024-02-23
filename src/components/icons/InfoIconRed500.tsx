import React, { SVGProps } from 'react';

export const InfoIconRed500 = React.forwardRef<any, SVGProps<SVGSVGElement>>(
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
        <circle cx={6} cy={6} r="5.5" stroke="#E14040" />
        <path d="M6 5.5L6 8.5" stroke="#E14040" strokeLinecap="round" />
        <path
          d="M6.75 3.75C6.75 4.16421 6.41421 4.5 6 4.5C5.58579 4.5 5.25 4.16421 5.25 3.75C5.25 3.33579 5.58579 3 6 3C6.41421 3 6.75 3.33579 6.75 3.75Z"
          fill="#E14040"
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  InfoIconRed500.displayName = 'InfoIconRed500';
}
