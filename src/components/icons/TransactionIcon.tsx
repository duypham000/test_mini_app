import React, { SVGProps } from 'react';

export const TransactionIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
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
        <g clipPath="url(#clip0_5406_3151)">
          <circle cx={12} cy={12} r={12} fill="#A73BB9" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5 7C5 6.44772 5.44772 6 6 6C6.55228 6 7 6.44772 7 7V16H9V11C9 10.4477 9.44772 10 10 10C10.5523 10 11 10.4477 11 11V16H13V9C13 8.44772 13.4477 8 14 8C14.5523 8 15 8.44772 15 9V16H17V14C17 13.4477 17.4477 13 18 13C18.5523 13 19 13.4477 19 14V17C19 17.5523 18.5523 18 18 18H14H10H6C5.44772 18 5 17.5523 5 17V7Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_5406_3151">
            <rect width={24} height={24} fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  TransactionIcon.displayName = 'TransactionIcon';
}
