import { FC } from 'react';

import { IconProps } from 'interfaces/common/Icons';

export const TransferIcon: FC<IconProps> = ({ className }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M22 8L18 4V7H3V9H18V12L22 8Z" fill="#FFD600" />
    <path d="M2 16L6 20V17H21V15H6V12L2 16Z" fill="#FFD600" />
  </svg>
);
