import React, { SVGProps } from 'react';

export const CheckIcon1 = React.forwardRef<any, SVGProps<SVGSVGElement>>(
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
        <circle cx={8} cy={8} r={8} fill="#25B770" />
        <path
          d="M6.97554 11.3051C6.89202 11.3901 6.77806 11.4375 6.65969 11.4375C6.54131 11.4375 6.42736 11.3901 6.34383 11.3051L3.82134 8.75217C3.55955 8.48728 3.55955 8.05774 3.82134 7.79334L4.13719 7.47365C4.39905 7.20876 4.82305 7.20876 5.08483 7.47365L6.65969 9.0673L10.9152 4.76117C11.177 4.49628 11.6014 4.49628 11.8628 4.76117L12.1787 5.08086C12.4404 5.34575 12.4404 5.7752 12.1787 6.03968L6.97554 11.3051Z"
          fill="white"
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  CheckIcon1.displayName = 'CheckIcon1';
}
