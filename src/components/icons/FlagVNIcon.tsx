import React, { SVGProps } from 'react';

export const FlagVNIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
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
          d="M6.14503 2.66681H0V13.3332H6.14503H16V2.66681H6.14503Z"
          fill="#E14040"
        />
        <path
          d="M8 4.91498L8.70822 7.09457H11L9.14587 8.44163L9.85413 10.6213L8 9.2742L6.14587 10.6213L6.85413 8.44163L5 7.09457H7.29178L8 4.91498Z"
          fill="#FFC701"
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  FlagVNIcon.displayName = 'FlagVNIcon';
}
