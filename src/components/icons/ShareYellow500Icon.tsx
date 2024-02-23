import React, { SVGProps } from 'react';

export const ShareYellow500Icon = React.forwardRef<
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
        d="M14.095 8.3369C14.6093 7.76648 14.6096 6.89976 14.0958 6.32894L11.0376 2.93161C10.4245 2.25048 9.29439 2.68421 9.29439 3.60065V5.03485C6.64737 5.28664 2.17024 6.98722 1.43635 12.9235C1.37472 13.422 2.08543 13.6805 2.43945 13.3241C3.99548 11.7577 6.62245 9.98058 9.29439 9.70368V11.0591C9.29439 11.9752 10.4237 12.4091 11.0371 11.7287L14.095 8.3369Z"
        fill="#FFC701"
      />
    </svg>
  );
});

if (process.env.NODE_ENV !== 'production') {
  ShareYellow500Icon.displayName = 'ShareYellow500Icon';
}
