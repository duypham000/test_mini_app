import React, { SVGProps } from 'react';

export const NavOverviewActiveIcon = React.forwardRef<
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
      <rect x="2.5" y="2.5" width={19} height={19} rx="2.5" stroke="#006CEC" />
      <path
        d="M6.5 7H17.5M6.5 10.5H17.5M6.5 14H17.5M6.5 17.5H13.5"
        stroke="#006CEC"
        strokeLinecap="round"
      />
    </svg>
  );
});

if (process.env.NODE_ENV !== 'production') {
  NavOverviewActiveIcon.displayName = 'NavOverviewActiveIcon';
}
