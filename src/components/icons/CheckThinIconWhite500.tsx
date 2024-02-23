import React, { SVGProps } from 'react';

export const CheckThinIconWhite500 = React.forwardRef<
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
      <g clipPath="url(#CheckedWhiteIcon)">
        <path
          d="M0 8.5105L5.4791 14.0001L16 3.48956L14.4896 2L5.4791 11L1.48953 7.01045L0 8.5105Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="CheckedWhiteIcon">
          <rect width={16} height={16} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
});

if (process.env.NODE_ENV !== 'production') {
  CheckThinIconWhite500.displayName = 'CheckThinIconWhite500';
}
