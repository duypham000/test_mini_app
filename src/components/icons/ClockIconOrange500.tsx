import React, { SVGProps } from 'react';

export const ClockIconOrange500 = React.forwardRef<
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
      <circle cx={12} cy={12} r={9} stroke="#EC8000" strokeWidth={2} />
      <path
        d="M7.88674 12.0062C7.39703 11.7508 7.20703 11.1469 7.46236 10.6571C7.71769 10.1674 8.32168 9.97742 8.8114 10.2328L12.6277 12.2226C13.1174 12.4779 13.3074 13.0819 13.0521 13.5716C12.7968 14.0613 12.1928 14.2513 11.7031 13.996L7.88674 12.0062Z"
        fill="#EC8000"
      />
      <rect
        x="12.1958"
        y="14.5396"
        width={2}
        height="7.26362"
        rx={1}
        transform="rotate(-134.835 12.1958 14.5396)"
        fill="#EC8000"
      />
    </svg>
  );
});

if (process.env.NODE_ENV !== 'production') {
  ClockIconOrange500.displayName = 'ClockIconOrange500';
}
