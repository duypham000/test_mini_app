import React, { SVGProps } from 'react';

export const PrevIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        width={6}
        height={10}
        viewBox="0 0 6 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.436436 4.62204C0.206205 4.82142 0.206205 5.17858 0.436436 5.37796L5.17267 9.47967C5.4965 9.7601 6 9.53008 6 9.1017L6 0.898298C6 0.469922 5.49649 0.239896 5.17267 0.520334L0.436436 4.62204Z"
          fill="#999999"
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  PrevIcon.displayName = 'PrevIcon';
}
