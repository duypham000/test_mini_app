import React, { SVGProps } from 'react';

export const CheckedIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
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
          d="M10.5658 16.6271C10.4488 16.7461 10.2893 16.8125 10.1236 16.8125C9.95784 16.8125 9.7983 16.7461 9.68136 16.6271L6.14987 13.053C5.78338 12.6822 5.78338 12.0808 6.14987 11.7107L6.59206 11.2631C6.95867 10.8923 7.55227 10.8923 7.91877 11.2631L10.1236 13.4942L16.0812 7.46564C16.4478 7.09479 17.042 7.09479 17.4079 7.46564L17.8501 7.9132C18.2166 8.28405 18.2166 8.88529 17.8501 9.25555L10.5658 16.6271Z"
          fill="white"
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  CheckedIcon.displayName = 'CheckedIcon';
}
