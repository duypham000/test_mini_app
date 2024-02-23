import React, { SVGProps } from 'react';

export const CheckedCircleIconGreen500 = React.forwardRef<
  any,
  SVGProps<SVGSVGElement>
>((props, ref) => {
  return (
    <svg
      {...props}
      ref={ref}
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx={20} cy={20} r={20} fill="#25B770" />
      <g clipPath="url(#clip0_5552_3475)">
        <path
          d="M8.70147 20.0593C8.31355 20.4499 8.31436 21.0807 8.70328 21.4703L16.2187 29L31.2873 13.9463C31.68 13.5539 31.678 12.9167 31.2827 12.5269L30.441 11.6968C30.0499 11.3111 29.4208 11.3131 29.0321 11.7013L16.2187 24.4999L10.9439 19.2252C10.5524 18.8337 9.91731 18.8348 9.5272 19.2277L8.70147 20.0593Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_5552_3475">
          <rect
            width={24}
            height={24}
            fill="white"
            transform="translate(8 8)"
          />
        </clipPath>
      </defs>
    </svg>
  );
});

if (process.env.NODE_ENV !== 'production') {
  CheckedCircleIconGreen500.displayName = 'CheckedCircleIconGreen500';
}
