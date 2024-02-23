import React, { SVGProps } from 'react';

export const NavWatchlistLightIcon = React.forwardRef<
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
      <g clipPath="url(#clip0_15355_4721)">
        <path
          d="M11.5516 3.03827C11.735 2.66665 12.265 2.66665 12.4484 3.03827L14.8457 7.89574C15.0642 8.33845 15.4865 8.64531 15.9751 8.7163L21.3356 9.49523C21.7457 9.55482 21.9095 10.0588 21.6127 10.3481L17.7338 14.1291C17.3803 14.4737 17.2189 14.9702 17.3024 15.4568L18.2181 20.7957C18.2882 21.2041 17.8594 21.5156 17.4926 21.3228L12.698 18.8021C12.261 18.5723 11.739 18.5723 11.302 18.8021L6.50738 21.3228C6.14057 21.5156 5.71185 21.2041 5.7819 20.7957L6.69759 15.4568C6.78105 14.9702 6.61973 14.4737 6.2662 14.1291L2.38728 10.3481C2.09052 10.0588 2.25428 9.55482 2.66438 9.49523L8.02492 8.7163C8.51349 8.64531 8.93583 8.33845 9.15433 7.89574L11.5516 3.03827Z"
          stroke="#4D4D4D"
        />
      </g>
      <defs>
        <clipPath id="clip0_15355_4721">
          <rect width={24} height={24} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
});

if (process.env.NODE_ENV !== 'production') {
  NavWatchlistLightIcon.displayName = 'NavWatchlistLightIcon';
}
