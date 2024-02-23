import React, { SVGProps } from 'react';

export const PlayVideoIconRed500 = React.forwardRef<
  any,
  SVGProps<SVGSVGElement>
>((props, ref) => {
  return (
    <svg
      {...props}
      ref={ref}
      width={86}
      height={86}
      viewBox="0 0 86 86"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.7" clipPath="url(#clip0_266_2202)">
        <path
          d="M84.2281 22.3556C83.2367 18.6714 80.332 15.7674 76.6485 14.7753C69.9187 12.9336 42.9992 12.9336 42.9992 12.9336C42.9992 12.9336 16.0803 12.9336 9.35044 14.7051C5.73781 15.6965 2.76229 18.6721 1.77088 22.3556C0 29.0848 0 43.0406 0 43.0406C0 43.0406 0 57.0665 1.77088 63.7256C2.76294 67.409 5.66695 70.3137 9.3511 71.3058C16.1512 73.1475 42.9998 73.1475 42.9998 73.1475C42.9998 73.1475 69.9187 73.1475 76.6485 71.376C80.3327 70.3846 83.2367 67.4799 84.2288 63.7964C85.9996 57.0665 85.9996 43.1114 85.9996 43.1114C85.9996 43.1114 86.0705 29.0848 84.2281 22.3556Z"
          fill="#E14040"
        />
        <path
          d="M34.4282 55.9333L56.8133 43.0404L34.4282 30.1475V55.9333Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_266_2202">
          <rect width={86} height={86} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
});

if (process.env.NODE_ENV !== 'production') {
  PlayVideoIconRed500.displayName = 'PlayVideoIconRed500';
}
