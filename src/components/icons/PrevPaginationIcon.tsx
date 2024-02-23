import React, { SVGProps } from 'react';

export const PrevPaginationIcon = React.forwardRef<
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
      stroke="#A7ADB2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4.5 1L1.5 4L4.5 7" strokeLinecap="round" />
    </svg>
  );
});

if (process.env.NODE_ENV !== 'production') {
  PrevPaginationIcon.displayName = 'PrevPaginationIcon';
}
