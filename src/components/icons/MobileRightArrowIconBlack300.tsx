import React, { SVGProps } from 'react';

export const MobileRightArrowIconBlack300 = React.forwardRef<
  any,
  SVGProps<SVGSVGElement>
>((props, ref) => {
  return (
    <svg
      {...props}
      ref={ref}
      width={11}
      height={16}
      viewBox="0 0 11 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 2L8 8L2 14"
        stroke="#E6E6E6"
        strokeWidth={3}
        strokeLinecap="round"
      />
    </svg>
  );
});

if (process.env.NODE_ENV !== 'production') {
  MobileRightArrowIconBlack300.displayName = 'MobileRightArrowIconBlack300';
}
