import React, { SVGProps } from 'react';

export const ProfileIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
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
        <circle cx={12} cy={12} r={12} fill="#0056BD" />
        <path
          d="M12 5.875C10.3149 5.875 8.9375 7.25245 8.9375 8.9375C8.9375 10.6226 10.3149 12 12 12C13.6851 12 15.0625 10.6226 15.0625 8.9375C15.0625 7.25245 13.6851 5.875 12 5.875Z"
          fill="white"
        />
        <path
          d="M17.6632 14.7623C17.5768 14.553 17.4615 14.3577 17.3318 14.1763C16.6691 13.2275 15.6461 12.5996 14.4935 12.4461C14.3494 12.4322 14.1909 12.4601 14.0757 12.5438C13.4705 12.9763 12.7501 13.1996 12.0009 13.1996C11.2517 13.1996 10.5313 12.9763 9.92615 12.5438C9.81088 12.4601 9.65239 12.4182 9.50832 12.4461C8.35568 12.5996 7.31832 13.2275 6.66997 14.1763C6.5403 14.3577 6.42502 14.567 6.3386 14.7623C6.29538 14.8461 6.30978 14.9437 6.35299 15.0275C6.46827 15.2228 6.61233 15.4181 6.742 15.5856C6.94371 15.8507 7.15983 16.0879 7.40478 16.3111C7.60648 16.5065 7.837 16.6879 8.06755 16.8692C9.20577 17.6925 10.5745 18.125 11.9865 18.125C13.3985 18.125 14.7672 17.6925 15.9055 16.8692C16.136 16.7018 16.3665 16.5065 16.5682 16.3111C16.7988 16.0879 17.0293 15.8507 17.231 15.5856C17.3751 15.4042 17.5048 15.2228 17.62 15.0275C17.692 14.9437 17.7064 14.846 17.6632 14.7623Z"
          fill="white"
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  ProfileIcon.displayName = 'ProfileIcon';
}
