import React, { SVGProps } from 'react';

export const FlashIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.5 13L13.5 2.5V11H18.5L10.5 21.5V13H5.5Z"
          stroke="#999999"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  FlashIcon.displayName = 'FlashIcon';
}
