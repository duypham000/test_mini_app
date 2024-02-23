import React, { SVGProps } from 'react';

export const WarningIcon4 = React.forwardRef<any, SVGProps<SVGSVGElement>>(
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
        <circle cx={8} cy={8} r="7.5" stroke="#FFC701" />
        <path d="M8 7.33325L8 11.3333" stroke="#FFC701" strokeLinecap="round" />
        <path
          d="M9 5C9 5.55228 8.55228 6 8 6C7.44772 6 7 5.55228 7 5C7 4.44772 7.44772 4 8 4C8.55228 4 9 4.44772 9 5Z"
          fill="#FFC701"
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  WarningIcon4.displayName = 'WarningIcon4';
}
