import React, { SVGProps } from 'react';

export const DownloadIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="#999999"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.99996 0C5.44768 0 4.99996 0.447715 4.99996 1V5.5H3.14492C2.68198 5.5 2.46764 6.0749 2.8176 6.37796L6.67264 9.71653C6.86052 9.87924 7.1394 9.87924 7.32729 9.71653L11.1823 6.37797C11.5323 6.0749 11.3179 5.5 10.855 5.5H8.99996V1C8.99996 0.447715 8.55225 0 7.99996 0H5.99996Z"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 11C0 10.4477 0.447715 10 1 10C1.55228 10 2 10.4477 2 11V12H12V11C12 10.4477 12.4477 10 13 10C13.5523 10 14 10.4477 14 11V12V13C14 13.5523 13.5523 14 13 14H1C0.447716 14 0 13.5523 0 13V12V11Z"
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  DownloadIcon.displayName = 'DownloadIcon';
}
