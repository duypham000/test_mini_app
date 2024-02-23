import React, { SVGProps } from 'react';

export const MenuIconBlack400 = React.forwardRef<any, SVGProps<SVGSVGElement>>(
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
        <rect x={2} y={2} width={20} height={4} rx={2} fill="#4D4D4D" />
        <path
          d="M2 12C2 10.8954 2.89543 10 4 10H20C21.1046 10 22 10.8954 22 12C22 13.1046 21.1046 14 20 14H4C2.89543 14 2 13.1046 2 12Z"
          fill="#4D4D4D"
        />
        <rect x={2} y={18} width={20} height={4} rx={2} fill="#4D4D4D" />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  MenuIconBlack400.displayName = 'MenuIconBlack400';
}
