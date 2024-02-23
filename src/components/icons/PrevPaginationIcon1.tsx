import React, { SVGProps } from 'react';

export const PrevPaginationIcon1 = React.forwardRef<
  any,
  SVGProps<SVGSVGElement>
>((props, ref) => {
  return (
    <svg
      {...props}
      ref={ref}
      width={8}
      height={8}
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#A7ADB2"
    >
      <g clipPath="url(#clip0_11690_28426)">
        <path d="M7 1L4 4L7 7" strokeLinecap="round" />
        <path d="M4 1L1 4L4 7" strokeLinecap="round" />
      </g>
      <defs>
        <clipPath id="clip0_11690_28426">
          <rect width={8} height={8} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
});

if (process.env.NODE_ENV !== 'production') {
  PrevPaginationIcon1.displayName = 'PrevPaginationIcon1';
}
