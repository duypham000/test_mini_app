import React, { SVGProps } from 'react';

export const ChartIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        width={16}
        height={16}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x={2} y={10} width={2} height={5} rx={1} fill="#999999" />
        <rect x={7} y={6} width={2} height={9} rx={1} fill="#999999" />
        <rect x={12} y={1} width={2} height={14} rx={1} fill="#999999" />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  ChartIcon.displayName = 'ChartIcon';
}
