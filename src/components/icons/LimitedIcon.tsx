import React, { SVGProps } from 'react';

export const LimitedIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        width={45}
        height={24}
        viewBox="0 0 45 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_2435_28)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M41 0C43.3762 0 44.9998 1.92 44.9998 4.24615V19.9015C44.9998 17.5385 43.3391 15.6554 41 15.6554V0Z"
            fill="#BD6600"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M40.7302 8.34479H0L4.56683 16.1356L0 23.9632V24.0002H40.7302C43.1064 24.0002 45 22.0802 45 19.754V4.09863C45 6.46171 43.1064 8.34479 40.7302 8.34479Z"
            fill="url(#paint0_linear_2435_28)"
          />
          <path
            d="M45 20C44.5 22 43 23 41 23H1.5L1.47021 22.9999L5.63132 16L1.56465 9.49992L41.2042 9.34033C43.0002 9.34033 44.5 8 45 7"
            stroke="white"
            strokeWidth="0.5"
            strokeLinecap="round"
          />
          <g filter="url(#filter0_d_2435_28)">
            <path
              d="M9.73295 19V13.1818H10.6108V18.2443H13.2472V19H9.73295ZM15.1264 13.1818V19H14.2486V13.1818H15.1264ZM16.4048 13.1818H17.4702L19.3224 17.7045H19.3906L21.2429 13.1818H22.3082V19H21.473V14.7898H21.419L19.7031 18.9915H19.0099L17.294 14.7869H17.2401V19H16.4048V13.1818ZM24.4624 13.1818V19H23.5845V13.1818H24.4624ZM25.4538 13.9375V13.1818H29.9567V13.9375H28.1413V19H27.2663V13.9375H25.4538ZM30.9517 19V13.1818H34.5994V13.9375H31.8295V15.7102H34.4091V16.4631H31.8295V18.2443H34.6335V19H30.9517ZM37.6555 19H35.772V13.1818H37.7152C38.2853 13.1818 38.7749 13.2983 39.1839 13.5312C39.593 13.7623 39.9065 14.0947 40.1243 14.5284C40.344 14.9602 40.4538 15.4782 40.4538 16.0824C40.4538 16.6884 40.343 17.2093 40.1214 17.6449C39.9018 18.0805 39.5836 18.4157 39.1669 18.6506C38.7502 18.8835 38.2464 19 37.6555 19ZM36.6499 18.233H37.6072C38.0504 18.233 38.4188 18.1496 38.7124 17.983C39.0059 17.8144 39.2256 17.571 39.3714 17.2528C39.5173 16.9328 39.5902 16.5426 39.5902 16.0824C39.5902 15.6259 39.5173 15.2386 39.3714 14.9205C39.2275 14.6023 39.0125 14.3608 38.7266 14.196C38.4406 14.0312 38.0855 13.9489 37.6612 13.9489H36.6499V18.233Z"
              fill="white"
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_d_2435_28"
            x="8.73291"
            y="12.1816"
            width="32.7207"
            height="7.81836"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="0.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_2435_28"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_2435_28"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_2435_28"
            x1="5.26349e-07"
            y1="-1.12475e-06"
            x2={45}
            y2={24}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#EC8000" />
            <stop offset="0.23" stopColor="#BD6600" />
            <stop offset="0.51" stopColor="#EC8000" />
            <stop offset="0.78" stopColor="#F09933" />
            <stop offset={1} stopColor="#BD6600" />
          </linearGradient>
          <clipPath id="clip0_2435_28">
            <rect width={45} height={24} fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  LimitedIcon.displayName = 'LimitedIcon';
}
