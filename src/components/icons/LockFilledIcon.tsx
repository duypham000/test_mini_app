import React, { SVGProps } from 'react';

export const LockFilledIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        width={20}
        height={18}
        viewBox="0 0 20 18"
        fill="#A7AAAF"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16 6.75H15.3333V4.5C15.3333 2.01825 12.9413 0 10 0C7.05867 0 4.66667 2.01825 4.66667 4.5V6.75H4C2.89778 6.75 2 7.50675 2 8.4375V16.3125C2 17.2432 2.89778 18 4 18H16C17.1022 18 18 17.2432 18 16.3125V8.4375C18 7.50675 17.1022 6.75 16 6.75ZM6.44444 4.5C6.44444 2.8455 8.03911 1.5 10 1.5C11.9609 1.5 13.5556 2.8455 13.5556 4.5V6.75H6.44444V4.5ZM10.8889 12.5415V14.25C10.8889 14.664 10.4916 15 10 15C9.50844 15 9.11111 14.664 9.11111 14.25V12.5415C8.58222 12.2812 8.22222 11.8027 8.22222 11.25C8.22222 10.4227 9.01956 9.75 10 9.75C10.9804 9.75 11.7778 10.4227 11.7778 11.25C11.7778 11.8027 11.4178 12.2812 10.8889 12.5415Z" />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  LockFilledIcon.displayName = 'LockFilledIcon';
}
