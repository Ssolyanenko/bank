import React, { FC } from 'react';

import { IconProps } from 'interfaces/common/Icons';

export const TransferMenuIcon: FC<IconProps> = ({ className }) => (
  <svg
    style={{ backgroundColor: 'transparent' }}
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g path="url(#clip0_2167_9173)">
      <path d="M22 8L18 4V7H3V9H18V12L22 8Z" fill="inherit" />
      <path d="M2 16L6 20V17H21V15H6V12L2 16Z" fill="inherit" />
    </g>
    <defs>
      <clipPath id="clip0_2167_9173">
        <rect width="24" height="24" fill="none" />
      </clipPath>
    </defs>
  </svg>
);
