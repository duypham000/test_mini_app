import React, { SVGProps } from 'react';

export const IconIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
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
        <circle cx={12} cy={12} r="9.5" stroke="#999999" />
        <path
          d="M15.428 10.8421C16.2409 10.8421 16.8972 10.2074 16.8972 9.42105C16.8972 8.63474 16.2409 8 15.428 8C14.6151 8 13.9589 8.63474 13.9589 9.42105C13.9589 10.2074 14.6151 10.8421 15.428 10.8421ZM8.57199 10.8421C9.38492 10.8421 10.0411 10.2074 10.0411 9.42105C10.0411 8.63474 9.38492 8 8.57199 8C7.75906 8 7.10284 8.63474 7.10284 9.42105C7.10284 10.2074 7.75906 10.8421 8.57199 10.8421ZM12 17C14.2821 17 16.2165 15.6216 17 13.6842H7C7.78355 15.6216 9.71792 17 12 17Z"
          fill="#999999"
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  IconIcon.displayName = 'IconIcon';
}
