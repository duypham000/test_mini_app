import React, { SVGProps } from 'react';

export const SimplizeIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
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
          d="M4.97101 3.41739L9 1V2.53963C9 3.21658 8.65756 3.84758 8.08998 4.21652L6.13242 5.48892C5.84278 5.6772 5.82678 6.09548 6.10119 6.30533L6.7149 6.77463C7.20974 7.15304 7.5 7.7404 7.5 8.36335V10L4.8 7.975C4.29639 7.59729 4 7.00451 4 6.375V5.13238C4 4.42986 4.3686 3.77884 4.97101 3.41739Z"
          stroke="#999999"
        />
        <path
          d="M11.029 12.5826L7 15V13.4604C7 12.7834 7.34244 12.1524 7.91002 11.7835L9.86758 10.5111C10.1572 10.3228 10.1732 9.90452 9.89881 9.69467L9.2851 9.22537C8.79026 8.84696 8.5 8.2596 8.5 7.63665V6L11.2 8.025C11.7036 8.40271 12 8.99549 12 9.625V10.8676C12 11.5701 11.6314 12.2212 11.029 12.5826Z"
          stroke="#999999"
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  SimplizeIcon.displayName = 'SimplizeIcon';
}
