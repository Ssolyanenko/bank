import React, { FC } from 'react';

import { IconProps } from 'interfaces/common/Icons';

export const ArrowLeftPageIcon: FC<IconProps> = ({ className, color = '#9E9E9E', onClick }) => (
  <svg
    onClick={onClick}
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_1330_108671)">
      <path d="M14 7L9 12L14 17V7Z" fill={color} />
    </g>
    <defs>
      <clipPath id="clip0_1330_108671">
        <rect width="24" height="24" fill={color} />
      </clipPath>
    </defs>
  </svg>
);
