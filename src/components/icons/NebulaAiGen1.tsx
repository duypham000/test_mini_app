import React, { SVGProps } from 'react';

export const NebulaAiGen1 = React.forwardRef<any, SVGProps<SVGSVGElement>>(
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
        <circle cx={12} cy={12} r={12} fill="#BD6600" />
        <path
          d="M9.66857 13.2343L6.23073 12.0776C6.14602 12.0491 6.13839 11.9323 6.21867 11.893L10.7657 9.66857M9.66857 13.2343L11.893 17.7813C11.9323 17.8616 12.0491 17.854 12.0776 17.7693L13.2343 14.3314M9.66857 13.2343L10.7657 9.66857M9.66857 13.2343L14.3314 10.7657M9.66857 13.2343L13.2343 14.3314M10.7657 9.66857L11.9224 6.23073C11.9509 6.14602 12.0677 6.13839 12.107 6.21867L14.3314 10.7657M14.3314 10.7657L17.7693 11.9224C17.854 11.9509 17.8616 12.0677 17.7813 12.107L13.2343 14.3314"
          stroke="white"
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  NebulaAiGen1.displayName = 'NebulaAiGen1';
}
