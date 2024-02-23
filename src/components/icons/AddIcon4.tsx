import React, { SVGProps } from 'react';

export const AddIcon4 = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx={12} cy={12} r="9.5" stroke="#006CEC" />
        <path d="M6 12H18M12 6V18" stroke="#006CEC" strokeLinecap="round" />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  AddIcon4.displayName = 'AddIcon4';
}
