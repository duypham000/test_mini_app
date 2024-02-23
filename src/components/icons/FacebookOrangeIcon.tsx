import React, { SVGProps } from 'react';

export const FacebookOrangeIcon = React.forwardRef<
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
      <circle cx={12} cy={12} r={12} fill="#EC8000" />
      <path
        d="M13 9.5V7.5C13 6.948 13.448 6.5 14 6.5H15V4H13C11.343 4 10 5.343 10 7V9.5H8V12H10V20H13V12H15L16 9.5H13Z"
        fill="white"
      />
    </svg>
  );
});

if (process.env.NODE_ENV !== 'production') {
  FacebookOrangeIcon.displayName = 'FacebookOrangeIcon';
}
