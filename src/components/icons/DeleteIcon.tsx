import React, { SVGProps } from 'react';

export const DeleteIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
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
          d="M2.81445 5.66797V12.9272C2.81445 13.4457 3.33297 15.0013 4.88852 15.0013C6.44408 15.0013 9.55519 15.0013 11.1107 15.0013C12.6663 15.0013 13.1848 13.4457 13.1848 12.9272C13.1848 11.3717 13.1848 7.74204 13.1848 5.66797"
          stroke="#E14040"
          strokeLinecap="round"
        />
        <path
          d="M1.77783 3.59259H10.0741M14.2223 3.59259H10.0741M5.92598 3.59259V2.03704C5.92598 1.51852 6.44449 1 6.96301 1C7.79264 1 8.6914 1 9.03708 1C9.5556 1 10.0741 1.51852 10.0741 2.03704C10.0741 2.86666 10.0741 3.41975 10.0741 3.59259"
          stroke="#E14040"
          strokeLinecap="round"
        />
        <path
          d="M6.44434 6.70703V11.8922M9.55544 6.70703V11.8922"
          stroke="#E14040"
          strokeLinecap="round"
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  DeleteIcon.displayName = 'DeleteIcon';
}
