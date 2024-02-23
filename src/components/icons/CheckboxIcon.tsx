import React, { SVGProps } from 'react';

export const CheckboxIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        width={10}
        height={10}
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.97554 8.30505C3.89202 8.39007 3.77806 8.4375 3.65969 8.4375C3.54131 8.4375 3.42736 8.39007 3.34383 8.30505L0.821335 5.75217C0.559555 5.48728 0.559555 5.05774 0.821335 4.79334L1.13719 4.47365C1.39905 4.20876 1.82305 4.20876 2.08483 4.47365L3.65969 6.0673L7.91517 1.76117C8.17703 1.49628 8.60144 1.49628 8.86281 1.76117L9.17867 2.08086C9.44044 2.34575 9.44044 2.7752 9.17867 3.03968L3.97554 8.30505Z"
          fill="white"
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  CheckboxIcon.displayName = 'CheckboxIcon';
}
