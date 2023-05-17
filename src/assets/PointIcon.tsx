import { FC } from 'react';

import { IconProps } from 'interfaces/common/Icons';
import colors from 'styles/variables.module.scss';

export const PointIcon: FC<IconProps> = ({ className }) => (
  <svg className={className} width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 5L8 0H0L4 5Z" fill={colors.orange} />
  </svg>
);
