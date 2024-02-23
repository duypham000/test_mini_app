import React, { SVGProps } from 'react';

export const AddIcon3 = React.forwardRef<any, SVGProps<SVGSVGElement>>(
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
        <rect width={16} height={16} rx={4} fill="#006CEC" fillOpacity="0.1" />
        <path d="M5 8L11 8" stroke="#006CEC" strokeLinecap="round" />
        <path d="M8 5L8 11" stroke="#006CEC" strokeLinecap="round" />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  AddIcon3.displayName = 'AddIcon3';
}
