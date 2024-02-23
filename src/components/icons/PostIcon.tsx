import React, { SVGProps } from 'react';

export const PostIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
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
        <circle cx={12} cy={12} r={12} fill="#B43333" />
        <rect
          width={14}
          height={14}
          transform="translate(5 5)"
          fill="#B43333"
        />
        <path
          d="M6.74967 16.0834V10.8334H17.833C17.9877 10.8334 18.1361 10.772 18.2455 10.6626C18.3549 10.5532 18.4163 10.4048 18.4163 10.2501V7.91675C18.4163 7.45262 18.232 7.0075 17.9038 6.67931C17.5756 6.35112 17.1305 6.16675 16.6663 6.16675H7.33301C6.86888 6.16675 6.42376 6.35112 6.09557 6.67931C5.76738 7.0075 5.58301 7.45262 5.58301 7.91675V16.0834C5.58301 16.5475 5.76738 16.9927 6.09557 17.3209C6.42376 17.649 6.86888 17.8334 7.33301 17.8334H11.4163V16.6667H7.33301C7.1783 16.6667 7.02992 16.6053 6.92053 16.4959C6.81113 16.3865 6.74967 16.2381 6.74967 16.0834ZM10.2497 7.91675H11.4163V9.08342H10.2497V7.91675ZM7.91634 7.91675H9.08301V9.08342H7.91634V7.91675ZM17.9555 15.0392L15.3305 17.6642C15.276 17.7183 15.2114 17.7611 15.1403 17.7901C15.0692 17.8191 14.9931 17.8339 14.9163 17.8334H13.1663C13.0116 17.8334 12.8633 17.772 12.7539 17.6626C12.6445 17.5532 12.583 17.4048 12.583 17.2501V15.5001C12.5826 15.4233 12.5973 15.3472 12.6263 15.2761C12.6553 15.2051 12.6981 15.1404 12.7522 15.0859L15.3772 12.4609C15.7249 12.149 16.1789 11.9822 16.6459 11.9948C17.1129 12.0074 17.5572 12.1986 17.8875 12.5289C18.2178 12.8592 18.409 13.3036 18.4216 13.7705C18.4343 14.2375 18.2675 14.6915 17.9555 15.0392ZM7.91634 13.1667V12.0001H13.1663V13.1667H7.91634ZM7.91634 14.3334H11.4163V15.5001H7.91634V14.3334Z"
          fill="white"
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  PostIcon.displayName = 'PostIcon';
}
