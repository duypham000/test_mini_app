import React, { SVGProps } from 'react';

export const WatchlistIconBlack400 = React.forwardRef<
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
        d="M15 4L21 4"
        stroke="#4D4D4D"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <path
        d="M20 8L21 8"
        stroke="#4D4D4D"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <path
        d="M17 13L21 13"
        stroke="#4D4D4D"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <path
        d="M19 17L21 17"
        stroke="#4D4D4D"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <path
        d="M3 21L21 21"
        stroke="#4D4D4D"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.80413 2.91784C9.29307 1.92627 10.7069 1.92627 11.1959 2.91784L12.9256 6.42586L16.7794 7.00072C17.8662 7.16284 18.3014 8.49614 17.5195 9.26821L14.7307 12.0221L15.3796 15.8967C15.5618 16.9846 14.4197 17.8106 13.4436 17.2969L10 15.4844L6.55639 17.2969C5.58035 17.8106 4.43818 16.9846 4.62037 15.8967L5.26931 12.0221L2.48044 9.26821C1.69859 8.49614 2.1338 7.16284 3.22057 7.00072L7.07439 6.42586L8.80413 2.91784Z"
        fill="#4D4D4D"
      />
    </svg>
  );
});

if (process.env.NODE_ENV !== 'production') {
  WatchlistIconBlack400.displayName = 'WatchlistIconBlack400';
}
