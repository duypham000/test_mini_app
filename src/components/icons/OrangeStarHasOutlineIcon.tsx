import React, { SVGProps } from 'react';

export const OrangeStarHasOutlineIcon = React.forwardRef<
  any,
  SVGProps<SVGSVGElement>
>((props, ref) => {
  return (
    <svg
      {...props}
      ref={ref}
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeOpacity="0.1"
    >
      <path
        d="M15.0957 10.5821C15.4564 9.81796 16.5435 9.81797 16.9043 10.5821L17.9278 12.7502C18.0699 13.0513 18.3526 13.2619 18.6819 13.3119L21.0415 13.6704C21.8479 13.7929 22.1763 14.7773 21.6051 15.3595L19.8423 17.1558C19.6191 17.3833 19.5177 17.7036 19.5693 18.0181L19.9776 20.5074C20.1127 21.3304 19.2401 21.9474 18.5092 21.5456L16.4816 20.4312C16.1817 20.2664 15.8182 20.2664 15.5183 20.4312L13.4908 21.5456C12.7598 21.9474 11.8873 21.3304 12.0223 20.5074L12.4307 18.0181C12.4823 17.7036 12.3808 17.3833 12.1576 17.1558L10.3949 15.3595C9.82359 14.7773 10.152 13.7929 10.9584 13.6704L13.3181 13.3119C13.6473 13.2619 13.93 13.0513 14.0722 12.7502L15.0957 10.5821Z"
        fill="#EC8000"
        stroke="#EC8000"
      />
      <rect x="0.5" y="0.5" width={31} height={31} rx="7.5" stroke="white" />
    </svg>
  );
});

if (process.env.NODE_ENV !== 'production') {
  OrangeStarHasOutlineIcon.displayName = 'OrangeStarHasOutlineIcon';
}
