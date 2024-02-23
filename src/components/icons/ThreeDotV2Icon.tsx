import React, { SVGProps } from 'react';

export const ThreeDotV2Icon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        width={16}
        height={2}
        viewBox="0 0 16 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.75994 0.730114V2H0.830966V0.730114H4.75994ZM10.3498 0.730114V2H6.42081V0.730114H10.3498ZM15.9396 0.730114V2H12.0107V0.730114H15.9396Z"
          fill="#F4F4F5"
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  ThreeDotV2Icon.displayName = 'ThreeDotV2Icon';
}
