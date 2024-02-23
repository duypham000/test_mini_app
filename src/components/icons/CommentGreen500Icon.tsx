import React, { SVGProps } from 'react';

export const CommentGreen500Icon = React.forwardRef<
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 13.6002C11.866 13.6002 15 10.9363 15 7.6502C15 4.3641 11.866 1.7002 8 1.7002C4.13401 1.7002 1 4.3641 1 7.6502C1 8.9474 1.48838 10.1476 2.31737 11.1253C2.07897 12.6223 1.38263 13.8221 1 14.3004C3.14959 14.3004 4.60308 13.6213 5.27358 13.132C6.1115 13.4335 7.03285 13.6002 8 13.6002Z"
        fill="#25B770"
      />
    </svg>
  );
});

if (process.env.NODE_ENV !== 'production') {
  CommentGreen500Icon.displayName = 'CommentGreen500Icon';
}
