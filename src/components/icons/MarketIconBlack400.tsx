import React, { SVGProps } from 'react';

export const MarketIconBlack400 = React.forwardRef<
  any,
  SVGProps<SVGSVGElement>
>((props, ref) => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 5.92995 16.4231 6.76108 17.0874 7.31135L13.5678 16.0537C13.3839 16.0184 13.1941 16 13 16C12.2771 16 11.6139 16.2557 11.0959 16.6816L7.70766 13.2934C7.89506 12.9017 8 12.4631 8 12C8 10.3431 6.65685 9 5 9C3.34315 9 2 10.3431 2 12C2 13.6569 3.34315 15 5 15C5.46316 15 5.90181 14.895 6.29346 14.7076L10.0481 18.4622C10.0165 18.6367 10 18.8164 10 19C10 20.6569 11.3431 22 13 22C14.6569 22 16 20.6569 16 19C16 18.2733 15.7416 17.607 15.3117 17.0878L18.9705 7.99986C18.9803 7.99995 18.9902 8 19 8Z"
        fill="#4D4D4D"
      />
    </svg>
  );
});

if (process.env.NODE_ENV !== 'production') {
  MarketIconBlack400.displayName = 'MarketIconBlack400';
}
