import React, { SVGProps } from 'react';

export const CatalogOptimizationIcon = React.forwardRef<
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.4813 5.00002C7.85754 5.2658 5 8.29409 5 11.9907C5 13.7317 5.63383 15.3244 6.68301 16.5501L8.52434 14.7063C7.94053 13.9577 7.59266 13.0156 7.59266 11.9922C7.59266 9.7304 9.29164 7.86601 11.4813 7.60893V5.00002ZM12 19.0003C10.2459 19.0003 8.64242 18.3542 7.41406 17.2867L9.25386 15.4444C10.0071 16.046 10.9616 16.4056 12.0001 16.4056C13.9161 16.4056 15.5466 15.1813 16.1539 13.4712L18.6633 14.1446C17.7558 16.9621 15.1156 19.0003 12 19.0003ZM18.9072 13.1349C18.9683 12.7626 19 12.3804 19 11.9907C19 8.29398 16.1423 5.26563 12.5184 5V7.60888C14.7083 7.86576 16.4075 9.73025 16.4075 11.9922C16.4075 12.1494 16.3993 12.3047 16.3832 12.4577L18.9072 13.1349Z"
        fill="white"
      />
    </svg>
  );
});

if (process.env.NODE_ENV !== 'production') {
  CatalogOptimizationIcon.displayName = 'CatalogOptimizationIcon';
}
