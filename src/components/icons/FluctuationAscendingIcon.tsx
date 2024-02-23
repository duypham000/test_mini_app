import React, { SVGProps } from 'react';

export const FluctuationAscendingIcon = React.forwardRef<
  any,
  SVGProps<SVGSVGElement>
>((props, ref) => {
  return (
    <svg
      {...props}
      ref={ref}
      width={8}
      height={8}
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.67267 0.283473C3.86056 0.120759 4.13944 0.120759 4.32733 0.283473L6.45032 2.12204C6.80027 2.4251 6.58593 3 6.12299 3H1.87701C1.41407 3 1.19973 2.4251 1.54968 2.12204L3.67267 0.283473Z"
        fill="#999999"
      />
      <path
        d="M4.32733 7.71653C4.13944 7.87924 3.86056 7.87924 3.67267 7.71653L1.54968 5.87796C1.19973 5.5749 1.41407 5 1.87701 5L6.12299 5C6.58593 5 6.80027 5.5749 6.45032 5.87796L4.32733 7.71653Z"
        fill="#4D4D4D"
      />
    </svg>
  );
});

if (process.env.NODE_ENV !== 'production') {
  FluctuationAscendingIcon.displayName = 'FluctuationAscendingIcon';
}
