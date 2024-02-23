import { useAppSelector } from '@/redux/hooks';
import { colors } from '@/themes/colors';
import React, { SVGProps } from 'react';

export const RightArrowIconBlack300 = React.forwardRef<
  any,
  SVGProps<SVGSVGElement>
>((props, ref) => {
  const isDark = useAppSelector((state) => state.theme.isDark);

  return (
    <svg
      {...props}
      ref={ref}
      width={24}
      height={48}
      viewBox="0 0 24 48"
      stroke={(isDark && colors.black300) || colors.black400}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 15L16 24L8 33" strokeWidth={4} strokeLinecap="round" />
    </svg>
  );
});

if (process.env.NODE_ENV !== 'production') {
  RightArrowIconBlack300.displayName = 'RightArrowIconBlack300';
}
