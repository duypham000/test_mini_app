import React, { SVGProps } from 'react';

export const GiftOutlineIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
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
        stroke="#999999"
      >
        <rect x="1.5" y="4.5" width={13} height={3} rx="1.5" />
        <path d="M2.5 7.5H13.5V13C13.5 13.8284 12.8284 14.5 12 14.5H4C3.17157 14.5 2.5 13.8284 2.5 13V7.5Z" />
        <path d="M8 7.5V14.5" />
        <path d="M7.99993 4.4999C7.6666 3.33323 5.8501 1.10042 4.49993 1.9999C3.66247 2.55763 3.50017 4.49996 5.49943 4.49996L7.99993 4.4999ZM7.99993 4.4999C8.33326 3.33323 10.1498 1.10042 11.5 1.9999C12.3375 2.55763 12.4998 4.49996 10.5005 4.49996L7.99993 4.4999Z" />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  GiftOutlineIcon.displayName = 'GiftOutlineIcon';
}
