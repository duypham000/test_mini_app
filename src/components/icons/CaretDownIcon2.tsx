import React, { SVGProps } from 'react';

export const CaretDownIcon2 = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        width={28}
        height={17}
        stroke="#999999"
        viewBox="0 0 28 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M26 2L14 14L2 2" strokeWidth={4} strokeLinecap="round" />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  CaretDownIcon2.displayName = 'CaretDownIcon2';
}
