import React, { SVGProps } from 'react';

export const CloseIcon2 = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        width={16}
        height={16}
        {...props}
        ref={ref}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_14362_453)">
          <path
            d="M9.46586 8.01314L15.696 1.78287C16.1014 1.37762 16.1014 0.722377 15.696 0.317124C15.2907 -0.0881298 14.6355 -0.0881298 14.2302 0.317124L7.99992 6.5474L1.76983 0.317124C1.36439 -0.0881298 0.709337 -0.0881298 0.304083 0.317124C-0.101361 0.722377 -0.101361 1.37762 0.304083 1.78287L6.53417 8.01314L0.304083 14.2434C-0.101361 14.6487 -0.101361 15.3039 0.304083 15.7092C0.506046 15.9113 0.771596 16.0129 1.03696 16.0129C1.30232 16.0129 1.56768 15.9113 1.76983 15.7092L7.99992 9.47889L14.2302 15.7092C14.4324 15.9113 14.6977 16.0129 14.9631 16.0129C15.2284 16.0129 15.4938 15.9113 15.696 15.7092C16.1014 15.3039 16.1014 14.6487 15.696 14.2434L9.46586 8.01314Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_14362_453">
            <rect width={16} height={16} fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  CloseIcon2.displayName = 'CloseIcon2';
}
