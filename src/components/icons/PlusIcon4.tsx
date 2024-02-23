import React, { SVGProps } from 'react';

export const PlusIcon4 = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx={16} cy={16} r={16} fill="#006CEC" fillOpacity="0.1" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.1111 9.00001C17.1111 8.44773 16.6634 8.00001 16.1111 8C15.5588 7.99999 15.1111 8.4477 15.1111 8.99999L15.111 15.1111H9C8.44772 15.1111 8 15.5588 8 16.1111C8 16.6634 8.44772 17.1111 9 17.1111H15.111L15.1109 23.2222C15.1109 23.7745 15.5586 24.2222 16.1109 24.2222C16.6632 24.2222 17.1109 23.7745 17.1109 23.2222L17.111 17.1111H23.2222C23.7745 17.1111 24.2222 16.6634 24.2222 16.1111C24.2222 15.5588 23.7745 15.1111 23.2222 15.1111H17.111L17.1111 9.00001Z"
          fill="#0056BD"
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  PlusIcon4.displayName = 'PlusIcon4';
}
