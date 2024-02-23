import React, { SVGProps } from 'react';

export const ClockCourseIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
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
        <circle cx={12} cy={12} r={12} fill="white" />
        <path
          d="M6.05843 11.8733C5.47392 11.3807 5.39943 10.5075 5.89204 9.92298C6.38465 9.33846 7.25785 9.26396 7.84237 9.75659L12.3974 13.5956C12.9819 14.0882 13.0564 14.9614 12.5638 15.5459C12.0712 16.1304 11.198 16.2049 10.6135 15.7123L6.05843 11.8733Z"
          fill="#EC8000"
        />
        <rect
          x="11.5204"
          y="16.6044"
          width="2.76819"
          height="10.7146"
          rx="1.3841"
          transform="rotate(-135.727 11.5204 16.6044)"
          fill="#EC8000"
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  ClockCourseIcon.displayName = 'ClockCourseIcon';
}
