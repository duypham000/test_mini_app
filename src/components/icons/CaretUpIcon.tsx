import React, { SVGProps } from 'react';

export const CaretUpIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        width={40}
        height={16}
        viewBox="0 0 40 16"
        stroke="#999999"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 12L20 4L28 12" strokeWidth={4} strokeLinecap="round" />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  CaretUpIcon.displayName = 'CaretUpIcon';
}
