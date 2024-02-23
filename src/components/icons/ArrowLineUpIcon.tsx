import React, { SVGProps } from 'react';

export const ArrowLineUpIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
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
      >
        <g clipPath="url(#clip0_1243_233)">
          <path
            d="M7 15C7 15.5523 7.44772 16 8 16C8.55228 16 9 15.5523 9 15L7 15ZM8.70711 0.292893C8.31658 -0.0976314 7.68342 -0.0976315 7.29289 0.292893L0.928933 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 15L9 1L7 1L7 15L9 15Z"
            fill={props.fill}
          />
        </g>
        <defs>
          <clipPath id="clip0_1243_233">
            <rect width={16} height={16} fill={props.fill} />
          </clipPath>
        </defs>
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  ArrowLineUpIcon.displayName = 'ArrowLineUpIcon';
}
