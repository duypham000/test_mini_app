import React, { SVGProps } from 'react';

export const CheckIconGreen500 = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
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
        <circle cx={12} cy={12} r={12} fill="#25B770" />
        <path
          d="M10.4633 16.9576C10.338 17.0851 10.1671 17.1562 9.98953 17.1562C9.81197 17.1562 9.64103 17.0851 9.51575 16.9576L5.732 13.1283C5.33933 12.7309 5.33933 12.0866 5.732 11.69L6.20578 11.2105C6.59858 10.8131 7.23458 10.8131 7.62725 11.2105L9.98953 13.601L16.3728 7.14175C16.7655 6.74442 17.4022 6.74442 17.7942 7.14175L18.268 7.62129C18.6607 8.01862 18.6607 8.66281 18.268 9.05952L10.4633 16.9576Z"
          fill="white"
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  CheckIconGreen500.displayName = 'CheckIconGreen500';
}
