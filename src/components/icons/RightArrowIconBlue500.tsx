import React, { SVGProps } from 'react';

export const RightArrowIconBlue500 = React.forwardRef<
  any,
  SVGProps<SVGSVGElement>
>((props, ref) => {
  return (
    <svg
      {...props}
      ref={ref}
      width={6}
      height={8}
      viewBox="0 0 6 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.5 1L4.5 4L3 5.5L1.5 7"
        stroke="#006CEC"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  );
});

if (process.env.NODE_ENV !== 'production') {
  RightArrowIconBlue500.displayName = 'RightArrowIconBlue500';
}
