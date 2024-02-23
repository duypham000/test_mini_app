import React, { SVGProps } from 'react';

export const UserOpacityIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={40}
        height={40}
        viewBox="0 0 40 40"
        fill="none"
      >
        <circle cx={20} cy={20} r={20} fill="white" fillOpacity="0.1" />
        <rect width={22} height={22} fill="none" />
        <path
          d="M11 1.375C8.35206 1.375 6.1875 3.53956 6.1875 6.1875C6.1875 8.83544 8.35206 11 11 11C13.6479 11 15.8125 8.83544 15.8125 6.1875C15.8125 3.53956 13.6479 1.375 11 1.375Z"
          fill="#999999"
          transform="translate(9 9)"
        />
        <path
          d="M19.8993 15.3408C19.7635 15.0119 19.5824 14.7049 19.3786 14.4199C18.3371 12.9289 16.7296 11.9422 14.9183 11.701C14.6919 11.6791 14.4429 11.7229 14.2617 11.8545C13.3108 12.5342 12.1788 12.885 11.0014 12.885C9.82406 12.885 8.69202 12.5342 7.74109 11.8545C7.55995 11.7229 7.31089 11.6572 7.0845 11.701C5.27322 11.9422 3.64308 12.9289 2.62424 14.4199C2.42047 14.7049 2.23932 15.0339 2.10351 15.3408C2.0356 15.4724 2.05822 15.6259 2.12613 15.7574C2.30728 16.0644 2.53366 16.3714 2.73743 16.6345C3.05439 17.0511 3.39402 17.4238 3.77894 17.7746C4.0959 18.0816 4.45815 18.3666 4.82044 18.6517C6.60906 19.9453 8.75998 20.625 10.9788 20.625C13.1976 20.625 15.3485 19.9453 17.1372 18.6517C17.4994 18.3886 17.8617 18.0816 18.1787 17.7746C18.5409 17.4238 18.9032 17.0511 19.2202 16.6345C19.4466 16.3494 19.6504 16.0644 19.8315 15.7574C19.9446 15.6259 19.9672 15.4723 19.8993 15.3408Z"
          fill="#999999"
          transform="translate(9 9)"
        />
        <path
          d="M16.5 3.66667H20.1667M18.3333 1.83334V5.5"
          stroke="#999999"
          strokeLinecap="round"
          transform="translate(9 9)"
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  UserOpacityIcon.displayName = 'UserOpacityIcon';
}
