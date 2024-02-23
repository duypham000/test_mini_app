import React, { SVGProps } from 'react';

export const ThreeDotIcon2 = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx={3} cy={10} r="1.5" stroke="#999999" />
        <circle cx={10} cy={10} r="1.5" stroke="#999999" />
        <circle cx={17} cy={10} r="1.5" stroke="#999999" />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  ThreeDotIcon2.displayName = 'ThreeDotIcon2';
}
