import React, { SVGProps } from 'react';

export const StockIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
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
        <path
          d="M2.5 10.5H4.5C4.77614 10.5 5 10.7239 5 11V14.5H2V11C2 10.7239 2.22386 10.5 2.5 10.5Z"
          stroke="#999999"
        />
        <path
          d="M5.5 8.5H7.5C7.77614 8.5 8 8.72386 8 9V14.5H5V9C5 8.72386 5.22386 8.5 5.5 8.5Z"
          stroke="#999999"
        />
        <path
          d="M8.5 9.5H10.5C10.7761 9.5 11 9.72386 11 10V14.5H8V10C8 9.72386 8.22386 9.5 8.5 9.5Z"
          stroke="#999999"
        />
        <path
          d="M11.5 6.5H13.5C13.7761 6.5 14 6.72386 14 7V14.5H11V7C11 6.72386 11.2239 6.5 11.5 6.5Z"
          stroke="#999999"
        />
        <path
          d="M2 7L5.5 4L9.5 5.5L14 1.5"
          stroke="#999999"
          strokeLinecap="round"
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  StockIcon.displayName = 'StockIcon';
}
