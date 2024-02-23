import React, { SVGProps } from 'react';

export const DateIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
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
          d="M11.6667 14.6666H3.00001C2.08101 14.6666 1.33334 13.919 1.33334 13V4.33329C1.33334 3.41429 2.08101 2.66663 3.00001 2.66663H9.78101C10.226 2.66663 10.6447 2.83996 10.9593 3.15463L12.845 5.04029C13.1597 5.35496 13.333 5.77363 13.333 6.21863V12.9996C13.333 13.9186 12.5853 14.6663 11.6663 14.6663L11.6667 14.6666Z"
          fill="#EC8000"
        />
        <path
          d="M13 13.3333H4.33335C3.41435 13.3333 2.66669 12.5856 2.66669 11.6666V2.99998C2.66669 2.08098 3.41435 1.33331 4.33335 1.33331H11.1144C11.5594 1.33331 11.978 1.50665 12.2927 1.82131L14.1784 3.70698C14.493 4.02165 14.6664 4.44031 14.6664 4.88531V11.6663C14.6664 12.5853 13.9187 13.333 12.9997 13.333L13 13.3333Z"
          fill="#FFC701"
        />
        <path
          d="M14.1787 3.70732L12.293 1.82165C12.114 1.64265 11.899 1.51532 11.667 1.43365V3.66699C11.667 4.03532 11.9654 4.33366 12.3337 4.33366H14.567C14.4854 4.10166 14.358 3.88665 14.179 3.70765L14.1787 3.70732Z"
          fill="#EC8000"
        />
        <path
          d="M9.33333 4.66667H5.33333C5.14933 4.66667 5 4.51733 5 4.33333C5 4.14933 5.14933 4 5.33333 4H9.33333C9.51733 4 9.66667 4.14933 9.66667 4.33333C9.66667 4.51733 9.51733 4.66667 9.33333 4.66667Z"
          fill="#E14040"
        />
        <path
          d="M11.6667 6.99998H5.33333C5.14933 6.99998 5 6.85065 5 6.66665C5 6.48265 5.14933 6.33331 5.33333 6.33331H11.6667C11.8507 6.33331 12 6.48265 12 6.66665C12 6.85065 11.8507 6.99998 11.6667 6.99998Z"
          fill="#E14040"
        />
        <path
          d="M11.6667 8.99998H5.33333C5.14933 8.99998 5 8.85098 5 8.66665C5 8.48231 5.14933 8.33331 5.33333 8.33331H11.6667C11.8507 8.33331 12 8.48231 12 8.66665C12 8.85098 11.8507 8.99998 11.6667 8.99998Z"
          fill="#E14040"
        />
        <path
          d="M11.6667 11H5.33333C5.14933 11 5 10.851 5 10.6666C5 10.4823 5.14933 10.3333 5.33333 10.3333H11.6667C11.8507 10.3333 12 10.4823 12 10.6666C12 10.851 11.8507 11 11.6667 11Z"
          fill="#E14040"
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  DateIcon.displayName = 'DateIcon';
}
