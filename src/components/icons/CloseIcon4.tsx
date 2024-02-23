import React, { SVGProps } from 'react';

export const CloseIcon4 = React.forwardRef<any, SVGProps<SVGSVGElement>>(
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
        <g clipPath="url(#clip0_17513_1139)">
          <path
            d="M9.46586 8.0132L15.696 1.78293C16.1014 1.37768 16.1014 0.722438 15.696 0.317185C15.2907 -0.0880687 14.6355 -0.0880687 14.2302 0.317185L7.99992 6.54746L1.76983 0.317185C1.36439 -0.0880687 0.709337 -0.0880687 0.304083 0.317185C-0.101361 0.722438 -0.101361 1.37768 0.304083 1.78293L6.53417 8.0132L0.304083 14.2435C-0.101361 14.6487 -0.101361 15.304 0.304083 15.7092C0.506046 15.9114 0.771596 16.0129 1.03696 16.0129C1.30232 16.0129 1.56768 15.9114 1.76983 15.7092L7.99992 9.47895L14.2302 15.7092C14.4324 15.9114 14.6977 16.0129 14.9631 16.0129C15.2284 16.0129 15.4938 15.9114 15.696 15.7092C16.1014 15.304 16.1014 14.6487 15.696 14.2435L9.46586 8.0132Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_17513_1139">
            <rect width={16} height={16} fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  CloseIcon4.displayName = 'CloseIcon4';
}
