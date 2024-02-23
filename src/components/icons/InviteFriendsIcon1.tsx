import React, { SVGProps } from 'react';

export const InviteFriendsIcon1 = React.forwardRef<
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
      <circle cx={12} cy={12} r={12} fill="#B43333" />
      <rect width={14} height={14} transform="translate(5 5)" fill="#B43333" />
      <circle cx={12} cy={8} r={2} fill="white" />
      <circle cx={8} cy={15} r={2} fill="white" />
      <circle cx={16} cy={15} r={2} fill="white" />
      <path d="M8 15L12 8L16 15H8Z" stroke="white" strokeLinecap="round" />
    </svg>
  );
});

if (process.env.NODE_ENV !== 'production') {
  InviteFriendsIcon1.displayName = 'InviteFriendsIcon1';
}
