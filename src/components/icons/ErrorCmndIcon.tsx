import React, { SVGProps } from 'react';

export const ErrorCmndIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
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
          d="M12 23.9921C18.6274 23.9921 24 18.623 24 11.9999C24 5.37687 18.6274 0.0078125 12 0.0078125C5.37258 0.0078125 0 5.37687 0 11.9999C0 18.623 5.37258 23.9921 12 23.9921Z"
          fill="#E14040"
        />
        <path
          d="M8.19471 6.33947L6.33887 8.19531L15.8075 17.6639L17.6633 15.8081L8.19471 6.33947Z"
          fill="white"
        />
        <path
          d="M15.8065 6.3361L6.33789 15.8047L8.19373 17.6605L17.6623 8.19194L15.8065 6.3361Z"
          fill="white"
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  ErrorCmndIcon.displayName = 'ErrorCmndIcon';
}
