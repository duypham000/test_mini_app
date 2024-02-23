import React, { SVGProps } from 'react';

export const HeartBlack300Icon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        width={14}
        height={14}
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.31234 4.37489C2.16039 0.982192 5.88606 2.11131 6.91084 3.37924C6.9557 3.43474 7.04398 3.43474 7.08883 3.37923C8.11342 2.11129 11.8389 0.982098 12.687 4.37487C13.1229 6.55404 11.8222 8.73319 7.0544 11.7776C7.02167 11.7984 6.97801 11.7984 6.94529 11.7776C2.1771 8.73319 0.87638 6.55404 1.31234 4.37489Z"
          fill="#999999"
          stroke="#999999"
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  HeartBlack300Icon.displayName = 'HeartBlack300Icon';
}
