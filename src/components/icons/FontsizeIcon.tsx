import React, { SVGProps } from 'react';

export const FontsizeIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
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
        <path
          d="M7.50642 9.89474V20H6.20319V9.89474H7.50642ZM10.7165 9.89474V10.9913H3V9.89474H10.7165Z"
          fill="#A7AAAF"
        />
        <path
          d="M15.9178 4V20H13.8543V4H15.9178ZM21.0003 4V5.73626H8.7826V4H21.0003Z"
          fill="#A7AAAF"
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  FontsizeIcon.displayName = 'FontsizeIcon';
}
