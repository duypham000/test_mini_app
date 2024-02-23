import React, { SVGProps } from 'react';

export const CommentHistoryIcon = React.forwardRef<
  any,
  SVGProps<SVGSVGElement>
>((props, ref) => {
  return (
    <svg
      {...props}
      ref={ref}
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx={20} cy={20} r={20} fill="white" fillOpacity="0.1" />
      <g clipPath="url(#clip0_1522_3448)">
        <path
          d="M20 11.45C15.0374 11.45 11 15.0836 11 19.5499C11 21.1111 11.4938 22.6235 12.4304 23.9311C12.2531 25.8923 11.7779 27.3481 11.0879 28.0378C10.9967 28.129 10.9739 28.2685 11.0315 28.3837C11.0825 28.4866 11.1875 28.5499 11.3 28.5499C11.3138 28.5499 11.3276 28.549 11.3417 28.5469C11.4632 28.5299 14.2856 28.1236 16.3271 26.9452C17.4863 27.4129 18.7211 27.6499 20 27.6499C24.9626 27.6499 29 24.0163 29 19.5499C29 15.0836 24.9626 11.45 20 11.45Z"
          fill="#999999"
        />
      </g>
      <defs>
        <clipPath id="clip0_1522_3448">
          <rect
            width={18}
            height={18}
            fill="white"
            transform="translate(11 11)"
          />
        </clipPath>
      </defs>
    </svg>
  );
});

if (process.env.NODE_ENV !== 'production') {
  CommentHistoryIcon.displayName = 'CommentHistoryIcon';
}
