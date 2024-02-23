import React, { SVGProps } from 'react';

export const CheckCourseIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx={16} cy={16} r={16} fill="#EC8000" />
        <path
          d="M14.3609 21.2881C14.2272 21.4241 14.0449 21.5 13.8555 21.5C13.6661 21.5 13.4838 21.4241 13.3501 21.2881L9.31414 17.2035C8.89529 16.7796 8.89529 16.0924 9.31414 15.6693L9.8195 15.1578C10.2385 14.734 10.9169 14.734 11.3357 15.1578L13.8555 17.7077L20.6643 10.8179C21.0832 10.394 21.7623 10.394 22.1805 10.8179L22.6859 11.3294C23.1047 11.7532 23.1047 12.4403 22.6859 12.8635L14.3609 21.2881Z"
          fill="white"
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  CheckCourseIcon.displayName = 'CheckCourseIcon';
}
