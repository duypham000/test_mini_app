import React, { SVGProps } from 'react';

export const ComputerIconOrange500 = React.forwardRef<
  any,
  SVGProps<SVGSVGElement>
>((props, ref) => {
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
        x={3}
        y={4}
        width={18}
        height={12}
        rx={1}
        stroke="#EC8000"
        strokeWidth={2}
      />
      <rect x={8} y={19} width={8} height={2} rx={1} fill="#EC8000" />
      <path d="M11 17H13L14 19H10L11 17Z" fill="#EC8000" />
    </svg>
  );
});

if (process.env.NODE_ENV !== 'production') {
  ComputerIconOrange500.displayName = 'ComputerIconOrange500';
}
