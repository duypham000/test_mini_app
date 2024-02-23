import React, { SVGProps } from 'react';

export const PortfolioIconBlack400 = React.forwardRef<
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.259 2.00001C6.0822 2.3797 2 6.70582 2 11.9867C2 14.4738 2.90547 16.7492 4.40431 18.5002L7.03477 15.8661C6.20076 14.7967 5.70379 13.4508 5.70379 11.9888C5.70379 8.75769 8.13091 6.09427 11.259 5.72701V2.00001ZM12 22.0005C9.49409 22.0005 7.20346 21.0775 5.44866 19.5524L8.07695 16.9205C9.15301 17.78 10.5166 18.2937 12.0001 18.2937C14.7373 18.2937 17.0666 16.5447 17.9341 14.1017L21.519 15.0637C20.2225 19.0887 16.4508 22.0005 12 22.0005ZM21.8674 13.6213C21.9546 13.0894 22 12.5433 22 11.9867C22 6.70567 17.9176 2.37945 12.7405 1.99998V5.72694C15.8689 6.09392 18.2964 8.75747 18.2964 11.9888C18.2964 12.2134 18.2847 12.4353 18.2618 12.6538L21.8674 13.6213Z"
        fill="#4D4D4D"
      />
      <rect x={8} y={12} width={2} height={3} fill="#4D4D4D" />
      <rect x={11} y={11} width={2} height={4} fill="#4D4D4D" />
      <rect x={14} y={9} width={2} height={6} fill="#4D4D4D" />
    </svg>
  );
});

if (process.env.NODE_ENV !== 'production') {
  PortfolioIconBlack400.displayName = 'PortfolioIconBlack400';
}
