import { FC } from 'react';

import { IconProps } from 'interfaces/common/Icons';

export const TransferPayIcon: FC<IconProps> = ({ className }) => (
  <svg className={className} width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.5 14H10L5 7L10 0H5.5L0.5 7L5.5 14Z" fill="#FFD600" />
    <path d="M12.5 14H17L12 7L17 0H12.5L7.5 7L12.5 14Z" fill="#FFD600" />
  </svg>
);
