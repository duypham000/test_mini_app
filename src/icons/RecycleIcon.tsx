import React, { SVGProps } from 'react'

export const RecycleIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        width={16}
        height={16}
        viewBox='0 0 16 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M16 2.70003V5.55C16 6.10228 15.5523 6.55 15 6.55H12.15C11.5977 6.55 11.15 6.10228 11.15 5.55C11.15 4.99772 11.5977 4.55 12.15 4.55H12.9141C11.8099 2.96734 10.0002 2 8 2C5.51128 2 3.31725 3.49728 2.41044 5.81447C2.20913 6.32878 1.629 6.5825 1.11475 6.38125C0.600438 6.17997 0.346687 5.59987 0.547969 5.08559C1.12794 3.60362 2.12756 2.33853 3.43878 1.42706C4.78181 0.493469 6.35903 0 8 0C9.64097 0 11.2182 0.493469 12.5612 1.42703C13.0948 1.79797 13.5769 2.22753 14 2.70641V2.70006C14 2.14778 14.4477 1.70006 15 1.70006C15.5523 1.70006 16 2.14775 16 2.70003ZM14.8853 9.61878C14.371 9.41747 13.7909 9.67128 13.5896 10.1856C12.6827 12.5027 10.4887 14 8 14C6.04228 14 4.26706 13.0733 3.15719 11.55H3.84997C4.40225 11.55 4.84997 11.1023 4.84997 10.55C4.84997 9.99772 4.40225 9.55 3.84997 9.55H1C0.447719 9.55 0 9.99772 0 10.55V13.4C0 13.9523 0.447719 14.4 1 14.4C1.55228 14.4 2 13.9523 2 13.4V13.2936C2.42313 13.7725 2.90516 14.202 3.43878 14.573C4.78181 15.5065 6.35903 16 8 16C9.64097 16 11.2182 15.5065 12.5612 14.573C13.8724 13.6615 14.8721 12.3964 15.452 10.9144C15.6533 10.4002 15.3996 9.82006 14.8853 9.61878Z'
          fill='#2D88FF'
        />
      </svg>
    )
  }
)

if (process.env.NODE_ENV !== 'production') {
  RecycleIcon.displayName = 'RecycleIcon'
}