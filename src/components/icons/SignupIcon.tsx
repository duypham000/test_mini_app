import React, { SVGProps } from 'react';

export const SignupIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
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
        <circle cx={12} cy={7} r="4.5" stroke="#006CEC" />
        <path
          d="M12 11.5C9.268 11.3708 3.92514 12.7661 2.36678 18.8397C2.07429 19.9797 3.01542 21.0006 4.19228 21.0006H12"
          stroke="#006CEC"
          strokeLinecap="round"
        />
        <path
          d="M12 11.5002C13.3038 11.4385 15.2021 11.724 17 12.6995M12 21.0008H16"
          stroke="#006CEC"
          strokeLinecap="round"
        />
        <path
          d="M21.5 17.5H15.5M18.5 14.5V20.5"
          stroke="#006CEC"
          strokeLinecap="round"
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  SignupIcon.displayName = 'SignupIcon';
}
