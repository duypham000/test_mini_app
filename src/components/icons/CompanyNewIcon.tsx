import React, { SVGProps } from 'react';

export const CompanyNewIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
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
        <circle cx={12} cy={12} r={12} fill="#1E925A" />
        <path
          d="M16.725 7.5H7.275C6.5718 7.5 6 7.9485 6 8.5V15.5C6 16.0515 6.5718 16.5 7.275 16.5H16.725C17.4282 16.5 18 16.0515 18 15.5V8.5C18 7.9485 17.4282 7.5 16.725 7.5ZM16.725 15.5H7.275C7.2408 15.5 7.2174 15.492 7.2072 15.492C7.203 15.492 7.2006 15.493 7.2 15.496L7.1928 8.523C7.197 8.518 7.224 8.5 7.275 8.5H16.725C16.7724 8.5005 16.7982 8.514 16.8 8.504L16.8072 15.477C16.803 15.482 16.776 15.5 16.725 15.5Z"
          fill="white"
        />
        <path
          d="M8.25 9.75H12V12.45H8.25V9.75ZM12.625 13.35H8.25V14.25H15.75V13.35H13.25H12.625ZM13.25 11.55H15.75V12.45H13.25V11.55ZM13.25 9.75H15.75V10.65H13.25V9.75Z"
          fill="white"
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  CompanyNewIcon.displayName = 'CompanyNewIcon';
}
