import React, { SVGProps } from 'react';

export const WarningIcon5 = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        viewBox="0 0 16 16"
        fill="none"
      >
        <circle cx={8} cy={8} r="6.5" stroke="#999999" />
        <path d="M8 7.4165L8 10.9165" stroke="#999999" strokeLinecap="round" />
        <path
          d="M8.875 5.375C8.875 5.85825 8.48325 6.25 8 6.25C7.51675 6.25 7.125 5.85825 7.125 5.375C7.125 4.89175 7.51675 4.5 8 4.5C8.48325 4.5 8.875 4.89175 8.875 5.375Z"
          fill="#999999"
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  WarningIcon5.displayName = 'WarningIcon5';
}
