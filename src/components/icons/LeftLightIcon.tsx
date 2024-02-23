import React, { SVGProps } from 'react';

export const LeftLightIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        width={12}
        height={12}
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_12089_13647)">
          <path
            d="M11.2521 7.32904C11.2043 7.28136 11.144 7.2482 11.0781 7.23341C11.0123 7.21862 10.9436 7.2228 10.88 7.24547C10.0255 7.55013 9.10204 7.60607 8.21699 7.40679C7.33194 7.20751 6.5216 6.76119 5.88013 6.11967C5.23865 5.47816 4.79238 4.6678 4.59315 3.78274C4.39392 2.89768 4.44991 1.97425 4.75463 1.11975C4.77727 1.05615 4.78142 0.987438 4.76661 0.921576C4.75179 0.855713 4.71861 0.795398 4.67091 0.747625C4.62321 0.699851 4.56295 0.666575 4.49711 0.651655C4.43127 0.636734 4.36255 0.640779 4.29891 0.663322C3.52852 0.935371 2.82939 1.37765 2.25356 1.95725C1.22128 2.99031 0.641539 4.39105 0.641815 5.85146C0.642091 7.31188 1.22236 8.7124 2.25503 9.74506C3.2877 10.7777 4.68822 11.358 6.14863 11.3583C7.60905 11.3586 9.00978 10.7788 10.0428 9.74654C10.6225 9.1706 11.0648 8.47135 11.3368 7.70082C11.3592 7.63719 11.3632 7.56849 11.3482 7.50269C11.3332 7.43689 11.2999 7.37668 11.2521 7.32904Z"
            fill="#F2F2F2"
          />
        </g>
        <defs>
          <clipPath id="clip0_12089_13647">
            <rect
              width="11.4286"
              height="11.4286"
              fill="white"
              transform="translate(0.285706 0.285767)"
            />
          </clipPath>
        </defs>
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  LeftLightIcon.displayName = 'LeftLightIcon';
}
