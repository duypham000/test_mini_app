import React, { SVGProps } from 'react';

export const CloseAppIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx={12} cy={12} r={12} fill="#4D4D4D" />
        <g clipPath="url(#clip0_22992_7414)">
          <path
            d="M13.0994 12.0097L17.772 7.33703C18.076 7.03309 18.076 6.54166 17.772 6.23772C17.468 5.93378 16.9766 5.93378 16.6727 6.23772L11.9999 10.9104L7.32737 6.23772C7.02329 5.93378 6.532 5.93378 6.22806 6.23772C5.92398 6.54166 5.92398 7.03309 6.22806 7.33703L10.9006 12.0097L6.22806 16.6824C5.92398 16.9864 5.92398 17.4778 6.22806 17.7817C6.37953 17.9334 6.5787 18.0095 6.77772 18.0095C6.97674 18.0095 7.17576 17.9334 7.32737 17.7817L11.9999 13.109L16.6727 17.7817C16.8243 17.9334 17.0233 18.0095 17.2223 18.0095C17.4213 18.0095 17.6203 17.9334 17.772 17.7817C18.076 17.4778 18.076 16.9864 17.772 16.6824L13.0994 12.0097Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_22992_7414">
            <rect
              width={12}
              height={12}
              fill="white"
              transform="translate(6 6)"
            />
          </clipPath>
        </defs>
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  CloseAppIcon.displayName = 'CloseAppIcon';
}
