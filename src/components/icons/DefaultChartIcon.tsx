import React, { SVGProps } from 'react';

export const DefaultChartIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        width={16}
        height={16}
        viewBox="0 0 16 16"
        stroke={'#999999'}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.5 13.4998L5.5 7L10.5 9L13.5333 2.5"
          strokeWidth={2}
          strokeLinecap="round"
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  DefaultChartIcon.displayName = 'DefaultChartIcon';
}
