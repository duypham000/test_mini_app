import React, { SVGProps } from 'react';

export const NextPaginationIcon1 = React.forwardRef<
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
      stroke="#A7ADB2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_11690_28423)">
        <path d="M1 1L4 4L1 7" strokeLinecap="round" />
        <path d="M4 1L7 4L4 7" strokeLinecap="round" />
      </g>
      <defs>
        <clipPath id="clip0_11690_28423">
          <rect
            width={8}
            height={8}
            fill="white"
            transform="matrix(-1 0 0 1 8 0)"
          />
        </clipPath>
      </defs>
    </svg>
  );
});

if (process.env.NODE_ENV !== 'production') {
  NextPaginationIcon1.displayName = 'NextPaginationIcon1';
}
