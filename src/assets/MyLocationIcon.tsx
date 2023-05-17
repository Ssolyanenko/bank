import { FC } from 'react';

import { IconProps } from 'interfaces/common/Icons';
import colors from 'styles/variables.module.scss';

export const MyLocationIcon: FC<IconProps> = ({ className }) => (
  <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M17.77 6.73L13.53 16.86L12.21 13.44L11.89 12.61L11.07 12.29L7.64 10.96L17.77 6.73ZM21.5 3L3.5 10.53V11.51L10.34 14.16L12.98 21H13.96L21.5 3Z"
      fill={colors.orange}
    />
  </svg>
);
