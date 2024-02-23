import React, { SVGProps } from 'react';

export const AppleIconLightTheme = React.forwardRef<
  any,
  SVGProps<SVGSVGElement>
>((props, ref) => {
  return (
    <svg
      {...props}
      ref={ref}
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_14890_1226)">
        <path
          d="M10.9997 0C10.1467 0.059 9.14967 0.605 8.56867 1.316C8.03867 1.961 7.60267 2.919 7.77267 3.85C8.70467 3.879 9.66767 3.32 10.2257 2.597C10.7477 1.924 11.1427 0.972 10.9997 0Z"
          fill="#4D4D4D"
        />
        <path
          d="M14.3705 5.36799C13.5515 4.34099 12.4006 3.745 11.3136 3.745C9.87857 3.745 9.27157 4.43199 8.27458 4.43199C7.24658 4.43199 6.46559 3.747 5.22459 3.747C4.0056 3.747 2.70761 4.49199 1.88461 5.76598C0.72762 7.55997 0.925619 10.933 2.80061 13.8059C3.4716 14.8339 4.3676 15.9899 5.53959 15.9999C6.58259 16.0099 6.87658 15.3309 8.28958 15.3239C9.70257 15.3159 9.97057 16.0089 11.0116 15.9979C12.1846 15.9889 13.1295 14.7079 13.8005 13.6799C14.2815 12.9429 14.4605 12.5719 14.8335 11.7399C12.1206 10.707 11.6856 6.84898 14.3705 5.36799Z"
          fill="#4D4D4D"
        />
      </g>
      <defs>
        <clipPath id="clip0_14890_1226">
          <rect width={16} height={16} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
});

if (process.env.NODE_ENV !== 'production') {
  AppleIconLightTheme.displayName = 'AppleIconLightTheme';
}
