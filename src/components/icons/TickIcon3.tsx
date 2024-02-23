import React, { SVGProps } from 'react';

export const TickIcon3 = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        width={30}
        height={30}
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx={20} cy={24} r="19.5" stroke="#EC8000" />
        <path
          d="M22.4607 35.4494C22.3545 35.4493 22.2496 35.4274 22.1524 35.3848C22.0552 35.3423 21.9678 35.2801 21.8958 35.2022L6.66604 18.728C6.56451 18.6181 6.49721 18.4811 6.47236 18.3336C6.44751 18.1861 6.4662 18.0346 6.52614 17.8976C6.58607 17.7605 6.68466 17.6439 6.80983 17.5621C6.935 17.4802 7.08132 17.4366 7.23088 17.4366H14.5617C14.6717 17.4366 14.7805 17.4602 14.8807 17.5059C14.9808 17.5515 15.07 17.6181 15.1423 17.7011L20.2321 23.5568C20.7822 22.381 21.847 20.4231 23.7157 18.0374C26.4781 14.5105 31.6164 9.32351 40.4075 4.64105C40.5774 4.55057 40.7751 4.52708 40.9615 4.57524C41.1479 4.62339 41.3094 4.73968 41.4142 4.90114C41.5191 5.0626 41.5595 5.2575 41.5277 5.44735C41.4958 5.6372 41.3939 5.8082 41.2421 5.92659C41.2086 5.95282 37.819 8.62205 33.9181 13.5112C30.328 18.0104 25.5555 25.3674 23.2071 34.865C23.1659 35.0319 23.0699 35.1801 22.9346 35.2861C22.7992 35.3921 22.6323 35.4497 22.4604 35.4497L22.4607 35.4494Z"
          fill="#EC8000"
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  TickIcon3.displayName = 'TickIcon3';
}
