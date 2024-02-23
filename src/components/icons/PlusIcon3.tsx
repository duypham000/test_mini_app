import React, { SVGProps } from 'react';

export const PlusIcon3 = React.forwardRef<any, SVGProps<SVGSVGElement>>(
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
        <path d="M8 3V13" stroke="#006CEC" strokeLinecap="round" />
        <path d="M13 8H3" stroke="#006CEC" strokeLinecap="round" />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  PlusIcon3.displayName = 'PlusIcon3';
}
