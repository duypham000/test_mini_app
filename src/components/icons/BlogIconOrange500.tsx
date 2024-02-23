import React, { SVGProps } from 'react';

export const BlogIconOrange500 = React.forwardRef<any, SVGProps<SVGSVGElement>>(
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
        <rect
          x={4}
          y={3}
          width={16}
          height={18}
          rx={3}
          stroke="#EC8000"
          strokeWidth={2}
        />
        <path
          d="M8 6.5L13 6.5"
          stroke="#EC8000"
          strokeWidth={2}
          strokeLinecap="round"
        />
        <path
          d="M8 10L16 10"
          stroke="#EC8000"
          strokeWidth={2}
          strokeLinecap="round"
        />
        <path
          d="M8 13.5L16 13.5"
          stroke="#EC8000"
          strokeWidth={2}
          strokeLinecap="round"
        />
        <path
          d="M8 17L16 17"
          stroke="#EC8000"
          strokeWidth={2}
          strokeLinecap="round"
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  BlogIconOrange500.displayName = 'BlogIconOrange500';
}
