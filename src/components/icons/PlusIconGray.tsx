import React, { SVGProps } from 'react';

export const PlusIconGray = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1116_2760)">
          <path
            d="M8.69405 8.69417L14.8966 8.69408C15.3001 8.69417 15.6263 8.368 15.6262 7.96445C15.6262 7.561 15.3001 7.23483 14.8966 7.23483L8.69395 7.23483L8.69405 1.03229C8.69395 0.628735 8.36788 0.302663 7.96443 0.302663C7.56088 0.302568 7.23471 0.628735 7.2348 1.03228L7.23471 7.23483L1.03217 7.23492C0.628615 7.23483 0.302449 7.561 0.302543 7.96455C0.302449 8.16571 0.384085 8.34844 0.516176 8.48053C0.648268 8.61263 0.83091 8.69417 1.03217 8.69417L7.23471 8.69407L7.23471 14.8967C7.23471 15.098 7.31625 15.2806 7.44834 15.4127C7.58044 15.5448 7.76308 15.6263 7.96433 15.6263C8.36788 15.6264 8.69405 15.3003 8.69396 14.8967L8.69405 8.69417Z"
            fill="#999999"
          />
        </g>
        <defs>
          <clipPath id="clip0_1116_2760">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  PlusIconGray.displayName = 'PlusIconGray';
}
