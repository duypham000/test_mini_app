import React, { SVGProps } from 'react';

export const LockFeatureIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.58285 2.9466C5.14563 3.4671 5 4.09734 5 4.5V7H11V4.5C11 4.09734 10.8544 3.4671 10.4171 2.9466C9.99629 2.44557 9.26712 2 8 2C6.73288 2 6.00371 2.44557 5.58285 2.9466ZM12 7H13C13.5523 7 14 7.44772 14 8V14C14 14.5523 13.5523 15 13 15H3C2.44772 15 2 14.5523 2 14V8C2 7.44772 2.44772 7 3 7H4V4.5C4 3.90266 4.20437 3.0329 4.81715 2.3034C5.44629 1.55443 6.46712 1 8 1C9.53288 1 10.5537 1.55443 11.1829 2.3034C11.7956 3.0329 12 3.90266 12 4.5V7ZM3 8L3 14H13V8H3ZM8 9.5C7.72386 9.5 7.5 9.72386 7.5 10C7.5 10.2761 7.72386 10.5 8 10.5C8.27614 10.5 8.5 10.2761 8.5 10C8.5 9.72386 8.27614 9.5 8 9.5ZM8.5 11.4146C9.0826 11.2087 9.5 10.6531 9.5 10C9.5 9.17157 8.82843 8.5 8 8.5C7.17157 8.5 6.5 9.17157 6.5 10C6.5 10.6531 6.9174 11.2087 7.5 11.4146V13C7.5 13.2761 7.72386 13.5 8 13.5C8.27614 13.5 8.5 13.2761 8.5 13V11.4146Z"
          fill="#4D4D4D"
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  LockFeatureIcon.displayName = 'LockFeatureIcon';
}
