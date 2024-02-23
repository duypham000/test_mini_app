import React, { SVGProps } from 'react';

export const PadlockIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        width={82}
        height={82}
        viewBox="0 0 82 82"
        fill="#3A3B3C"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_4813_1311)">
          <path d="M64.0625 30.75H61.5V20.5C61.5 9.19425 52.3058 0 41 0C29.6943 0 20.5 9.19425 20.5 20.5V30.75H17.9375C13.7008 30.75 10.25 34.1974 10.25 38.4375V74.3125C10.25 78.5526 13.7008 82 17.9375 82H64.0625C68.2992 82 71.75 78.5526 71.75 74.3125V38.4375C71.75 34.1974 68.2992 30.75 64.0625 30.75ZM27.3333 20.5C27.3333 12.9628 33.4628 6.83333 41 6.83333C48.5372 6.83333 54.6667 12.9628 54.6667 20.5V30.75H27.3333V20.5ZM44.4167 57.1335V64.9167C44.4167 66.8027 42.8894 68.3333 41 68.3333C39.1106 68.3333 37.5833 66.8027 37.5833 64.9167V57.1335C35.5504 55.9479 34.1667 53.7681 34.1667 51.25C34.1667 47.4814 37.2314 44.4167 41 44.4167C44.7686 44.4167 47.8333 47.4814 47.8333 51.25C47.8333 53.7681 46.4496 55.9479 44.4167 57.1335Z" />
        </g>
        <defs>
          <clipPath id="clip0_4813_1311">
            <rect width={82} height={82} fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  PadlockIcon.displayName = 'PadlockIcon';
}
