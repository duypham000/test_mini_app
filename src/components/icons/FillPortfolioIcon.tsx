import React, { SVGProps } from 'react';

export const FillPortfolioIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
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
        <g clipPath="url(#clip0_5406_3142)">
          <circle cx={12} cy={12} r={12} fill="#1DA18E" />
          <path
            d="M7.49997 9C8.32838 9 8.99994 8.32843 8.99994 7.5C8.99994 6.67157 8.32838 6 7.49997 6C6.67156 6 6 6.67157 6 7.5C6 8.32843 6.67156 9 7.49997 9Z"
            fill="white"
          />
          <path
            d="M7.49997 13.5C8.32838 13.5 8.99994 12.8284 8.99994 12C8.99994 11.1716 8.32838 10.5 7.49997 10.5C6.67156 10.5 6 11.1716 6 12C6 12.8284 6.67156 13.5 7.49997 13.5Z"
            fill="white"
          />
          <path
            d="M7.49997 18C8.32838 18 8.99994 17.3284 8.99994 16.5C8.99994 15.6716 8.32838 15 7.49997 15C6.67156 15 6 15.6716 6 16.5C6 17.3284 6.67156 18 7.49997 18Z"
            fill="white"
          />
          <path
            d="M10 7.5C10 6.94772 10.4477 6.5 11 6.5H17C17.5523 6.5 18 6.94772 18 7.5C18 8.05228 17.5523 8.5 17 8.5H11C10.4477 8.5 10 8.05228 10 7.5Z"
            fill="white"
          />
          <path
            d="M10 12C10 11.4477 10.4477 11 11 11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H11C10.4477 13 10 12.5523 10 12Z"
            fill="white"
          />
          <path
            d="M10 16.5C10 15.9477 10.4477 15.5 11 15.5H17C17.5523 15.5 18 15.9477 18 16.5C18 17.0523 17.5523 17.5 17 17.5H11C10.4477 17.5 10 17.0523 10 16.5Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_5406_3142">
            <rect width={24} height={24} fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  FillPortfolioIcon.displayName = 'FillPortfolioIcon';
}
