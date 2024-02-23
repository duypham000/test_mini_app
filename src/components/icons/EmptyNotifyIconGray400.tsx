import React, { SVGProps } from 'react';

export const EmptyNotifyIconGray400 = React.forwardRef<
  any,
  SVGProps<SVGSVGElement>
>((props, ref) => {
  return (
    <svg
      {...props}
      ref={ref}
      width={196}
      height={196}
      viewBox="0 0 196 196"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M144.338 84.7937C144.338 102.592 149.172 120.074 158.338 135.334C159.743 137.672 160.502 140.341 160.537 143.068C160.572 145.796 159.883 148.483 158.538 150.857C157.194 153.23 155.243 155.204 152.886 156.576C150.529 157.948 147.849 158.67 145.122 158.667H50.2111C47.4842 158.668 44.8059 157.946 42.4499 156.573C40.0939 155.2 38.1447 153.226 36.8015 150.853C35.4584 148.48 34.7694 145.792 34.805 143.066C34.8407 140.339 35.5996 137.671 37.0044 135.334C46.1644 120.067 51.0035 102.598 51.0044 84.7937V74.6671C51.0044 64.7657 54.9377 55.2698 61.9391 48.2684C68.9404 41.2671 78.4363 37.3337 88.3377 37.3337H107.004C114.499 37.3337 121.48 39.5457 127.332 43.3537"
        stroke="#656F79"
        strokeWidth="1.52381"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M102 72H116L102 92H116"
        stroke="#656F79"
        strokeWidth="1.52381"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M135.336 27.9998H163.336L135.336 65.3331H163.336"
        stroke="#656F79"
        strokeWidth="1.52381"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M121.333 168.094C115.107 177.427 107.333 182.094 97.9994 182.094C88.666 182.094 80.8914 177.427 74.666 168.094"
        stroke="#656F79"
        strokeWidth="1.52381"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M86.0933 27.7383C89.3921 18.5794 93.512 14 98.4578 14C103.404 14 107.523 18.5794 110.822 27.7383"
        stroke="#656F79"
        strokeWidth="1.52381"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

if (process.env.NODE_ENV !== 'production') {
  EmptyNotifyIconGray400.displayName = 'EmptyNotifyIconGray400';
}
