import React, { SVGProps } from 'react';

export const GoldCupIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
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
        <path
          d="M10 7.25H10.5C12.1568 7.25 13.5 5.90684 13.5 4.25V3.75H11.5V2.75H14C14.2762 2.75 14.5 2.97384 14.5 3.25V4.25C14.5 6.45913 12.7091 8.25 10.5 8.25H10V7.25Z"
          fill="#FFD234"
        />
        <path
          d="M6 7.25H5.5C3.84316 7.25 2.5 5.90684 2.5 4.25V3.75H4.5V2.75H2C1.72384 2.75 1.5 2.97384 1.5 3.25V4.25C1.5 6.45913 3.29087 8.25 5.5 8.25H6V7.25Z"
          fill="#FFD234"
        />
        <path d="M6.75 8.75H9.25V10.75H6.75V8.75Z" fill="#CC9F01" />
        <path
          d="M8 9.75C4 9.75 4 1.75 4 1.75H12C12 1.75 12 9.75 8 9.75Z"
          fill="#FFC701"
        />
        <path
          d="M12 1.75H4C3.72384 1.75 3.5 1.52616 3.5 1.25C3.5 0.973844 3.72384 0.75 4 0.75H12C12.2762 0.75 12.5 0.973844 12.5 1.25C12.5 1.52616 12.2762 1.75 12 1.75Z"
          fill="#FFD234"
        />
        <path
          d="M8.75 11.75V10.75H7.25V11.75C7.25 12.3023 6.80228 12.75 6.25 12.75C5.69772 12.75 5.25 13.1977 5.25 13.75H10.75C10.75 13.1977 10.3023 12.75 9.75 12.75C9.19772 12.75 8.75 12.3023 8.75 11.75Z"
          fill="#FFC701"
        />
        <path d="M4.25 13.75H11.75V15.25H4.25V13.75Z" fill="#CC9F01" />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  GoldCupIcon.displayName = 'GoldCupIcon';
}
