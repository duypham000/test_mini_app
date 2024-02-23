import React, { SVGProps } from 'react';

export const CaretUpOutlinedGreen500 = React.forwardRef<
  any,
  SVGProps<SVGSVGElement>
>((props, ref) => {
  return (
    <svg
      {...props}
      ref={ref}
      width={8}
      height={5}
      viewBox="0 0 8 5"
      fill={props.fill || '#25B770'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4.28823 0.299539C4.13087 0.136006 3.86913 0.136005 3.71177 0.299538L0.321654 3.82265C0.077125 4.07677 0.25722 4.5 0.609884 4.5L7.39012 4.5C7.74278 4.5 7.92287 4.07677 7.67835 3.82265L4.28823 0.299539Z" />
    </svg>
  );
});

if (process.env.NODE_ENV !== 'production') {
  CaretUpOutlinedGreen500.displayName = 'CaretUpOutlinedGreen500';
}
