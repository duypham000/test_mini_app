import { useTheme } from '@emotion/react';
import React, { SVGProps } from 'react';

export const DotIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    const theme = useTheme();

    return (
      <svg
        {...props}
        ref={ref}
        width={16}
        height={4}
        viewBox="0 0 16 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx={2} cy={2} r={2} fill={theme.color.dc003} />
        <circle cx={8} cy={2} r={2} fill={theme.color.dc003} />
        <circle cx={14} cy={2} r={2} fill={theme.color.dc003} />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  DotIcon.displayName = 'DotIcon';
}
