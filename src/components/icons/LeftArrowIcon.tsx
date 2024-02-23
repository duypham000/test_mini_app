import React, { SVGProps } from 'react';

export const LeftArrowIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        width={16}
        height={24}
        viewBox="0 0 16 24"
        stroke="#999999"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 3L4 12L12 21" strokeWidth={4} strokeLinecap="round" />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  LeftArrowIcon.displayName = 'LeftArrowIcon';
}
