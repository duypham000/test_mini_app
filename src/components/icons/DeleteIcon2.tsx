import { useTheme } from '@emotion/react';
import React, { SVGProps } from 'react';

export const DeleteIcon2 = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    const theme = useTheme();

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
          d="M2.81451 5.66797V12.9272C2.81451 13.4457 3.33303 15.0013 4.88859 15.0013C6.44414 15.0013 9.55525 15.0013 11.1108 15.0013C12.6664 15.0013 13.1849 13.4457 13.1849 12.9272C13.1849 11.3717 13.1849 7.74204 13.1849 5.66797"
          stroke={theme.color.dc003}
          strokeLinecap="round"
        />
        <path
          d="M1.77783 3.59259H10.0741M14.2223 3.59259H10.0741M5.92598 3.59259V2.03704C5.92598 1.51852 6.44449 1 6.96301 1C7.79264 1 8.6914 1 9.03708 1C9.5556 1 10.0741 1.51852 10.0741 2.03704C10.0741 2.86666 10.0741 3.41975 10.0741 3.59259"
          stroke={theme.color.dc003}
          strokeLinecap="round"
        />
        <path
          d="M6.4444 6.70703V11.8922M9.5555 6.70703V11.8922"
          stroke={theme.color.dc003}
          strokeLinecap="round"
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  DeleteIcon2.displayName = 'DeleteIcon2';
}
