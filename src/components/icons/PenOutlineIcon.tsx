import React, { SVGProps } from 'react';

export const PenOutlineIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
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
          d="M9 3.99978L3.01959 9.9802C3.00677 9.99301 2.99768 10.0091 2.99328 10.0267L2.04042 13.8381C2.02211 13.9113 2.08845 13.9777 2.16169 13.9594L5.97313 13.0065C5.99071 13.0021 6.00677 12.993 6.01959 12.9802L12 6.99978M9 3.99978L12 6.99978M9 3.99978L10.9785 2.02132C10.9925 2.00728 11.0093 1.99793 11.0289 1.99456C11.2538 1.95585 12.7357 1.73551 13.5 2.49979C14.2643 3.26406 14.0439 4.74595 14.0052 4.97088C14.0019 4.99045 13.9925 5.00728 13.9785 5.02132L12 6.99978"
          stroke="#999999"
          strokeLinecap="round"
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  PenOutlineIcon.displayName = 'PenOutlineIcon';
}
