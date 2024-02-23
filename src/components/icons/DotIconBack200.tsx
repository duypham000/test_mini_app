import React, { SVGProps } from 'react';

export const DotIconBack200 = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={6}
        height={6}
        viewBox="0 0 6 6"
        fill="none"
      >
        <circle cx={3} cy={3} r={3} fill="#E6E6E6" />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  DotIconBack200.displayName = 'DotIconBack200';
}
