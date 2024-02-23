import React, { SVGProps } from 'react';

export const CommentNotiIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
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
          d="M15.9877 7H8.0123C7.17844 7 6.5 7.67024 6.5 8.49433V13.3171C6.5 14.1394 7.17548 14.8086 8.00693 14.8115V17L11.1899 14.8115H15.9877C16.8216 14.8115 17.5 14.1411 17.5 13.3171V8.49433C17.5 7.67024 16.8216 7 15.9877 7Z"
          fill="white"
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  CommentNotiIcon.displayName = 'CommentNotiIcon';
}
