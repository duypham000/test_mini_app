import React, { SVGProps } from 'react';

export const ScrollToTopIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        width={22}
        height={29}
        viewBox="0 0 22 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.4225 12.955L14.2308 10.9292V25.7692C14.2308 30.0378 7.76925 30.0436 7.76925 25.7692V10.9292L5.57754 12.9549C2.44503 15.8535 -1.94777 11.1114 1.19203 8.2097L8.11473 1.81127C8.90241 1.09056 9.93128 0.690723 10.9989 0.69043C12.0666 0.690137 13.0957 1.08941 13.8837 1.80968L20.808 8.2097C24.0016 11.1612 19.496 15.7945 16.4225 12.955Z"
          fill="white"
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  ScrollToTopIcon.displayName = 'ScrollToTopIcon';
}
