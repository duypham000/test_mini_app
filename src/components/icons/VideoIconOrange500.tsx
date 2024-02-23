import React, { SVGProps } from 'react';

export const VideoIconOrange500 = React.forwardRef<
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
      <circle cx={12} cy={12} r={9} stroke="#EC8000" strokeWidth={2} />
      <path
        d="M16.2111 11.1056C16.9482 11.4741 16.9482 12.5259 16.2111 12.8944L9.44721 16.2764C8.78231 16.6089 8 16.1254 8 15.382L8 8.61805C8 7.87467 8.78231 7.39117 9.44721 7.72362L16.2111 11.1056Z"
        fill="#EC8000"
      />
    </svg>
  );
});

if (process.env.NODE_ENV !== 'production') {
  VideoIconOrange500.displayName = 'VideoIconOrange500';
}
