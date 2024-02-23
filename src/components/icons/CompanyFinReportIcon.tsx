import React, { SVGProps } from 'react';

export const CompanyFinReportIcon = React.forwardRef<
  any,
  SVGProps<SVGSVGElement>
>((props, ref) => {
  return (
    <svg
      {...props}
      ref={ref}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="12" fill="#CC9F01" />
      <g clip-path="url(#clip0_15151_1001)">
        <path
          d="M13.73 9.9475C13.04 9.9475 12.48 9.3875 12.48 8.6975V6H8.32251C7.90751 6 7.57251 6.335 7.57251 6.75V17.25C7.57251 17.665 7.91001 18 8.32251 18H15.6775C16.0925 18 16.4275 17.665 16.4275 17.25V9.9475H13.73ZM11.6075 11.2375L12.925 12.555L14.37 11.11C14.4675 11.0125 14.625 11.0125 14.7225 11.11C14.82 11.2075 14.82 11.3675 14.7225 11.465L13.1025 13.085C13.005 13.1825 12.845 13.1825 12.7475 13.085L11.43 11.7675L9.29501 13.9025C9.27228 13.9258 9.24505 13.9443 9.21496 13.9567C9.18488 13.9692 9.15257 13.9754 9.12001 13.975C9.07065 13.9753 9.02233 13.9609 8.98118 13.9336C8.94002 13.9064 8.9079 13.8675 8.88888 13.822C8.86985 13.7764 8.8648 13.7263 8.87435 13.6778C8.88389 13.6294 8.90762 13.5849 8.94251 13.55L11.255 11.2375C11.2781 11.2143 11.3056 11.1959 11.3359 11.1834C11.3661 11.1708 11.3985 11.1644 11.4313 11.1644C11.464 11.1644 11.4964 11.1708 11.5267 11.1834C11.5569 11.1959 11.5844 11.2143 11.6075 11.2375ZM9.05251 8.705C8.69201 8.4 8.78001 7.5015 9.68001 7.455V7.2675H9.91751V7.4575C10.1925 7.48 10.4525 7.5775 10.7 7.7425L10.455 8.0925C10.29 7.9725 10.11 7.8975 9.91751 7.8725V8.58C10.0295 8.58 10.3978 8.7095 10.565 8.855C10.9215 9.15875 10.8813 10.062 9.91751 10.1175V10.3875H9.68001V10.115C9.33501 10.0825 9.02251 9.9425 8.75001 9.705L9.02751 9.375C9.23501 9.56 9.45251 9.6675 9.68001 9.705V8.9725C9.39501 8.905 9.18751 8.815 9.05251 8.705ZM9.66751 17H8.57251V14.7475H9.66751V17ZM11.5875 17H10.4925V14.2725H11.5875V17ZM13.5075 17H12.4125V15.565H13.5075V17ZM15.4275 17H14.3325V13.005H15.4275V17ZM9.91751 9.04V9.715C10.3718 9.66875 10.5258 9.1995 9.91751 9.04ZM9.68001 7.86C9.32051 7.884 9.22151 8.2015 9.38751 8.3675C9.44251 8.42 9.54001 8.465 9.68001 8.51V7.86Z"
          fill="white"
        />
        <path
          d="M13.73 9.44745H16.36C16.3224 9.3658 16.2708 9.29135 16.2075 9.22745C13.0383 6.0582 13.1775 6.15645 12.98 6.06995V8.69745C12.98 9.11245 13.315 9.44745 13.73 9.44745Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_15151_1001">
          <rect
            width="12"
            height="12"
            fill="white"
            transform="translate(6 6)"
          />
        </clipPath>
      </defs>
    </svg>
  );
});

if (process.env.NODE_ENV !== 'production') {
  CompanyFinReportIcon.displayName = 'CompanyFinReportIcon';
}
