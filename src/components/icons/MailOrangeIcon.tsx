import React, { SVGProps } from 'react';

export const MailOrangeIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
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
        <circle cx={12} cy={12} r={12} fill="#EC8000" />
        <path
          d="M19.9881 7.44668C19.9881 7.4284 20.0007 7.41061 19.9998 7.39253L15.1172 12.0972L19.994 16.6516C19.9968 16.6191 19.9881 16.5863 19.9881 16.5531V7.44668Z"
          fill="white"
        />
        <path
          d="M14.3722 12.8215L12.379 14.7393C12.2781 14.8363 12.1479 14.885 12.0175 14.885C11.8899 14.885 11.7623 14.8384 11.6621 14.745L9.67427 12.8927L4.76562 17.6241C4.88498 17.667 5.01309 17.7003 5.14726 17.7003H18.8878C19.0871 17.7003 19.2739 17.6396 19.4364 17.5491L14.3722 12.8215Z"
          fill="white"
        />
        <path
          d="M12.0117 13.6456L19.4633 6.46751C19.2946 6.3672 19.0982 6.29991 18.8877 6.29991H5.14713C4.87303 6.29991 4.62188 6.40634 4.42627 6.56865L12.0117 13.6456Z"
          fill="white"
        />
        <path
          d="M4 7.62157V16.553C4 16.6555 4.02357 16.7544 4.04915 16.8488L8.8969 12.1806L4 7.62157Z"
          fill="white"
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  MailOrangeIcon.displayName = 'MailOrangeIcon';
}
