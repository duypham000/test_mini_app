import React, { SVGProps } from 'react';

export const CompanyEventIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
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
        <circle cx={12} cy={12} r={12} fill="#B43333" />
        <g clipPath="url(#clip0_21105_1372)">
          <path
            d="M16.2 7.20001H15.6V6H14.4V7.20001H9.59998V6H8.39997V7.20001H7.79998C7.13699 7.20001 6.60599 7.737 6.60599 8.40002L6.59998 16.8C6.59998 17.463 7.13697 18 7.79998 18H16.2C16.863 18 17.4 17.463 17.4 16.8V8.39999C17.4 7.737 16.863 7.20001 16.2 7.20001ZM16.2 16.8H7.79998V10.2H16.2V16.8Z"
            fill="white"
          />
          <path
            d="M14.718 12.036L14.082 11.4L11.154 14.328L9.88199 13.056L9.24597 13.692L11.154 15.6L14.718 12.036Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_21105_1372">
            <rect
              width={12}
              height={12}
              fill="white"
              transform="translate(6 6)"
            />
          </clipPath>
        </defs>
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  CompanyEventIcon.displayName = 'CompanyEventIcon';
}
