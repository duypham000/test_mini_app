import React, { SVGProps } from 'react';

export const LoginIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
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
        <path
          d="M10 22H19C20.6569 22 22 20.6569 22 19V5C22 3.34315 20.6569 2 19 2H10"
          stroke="#006CEC"
          strokeLinecap="round"
        />
        <path
          d="M2 12.5C1.72386 12.5 1.5 12.2761 1.5 12C1.5 11.7239 1.72386 11.5 2 11.5L2 12.5ZM14.3536 11.6464C14.5488 11.8417 14.5488 12.1583 14.3536 12.3536L11.1716 15.5355C10.9763 15.7308 10.6597 15.7308 10.4645 15.5355C10.2692 15.3403 10.2692 15.0237 10.4645 14.8284L13.2929 12L10.4645 9.17157C10.2692 8.97631 10.2692 8.65973 10.4645 8.46447C10.6597 8.2692 10.9763 8.2692 11.1716 8.46447L14.3536 11.6464ZM2 11.5L14 11.5V12.5L2 12.5L2 11.5Z"
          fill="#006CEC"
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  LoginIcon.displayName = 'LoginIcon';
}
