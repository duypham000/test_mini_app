import React, { SVGProps } from 'react';

export const NavViewSimplizeLightIcon = React.forwardRef<
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
      <mask id="path-1-inside-1_15844_9772" fill="white">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.9409 15.2923C18.8037 13.8275 20 11.5535 20 9C20 4.58172 16.4183 1 12 1C7.58172 1 4 4.58172 4 9C4 11.5535 5.19633 13.8275 7.05908 15.2923C7.93704 16.4576 8.9127 17.9663 9.23077 19H14.7692C15.0873 17.9663 16.063 16.4576 16.9409 15.2923Z"
        />
      </mask>
      <path
        d="M16.9409 15.2923L16.3228 14.5062L16.2205 14.5866L16.1422 14.6905L16.9409 15.2923ZM7.05908 15.2923L7.85778 14.6905L7.77948 14.5866L7.6772 14.5062L7.05908 15.2923ZM9.23077 19L8.27499 19.2941L8.49219 20H9.23077V19ZM14.7692 19V20H15.5078L15.725 19.2941L14.7692 19ZM19 9C19 11.2338 17.9548 13.2229 16.3228 14.5062L17.559 16.0784C19.6525 14.4322 21 11.8732 21 9H19ZM12 2C15.866 2 19 5.13401 19 9H21C21 4.02944 16.9706 0 12 0V2ZM5 9C5 5.13401 8.13401 2 12 2V0C7.02944 0 3 4.02944 3 9H5ZM7.6772 14.5062C6.04519 13.2229 5 11.2338 5 9H3C3 11.8732 4.34748 14.4322 6.44096 16.0784L7.6772 14.5062ZM10.1865 18.7059C9.81189 17.4883 8.73628 15.8566 7.85778 14.6905L6.26038 15.894C7.13779 17.0586 8.01351 18.4443 8.27499 19.2941L10.1865 18.7059ZM14.7692 18H9.23077V20H14.7692V18ZM16.1422 14.6905C15.2637 15.8566 14.1881 17.4883 13.8135 18.7059L15.725 19.2941C15.9865 18.4443 16.8622 17.0586 17.7396 15.894L16.1422 14.6905Z"
        fill="#4D4D4D"
        mask="url(#path-1-inside-1_15844_9772)"
      />
      <path
        d="M9 19.5C9 18.9477 9.44772 18.5 10 18.5H14C14.5523 18.5 15 18.9477 15 19.5C15 20.0523 14.5523 20.5 14 20.5H10C9.44772 20.5 9 20.0523 9 19.5Z"
        stroke="#4D4D4D"
      />
      <path
        d="M10.5 20.5H13.5V21C13.5 21.8284 12.8284 22.5 12 22.5C11.1716 22.5 10.5 21.8284 10.5 21V20.5Z"
        stroke="#4D4D4D"
      />
      <path
        d="M9.5 11.5C9.22386 11.5 9 11.7239 9 12C9 12.2761 9.22386 12.5 9.5 12.5V11.5ZM14.5 12.5C14.7761 12.5 15 12.2761 15 12C15 11.7239 14.7761 11.5 14.5 11.5V12.5ZM11.5 12V18H12.5V12H11.5ZM9.5 12.5H14.5V11.5H9.5V12.5Z"
        fill="#4D4D4D"
      />
    </svg>
  );
});

if (process.env.NODE_ENV !== 'production') {
  NavViewSimplizeLightIcon.displayName = 'NavViewSimplizeLightIcon';
}
