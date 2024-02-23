import React, { SVGProps } from 'react';

export const CaretDownOutlinedBlack300 = React.forwardRef<
  any,
  SVGProps<SVGSVGElement>
>((props, ref) => {
  return (
    <svg
      {...props}
      ref={ref}
      width="14"
      height="9"
      viewBox="0 0 14 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.6038 8.48532C6.80395 8.74532 7.19605 8.74532 7.3962 8.48532L13.3085 0.804996C13.5616 0.476213 13.3272 0 12.9123 0H1.08769C0.672767 0 0.438385 0.476213 0.691484 0.804997L6.6038 8.48532Z"
        fill="#999999"
      />
    </svg>
  );
});

if (process.env.NODE_ENV !== 'production') {
  CaretDownOutlinedBlack300.displayName = 'CaretDownOutlinedBlack300';
}
