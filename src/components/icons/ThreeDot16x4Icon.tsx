import React, { SVGProps } from 'react';

export const ThreeDot16x4Icon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        width={16}
        height={4}
        viewBox="0 0 16 4"
        fill="#999999"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx={2} cy={2} r={2} />
        <circle cx={8} cy={2} r={2} />
        <circle cx={14} cy={2} r={2} />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  ThreeDot16x4Icon.displayName = 'ThreeDot16x4Icon';
}
