import React, { SVGProps } from 'react';

export const PenOutline = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        width={32}
        height={32}
        viewBox="0 0 32 32"
        stroke="#999999"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17 12L11.0196 17.9804C11.0068 17.9932 10.9977 18.0093 10.9933 18.0269L10.0404 21.8383C10.0221 21.9115 10.0885 21.9779 10.1617 21.9596L13.9731 21.0067C13.9907 21.0023 14.0068 20.9932 14.0196 20.9804L20 15M17 12L20 15M17 12L18.9785 10.0215C18.9925 10.0075 19.0093 9.99815 19.0289 9.99478C19.2538 9.95607 20.7357 9.73573 21.5 10.5C22.2643 11.2643 22.0439 12.7462 22.0052 12.9711C22.0019 12.9907 21.9925 13.0075 21.9785 13.0215L20 15"
          strokeLinecap="round"
        />
        <rect
          x="0.5"
          y="0.5"
          width={31}
          height={31}
          rx="7.5"
          stroke="white"
          strokeOpacity="0.1"
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  PenOutline.displayName = 'PenOutline';
}
