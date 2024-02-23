import { useTheme } from '@emotion/react';
import React, { SVGProps } from 'react';

export const ArrowDownIcon2 = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    const theme = useTheme();

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
          d="M13 6L8 11L5.5 8.5L3 6"
          stroke={theme.color.dc003}
          strokeWidth={2}
          strokeLinecap="round"
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  ArrowDownIcon2.displayName = 'ArrowDownIcon2';
}
