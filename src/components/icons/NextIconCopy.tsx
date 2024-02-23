import React, { SVGProps } from 'react';

export const NextIconCopy = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        width={6}
        height={10}
        viewBox="0 0 6 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.56356 4.62204C5.7938 4.82142 5.79379 5.17858 5.56356 5.37796L0.827327 9.47967C0.503505 9.7601 1.65529e-08 9.53008 3.52778e-08 9.1017L3.9386e-07 0.898298C4.12585e-07 0.469922 0.503505 0.239896 0.827327 0.520334L5.56356 4.62204Z"
          fill="#999999"
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  NextIconCopy.displayName = 'NextIconCopy';
}
