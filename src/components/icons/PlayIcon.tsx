import React, { SVGProps } from 'react';

export const PlayIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        width={96}
        height={96}
        viewBox="0 0 96 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx={48} cy={48} r={48} fill="#006CEC" fillOpacity="0.3" />
        <path d="M72 48L36 68.7846L36 27.2154L72 48Z" fill="#EC8000" />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  PlayIcon.displayName = 'PlayIcon';
}
