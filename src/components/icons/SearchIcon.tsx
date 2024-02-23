import { useTheme } from '@emotion/react';
import React, { SVGProps } from 'react';

export const SearchIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    const theme = useTheme();

    return (
      <svg
        ref={ref}
        width={16}
        height={16}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.4375 6.75C2.4375 4.36827 4.36827 2.4375 6.75 2.4375C9.13173 2.4375 11.0625 4.36827 11.0625 6.75C11.0625 9.13173 9.13173 11.0625 6.75 11.0625C4.36827 11.0625 2.4375 9.13173 2.4375 6.75ZM6.75 1C3.57436 1 1 3.57436 1 6.75C1 9.92564 3.57436 12.5 6.75 12.5C8.06958 12.5 9.28534 12.0555 10.2557 11.308L13.7686 14.8209C14.0347 15.0871 14.5101 15.0433 14.7762 14.7771C15.0424 14.5109 15.0879 14.0339 14.8217 13.7678L11.3087 10.2548C12.0558 9.28459 12.5 8.06918 12.5 6.75C12.5 3.57436 9.92564 1 6.75 1Z"
          fill={theme.color.dc003}
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  SearchIcon.displayName = 'SearchIcon';
}
