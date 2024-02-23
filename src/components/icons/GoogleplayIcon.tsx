import React, { SVGProps } from 'react';

export const GoogleplayIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        width={24}
        height={32}
        viewBox="0 0 24 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_592_5)">
          <path
            d="M4.4265 0.602542C4.15634 0.877815 4 1.30639 4 1.86141V21.6587C4 22.2138 4.15634 22.6423 4.4265 22.9176L4.49318 22.978L15.8903 11.8888V11.6269L4.49318 0.537642L4.4265 0.602542Z"
            fill="url(#paint0_linear_592_5)"
          />
        </g>
        <g filter="url(#filter1_d_592_5)">
          <path
            d="M19.7745 15.539L15.8901 11.7579L4.42627 22.9177C4.85277 23.3541 5.54828 23.4067 6.3392 22.9703L19.7745 15.539Z"
            fill="url(#paint1_linear_592_5)"
          />
        </g>
        <g filter="url(#filter2_d_592_5)">
          <path
            d="M19.7745 7.97721L6.3392 0.545944C5.54828 0.114011 4.85277 0.166603 4.42627 0.603012L15.8901 11.7583L19.7745 7.97721Z"
            fill="url(#paint2_linear_592_5)"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_592_5"
            x={0}
            y="0.537598"
            width="19.8904"
            height="30.4404"
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
            <feOffset dy={4} />
            <feGaussianBlur stdDeviation={2} />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_592_5"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_592_5"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_d_592_5"
            x="0.42627"
            y="11.7578"
            width="23.3484"
            height="19.5146"
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
            <feOffset dy={4} />
            <feGaussianBlur stdDeviation={2} />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_592_5"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_592_5"
              result="shape"
            />
          </filter>
          <filter
            id="filter2_d_592_5"
            x="0.42627"
            y="0.247559"
            width="23.3484"
            height="19.5107"
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
            <feOffset dy={4} />
            <feGaussianBlur stdDeviation={2} />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_592_5"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_592_5"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_592_5"
            x1="14.8784"
            y1="21.8649"
            x2="-0.13975"
            y2="6.43611"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#00A0FF" />
            <stop offset="0.0066" stopColor="#00A1FF" />
            <stop offset="0.2601" stopColor="#00BEFF" />
            <stop offset="0.5122" stopColor="#00D2FF" />
            <stop offset="0.7604" stopColor="#00DFFF" />
            <stop offset={1} stopColor="#00E3FF" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_592_5"
            x1="17.6623"
            y1="9.70244"
            x2="-2.7035"
            y2="-11.2203"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF3A44" />
            <stop offset={1} stopColor="#C31162" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_592_5"
            x1="1.5406"
            y1="29.5045"
            x2="10.6348"
            y2="20.1617"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#32A071" />
            <stop offset="0.0685" stopColor="#2DA771" />
            <stop offset="0.4762" stopColor="#15CF74" />
            <stop offset="0.8009" stopColor="#06E775" />
            <stop offset={1} stopColor="#00F076" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  GoogleplayIcon.displayName = 'GoogleplayIcon';
}
