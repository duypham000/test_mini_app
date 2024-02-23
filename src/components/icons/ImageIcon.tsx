import React, { SVGProps } from 'react';

export const ImageIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
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
        <rect
          x="2.5"
          y="4.5"
          width={19}
          height={15}
          rx="3.5"
          stroke="#999999"
        />
        <path
          d="M2.5 16.5L6.92901 12.9568C7.26907 12.6847 7.74607 12.664 8.10841 12.9056L11.2841 15.0227C11.6957 15.2971 12.246 15.2294 12.5788 14.8634L16.2202 10.8578C16.631 10.4059 17.3474 10.4246 17.7341 10.8972L21.5 15.5"
          stroke="#999999"
        />
        <circle cx={10} cy={9} r="1.5" stroke="#999999" />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  ImageIcon.displayName = 'ImageIcon';
}
