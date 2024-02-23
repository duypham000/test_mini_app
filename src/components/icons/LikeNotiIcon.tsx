import React, { SVGProps } from 'react';

export const LikeNotiIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx={12} cy={12} r={12} fill="#E14040" />
        <path
          d="M11.7457 16.8753C11.8731 17.0416 12.123 17.0416 12.2504 16.8753C13.0993 15.7664 15.7098 13.7863 16.2751 13.1697C17.7862 11.6586 17.7862 9.20854 16.2751 7.69745C15.1977 6.62005 13.0458 6.82709 12.1698 8.07017C12.0858 8.18944 11.9103 8.18944 11.8263 8.07017C10.9504 6.82697 8.79836 6.61993 7.72096 7.69733C6.20988 9.20842 6.20988 11.6585 7.72096 13.1696C8.28629 13.7863 10.8968 15.7663 11.7457 16.8753Z"
          fill="white"
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  LikeNotiIcon.displayName = 'LikeNotiIcon';
}
