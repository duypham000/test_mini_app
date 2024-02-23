import React, { SVGProps } from 'react';

export const NebulaAiIcon2 = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        width={24}
        height={24}
        viewBox="0 0 24 24"
        stroke="#999999"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8.11429 14.0571L2.23073 12.0776C2.14602 12.0491 2.13839 11.9323 2.21867 11.893L9.94286 8.11429M8.11429 14.0571L11.893 21.7813C11.9323 21.8616 12.0491 21.854 12.0776 21.7693L14.0571 15.8857M8.11429 14.0571L9.94286 8.11429M8.11429 14.0571L15.8857 9.94286M8.11429 14.0571L14.0571 15.8857M9.94286 8.11429L11.9224 2.23073C11.9509 2.14602 12.0677 2.13839 12.107 2.21867L15.8857 9.94286M15.8857 9.94286L21.7693 11.9224C21.854 11.9509 21.8616 12.0677 21.7813 12.107L14.0571 15.8857" />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  NebulaAiIcon2.displayName = 'NebulaAiIcon2';
}
