import React, { SVGProps } from 'react';

export const LessionIconOrange500 = React.forwardRef<
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
      <g clipPath="url(#clip0_10394_1753)">
        <path
          d="M7.47 5.83125L1.3568 9.652C0.730129 10.0437 0.730128 10.9563 1.3568 11.348L7.47 15.1688C7.79427 15.3714 8.20573 15.3714 8.53 15.1688L14.6432 11.348C15.2699 10.9563 15.2699 10.0437 14.6432 9.652L8.53 5.83125C8.20573 5.62858 7.79427 5.62858 7.47 5.83125Z"
          stroke="#EC8000"
        />
        <path
          d="M7.47 3.33125L1.3568 7.152C0.730129 7.54367 0.730128 8.45633 1.3568 8.848L7.47 12.6688C7.79427 12.8714 8.20573 12.8714 8.53 12.6688L14.6432 8.848C15.2699 8.45633 15.2699 7.54367 14.6432 7.152L8.53 3.33125C8.20573 3.12858 7.79427 3.12858 7.47 3.33125Z"
          fill="white"
          stroke="#EC8000"
        />
        <path
          d="M7.47 0.831249L1.3568 4.652C0.730129 5.04367 0.730128 5.95633 1.3568 6.348L7.47 10.1688C7.79427 10.3714 8.20573 10.3714 8.53 10.1688L14.6432 6.348C15.2699 5.95633 15.2699 5.04367 14.6432 4.652L8.53 0.831249C8.20573 0.62858 7.79427 0.62858 7.47 0.831249Z"
          fill="white"
          stroke="#EC8000"
        />
      </g>
      <defs>
        <clipPath id="clip0_10394_1753">
          <rect width={16} height={16} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
});

if (process.env.NODE_ENV !== 'production') {
  LessionIconOrange500.displayName = 'LessionIconOrange500';
}
