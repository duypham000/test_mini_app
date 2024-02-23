import React, { SVGProps } from 'react';

export const CommentIcon20x19 = React.forwardRef<any, SVGProps<SVGSVGElement>>(
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
        <g clipPath="url(#clip0_227_111)">
          <path
            d="M12 2.5C6.48603 2.5 2.00003 6.53733 2.00003 11.5C2.00003 13.2347 2.54869 14.915 3.58936 16.368C3.39236 18.547 2.86436 20.1647 2.09769 20.931C1.99636 21.0323 1.97103 21.1873 2.03503 21.3153C2.09169 21.4297 2.20836 21.5 2.33336 21.5C2.34869 21.5 2.36403 21.499 2.37969 21.4967C2.51469 21.4777 5.65069 21.0263 7.91903 19.717C9.20703 20.2367 10.579 20.5 12 20.5C17.514 20.5 22 16.4627 22 11.5C22 6.53733 17.514 2.5 12 2.5Z"
            fill="#999999"
          />
        </g>
        <defs>
          <clipPath id="clip0_227_111">
            <rect
              width={20}
              height={20}
              fill="white"
              transform="translate(2 2)"
            />
          </clipPath>
        </defs>
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  CommentIcon20x19.displayName = 'CommentIcon20x19';
}
