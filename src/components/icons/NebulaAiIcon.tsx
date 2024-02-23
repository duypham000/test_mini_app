import { useAppSelector } from '@/redux/hooks';
import { colors } from '@/themes/colors';
import React, { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  isLight?: boolean;
}

export const NebulaAiIcon = React.forwardRef<any, Props>((props, ref) => {
  const { isLight = false, ...rest } = props;
  const isDark = useAppSelector((state) => state.theme.isDark);

  return (
    <svg
      {...rest}
      ref={ref}
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.11429 13.0571L1.23073 11.0776C1.14602 11.0491 1.13839 10.9323 1.21867 10.893L8.94286 7.11429M7.11429 13.0571L10.893 20.7813C10.9323 20.8616 11.0491 20.854 11.0776 20.7693L13.0571 14.8857M7.11429 13.0571L8.94286 7.11429M7.11429 13.0571L14.8857 8.94286M7.11429 13.0571L13.0571 14.8857M8.94286 7.11429L10.9224 1.23073C10.9509 1.14602 11.0677 1.13839 11.107 1.21867L14.8857 8.94286M14.8857 8.94286L20.7693 10.9224C20.854 10.9509 20.8616 11.0677 20.7813 11.107L13.0571 14.8857"
        stroke={
          isLight ? colors.black400 : isDark ? colors.black300 : colors.black400
        }
      />
    </svg>
  );
});

if (process.env.NODE_ENV !== 'production') {
  NebulaAiIcon.displayName = 'NebulaAiIcon';
}
