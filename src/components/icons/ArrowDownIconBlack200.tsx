import React, { SVGProps } from 'react';

export const ArrowDownIconBlack200 = React.forwardRef<
  any,
  SVGProps<SVGSVGElement>
>((props, ref) => {
  return (
    <svg
      {...props}
      ref={ref}
      width={16}
      height={11}
      viewBox="0 0 16 11"
      stroke="#E6E6E6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14 2L8 8L2 2" strokeWidth={3} strokeLinecap="round" />
    </svg>
  );
});

if (process.env.NODE_ENV !== 'production') {
  ArrowDownIconBlack200.displayName = 'ArrowDownIconBlack200';
}
