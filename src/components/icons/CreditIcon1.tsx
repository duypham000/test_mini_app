import React, { SVGProps } from 'react';

export const CreditIcon1 = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={40}
        height={40}
        viewBox="0 0 40 40"
        fill="none"
      >
        <circle cx={20} cy={20} r={20} fill="white" fillOpacity="0.1" />
        <rect width={22} height={22} fill="none" fillOpacity="0" />

        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.0001 20.4286C16.2074 20.4286 20.4287 16.2073 20.4287 11C20.4287 5.79274 16.2074 1.57143 11.0001 1.57143C5.79285 1.57143 1.57153 5.79274 1.57153 11C1.57153 16.2073 5.79285 20.4286 11.0001 20.4286ZM11.0001 18.0714C14.9056 18.0714 18.0715 14.9054 18.0715 11C18.0715 7.09455 14.9056 3.92857 11.0001 3.92857C7.09467 3.92857 3.92869 7.09455 3.92869 11C3.92869 14.9054 7.09467 18.0714 11.0001 18.0714Z"
          fill="#999999"
          transform="translate(9 9)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.0001 17.2857C14.4716 17.2857 17.2858 14.4715 17.2858 11C17.2858 7.5285 14.4716 4.71429 11.0001 4.71429C7.52857 4.71429 4.71436 7.5285 4.71436 11C4.71436 14.4715 7.52857 17.2857 11.0001 17.2857ZM12.1503 5.34285V6.8955C12.1503 6.92555 12.1492 6.9556 12.148 6.98565C12.1468 7.0157 12.1456 7.04575 12.1456 7.0758C12.1456 7.13591 12.1456 7.19601 12.1362 7.25611C12.0842 7.63676 11.8858 7.96732 11.6023 8.17768L11.5314 8.22777L11.3446 8.35534L12.1361 8.95896L13.6236 10.0803C13.6292 10.084 13.7754 10.1847 13.8464 10.2411C13.8558 10.2487 13.8641 10.2574 13.8724 10.2662L13.8724 10.2662C13.8806 10.275 13.8889 10.2837 13.8983 10.2912C14.1204 10.5166 14.2669 10.8221 14.2905 11.1677L14.2953 11.1676C14.3 11.2026 14.3 11.2327 14.3 11.2677V12.9055C14.3 12.9807 14.2905 13.0558 14.2811 13.1309C14.2197 13.4965 14.026 13.8121 13.7472 14.0124L13.6858 14.0525L12.3677 14.949L10.6055 16.1511L9.84959 16.6569V15.1043C9.84959 15.0442 9.84959 14.9841 9.85431 14.924C9.85431 14.8639 9.85431 14.8038 9.86376 14.7437C9.91573 14.363 10.1142 14.0325 10.3976 13.8221L10.4685 13.772L10.6537 13.6456L9.85426 13.0359L8.37149 11.9145C8.3656 11.9107 8.21971 11.8101 8.14875 11.7537C8.1393 11.7462 8.13103 11.7374 8.12276 11.7287C8.11449 11.7199 8.10623 11.7111 8.09678 11.7036C7.87577 11.4793 7.72933 11.1758 7.70467 10.8322C7.69995 10.7971 7.69995 10.7671 7.69995 10.732V9.09424C7.69995 9.01912 7.7094 8.94399 7.71885 8.86886C7.78026 8.50324 7.97396 8.1877 8.2527 7.98736L8.31412 7.94729L9.63223 7.05076L11.3944 5.84871L12.1503 5.34285ZM10.2181 9.12429L11.3283 8.36646V10.2111C11.3283 10.6218 11.5031 10.9874 11.7771 11.2328V11.2378L12.9191 12.1033L11.7819 12.8755L10.6621 13.6398V11.7888C10.6621 11.3781 10.4873 11.0124 10.2133 10.767V10.762L9.07578 9.89992L10.2181 9.12429Z"
          fill="#999999"
          transform="translate(9 9)"
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  CreditIcon1.displayName = 'CreditIcon1';
}
