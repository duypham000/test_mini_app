import React, { SVGProps } from 'react';

export const TickIcon1 = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        width={16}
        height={16}
        viewBox="0 0 16 16"
        fill="#999999"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M6.36086 13.2881C6.22723 13.4241 6.0449 13.5 5.8555 13.5C5.6661 13.5 5.48377 13.4241 5.35013 13.2881L1.31414 9.20347C0.895288 8.77964 0.895288 8.09238 1.31414 7.66935L1.8195 7.15785C2.23848 6.73402 2.91689 6.73402 3.33573 7.15785L5.8555 9.70769L12.6643 2.81787C13.0832 2.39404 13.7623 2.39404 14.1805 2.81787L14.6859 3.32937C15.1047 3.7532 15.1047 4.44033 14.6859 4.86349L6.36086 13.2881Z" />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  TickIcon1.displayName = 'TickIcon1';
}
