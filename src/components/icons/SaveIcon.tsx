import React, { SVGProps } from 'react';

export const SaveIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
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
          d="M3.5 3.00002V13.3545C3.5 13.9717 4.24086 14.2869 4.68552 13.8587L7.3067 11.3349C7.69397 10.9621 8.30674 10.9621 8.69397 11.335L11.3144 13.8586C11.7591 14.2868 12.5 13.9717 12.5 13.3544V3.00017C12.5 2.44789 12.0523 2.00018 11.5 2.00017L4.50002 2.00002C3.94773 2.00001 3.5 2.44773 3.5 3.00002Z"
          stroke="#999999"
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  SaveIcon.displayName = 'SaveIcon';
}
