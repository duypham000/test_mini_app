import React, { SVGProps } from 'react';

export const CashIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
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
        <circle cx={12} cy={12} r={12} fill="#CC9F01" />
        <rect
          width={14}
          height={14}
          fill="#CC9F01"
          transform="translate(5 5)"
        />
        <path
          transform="translate(5 5)"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13ZM7.00001 11.5C9.48529 11.5 11.5 9.48528 11.5 7C11.5 4.51472 9.48529 2.5 7.00001 2.5C4.51473 2.5 2.50001 4.51472 2.50001 7C2.50001 9.48528 4.51473 11.5 7.00001 11.5Z"
          fill="white"
        />
        <path
          transform="translate(5 5)"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7 11C9.20914 11 11 9.20914 11 7C11 4.79086 9.20914 3 7 3C4.79086 3 3 4.79086 3 7C3 9.20914 4.79086 11 7 11ZM7.73203 3.4V4.38805C7.73203 4.40717 7.73128 4.42629 7.73053 4.44542C7.72978 4.46454 7.72902 4.48366 7.72902 4.50279C7.72902 4.54103 7.72902 4.57928 7.72301 4.61753C7.68994 4.85976 7.56367 5.07012 7.38328 5.20398L7.33819 5.23585L7.21926 5.31703L7.72299 5.70116L8.66957 6.41476C8.66952 6.41473 8.66948 6.41471 8.66947 6.4147C8.66945 6.41469 8.66947 6.4147 8.6695 6.41473L8.66957 6.41476C8.67315 6.41708 8.76613 6.48116 8.81133 6.5171C8.81734 6.52188 8.8226 6.52746 8.82786 6.53303L8.82786 6.53304C8.83312 6.53861 8.83838 6.54419 8.8444 6.54897C8.9857 6.6924 9.0789 6.88682 9.09393 7.10674L8.79845 7.30966L9.09698 7.10664C9.09998 7.12895 9.09998 7.14807 9.09998 7.17037V7.17038V8.21262C9.09998 8.26042 9.09397 8.30823 9.08796 8.35604C9.04887 8.58871 8.92561 8.78951 8.74823 8.917L8.70914 8.9425L7.87035 9.51301L6.74894 10.278L6.26791 10.5999V9.61182C6.26791 9.57357 6.26791 9.53532 6.27092 9.49708C6.27092 9.45883 6.27092 9.42058 6.27693 9.38234C6.31 9.14011 6.43627 8.92975 6.61666 8.79588L6.66176 8.76401L6.77965 8.68354L6.27089 8.29557L5.3273 7.58196C5.32356 7.57953 5.23072 7.51554 5.18556 7.47964C5.17955 7.47485 5.17429 7.46928 5.16902 7.4637C5.16376 7.45812 5.1585 7.45254 5.15249 7.44776C5.01185 7.30501 4.91886 7.11174 4.90317 6.89309L4.90297 6.89322C4.89996 6.87091 4.89996 6.85179 4.89996 6.82948V5.78725C4.89996 5.73944 4.90598 5.69163 4.91199 5.64382C4.95107 5.41115 5.07434 5.21036 5.25172 5.08287L5.2908 5.05737L6.1296 4.48685L7.251 3.72191L7.73203 3.4ZM6.5024 5.80637L7.20889 5.32411V6.49797C7.20889 6.75933 7.32013 6.992 7.4945 7.14817V7.15136L8.22122 7.70211L7.49755 8.19349L6.78499 8.67989V7.50195C6.78499 7.24059 6.67375 7.00792 6.49937 6.85175V6.84856L5.77549 6.29995L6.5024 5.80637Z"
          fill="white"
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  CashIcon.displayName = 'CashIcon';
}
