import React, { SVGProps } from 'react';

export const SmallRightArrowIconBlack300 = React.forwardRef<
  any,
  SVGProps<SVGSVGElement>
>((props, ref) => {
  return (
    <svg
      {...props}
      ref={ref}
      width={14}
      height={18}
      viewBox="0 0 14 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 3L10 9L4 15"
        stroke="#999999"
        strokeWidth={3}
        strokeLinecap="round"
      />
    </svg>
  );
});

if (process.env.NODE_ENV !== 'production') {
  SmallRightArrowIconBlack300.displayName = 'SmallRightArrowIconBlack300';
}
