import React, { SVGProps } from 'react';

export const LoginFacebookIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
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
        <circle cx={8} cy={8} r={8} fill="#2D88FF" />
        <g clipPath="url(#clip0_4888_277)">
          <path
            d="M8.66667 6.33334V5.00001C8.66667 4.63201 8.96534 4.33334 9.33334 4.33334H10V2.66667H8.66667C7.562 2.66667 6.66667 3.56201 6.66667 4.66667V6.33334H5.33334V8.00001H6.66667V13.3333H8.66667V8.00001H10L10.6667 6.33334H8.66667Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_4888_277">
            <rect
              width="10.6667"
              height="10.6667"
              fill="white"
              transform="translate(2.66667 2.66667)"
            />
          </clipPath>
        </defs>
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  LoginFacebookIcon.displayName = 'LoginFacebookIcon';
}
