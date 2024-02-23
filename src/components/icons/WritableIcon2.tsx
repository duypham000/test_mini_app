import { useTheme } from '@emotion/react';
import React, { SVGProps } from 'react';

export const WritableIcon2 = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    const theme = useTheme();

    return (
      <svg
        {...props}
        ref={ref}
        width={16}
        height={16}
        viewBox="0 0 16 16"
        stroke={theme.color.dc003}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_10070_1609)">
          <path
            d="M15.008 0.54604C14.3077 -0.154263 13.1724 -0.154263 12.4721 0.54604L5.36287 7.65522C5.31415 7.70394 5.27897 7.76434 5.26061 7.83065L4.32573 11.2058C4.28728 11.3441 4.32635 11.4923 4.42784 11.594C4.52948 11.6955 4.67767 11.7345 4.81605 11.6962L8.19117 10.7612C8.25748 10.7428 8.31787 10.7077 8.36659 10.6589L15.4756 3.5496C16.1748 2.84884 16.1748 1.7144 15.4756 1.01363L15.008 0.54604ZM6.23113 7.91424L12.0494 2.09576L13.9259 3.97221L8.10742 9.79069L6.23113 7.91424ZM5.85631 8.66637L7.35544 10.1657L5.28178 10.7402L5.85631 8.66637ZM14.9121 2.98612L14.4895 3.40873L12.6129 1.53213L13.0357 1.10952C13.4247 0.720532 14.0554 0.720532 14.4444 1.10952L14.9121 1.57711C15.3005 1.96657 15.3005 2.59683 14.9121 2.98612Z"
            fill={theme.color.dc003}
          />
          <path
            d="M6 2.50006H4C2.5 2.50006 0.5 3.50006 0.5 6.00006C0.5 8.80006 0.5 11.1667 0.5 12.0001C0.5 14.5001 2.5 15.5001 4 15.5001C6.8 15.5001 9.83333 15.5001 11 15.5001C12.5 15.5001 14.5 14.5001 14.5 12.0001V10.0001"
            strokeLinecap="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_10070_1609">
            <rect width={16} height={16} fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  WritableIcon2.displayName = 'WritableIcon2';
}
