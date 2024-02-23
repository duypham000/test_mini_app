import React, { SVGProps } from 'react';

export const CaretDownOutlinedRed500 = React.forwardRef<
  any,
  SVGProps<SVGSVGElement>
>((props, ref) => {
  return (
    <svg
      {...props}
      ref={ref}
      width={8}
      height={5}
      viewBox="0 0 8 5"
      fill={props.fill || '#E14040'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4.28823 4.70046C4.13087 4.86399 3.86913 4.86399 3.71177 4.70046L0.321654 1.17735C0.077125 0.923228 0.25722 0.499999 0.609884 0.499999L7.39012 0.5C7.74278 0.5 7.92288 0.923229 7.67835 1.17735L4.28823 4.70046Z" />
    </svg>
  );
});

if (process.env.NODE_ENV !== 'production') {
  CaretDownOutlinedRed500.displayName = 'CaretDownOutlinedRed500';
}
