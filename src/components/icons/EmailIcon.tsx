import React, { SVGProps } from 'react';

export const EmailIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.219 4H2.78102L6.82009 7.36589L8 8.34915L9.17991 7.36589L13.219 4ZM2 4.65085V11.3123L5.74704 7.77339L2 4.65085ZM2.7282 12H13.2718L9.47925 8.41815L8.32009 9.38411L8 9.65085L7.67991 9.38411L6.52075 8.41815L2.7282 12ZM14 11.3123V4.65085L10.253 7.77339L14 11.3123ZM1 4C1 3.44772 1.44772 3 2 3H14C14.5523 3 15 3.44772 15 4V12C15 12.5523 14.5523 13 14 13H2C1.44772 13 1 12.5523 1 12V4Z"
          fill="#4D4D4D"
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  EmailIcon.displayName = 'EmailIcon';
}
