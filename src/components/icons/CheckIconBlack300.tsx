import React, { SVGProps } from 'react';

export const CheckIconBlack300 = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        width={12}
        height={12}
        viewBox="0 0 12 12"
        fill="#999999"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M4.77065 9.96607C4.67042 10.0681 4.53367 10.125 4.39162 10.125C4.24957 10.125 4.11283 10.0681 4.0126 9.96607L0.985602 6.9026C0.671466 6.58473 0.671466 6.06929 0.985602 5.75201L1.36463 5.36838C1.67886 5.05051 2.18766 5.05051 2.5018 5.36838L4.39162 7.28077L9.4982 2.1134C9.81244 1.79553 10.3217 1.79553 10.6354 2.1134L11.0144 2.49703C11.3285 2.8149 11.3285 3.33025 11.0144 3.64762L4.77065 9.96607Z" />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  CheckIconBlack300.displayName = 'CheckIconBlack300';
}
