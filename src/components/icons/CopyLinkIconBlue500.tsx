import React, { SVGProps } from 'react';

export const CopyLinkIconBlue500 = React.forwardRef<
  any,
  SVGProps<SVGSVGElement>
>((props, ref) => {
  return (
    <svg
      width={16}
      height={16}
      {...props}
      ref={ref}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.02522 3.54415C8.31325 1.35103 11.3941 0.0804096 13.6568 2.34315C15.9195 4.60589 14.6489 7.6867 12.4558 8.97473M3.54408 7.02529C1.35096 8.31331 0.0803452 11.3941 2.34308 13.6569C4.60582 15.9196 7.68663 14.649 8.97467 12.4559M10.6108 5.38915L5.38908 10.6109"
        stroke="#006CEC"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
});

if (process.env.NODE_ENV !== 'production') {
  CopyLinkIconBlue500.displayName = 'CopyLinkIconBlue500';
}
