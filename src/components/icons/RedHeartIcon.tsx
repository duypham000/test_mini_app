import React, { SVGProps } from 'react';

export const RedHeartIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
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
          d="M1.50038 5.00043C2.4734 1.10773 6.76122 2.42378 7.91242 3.87975C7.95668 3.93573 8.04407 3.93572 8.08832 3.87974C9.2393 2.42376 13.5268 1.10762 14.5 5.00042C14.9983 7.49208 13.5102 9.98371 8.05495 13.4656C8.02222 13.4865 7.97853 13.4865 7.9458 13.4656C2.49009 9.98371 1.0019 7.49207 1.50038 5.00043Z"
          fill="#E14040"
          stroke="#E14040"
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  RedHeartIcon.displayName = 'RedHeartIcon';
}
