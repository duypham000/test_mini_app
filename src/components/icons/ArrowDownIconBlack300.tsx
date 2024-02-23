import React, { SVGProps } from 'react';

export const ArrowDownIconBlack300 = React.forwardRef<
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
      <g clipPath="url(#clip0_1425_336)">
        <path
          d="M10.5 2L6 6L3.75 4L1.5 2"
          strokeWidth={2}
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1425_336">
          <rect
            width={8}
            height={12}
            fill="white"
            transform="translate(12) rotate(90)"
          />
        </clipPath>
      </defs>
    </svg>
  );
});

if (process.env.NODE_ENV !== 'production') {
  ArrowDownIconBlack300.displayName = 'ArrowDownIconBlack300';
}
