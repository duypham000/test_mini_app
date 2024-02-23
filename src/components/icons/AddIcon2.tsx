import React, { SVGProps } from 'react';

export const AddIcon2 = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        width={14}
        height={14}
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width={14} height={14} rx={4} fill="white" fillOpacity="0.1" />
        <path d="M4 7L10 7" stroke="#999999" strokeLinecap="round" />
        <path d="M7 4L7 10" stroke="#999999" strokeLinecap="round" />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  AddIcon2.displayName = 'AddIcon2';
}
