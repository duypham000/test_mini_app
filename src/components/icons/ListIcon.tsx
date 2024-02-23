import React, { SVGProps } from 'react';

export const ListIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        width={23}
        height={23}
        viewBox="0 0 23 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x={7} y={2} width={15} height={4} rx={2} fill="#EC8000" />
        <path
          d="M7 11.5C7 10.3954 7.89543 9.5 9 9.5H20C21.1046 9.5 22 10.3954 22 11.5C22 12.6046 21.1046 13.5 20 13.5H9C7.89543 13.5 7 12.6046 7 11.5Z"
          fill="#EC8000"
        />
        <rect x={7} y={17} width={15} height={4} rx={2} fill="#EC8000" />
        <circle cx={3} cy={4} r={2} fill="#EC8000" />
        <path
          d="M5 11.5C5 12.6046 4.10457 13.5 3 13.5C1.89543 13.5 1 12.6046 1 11.5C1 10.3954 1.89543 9.5 3 9.5C4.10457 9.5 5 10.3954 5 11.5Z"
          fill="#EC8000"
        />
        <path
          d="M5 19C5 20.1046 4.10457 21 3 21C1.89543 21 1 20.1046 1 19C1 17.8954 1.89543 17 3 17C4.10457 17 5 17.8954 5 19Z"
          fill="#EC8000"
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  ListIcon.displayName = 'ListIcon';
}
