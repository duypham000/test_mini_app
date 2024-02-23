import React, { SVGProps } from 'react';

export const CandlestickChartIcon = React.forwardRef<
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
      stroke="#999999"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4.5 0.5V2.5M4.5 13.5V15.5" strokeLinecap="round" />
      <path d="M11.5 2V4.5M11.5 12.5V14" strokeLinecap="round" />
      <rect x="2.5" y="2.5" width={4} height={11} rx="0.5" />
      <rect x="9.5" y="4.5" width={4} height={8} rx="0.5" />
    </svg>
  );
});

if (process.env.NODE_ENV !== 'production') {
  CandlestickChartIcon.displayName = 'CandlestickChartIcon';
}
