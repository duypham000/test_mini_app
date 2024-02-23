import { useAppSelector } from '@/redux/hooks';
import { colors } from '@/themes/colors';
import React, { SVGProps } from 'react';

export const BlogIconBlack300 = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    const isDark = useAppSelector((state) => state.theme.isDark);

    const color = React.useMemo(
      () => (isDark ? colors.black300 : colors.black400),
      [isDark]
    );

    return (
      <svg
        {...props}
        ref={ref}
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.6154 3.16026C11.8615 3.05769 12.1385 3.05769 12.3846 3.16026L21.7846 7.07692C22.6051 7.4188 22.6051 8.5812 21.7846 8.92308L12.3846 12.8397C12.1385 12.9423 11.8615 12.9423 11.6154 12.8397L2.21538 8.92308C1.39487 8.5812 1.39487 7.4188 2.21538 7.07692L11.6154 3.16026Z"
          stroke={color}
        />
        <path
          d="M11.5809 15.3066L5.5 12.5V17.3602C5.5 17.7502 5.72679 18.1047 6.08094 18.2681L11.5809 20.8066C11.8468 20.9293 12.1532 20.9293 12.4191 20.8066L17.9191 18.2681C18.2732 18.1047 18.5 17.7502 18.5 17.3602V12.5L12.4191 15.3066C12.1532 15.4293 11.8468 15.4293 11.5809 15.3066Z"
          stroke={color}
        />
        <path
          d="M20 19.5C20 19.7761 20.2239 20 20.5 20C20.7761 20 21 19.7761 21 19.5H20ZM20 9.50006V19.5H21V9.50006H20Z"
          fill={color}
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  BlogIconBlack300.displayName = 'BlogIconBlack300';
}
