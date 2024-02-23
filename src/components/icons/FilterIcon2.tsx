import { useTheme } from '@emotion/react';
import React, { SVGProps } from 'react';

export const FilterIcon2 = React.forwardRef<any, SVGProps<SVGSVGElement>>(
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
          d="M12 1.5H4C3.44772 1.5 3 1.94772 3 2.5V3.48538C3 3.80833 3.15597 4.1114 3.41876 4.29912L6.08124 6.20088C6.34403 6.3886 6.5 6.69167 6.5 7.01462V14.0657C6.5 14.4651 6.94507 14.7033 7.27735 14.4818L9.0547 13.2969C9.3329 13.1114 9.5 12.7992 9.5 12.4648V7.01462C9.5 6.69167 9.65597 6.3886 9.91876 6.20088L12.5812 4.29912C12.844 4.1114 13 3.80833 13 3.48538V2.5C13 1.94772 12.5523 1.5 12 1.5Z"
          stroke={theme.color.dc003}
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  FilterIcon2.displayName = 'FilterIcon2';
}
