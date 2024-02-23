import React, { SVGProps } from 'react';

export const CopyIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
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
        <rect x="2.5" y="3.5" width={9} height={11} rx="1.5" stroke="#006CEC" />
        <path
          d="M5.5 1.5H12C13 1.5 13.5 2 13.5 3C13.5 4.2 13.5 9.33333 13.5 11.5"
          stroke="#006CEC"
          strokeLinecap="round"
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  CopyIcon.displayName = 'CopyIcon';
}
