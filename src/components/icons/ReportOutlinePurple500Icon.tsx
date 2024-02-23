import React, { SVGProps } from 'react';

export const ReportOutlinePurple500Icon = React.forwardRef<
  any,
  SVGProps<SVGSVGElement>
>((props, ref) => {
  return (
    <svg
      {...props}
      ref={ref}
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.5 7.5C2.5 10 3.5 12.5 6.5 12.5C8.5 12.5 11.3333 12.5 13 12.5"
        stroke="#D14AE7"
        strokeLinecap="round"
      />
      <path
        d="M13 8.5C13 6 12 3.5 9 3.5C7 3.5 4.16667 3.5 2.5 3.5"
        stroke="#D14AE7"
        strokeLinecap="round"
      />
      <path
        d="M11.5 10.5L13.5 12.5L11.5 14.5"
        stroke="#D14AE7"
        strokeLinecap="round"
      />
      <path
        d="M4.5 5.5L2.5 3.5L4.5 1.5"
        stroke="#D14AE7"
        strokeLinecap="round"
      />
    </svg>
  );
});

if (process.env.NODE_ENV !== 'production') {
  ReportOutlinePurple500Icon.displayName = 'ReportOutlinePurple500Icon';
}
