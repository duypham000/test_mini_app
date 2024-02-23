import React, { SVGProps } from 'react';

export const PostIcon2 = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        width={64}
        height={64}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect width={64} height={64} rx={10} fill="#A73BB9" />
        <rect width={64} height={64} fill="url(#pattern0)" />
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width={1}
            height={1}
          >
            <use xlinkHref="#image0_1522_2458" transform="scale(0.01)" />
          </pattern>
          <image
            id="image0_1522_2458"
            width={100}
            height={100}
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  PostIcon2.displayName = 'PostIcon2';
}
