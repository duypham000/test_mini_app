import React, { SVGProps } from 'react';

export const AddIconWhite500 = React.forwardRef<any, SVGProps<SVGSVGElement>>(
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
        <path d="M8 3L8 13" stroke="white" strokeLinecap="round" />
        <path d="M13 8H3" stroke="white" strokeLinecap="round" />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  AddIconWhite500.displayName = 'AddIconWhite500';
}
