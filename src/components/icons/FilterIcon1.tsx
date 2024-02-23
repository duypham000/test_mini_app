import { useTheme } from '@emotion/react';
import React, { SVGProps } from 'react';

export const FilterIcon1 = React.forwardRef<any, SVGProps<SVGSVGElement>>(
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
          d="M0.5 2H12.5M0.5 7.5H7M0.5 13H5.5"
          stroke={theme.color.dc003}
          strokeLinecap="round"
        />
        <path
          d="M12.5 6C12.5 5.72386 12.2761 5.5 12 5.5C11.7239 5.5 11.5 5.72386 11.5 6H12.5ZM11.6464 14.3536C11.8417 14.5488 12.1583 14.5488 12.3536 14.3536L15.5355 11.1716C15.7308 10.9763 15.7308 10.6597 15.5355 10.4645C15.3403 10.2692 15.0237 10.2692 14.8284 10.4645L12 13.2929L9.17157 10.4645C8.97631 10.2692 8.65973 10.2692 8.46447 10.4645C8.2692 10.6597 8.2692 10.9763 8.46447 11.1716L11.6464 14.3536ZM11.5 6V14H12.5V6H11.5Z"
          fill={theme.color.dc003}
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  FilterIcon1.displayName = 'FilterIcon1';
}
