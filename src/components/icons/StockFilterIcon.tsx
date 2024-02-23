import React, { SVGProps } from 'react';

export const StockFilterIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
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
        <circle cx={12} cy={12} r={12} fill="#1E925A" />
        <path
          d="M12 9C12 10.1046 11.1046 11 10 11C8.89543 11 8 10.1046 8 9C8 7.89543 8.89543 7 10 7C11.1046 7 12 7.89543 12 9Z"
          fill="white"
        />
        <path
          d="M16 15C16 16.1046 15.1046 17 14 17C12.8954 17 12 16.1046 12 15C12 13.8954 12.8954 13 14 13C15.1046 13 16 13.8954 16 15Z"
          fill="white"
        />
        <path
          d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9C19 9.55228 18.5523 10 18 10H6C5.44772 10 5 9.55228 5 9Z"
          fill="white"
        />
        <path
          d="M5 15C5 14.4477 5.44772 14 6 14H18C18.5523 14 19 14.4477 19 15C19 15.5523 18.5523 16 18 16H6C5.44772 16 5 15.5523 5 15Z"
          fill="white"
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  StockFilterIcon.displayName = 'StockFilterIcon';
}
