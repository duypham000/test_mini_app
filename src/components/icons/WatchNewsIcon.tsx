import React, { SVGProps } from 'react';

export const WatchNewsIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        width={24}
        height={24}
        viewBox="0 0 24 24"
        stroke="#999999"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.5 13L13.5 2.5L12.5 10.5L19.5 11L10.5 21.5L11.5 13.5L4.5 13Z"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  WatchNewsIcon.displayName = 'WatchNewsIcon';
}
