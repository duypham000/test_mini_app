import React, { SVGProps } from 'react';

export const CommentIconBlack300 = React.forwardRef<
  any,
  SVGProps<SVGSVGElement>
>((props, ref) => {
  return (
    <svg
      {...props}
      ref={ref}
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_266_2256)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.00002 7.6998C2.00002 4.7222 4.69162 2.2998 8.00002 2.2998C11.3084 2.2998 14 4.7222 14 7.6998C14 10.6774 11.3084 13.0998 8.00002 13.0998C7.14742 13.0998 6.32422 12.9418 5.55142 12.63C4.19042 13.4156 2.30882 13.6864 2.22782 13.6978C2.21842 13.6992 2.20922 13.6998 2.20002 13.6998C2.12502 13.6998 2.05502 13.6576 2.02102 13.589C1.98262 13.5122 1.99782 13.4192 2.05862 13.3584C2.51862 12.8986 2.83542 11.928 2.95362 10.6206C2.32922 9.7488 2.00002 8.7406 2.00002 7.6998Z"
          fill="#999999"
        />
      </g>
      <defs>
        <clipPath id="clip0_266_2256">
          <rect
            width={12}
            height={12}
            fill="white"
            transform="translate(2 2)"
          />
        </clipPath>
      </defs>
    </svg>
  );
});

if (process.env.NODE_ENV !== 'production') {
  CommentIconBlack300.displayName = 'CommentIconBlack300';
}
