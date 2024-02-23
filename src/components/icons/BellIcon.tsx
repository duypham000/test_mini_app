import React, { SVGProps } from 'react';

export const BellIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
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
        <circle cx={12} cy={12} r={12} fill="#A73BB9" />
        <rect
          width={14}
          height={14}
          transform="translate(5 5)"
          fill="#A73BB9"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.8156 16.7368H12H13.1844C13.0236 17.0639 12.6194 17.3684 12 17.3684C11.3806 17.3684 10.9764 17.0639 10.8156 16.7368ZM10.1436 16.7368H6.94737C6.79157 16.7368 6.56491 16.6927 6.36811 16.551C6.15522 16.3977 6 16.145 6 15.7895C6 15.6499 6.06767 15.4789 6.17014 15.3053C6.28093 15.1176 6.45654 14.8863 6.72407 14.6188C7.09728 14.2456 7.89474 13.1646 7.89474 11.3684C7.89474 10.396 8.05531 9.07331 8.64301 7.98186C9.24213 6.86921 10.2878 6 12 6C13.7122 6 14.7579 6.86921 15.357 7.98186C15.9447 9.07331 16.1053 10.396 16.1053 11.3684C16.1053 13.1646 16.9027 14.2456 17.2759 14.6188C17.5435 14.8863 17.7191 15.1176 17.8299 15.3053C17.9323 15.4789 18 15.6499 18 15.7895C18 16.145 17.8448 16.3977 17.6319 16.551C17.4351 16.6927 17.2084 16.7368 17.0526 16.7368H13.8564C13.6829 17.4439 12.9383 18 12 18C11.0617 18 10.3171 17.4439 10.1436 16.7368Z"
          fill="white"
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  BellIcon.displayName = 'BellIcon';
}
