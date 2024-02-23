import React, { SVGProps } from 'react';

export const ArrowUpIconBlack300 = React.forwardRef<
  any,
  SVGProps<SVGSVGElement>
>((props, ref) => {
  return (
    <svg
      {...props}
      ref={ref}
      width={12}
      height={8}
      viewBox="0 0 12 8"
      stroke="#999999"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1469_816)">
        <path
          d="M10.5 6L6 2L3.75 4L1.5 6"
          strokeWidth={2}
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1469_816">
          <rect
            width={8}
            height={12}
            fill="white"
            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 12 8)"
          />
        </clipPath>
      </defs>
    </svg>
  );
});

if (process.env.NODE_ENV !== 'production') {
  ArrowUpIconBlack300.displayName = 'ArrowUpIconBlack300';
}
