import React, { SVGProps } from 'react';

export const AddIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        width={16}
        height={16}
        viewBox="0 0 16 16"
        fill="none"
        stroke="#006CEC"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8 3V13" strokeLinecap="round" />
        <path d="M13 8H3" strokeLinecap="round" />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  AddIcon.displayName = 'AddIcon';
}
