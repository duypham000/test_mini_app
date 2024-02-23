import React, { SVGProps } from 'react';

export const LeftDarkIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        width={20}
        height={20}
        {...props}
        ref={ref}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM15.0782 11.2333C15.144 11.2481 15.2043 11.2812 15.2521 11.3289C15.2999 11.3766 15.3332 11.4368 15.3482 11.5026C15.3632 11.5684 15.3592 11.6371 15.3368 11.7007C15.0648 12.4712 14.6225 13.1705 14.0429 13.7464C13.0098 14.7787 11.6091 15.3584 10.1486 15.3582C8.68823 15.3579 7.28771 14.7776 6.25504 13.745C5.22237 12.7123 4.6421 11.3118 4.64183 9.85135C4.64155 8.39094 5.22129 6.9902 6.25357 5.95714C6.8294 5.37754 7.52853 4.93526 8.29892 4.66321C8.36256 4.64067 8.43128 4.63662 8.49712 4.65154C8.56296 4.66646 8.62322 4.69974 8.67092 4.74751C8.71862 4.79529 8.7518 4.8556 8.76662 4.92146C8.78144 4.98733 8.77728 5.05604 8.75464 5.11964C8.44992 5.97414 8.39393 6.89757 8.59316 7.78263C8.79239 8.66769 9.23866 9.47805 9.88014 10.1196C10.5216 10.7611 11.3319 11.2074 12.217 11.4067C13.102 11.606 14.0255 11.55 14.88 11.2454C14.9436 11.2227 15.0123 11.2185 15.0782 11.2333Z"
          fill="#999999"
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  LeftDarkIcon.displayName = 'LeftDarkIcon';
}
