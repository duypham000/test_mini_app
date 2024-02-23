import React, { SVGProps } from 'react';

export const CheckIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        width={14}
        height={14}
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.56576 11.6271C5.44882 11.7461 5.28928 11.8125 5.12356 11.8125C4.95784 11.8125 4.7983 11.7461 4.68136 11.6271L1.14987 8.05303C0.783377 7.68219 0.783377 7.08083 1.14987 6.71068L1.59206 6.26311C1.95867 5.89227 2.55227 5.89227 2.91877 6.26311L5.12356 8.49423L11.0812 2.46564C11.4478 2.09479 12.042 2.09479 12.4079 2.46564L12.8501 2.9132C13.2166 3.28405 13.2166 3.88529 12.8501 4.25555L5.56576 11.6271Z"
          fill="white"
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  CheckIcon.displayName = 'CheckIcon';
}
