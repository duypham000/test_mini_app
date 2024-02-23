import React, { SVGProps } from 'react';

export const DeleteIconBlack300 = React.forwardRef<
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
      <path
        d="M3 5.5V12.5C3 13 3.5 14.5 5 14.5C6.5 14.5 9.5 14.5 11 14.5C12.5 14.5 13 13 13 12.5C13 11 13 7.5 13 5.5"
        strokeLinecap="round"
      />
      <path
        d="M2 3.5H10M14 3.5H10M6 3.5V2C6 1.5 6.5 1 7 1C7.8 1 8.66667 1 9 1C9.5 1 10 1.5 10 2C10 2.8 10 3.33333 10 3.5"
        strokeLinecap="round"
      />
      <path d="M6.5 6.5V11.5M9.5 6.5V11.5" strokeLinecap="round" />
    </svg>
  );
});

if (process.env.NODE_ENV !== 'production') {
  DeleteIconBlack300.displayName = 'DeleteIconBlack300';
}
