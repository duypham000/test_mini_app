import React, { SVGProps } from 'react';

export const EmbedIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        width={16}
        height={16}
        viewBox="0 0 16 16"
        stroke="#999999"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 5.5L1.61392 7.91863C1.55809 7.95851 1.55809 8.04149 1.61392 8.08137L5 10.5"
          strokeLinecap="round"
        />
        <path d="M9.5 3.5L6.5 12.5" strokeLinecap="round" />
        <path
          d="M11 5.5L14.3861 7.91863C14.4419 7.95851 14.4419 8.04149 14.3861 8.08137L11 10.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  EmbedIcon.displayName = 'EmbedIcon';
}
