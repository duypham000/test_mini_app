import React, { SVGProps } from 'react';

export const PotatoExchangeIcon = React.forwardRef<
  any,
  SVGProps<SVGSVGElement>
>((props, ref) => {
  return (
    <svg
      {...props}
      ref={ref}
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx={20} cy={20} r={20} fill="white" fillOpacity="0.1" />
      <path
        d="M12.6673 24.5H10.3798C10.1244 24.5001 9.87482 24.4245 9.66238 24.2829C9.49449 24.1705 9.35738 24.0179 9.26352 23.8389C9.16967 23.66 9.12205 23.4604 9.12501 23.2584C9.12609 23.1035 9.15775 22.9504 9.21818 22.8078C9.27861 22.6652 9.36661 22.5359 9.47713 22.4274C10.0999 21.8031 10.6602 21.1195 11.15 20.3863C11.5043 21.1788 11.9998 21.9002 12.6125 22.5151L13.1428 21.9849C12.4753 21.3143 11.965 20.504 11.6488 19.6123L12.6148 18.083C13.3646 16.9008 14.3458 15.8823 15.4993 15.089C16.6529 14.2957 17.955 13.7439 19.3273 13.4668L19.3813 13.4559C20.0627 13.3186 20.7561 13.2496 21.4513 13.25H21.923C23.6567 13.2497 25.3881 13.1266 27.1044 12.8818C27.2 12.8689 27.2972 12.8766 27.3897 12.9042C27.4821 12.9319 27.5676 12.9789 27.6404 13.042C27.7133 13.1052 27.7719 13.1832 27.8124 13.2708C27.8528 13.3584 27.8742 13.4536 27.875 13.55C27.8751 13.7763 27.8135 13.9984 27.6969 14.1924C27.093 15.1995 26.5611 16.248 26.105 17.33C25.8631 17.9024 25.5738 18.4535 25.2403 18.9778L25.211 18.8465C24.9709 17.7623 24.4259 16.7693 23.6401 15.9845L23.1099 16.5148C23.7144 17.1193 24.1564 17.8666 24.395 18.6875C24.0684 18.5165 23.7463 18.3369 23.4343 18.1419C23.0895 17.9276 22.7278 17.7419 22.3528 17.5865C22.0272 16.9726 21.6353 16.3962 21.1839 15.8679L20.6589 15.2563L20.0896 15.7438L20.6146 16.3554C20.8508 16.632 21.0695 16.9231 21.2694 17.2269C20.6757 17.0774 20.0659 17.0012 19.4536 17H17.621C17.3599 16.9996 17.1063 17.0867 16.9005 17.2474C16.6947 17.4081 16.5488 17.6331 16.4859 17.8865L16.3625 18.38C16.06 19.593 15.5314 20.738 14.8044 21.755C14.2799 22.486 13.9985 23.3633 14 24.263C14 24.3298 14.0071 24.395 14.0113 24.461C13.5628 24.4843 13.1128 24.5 12.6673 24.5ZM15.6725 26.183C15.3839 25.9533 15.1509 25.6613 14.9912 25.3288C14.8314 24.9963 14.749 24.6319 14.75 24.263C14.7487 23.5195 14.981 22.7943 15.4141 22.19C16.1962 21.097 16.7646 19.866 17.0896 18.5619L17.2134 18.068C17.236 17.9771 17.2885 17.8963 17.3623 17.8387C17.4362 17.7811 17.5273 17.7498 17.621 17.75C17.666 17.7499 17.7107 17.7571 17.7534 17.7714L17.9956 17.852C18.4968 18.0174 18.9417 18.3198 19.2797 18.7251C19.6178 19.1305 19.8355 19.6224 19.9081 20.1451C19.9792 20.6336 20.1579 21.1002 20.4313 21.5113C20.602 21.7671 20.7079 22.0606 20.7398 22.3665C20.7717 22.6724 20.7286 22.9815 20.6143 23.267L20.0413 24.6995L19.4413 25.5995C19.2423 25.8981 18.9834 26.152 18.681 26.3452C18.3786 26.5383 18.0394 26.6665 17.6848 26.7215C17.3303 26.7765 16.9682 26.7572 16.6215 26.6647C16.2748 26.5723 15.9511 26.4088 15.671 26.1845L15.6725 26.183ZM30.5353 23.2183C30.1526 23.3458 29.7886 23.5239 29.453 23.7478L27.578 24.9984C27.192 25.2525 26.7924 25.4854 26.381 25.6959C26.6244 24.6904 26.7483 23.6596 26.75 22.625H26C25.9992 23.8056 25.8298 24.9799 25.4968 26.1125C25.0856 26.2902 24.6653 26.4458 24.2375 26.5786C24.6565 25.8288 24.876 24.984 24.875 24.125H24.125C24.1268 25.0228 23.846 25.8984 23.3225 26.6278L23.165 26.849C22.3059 27.0312 21.4302 27.1237 20.552 27.125C20.0399 27.1225 19.5286 27.0836 19.022 27.0088C19.4388 26.7573 19.7954 26.4176 20.0668 26.0135L20.687 25.0831C20.7017 25.0614 20.7142 25.0383 20.7245 25.0141L21.3118 23.5453C21.4713 23.1468 21.5314 22.7155 21.4869 22.2886C21.4424 21.8617 21.2947 21.452 21.0564 21.095C20.845 20.7768 20.7069 20.4156 20.6521 20.0375C20.5232 19.1353 20.0535 18.3167 19.3396 17.75H19.4521C20.72 17.7493 21.9625 18.1054 23.0375 18.7775C23.8998 19.3163 24.8137 19.7677 25.7656 20.1249C26.8042 20.5144 27.7947 21.0217 28.7176 21.6369L29.0199 21.8383C29.422 22.1071 29.8948 22.2504 30.3785 22.25C30.4966 22.2498 30.6108 22.2917 30.7008 22.3682C30.7908 22.4446 30.8506 22.5506 30.8694 22.6671C30.8883 22.7837 30.865 22.9031 30.8038 23.0041C30.7425 23.105 30.6473 23.1808 30.5353 23.2179V23.2183Z"
        fill="#999999"
      />
    </svg>
  );
});

if (process.env.NODE_ENV !== 'production') {
  PotatoExchangeIcon.displayName = 'PotatoExchangeIcon';
}
