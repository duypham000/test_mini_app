import React, { SVGProps } from 'react';

export const AboveIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
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
        <circle cx="8" cy="8" r="7.5" stroke="#2BD784" />
        <g clipPath="url(#AboveIcon)">
          <path
            d="M3 8.31906L6.42444 11.75L13 5.18098L12.056 4.25L6.42444 9.875L3.93096 7.38153L3 8.31906Z"
            fill="#2BD784"
          />
        </g>
        <defs>
          <clipPath id="AboveIcon">
            <rect
              width="10"
              height="10"
              fill="white"
              transform="translate(3 3)"
            />
          </clipPath>
        </defs>
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  AboveIcon.displayName = 'AboveIcon';
}
