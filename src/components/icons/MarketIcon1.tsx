import React, { SVGProps } from 'react';

export const MarketIcon1 = React.forwardRef<any, SVGProps<SVGSVGElement>>(
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
        <path
          d="M9.7273 18V15C9.7273 14.8776 9.67941 14.7602 9.59417 14.6736C9.50893 14.5871 9.39331 14.5385 9.27276 14.5385H7.45458C7.33402 14.5385 7.21841 14.5871 7.13316 14.6736C7.04792 14.7602 7.00003 14.8776 7.00003 15V18H9.7273ZM13.3637 18V13.3846C13.3637 13.2622 13.3158 13.1448 13.2305 13.0583C13.1453 12.9717 13.0297 12.9231 12.9091 12.9231H11.0909C10.9704 12.9231 10.8548 12.9717 10.7695 13.0583C10.6843 13.1448 10.6364 13.2622 10.6364 13.3846V18H13.3637ZM17 18V12.4615C17 12.3391 16.9521 12.2217 16.8669 12.1352C16.7817 12.0486 16.666 12 16.5455 12H14.7273C14.6068 12 14.4911 12.0486 14.4059 12.1352C14.3206 12.2217 14.2728 12.3391 14.2728 12.4615V18H17Z"
          fill="white"
        />
        <path
          d="M6.5 12.5L9.5 10L11.5 11.5L17 7"
          stroke="white"
          strokeLinecap="round"
        />
        <path d="M15 7H17V9" stroke="white" strokeLinecap="round" />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  MarketIcon1.displayName = 'MarketIcon1';
}
