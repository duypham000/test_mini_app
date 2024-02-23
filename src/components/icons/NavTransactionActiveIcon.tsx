import React, { SVGProps } from 'react';

export const NavTransactionActiveIcon = React.forwardRef<
  any,
  SVGProps<SVGSVGElement>
>((props, ref) => {
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
      <path
        d="M21.8 10C20.8734 5.43552 16.8379 2 12 2C7.16208 2 3.12658 5.43552 2.20004 10M21.8 10L19 8M21.8 10L22.5 6.5M2.20004 14C3.12658 18.5645 7.16208 22 12 22C16.8379 22 20.8734 18.5645 21.8 14M2.20004 14L5 16M2.20004 14L1.5 17.5"
        stroke="#006CEC"
        strokeLinecap="round"
      />
      <path
        d="M14.0026 9.68246C13.9536 9.23381 13.7515 8.88626 13.3963 8.63981C13.0411 8.39021 12.5941 8.2654 12.0551 8.2654C11.6693 8.2654 11.3355 8.32859 11.0538 8.45498C10.7721 8.5782 10.5531 8.74882 10.397 8.96683C10.2439 9.18167 10.1673 9.42654 10.1673 9.70142C10.1673 9.93207 10.2194 10.1311 10.3235 10.2986C10.4307 10.466 10.57 10.6066 10.7415 10.7204C10.916 10.831 11.1028 10.9242 11.3018 11C11.5009 11.0727 11.6923 11.1327 11.876 11.1801L12.7946 11.4265C13.0947 11.5024 13.4024 11.6051 13.7178 11.7346C14.0332 11.8641 14.3257 12.0348 14.5951 12.2464C14.8646 12.4581 15.082 12.7204 15.2474 13.0332C15.4158 13.346 15.5 13.7204 15.5 14.1564C15.5 14.7062 15.3622 15.1943 15.0866 15.6209C14.8141 16.0474 14.4175 16.3839 13.897 16.6303C13.3795 16.8768 12.7533 17 12.0184 17C11.3141 17 10.7047 16.8847 10.1903 16.654C9.67585 16.4234 9.27318 16.0964 8.98228 15.673C8.69138 15.2464 8.53062 14.7409 8.5 14.1564H9.92388C9.95144 14.5071 10.0617 14.7994 10.2546 15.0332C10.4506 15.2638 10.7001 15.436 11.0033 15.5498C11.3095 15.6603 11.6448 15.7156 12.0092 15.7156C12.4103 15.7156 12.7671 15.6509 13.0794 15.5213C13.3948 15.3886 13.6428 15.2054 13.8235 14.9716C14.0042 14.7346 14.0945 14.4581 14.0945 14.1422C14.0945 13.8547 14.0149 13.6193 13.8556 13.436C13.6995 13.2528 13.4867 13.1011 13.2172 12.981C12.9508 12.861 12.6492 12.7551 12.3123 12.6635L11.2008 12.3507C10.4475 12.139 9.85039 11.8278 9.40945 11.4171C8.97157 11.0063 8.75262 10.4629 8.75262 9.78673C8.75262 9.22749 8.89961 8.73934 9.19357 8.32227C9.48753 7.90521 9.88561 7.58136 10.3878 7.35071C10.89 7.1169 11.4565 7 12.0873 7C12.7242 7 13.2861 7.11532 13.773 7.34597C14.2629 7.57662 14.6487 7.89416 14.9304 8.29858C15.2122 8.69984 15.3591 9.16114 15.3714 9.68246H14.0026Z"
        fill="#006CEC"
      />
      <path
        d="M12.5 5.5C12.5 5.22386 12.2761 5 12 5C11.7239 5 11.5 5.22386 11.5 5.5H12.5ZM11.5 18.5C11.5 18.7761 11.7239 19 12 19C12.2761 19 12.5 18.7761 12.5 18.5H11.5ZM11.5 5.5V7.5H12.5V5.5H11.5ZM11.5 16.5V18.5H12.5V16.5H11.5Z"
        fill="#006CEC"
      />
    </svg>
  );
});

if (process.env.NODE_ENV !== 'production') {
  NavTransactionActiveIcon.displayName = 'NavTransactionActiveIcon';
}
