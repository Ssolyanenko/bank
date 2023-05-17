import { FC } from 'react';

import { IconProps } from 'interfaces/common/Icons';
import colors from 'styles/variables.module.scss';

export const MailIcon: FC<IconProps> = ({ className }) => (
  <svg width="25" height="24" className={className} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_4965_106442)">
      <path
        d="M20.5 4H4.5C3.4 4 2.51 4.9 2.51 6L2.5 18C2.5 19.1 3.4 20 4.5 20H20.5C21.6 20 22.5 19.1 22.5 18V6C22.5 4.9 21.6 4 20.5 4ZM20.5 18H4.5V8L12.5 13L20.5 8V18ZM12.5 11L4.5 6H20.5L12.5 11Z"
        fill={colors.grayDark_6}
      />
    </g>
    <defs>
      <clipPath id="clip0_4965_106442">
        <rect width="24" height="24" fill={colors.white_1} transform="translate(0.5)" />
      </clipPath>
    </defs>
  </svg>
);
