import React, { SVGProps } from 'react';

export const CommentOutlineIcon = React.forwardRef<
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
      fill="#999999"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask id={`path-1-inside-1_2410_2033-${props.id}`} fill="white">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 13.6C11.866 13.6 15 10.936 15 7.64995C15 4.36386 11.866 1.69995 8 1.69995C4.13401 1.69995 1 4.36386 1 7.64995C1 8.94715 1.48838 10.1474 2.31737 11.1251C2.07897 12.6221 1.38263 13.8219 1 14.3002C3.14959 14.3002 4.60308 13.6211 5.27358 13.1318C6.1115 13.4332 7.03285 13.6 8 13.6Z"
        />
      </mask>
      <path
        d="M2.31737 11.1251L3.30492 11.2824L3.37716 10.8287L3.08009 10.4784L2.31737 11.1251ZM1 14.3002L0.219131 13.6755L-1.08062 15.3002H1V14.3002ZM5.27358 13.1318L5.61212 12.1908L5.11277 12.0111L4.6841 12.324L5.27358 13.1318ZM14 7.64995C14 10.2375 11.4723 12.6 8 12.6V14.6C12.2597 14.6 16 11.6346 16 7.64995H14ZM8 2.69995C11.4723 2.69995 14 5.06236 14 7.64995H16C16 3.66535 12.2597 0.699951 8 0.699951V2.69995ZM2 7.64995C2 5.06236 4.52774 2.69995 8 2.69995V0.699951C3.74028 0.699951 0 3.66535 0 7.64995H2ZM3.08009 10.4784C2.38838 9.66257 2 8.68678 2 7.64995H0C0 9.20752 0.588372 10.6322 1.55464 11.7718L3.08009 10.4784ZM1.32981 10.9678C1.12183 12.2738 0.506862 13.3158 0.219131 13.6755L1.78087 14.9249C2.25839 14.328 3.03611 12.9703 3.30492 11.2824L1.32981 10.9678ZM1 15.3002C3.35705 15.3002 5.01785 14.5563 5.86306 13.9395L4.6841 12.324C4.18832 12.6858 2.94214 13.3002 1 13.3002V15.3002ZM8 12.6C7.14778 12.6 6.341 12.453 5.61212 12.1908L4.93504 14.0727C5.882 14.4134 6.91791 14.6 8 14.6V12.6Z"
        mask={`url(#path-1-inside-1_2410_2033-${props.id})`}
      />
    </svg>
  );
});

if (process.env.NODE_ENV !== 'production') {
  CommentOutlineIcon.displayName = 'CommentOutlineIcon';
}
