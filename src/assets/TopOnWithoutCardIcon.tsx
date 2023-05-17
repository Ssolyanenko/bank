import { FC } from 'react';

import { IconProps } from 'interfaces/common/Icons';
import colors from 'styles/variables.module.scss';

export const TopOnWithoutCardIcon: FC<IconProps> = ({ className }) => (
  <svg className={className} width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M18 10V2C18 0.9 17.1 0 16 0H2C0.9 0 0 0.9 0 2V10C0 11.1 0.9 12 2 12H16C17.1 12 18 11.1 18 10ZM16 10H2V2H16V10ZM9 3C7.34 3 6 4.34 6 6C6 7.66 7.34 9 9 9C10.66 9 12 7.66 12 6C12 4.34 10.66 3 9 3ZM22 3V14C22 15.1 21.1 16 20 16H3C3 15 3 15.1 3 14H20V3C21.1 3 21 3 22 3Z"
      fill={colors.grayDark_6}
    />
  </svg>
);
