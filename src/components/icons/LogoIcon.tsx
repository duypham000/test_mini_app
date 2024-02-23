import React, { SVGProps } from 'react';

export const LogoIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={26}
        viewBox="0 0 16 26"
        fill="none"
      >
        <path
          d="M0.0234375 12.6032C0.0807039 13.3974 0.435756 14.0995 0.97406 14.6174C1.01987 14.6519 1.05423 14.698 1.10004 14.7325C1.2833 14.8706 1.67271 15.1238 1.63835 15.1008L5.23468 17.679L7.19319 19.0947V14.8131C7.19319 13.8693 6.76942 13.0291 6.10513 12.4651V12.4536L3.33343 10.4624L1.83306 11.4292L0.0234375 12.6032Z"
          fill="url(#paint0_linear_440_14)"
        />
        <path
          d="M10.789 3.568V0L8.95646 1.16248L4.68439 3.9248L1.48893 5.98503L1.34003 6.07711C0.66429 6.53749 0.194705 7.2626 0.0458124 8.10281C0.0229059 8.27545 0 8.4481 0 8.62074V12.3844C0 12.465 -1.04875e-06 12.534 0.0114522 12.6146L1.83252 11.4406L3.3329 10.4738L6.1046 8.6898L9.28861 6.62957L9.46041 6.51447C10.1476 6.03107 10.6286 5.27143 10.7546 4.39669C10.7775 4.25858 10.7775 4.12046 10.7775 3.98234C10.7775 3.84423 10.789 3.70611 10.789 3.568Z"
          fill="url(#paint1_linear_440_14)"
        />
        <path
          d="M15.9774 13.3865C15.9201 12.5923 15.5651 11.8902 15.0267 11.3723C14.9809 11.3378 14.9466 11.2917 14.9008 11.2572C14.7175 11.1191 14.3281 10.8659 14.3625 10.8889L10.7661 8.31071L8.80762 6.89502V11.1881C8.80762 12.1319 9.23139 12.9721 9.89568 13.5361V13.5476L12.6674 15.5388L14.1678 14.572L15.9774 13.3865Z"
          fill="url(#paint2_linear_440_14)"
        />
        <path
          d="M5.21094 22.4333V26.0013L7.04346 24.8388L11.3155 22.0765L14.511 20.0163L14.6599 19.9242C15.3356 19.4638 15.8052 18.7387 15.9541 17.8985C15.977 17.7259 15.9999 17.5532 15.9999 17.3806V13.6169C15.9999 13.5363 15.9999 13.4673 15.9885 13.3867L14.1674 14.5607L12.667 15.5275L9.89533 17.3115L6.71132 19.3717L6.53952 19.4868C5.85232 19.9702 5.37128 20.7299 5.2453 21.6046C5.22239 21.7427 5.22239 21.8809 5.22239 22.019C5.21094 22.1571 5.21094 22.2952 5.21094 22.4333Z"
          fill="url(#paint3_linear_440_14)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_440_14"
            x1="0.0261977"
            y1="14.772"
            x2="7.20579"
            y2="14.772"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#006CEC" />
            <stop offset={1} stopColor="#006CEC" stopOpacity="0.7" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_440_14"
            x1="0.0163667"
            y1="6.29757"
            x2="10.7925"
            y2="6.29757"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#006CEC" stopOpacity="0.7" />
            <stop offset={1} stopColor="#006CEC" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_440_14"
            x1="15.9821"
            y1="11.2198"
            x2="8.80247"
            y2="11.2198"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#EC8000" />
            <stop offset={1} stopColor="#EC8000" stopOpacity="0.7" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_440_14"
            x1="15.991"
            y1="19.6943"
            x2="5.21492"
            y2="19.6943"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#EC8000" stopOpacity="0.7" />
            <stop offset={1} stopColor="#EC8000" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  LogoIcon.displayName = 'LogoIcon';
}
