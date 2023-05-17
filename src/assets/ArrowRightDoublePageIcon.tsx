import React, { FC } from 'react';

import { IconProps } from 'interfaces/common/Icons';

export const ArrowRightDoublePageIcon: FC<IconProps> = ({ className, color = '#9E9E9E', onClick }) => (
  <svg
    onClick={onClick}
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_1330_108675)">
      <path d="M10 7L15 12L10 17V7Z" fill={color} />
      <line y1="-0.5" x2="10" y2="-0.5" transform="matrix(4.37114e-08 1 1 -4.37114e-08 19 7)" stroke={color} />
    </g>
    <defs>
      <clipPath id="clip0_1330_108675">
        <rect width="24" height="24" fill={color} transform="matrix(-1 0 0 1 24 0)" />
      </clipPath>
    </defs>
  </svg>
);
