import React, { SVGProps } from 'react';

export const FlagIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
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
          d="M3 15V7.90909M3 7.90909V2H12.8634C13.2984 2 13.5259 2.51716 13.232 2.83786L11.5645 4.6569C11.3873 4.85023 11.3896 5.14765 11.5697 5.33824L13.2027 7.06561C13.504 7.38442 13.278 7.90909 12.8393 7.90909H3Z"
          stroke="#999999"
          strokeLinecap="round"
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  FlagIcon.displayName = 'FlagIcon';
}
