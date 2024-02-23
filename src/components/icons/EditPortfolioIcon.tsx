import React, { SVGProps } from 'react';

export const EditPortfolioIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        width={16}
        height={16}
        viewBox="0 0 16 16"
        stroke="#999999"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 4.00003L3.01959 9.98044C3.00677 9.99326 2.99768 10.0093 2.99328 10.0269L2.04042 13.8383C2.02211 13.9116 2.08845 13.9779 2.16169 13.9596L5.97313 13.0067C5.99071 13.0023 6.00677 12.9933 6.01959 12.9804L12 7.00003M9 4.00003L12 7.00003M9 4.00003L10.9785 2.02157C10.9925 2.00753 11.0093 1.99818 11.0289 1.99481C11.2538 1.9561 12.7357 1.73576 13.5 2.50003C14.2643 3.2643 14.0439 4.74619 14.0052 4.97112C14.0019 4.99069 13.9925 5.00753 13.9785 5.02157L12 7.00003"
          strokeLinecap="round"
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  EditPortfolioIcon.displayName = 'EditPortfolioIcon';
}
