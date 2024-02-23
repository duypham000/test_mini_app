import React, { SVGProps } from 'react';

export const StockComparisonIcon = React.forwardRef<
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
      <circle cx={12} cy={12} r={12} fill="#A73BB9" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.83995 17.7867C8.91995 17.8933 9.07995 17.8933 9.15995 17.7867L11.76 14.32C11.8589 14.1882 11.7648 14 11.6 14L10.5 14V7.5C10.5 7.22386 10.2762 7 10 7H8.00002C7.72387 7 7.50001 7.22386 7.50001 7.5V14L6.40001 14C6.2352 14 6.14112 14.1882 6.24001 14.32L8.83995 17.7867ZM16.5 16.5V10H17.6C17.7648 10 17.8589 9.81185 17.76 9.68L15.1599 6.21333C15.0799 6.10667 14.9199 6.10667 14.8399 6.21334L12.24 9.68C12.1411 9.81185 12.2352 10 12.4 10H13.5V16.5C13.5 16.7761 13.7239 17 14 17H16C16.2761 17 16.5 16.7761 16.5 16.5Z"
        fill="white"
      />
    </svg>
  );
});

if (process.env.NODE_ENV !== 'production') {
  StockComparisonIcon.displayName = 'StockComparisonIcon';
}
