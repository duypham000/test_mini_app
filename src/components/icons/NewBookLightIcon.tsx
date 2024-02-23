import React, { SVGProps } from 'react';

export const NewBookLightIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M6 9H3.5C2.94772 9 2.5 9.44772 2.5 10V18C2.5 19 3.5 20.5 5 20.5M5 20.5C6.5 20.5 7.5 19 7.5 18V5C7.5 4.44772 7.94772 4 8.5 4H20.5C21.0523 4 21.5 4.44772 21.5 5V18C21.5 19 20.5 20.5 19 20.5C17 20.5 8.83333 20.5 5 20.5Z"
          stroke="#4D4D4D"
          strokeLinecap="round"
        />
        <path
          d="M10 12.5H19M10 16.5H19M15 8.5L19 8.5"
          stroke="#4D4D4D"
          strokeLinecap="round"
        />
        <path
          d="M10 7.5C10 7.22386 10.2239 7 10.5 7H12.5C12.7761 7 13 7.22386 13 7.5V9.5C13 9.77614 12.7761 10 12.5 10H10.5C10.2239 10 10 9.77614 10 9.5V7.5Z"
          stroke="#4D4D4D"
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  NewBookLightIcon.displayName = 'NewBookLightIcon';
}
