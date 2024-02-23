import React, { SVGProps } from 'react';

export const DotIconBlack300 = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        width="6"
        height="6"
        viewBox="0 0 6 6"
        fill="#999999"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="3" cy="3" r="3" />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  DotIconBlack300.displayName = 'DotIconBlack300';
}
