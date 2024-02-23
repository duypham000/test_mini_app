import React, { SVGProps } from 'react';

export const LockIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={props.width || 32}
        height={props.height || 32}
        viewBox="0 0 32 32"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.1657 5.89319C10.2913 6.93421 10 8.19467 10 9V14H22V9C22 8.19467 21.7087 6.93421 20.8343 5.89319C19.9926 4.89115 18.5342 4 16 4C13.4658 4 12.0074 4.89115 11.1657 5.89319ZM24 14H26C27.1046 14 28 14.8954 28 16V28C28 29.1046 27.1046 30 26 30H6C4.89543 30 4 29.1046 4 28V16C4 14.8954 4.89543 14 6 14H8V9C8 7.80533 8.40875 6.06579 9.63429 4.60681C10.8926 3.10885 12.9342 2 16 2C19.0658 2 21.1074 3.10885 22.3657 4.60681C23.5913 6.06579 24 7.80533 24 9V14ZM6 16L6 28H26V16H6ZM16 19C15.4477 19 15 19.4477 15 20C15 20.5523 15.4477 21 16 21C16.5523 21 17 20.5523 17 20C17 19.4477 16.5523 19 16 19ZM17 22.8293C18.1652 22.4175 19 21.3062 19 20C19 18.3431 17.6569 17 16 17C14.3431 17 13 18.3431 13 20C13 21.3062 13.8348 22.4175 15 22.8293V26C15 26.5523 15.4477 27 16 27C16.5523 27 17 26.5523 17 26V22.8293Z"
          fill={props.color || '#999999'}
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  LockIcon.displayName = 'LockIcon';
}
