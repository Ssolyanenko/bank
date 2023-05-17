import { FC, ReactElement } from 'react';

import { IconProps } from 'interfaces/common/Icons';
import colors from 'styles/variables.module.scss';

export const TransferPhoneIcon: FC<IconProps> = ({ className }): ReactElement => (
  <svg className={className} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_3671_107634)">
      <path
        d="M25.5 1.5H10.5C8.85 1.5 7.5 2.85 7.5 4.5V31.5C7.5 33.15 8.85 34.5 10.5 34.5H25.5C27.15 34.5 28.5 33.15 28.5 31.5V4.5C28.5 2.85 27.15 1.5 25.5 1.5ZM9.5 6V3.5H26.5V6H9.5ZM9.5 28V8H26.5V28H9.5ZM9.5 32.5V30H26.5V32.5H9.5Z"
        fill={colors.grayDark_6}
      />
      <path d="M24 11H12V13H24V11Z" fill={colors.grayDark_6} />
    </g>
    <defs>
      <clipPath>
        <rect width="36" height="36" />
      </clipPath>
    </defs>
  </svg>
);
