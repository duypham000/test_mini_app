import React, { SVGProps } from 'react';

export const FacebookCircleIcon = React.forwardRef<
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
      <circle cx={12} cy={12} r={12} fill="#006CEC" fillOpacity="0.1" />
      <path
        d="M10.4523 12.7911C10.4015 12.7911 9.33542 12.7914 8.84374 12.791C8.59062 12.7908 8.50031 12.7048 8.50031 12.4638C8.49998 11.8447 8.49982 11.2256 8.50031 10.6065C8.50047 10.3685 8.59596 10.2777 8.84584 10.2776C9.33753 10.2773 10.3978 10.2774 10.4523 10.2774C10.4523 10.235 10.4522 9.34123 10.4523 8.92963C10.4526 8.32111 10.5674 7.73862 10.8941 7.20529C11.2287 6.6594 11.7155 6.28547 12.3394 6.06926C12.739 5.93068 13.1538 5.8754 13.5779 5.87509C14.1084 5.87479 14.6389 5.87525 15.1696 5.87617C15.3976 5.87647 15.4988 5.97187 15.4993 6.18915C15.5002 6.77149 15.5002 7.35382 15.4993 7.936C15.4989 8.15558 15.402 8.24378 15.1688 8.24623C14.7339 8.25067 14.2987 8.24792 13.8643 8.26446C13.4256 8.26446 13.1948 8.46719 13.1948 8.89686C13.1842 9.35134 13.1904 9.80627 13.1904 10.2773C13.2315 10.2773 14.4801 10.2771 15.0637 10.2773C15.3288 10.2773 15.4195 10.3635 15.4195 10.6157C15.4195 11.2314 15.4193 11.8473 15.4188 12.463C15.4187 12.7115 15.3335 12.7908 15.0668 12.791C14.4832 12.7913 13.2394 12.7911 13.1851 12.7911V17.7746C13.1851 18.0403 13.0967 18.1249 12.8196 18.1249C12.1441 18.1249 11.4684 18.1251 10.7928 18.1249C10.548 18.1249 10.4525 18.0349 10.4525 17.8032C10.4523 16.1802 10.4523 12.8481 10.4523 12.7911Z"
        fill="#3D6AD6"
      />
    </svg>
  );
});

if (process.env.NODE_ENV !== 'production') {
  FacebookCircleIcon.displayName = 'FacebookCircleIcon';
}
