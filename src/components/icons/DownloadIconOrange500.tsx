import React, { SVGProps } from 'react';

export const DownloadIconOrange500 = React.forwardRef<
  any,
  SVGProps<SVGSVGElement>
>((props, ref) => {
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
      <rect
        x={4}
        y={3}
        width={16}
        height={18}
        rx={3}
        stroke="#EC8000"
        strokeWidth={2}
      />
      <rect x={10} y={7} width={4} height={7} rx={1} fill="#EC8000" />
      <path
        d="M11.8586 16.8586C11.9367 16.9367 12.0633 16.9367 12.1414 16.8586L15.6586 13.3414C15.7846 13.2154 15.6953 13 15.5172 13H8.48284C8.30466 13 8.21543 13.2154 8.34142 13.3414L11.8586 16.8586Z"
        fill="#EC8000"
      />
    </svg>
  );
});

if (process.env.NODE_ENV !== 'production') {
  DownloadIconOrange500.displayName = 'DownloadIconOrange500';
}
