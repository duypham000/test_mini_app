import React, { SVGProps } from 'react';

export const DotIconBlue500 = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        width="6"
        height="6"
        viewBox="0 0 6 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="3" cy="3" r="3" fill="#006CEC" />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  DotIconBlue500.displayName = 'DotIconBlue500';
}
