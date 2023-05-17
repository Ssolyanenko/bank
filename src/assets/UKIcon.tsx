import { FC } from 'react';

import { IconProps } from 'interfaces/common/Icons';
import colors from 'styles/variables.module.scss';

export const UKIcon: FC<IconProps> = ({ className }) => (
  <svg className={className} width="34" height="24" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_3209_107209)">
      <path d="M0 0H34V24H0V0Z" fill={colors.blue_2} />
      <path
        d="M3.98438 0L16.9469 9.05L29.8563 0H34V3.1L21.25 12.05L34 20.95V24H29.75L17 15.05L4.30312 24H0V21L12.6969 12.1L0 3.2V0H3.98438Z"
        fill={colors.white_1}
      />
      <path
        d="M22.525 14.05L34 22V24L19.6031 14.05H22.525ZM12.75 15.05L13.0688 16.8L2.86875 24H0L12.75 15.05ZM34 0V0.15L20.7719 9.55L20.8781 7.35L31.3438 0H34ZM0 0L12.6969 8.8H9.50938L0 2.1V0Z"
        fill={colors.red_1}
      />
      <path d="M12.8031 0V24H21.3031V0H12.8031ZM0 8V16H34V8H0Z" fill={colors.white_1} />
      <path d="M0 9.65V14.45H34V9.65H0ZM14.5031 0V24H19.6031V0H14.5031Z" fill={colors.red_1} />
    </g>
    <defs>
      <clipPath id="clip0_3209_107209">
        <rect width="34" height="24" rx="2" fill={colors.white_1} />
      </clipPath>
    </defs>
  </svg>
);
