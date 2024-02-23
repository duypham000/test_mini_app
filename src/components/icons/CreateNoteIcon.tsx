import React, { SVGProps } from 'react';

export const CreateNoteIcon = React.forwardRef<any, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.5 17L8.77775 22.5973C8.65971 22.981 9.01904 23.3403 9.40268 23.2223L15 21.5M10.5 17L23.5 4M10.5 17L15 21.5M23.5 4L28 8.5M23.5 4L25.0858 2.41421C25.8668 1.63317 27.1332 1.63317 27.9142 2.41421L29.5858 4.08579C30.3668 4.86684 30.3668 6.13316 29.5858 6.91421L28 8.5M28 8.5L15 21.5"
          stroke="white"
          strokeWidth={2}
        />
        <path
          d="M12.2143 6H8.5C5.71429 6 2 7.84615 2 12.4615C2 17.6308 2 22 2 23.5385C2 28.1538 5.71429 30 8.5 30C13.7 30 19.3333 30 21.5 30C24.2857 30 28 28.1538 28 23.5385V19.8462"
          stroke="white"
          strokeWidth={2}
          strokeLinecap="round"
        />
      </svg>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  CreateNoteIcon.displayName = 'CreateNoteIcon';
}
