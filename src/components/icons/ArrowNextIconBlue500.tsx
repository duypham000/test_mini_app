import React, { SVGProps } from 'react';

export const ArrowNextIconBlue500 = React.forwardRef<
  any,
  SVGProps<SVGSVGElement>
>((props, ref) => {
  return (
    <svg
      {...props}
      ref={ref}
      width={10}
      height={15}
      viewBox="0 0 10 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_260_259)">
        <path
          d="M2 2L7 7.5L2 13"
          stroke="#006CEC"
          strokeWidth={3}
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_260_259">
          <rect width={10} height={15} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
});

if (process.env.NODE_ENV !== 'production') {
  ArrowNextIconBlue500.displayName = 'ArrowNextIconBlue500';
}
