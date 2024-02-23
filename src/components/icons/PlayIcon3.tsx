import { useTheme } from '@emotion/react';
import React, { SVGProps } from 'react';

export const PlayIcon3 = React.forwardRef<any, SVGProps<SVGSVGElement>>(
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
          d="M11 8L6.5 10.5981L6.5 5.40192L11 8Z"
          stroke={theme.color.dc003}
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  PlayIcon3.displayName = 'PlayIcon3';
}
