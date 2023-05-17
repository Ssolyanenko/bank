import { FC } from 'react';

import { IconProps } from 'interfaces/common/Icons';
import colors from 'styles/variables.module.scss';

export const ArrowRightIcon: FC<IconProps> = ({ className }) => (
  <svg className={className} width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="32" rx="2" fill={colors.orange} />
    <path d="M10 11L15 16L10 21V11Z" fill={colors.grayDark_6} />
  </svg>
);
