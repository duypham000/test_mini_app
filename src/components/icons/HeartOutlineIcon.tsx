import React, { SVGProps } from 'react';

export const HeartOutlineIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
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
        <path
          d="M1.50038 5.00019C2.4734 1.10748 6.76122 2.42353 7.91242 3.87951C7.95668 3.93548 8.04407 3.93548 8.08832 3.8795C9.2393 2.42351 13.5268 1.10737 14.5 5.00017C14.9983 7.49184 13.5102 9.98347 8.05495 13.4653C8.02222 13.4862 7.97853 13.4862 7.9458 13.4653C2.49009 9.98347 1.0019 7.49183 1.50038 5.00019Z"
          stroke="#999999"
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  HeartOutlineIcon.displayName = 'HeartOutlineIcon';
}
