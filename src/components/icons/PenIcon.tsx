import React, { SVGProps } from 'react';

export const PenIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
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
        <path
          d="M9 4L3.01959 9.98041C3.00677 9.99323 2.99768 10.0093 2.99328 10.0269L2.04042 13.8383C2.02211 13.9115 2.08845 13.9779 2.16169 13.9596L5.97313 13.0067C5.99071 13.0023 6.00677 12.9932 6.01959 12.9804L12 7M9 4L12 7M9 4L10.9785 2.02154C10.9925 2.0075 11.0093 1.99815 11.0289 1.99478C11.2538 1.95607 12.7357 1.73573 13.5 2.5C14.2643 3.26427 14.0439 4.74616 14.0052 4.97109C14.0019 4.99066 13.9925 5.0075 13.9785 5.02154L12 7"
          strokeLinecap="round"
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  PenIcon.displayName = 'PenIcon';
}
