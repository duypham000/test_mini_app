import React, { SVGProps } from 'react';

export const StarOutlineOrange = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        width={16}
        height={16}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.55291 2.00984C7.73725 1.64164 8.26275 1.64164 8.4471 2.00984L9.79073 4.69354C10.0109 5.13325 10.4326 5.43713 10.9193 5.50685L13.8999 5.93378C14.3122 5.99284 14.4758 6.50066 14.1754 6.78926L12.0371 8.84391C11.6774 9.18949 11.5131 9.69125 11.5986 10.1826L12.1059 13.0982C12.1768 13.5057 11.7504 13.8182 11.3832 13.6278L8.69018 12.2322C8.25739 12.0079 7.74261 12.0079 7.30982 12.2322L4.6168 13.6278C4.24957 13.8182 3.82324 13.5057 3.89414 13.0982L4.40143 10.1826C4.48693 9.69125 4.32258 9.18949 3.96292 8.84391L1.82459 6.78926C1.52423 6.50066 1.68778 5.99284 2.10012 5.93378L5.08067 5.50685C5.56744 5.43713 5.98912 5.13325 6.20927 4.69354L7.55291 2.00984Z"
          stroke="#EC8000"
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  StarOutlineOrange.displayName = 'StarOutlineOrange';
}
