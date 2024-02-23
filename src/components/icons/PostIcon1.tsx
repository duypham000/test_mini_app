import React, { SVGProps } from 'react';

export const PostIcon1 = React.forwardRef<any, SVGProps<SVGSVGElement>>(
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
        <rect width={64} height={64} rx={10} fill="#1E925A" />
        <rect width={64} height={64} fill="url(#pattern0)" />
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width={1}
            height={1}
          >
            <use xlinkHref="#image0_1522_2430" transform="scale(0.01)" />
          </pattern>
          <image
            id="image0_1522_2430"
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
  PostIcon1.displayName = 'PostIcon1';
}
