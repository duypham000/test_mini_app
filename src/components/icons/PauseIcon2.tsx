import { useTheme } from '@emotion/react';
import React, { SVGProps } from 'react';

export const PauseIcon2 = React.forwardRef<any, SVGProps<SVGSVGElement>>(
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
        <circle cx={8} cy={8} r="6.5" stroke={theme.color.dc003} />
        <path
          d="M6.5 5V11M9.5 5V11"
          stroke={theme.color.dc003}
          strokeLinecap="round"
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  PauseIcon2.displayName = 'PauseIcon2';
}
