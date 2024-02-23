import React, { SVGProps } from 'react';

export const BackIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
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
        <path
          d="M21 13C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11V13ZM2.29289 11.2929C1.90237 11.6834 1.90237 12.3166 2.29289 12.7071L8.65685 19.0711C9.04738 19.4616 9.68054 19.4616 10.0711 19.0711C10.4616 18.6805 10.4616 18.0474 10.0711 17.6569L4.41421 12L10.0711 6.34315C10.4616 5.95262 10.4616 5.31946 10.0711 4.92893C9.68054 4.53841 9.04738 4.53841 8.65685 4.92893L2.29289 11.2929ZM21 11L3 11V13L21 13V11Z"
          fill="#999999"
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  BackIcon.displayName = 'BackIcon';
}
