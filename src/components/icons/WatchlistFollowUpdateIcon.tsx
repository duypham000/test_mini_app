import React, { SVGProps } from 'react';

export const WatchlistFollowUpdateIcon = React.forwardRef<
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
      <circle cx={12} cy={12} r={12} fill="#CC9F01" />
      <g clipPath="url(#clip0_21105_1360)">
        <path
          d="M11.8153 6.94399C11.8837 6.77973 12.1164 6.77973 12.1847 6.94399L13.5401 10.2029C13.5689 10.2721 13.634 10.3194 13.7088 10.3254L17.227 10.6075C17.4044 10.6217 17.4763 10.843 17.3412 10.9587L14.6606 13.2549C14.6037 13.3037 14.5788 13.3802 14.5962 13.4532L15.4151 16.8864C15.4564 17.0594 15.2682 17.1962 15.1164 17.1035L12.1043 15.2637C12.0403 15.2246 11.9598 15.2246 11.8958 15.2637L8.88366 17.1035C8.73184 17.1962 8.54359 17.0594 8.58487 16.8864L9.40381 13.4532C9.42121 13.3802 9.39634 13.3037 9.33938 13.2549L6.65886 10.9587C6.52375 10.843 6.59566 10.6217 6.77299 10.6075L10.2912 10.3254C10.366 10.3194 10.4311 10.2721 10.4599 10.2029L11.8153 6.94399Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_21105_1360">
          <rect
            width={12}
            height={12}
            fill="white"
            transform="translate(6 6)"
          />
        </clipPath>
      </defs>
    </svg>
  );
});

if (process.env.NODE_ENV !== 'production') {
  WatchlistFollowUpdateIcon.displayName = 'WatchlistFollowUpdateIcon';
}
