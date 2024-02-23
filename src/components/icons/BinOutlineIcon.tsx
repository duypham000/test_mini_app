import React, { SVGProps } from 'react';

export const BinOutlineIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        width={16}
        height={16}
        viewBox="0 0 16 16"
        fill="#999999"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12.667 4.66699C12.4902 4.66699 12.3206 4.73723 12.1956 4.86225C12.0706 4.98728 12.0003 5.15685 12.0003 5.33366V12.7943C11.9812 13.1314 11.8296 13.4474 11.5787 13.6732C11.3277 13.8991 10.9976 14.0167 10.6603 14.0003H5.34033C5.00306 14.0167 4.67298 13.8991 4.422 13.6732C4.17101 13.4474 4.01945 13.1314 4.00033 12.7943V5.33366C4.00033 5.15685 3.93009 4.98728 3.80506 4.86225C3.68004 4.73723 3.51047 4.66699 3.33366 4.66699C3.15685 4.66699 2.98728 4.73723 2.86225 4.86225C2.73723 4.98728 2.66699 5.15685 2.66699 5.33366V12.7943C2.68602 13.4851 2.97805 14.1403 3.47911 14.6162C3.98018 15.0922 4.64944 15.3501 5.34033 15.3337H10.6603C11.3512 15.3501 12.0205 15.0922 12.5215 14.6162C13.0226 14.1403 13.3146 13.4851 13.3337 12.7943V5.33366C13.3337 5.15685 13.2634 4.98728 13.1384 4.86225C13.0134 4.73723 12.8438 4.66699 12.667 4.66699Z" />
        <path d="M13.3333 2.66699H10.6667V1.33366C10.6667 1.15685 10.5964 0.987279 10.4714 0.862254C10.3464 0.73723 10.1768 0.666992 10 0.666992H6C5.82319 0.666992 5.65362 0.73723 5.5286 0.862254C5.40357 0.987279 5.33333 1.15685 5.33333 1.33366V2.66699H2.66667C2.48986 2.66699 2.32029 2.73723 2.19526 2.86225C2.07024 2.98728 2 3.15685 2 3.33366C2 3.51047 2.07024 3.68004 2.19526 3.80506C2.32029 3.93009 2.48986 4.00033 2.66667 4.00033H13.3333C13.5101 4.00033 13.6797 3.93009 13.8047 3.80506C13.9298 3.68004 14 3.51047 14 3.33366C14 3.15685 13.9298 2.98728 13.8047 2.86225C13.6797 2.73723 13.5101 2.66699 13.3333 2.66699ZM6.66667 2.66699V2.00033H9.33333V2.66699H6.66667Z" />
        <path d="M7.33333 11.3333V6.66667C7.33333 6.48986 7.2631 6.32029 7.13807 6.19526C7.01305 6.07024 6.84348 6 6.66667 6C6.48986 6 6.32029 6.07024 6.19526 6.19526C6.07024 6.32029 6 6.48986 6 6.66667V11.3333C6 11.5101 6.07024 11.6797 6.19526 11.8047C6.32029 11.9298 6.48986 12 6.66667 12C6.84348 12 7.01305 11.9298 7.13807 11.8047C7.2631 11.6797 7.33333 11.5101 7.33333 11.3333Z" />
        <path d="M10.0003 11.3333V6.66667C10.0003 6.48986 9.93009 6.32029 9.80506 6.19526C9.68004 6.07024 9.51047 6 9.33366 6C9.15685 6 8.98728 6.07024 8.86225 6.19526C8.73723 6.32029 8.66699 6.48986 8.66699 6.66667V11.3333C8.66699 11.5101 8.73723 11.6797 8.86225 11.8047C8.98728 11.9298 9.15685 12 9.33366 12C9.51047 12 9.68004 11.9298 9.80506 11.8047C9.93009 11.6797 10.0003 11.5101 10.0003 11.3333Z" />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  BinOutlineIcon.displayName = 'BinOutlineIcon';
}
