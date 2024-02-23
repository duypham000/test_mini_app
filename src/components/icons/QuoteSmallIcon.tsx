import React, { SVGProps } from 'react';

export const QuoteSmallIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        width="22"
        height="18"
        viewBox="0 0 22 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.86726 18C3.353 18 2.16323 17.391 1.29794 16.1729C0.432645 14.9549 0 13.3759 0 11.4361C0 9.18045 0.562438 7.01504 1.68732 4.93985C2.81219 2.86466 4.60767 1.21805 7.07375 0L9.79941 2.6391C8.02557 3.27068 6.59784 4.2406 5.51622 5.54887C4.43461 6.81203 3.74238 8.14286 3.43953 9.54135L3.69911 9.67669C3.87217 9.54135 4.0885 9.42857 4.34808 9.33835C4.60767 9.24812 4.99705 9.20301 5.51622 9.20301C6.29499 9.20301 7.07375 9.56391 7.85251 10.2857C8.67453 10.9624 9.08554 12.0226 9.08554 13.4662C9.08554 14.6842 8.67453 15.7444 7.85251 16.6466C7.03048 17.5489 6.0354 18 4.86726 18ZM17.0678 18C15.5536 18 14.3638 17.391 13.4985 16.1729C12.6332 14.9549 12.2006 13.3759 12.2006 11.4361C12.2006 9.18045 12.763 7.01504 13.8879 4.93985C15.0128 2.86466 16.8083 1.21805 19.2743 0L22 2.6391C20.2262 3.27068 18.7984 4.2406 17.7168 5.54887C16.6352 6.81203 15.943 8.14286 15.6401 9.54135L15.8997 9.67669C16.0728 9.54135 16.2891 9.42857 16.5487 9.33835C16.8083 9.24812 17.1976 9.20301 17.7168 9.20301C18.4956 9.20301 19.2743 9.56391 20.0531 10.2857C20.8751 10.9624 21.2861 12.0226 21.2861 13.4662C21.2861 14.6842 20.8751 15.7444 20.0531 16.6466C19.2311 17.5489 18.236 18 17.0678 18Z"
          fill="#EC8000"
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  QuoteSmallIcon.displayName = 'QuoteSmallIcon';
}
