import React, { SVGProps } from 'react';

export const GroupStarIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        viewBox="0 0 16 16"
        fill="none"
      >
        <g clipPath="url(#clip0_550_108)">
          <path
            d="M9.31694 4.27076C7.3774 3.86417 5.86144 2.3482 5.4549 0.408635C5.43067 0.293103 5.36741 0.189428 5.27577 0.115018C5.18413 0.0406088 5.06967 -3.6648e-06 4.95163 2.48041e-10C4.83358 3.6653e-06 4.71913 0.0406233 4.62749 0.115038C4.53585 0.189453 4.4726 0.293132 4.44837 0.408666C4.04181 2.3482 2.52584 3.86413 0.586311 4.27067C0.470794 4.29492 0.367136 4.35817 0.292739 4.4498C0.218341 4.54144 0.177734 4.65588 0.177734 4.77392C0.177734 4.89195 0.218341 5.00639 0.292739 5.09803C0.367136 5.18966 0.470794 5.25292 0.586311 5.27717C2.52581 5.68376 4.04172 7.1997 4.44828 9.13923C4.4725 9.25477 4.53574 9.35846 4.62738 9.43288C4.71902 9.5073 4.83348 9.54793 4.95153 9.54793C5.06958 9.54793 5.18404 9.5073 5.27568 9.43288C5.36732 9.35846 5.43056 9.25477 5.45478 9.13923C5.86137 7.1997 7.37737 5.68376 9.3169 5.27726C9.43245 5.25304 9.53614 5.18981 9.61056 5.09817C9.68499 5.00653 9.72561 4.89208 9.72562 4.77402C9.72562 4.65597 9.685 4.54151 9.61058 4.44987C9.53616 4.35823 9.43248 4.29498 9.31694 4.27076ZM8.46694 12.7651C7.55312 12.5736 6.83887 11.8593 6.64728 10.9454C6.62306 10.8299 6.55983 10.7262 6.46819 10.6518C6.37655 10.5774 6.26209 10.5367 6.14404 10.5367C6.02599 10.5367 5.91153 10.5774 5.81989 10.6518C5.72825 10.7262 5.665 10.8299 5.64078 10.9454C5.44919 11.8593 4.7349 12.5735 3.82109 12.7651C3.70557 12.7893 3.60192 12.8526 3.52752 12.9442C3.45312 13.0358 3.41252 13.1503 3.41252 13.2683C3.41252 13.3864 3.45312 13.5008 3.52752 13.5924C3.60192 13.6841 3.70557 13.7473 3.82109 13.7716C4.73487 13.9631 5.44915 14.6774 5.64072 15.5913C5.66494 15.7068 5.72818 15.8105 5.81982 15.8849C5.91146 15.9593 6.02591 16 6.14397 16C6.26202 16 6.37648 15.9593 6.46812 15.8849C6.55976 15.8105 6.623 15.7068 6.64722 15.5913C6.83881 14.6774 7.55309 13.9632 8.46694 13.7716C8.58245 13.7474 8.68611 13.6841 8.76051 13.5925C8.8349 13.5008 8.87551 13.3864 8.87551 13.2684C8.87551 13.1503 8.8349 13.0359 8.76051 12.9442C8.68611 12.8526 8.58245 12.7894 8.46694 12.7651ZM15.414 8.0042C14.1788 7.74526 13.2134 6.77982 12.9545 5.54467C12.9303 5.42912 12.867 5.32543 12.7754 5.25101C12.6837 5.17658 12.5693 5.13596 12.4512 5.13595C12.3332 5.13595 12.2187 5.17657 12.1271 5.25099C12.0354 5.32541 11.9722 5.42909 11.948 5.54463C11.689 6.77982 10.7236 7.74523 9.48844 8.00414C9.37292 8.02838 9.26926 8.09164 9.19486 8.18327C9.12047 8.27491 9.07986 8.38935 9.07986 8.50739C9.07986 8.62542 9.12047 8.73986 9.19486 8.8315C9.26926 8.92313 9.37292 8.98639 9.48844 9.01064C10.7236 9.26957 11.689 10.235 11.9479 11.4702C11.9721 11.5857 12.0354 11.6894 12.127 11.7638C12.2186 11.8382 12.3331 11.8789 12.4512 11.8789C12.5692 11.8789 12.6837 11.8382 12.7753 11.7638C12.8669 11.6894 12.9302 11.5857 12.9544 11.4702C13.2134 10.235 14.1788 9.26957 15.4139 9.0107C15.5295 8.98648 15.6332 8.92324 15.7076 8.83161C15.782 8.73997 15.8226 8.62551 15.8226 8.50746C15.8227 8.38941 15.782 8.27495 15.7076 8.18331C15.6332 8.09166 15.5295 8.02842 15.414 8.0042Z"
            fill="#EC8000"
          />
        </g>
        <defs>
          <clipPath id="clip0_550_108">
            <rect width={16} height={16} fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  GroupStarIcon.displayName = 'GroupStarIcon';
}
