import { colors } from '@/themes/colors';
import { useTheme } from '@emotion/react';
import React, { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  active: boolean;
}

export const FilterIcon = React.forwardRef<any, Props>((props, ref) => {
  const theme = useTheme();

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
        d="M1 2H15M1 10H7M1 14H7M1 6H5.5"
        stroke={props.active ? colors.blue500 : theme.color.dc003}
        strokeLinecap="round"
      />
      <path
        d="M14.5 5H8.5C8.22386 5 8 5.22386 8 5.5V6.25969C8 6.41158 8.06904 6.55524 8.18765 6.65012L10.3123 8.34988C10.431 8.44476 10.5 8.58842 10.5 8.74031V14C10.5 14.412 10.9704 14.6472 11.3 14.4L12.3 13.65C12.4259 13.5556 12.5 13.4074 12.5 13.25V8.74031C12.5 8.58842 12.569 8.44476 12.6877 8.34988L14.8123 6.65012C14.931 6.55524 15 6.41158 15 6.25969V5.5C15 5.22386 14.7761 5 14.5 5Z"
        stroke={props.active ? colors.blue500 : theme.color.dc003}
        strokeLinejoin="round"
      />
    </svg>
  );
});

if (process.env.NODE_ENV !== 'production') {
  FilterIcon.displayName = 'FilterIcon';
}
