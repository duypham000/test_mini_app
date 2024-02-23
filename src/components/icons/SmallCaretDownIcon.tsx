import React, { SVGProps } from 'react';

export const SmallCaretDownIcon = React.forwardRef<
  any,
  SVGProps<SVGSVGElement>
>((props, ref) => {
  return (
    <svg
      {...props}
      ref={ref}
      width={16}
      height={12}
      viewBox="0 0 16 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_10489_1537)">
        <path
          d="M14 3L8 9L5 6L2 3"
          stroke="#999999"
          strokeWidth={2}
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_10489_1537">
          <rect
            width={12}
            height={16}
            fill="white"
            transform="translate(16) rotate(90)"
          />
        </clipPath>
      </defs>
    </svg>
  );
});

if (process.env.NODE_ENV !== 'production') {
  SmallCaretDownIcon.displayName = 'SmallCaretDownIcon';
}
