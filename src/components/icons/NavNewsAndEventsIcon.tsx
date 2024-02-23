import React, { SVGProps } from 'react';

export const NavNewsAndEventsIcon = React.forwardRef<
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
      <rect x="2.5" y="2.5" width={19} height={19} rx="2.5" stroke="#999999" />
      <path
        d="M6.5 7C6.5 6.72386 6.72386 6.5 7 6.5H10C10.2761 6.5 10.5 6.72386 10.5 7V10C10.5 10.2761 10.2761 10.5 10 10.5H7C6.72386 10.5 6.5 10.2761 6.5 10V7Z"
        stroke="#999999"
      />
      <path
        d="M13.5 7H17.5M13.5 10.5H17.5M6.5 14H17.5M6.5 17.5H17.5"
        stroke="#999999"
        strokeLinecap="round"
      />
    </svg>
  );
});

if (process.env.NODE_ENV !== 'production') {
  NavNewsAndEventsIcon.displayName = 'NavNewsAndEventsIcon';
}
