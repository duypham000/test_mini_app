import React, { SVGProps } from 'react';

export const LessionIconBlack300 = React.forwardRef<
  any,
  SVGProps<SVGSVGElement>
>((props, ref) => {
  return (
    <svg
      {...props}
      ref={ref}
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx={16} cy={16} r="15.5" stroke="#999999" />
      <rect x="10.5" y="9.5" width={11} height={13} rx="1.5" stroke="#999999" />
      <path d="M12.5 12.5H16.5" stroke="#999999" strokeLinecap="round" />
      <path d="M12.5 15H19.5" stroke="#999999" strokeLinecap="round" />
      <path d="M12.5 17.5H19.5" stroke="#999999" strokeLinecap="round" />
      <path d="M12.5 20H19.5" stroke="#999999" strokeLinecap="round" />
    </svg>
  );
});

if (process.env.NODE_ENV !== 'production') {
  LessionIconBlack300.displayName = 'LessionIconBlack300';
}
