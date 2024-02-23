import React, { SVGProps } from 'react';

export const PolygonAi = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        width={8}
        height={5}
        viewBox="0 0 8 5"
        fill="#EC8000"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M3.71177 0.299538C3.86913 0.136005 4.13087 0.136005 4.28823 0.299538L7.67835 3.82265C7.92288 4.07677 7.74278 4.5 7.39012 4.5L0.609885 4.5C0.257221 4.5 0.0771254 4.07677 0.321654 3.82265L3.71177 0.299538Z" />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  PolygonAi.displayName = 'PolygonAi';
}
