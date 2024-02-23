import React, { SVGProps } from 'react';

export const LinkedInCircleIcon = React.forwardRef<
  any,
  SVGProps<SVGSVGElement>
>((props, ref) => {
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
      <circle cx={12} cy={12} r={12} fill="#006CEC" fillOpacity="0.1" />
      <g clipPath="url(#clip0_218_32)">
        <path
          d="M18.5312 18.125V18.1245H18.5343V13.6318C18.5343 11.434 18.0611 9.74091 15.4917 9.74091C14.2565 9.74091 13.4275 10.4187 13.0891 11.0614H13.0534V9.94609H10.6172V18.1245H13.154V14.0749C13.154 13.0086 13.3561 11.9776 14.6765 11.9776C15.9776 11.9776 15.997 13.1944 15.997 14.1432V18.125H18.5312Z"
          fill="#0077B5"
        />
        <path
          d="M6.07715 9.94659H8.61698V18.125H6.07715V9.94659Z"
          fill="#0077B5"
        />
        <path
          d="M7.34602 5.7851C6.53395 5.7851 5.875 6.44404 5.875 7.25612C5.875 8.06819 6.53395 8.74092 7.34602 8.74092C8.15809 8.74092 8.81704 8.06819 8.81704 7.25612C8.81653 6.44404 8.15758 5.7851 7.34602 5.7851V5.7851Z"
          fill="#0077B5"
        />
      </g>
      <defs>
        <clipPath id="clip0_218_32">
          <rect
            width={14}
            height={14}
            fill="white"
            transform="translate(5 5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
});

if (process.env.NODE_ENV !== 'production') {
  LinkedInCircleIcon.displayName = 'LinkedInCircleIcon';
}
