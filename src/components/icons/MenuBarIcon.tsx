import React, { SVGProps } from 'react';

export const MenuBarIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x={1} y={2} width={18} height={3} rx="1.5" fill="#999999" />
        <path
          d="M1 10C1 9.17157 1.67157 8.5 2.5 8.5H17.5C18.3284 8.5 19 9.17157 19 10C19 10.8284 18.3284 11.5 17.5 11.5H2.5C1.67157 11.5 1 10.8284 1 10Z"
          fill="#999999"
        />
        <rect x={1} y={15} width={18} height={3} rx="1.5" fill="#999999" />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  MenuBarIcon.displayName = 'MenuBarIcon';
}
