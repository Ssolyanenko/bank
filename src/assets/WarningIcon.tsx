import { FC } from 'react';

import { IconProps } from 'interfaces/common/Icons';
import colors from 'styles/variables.module.scss';

export const WarningIcon: FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="81" height="81" viewBox="0 0 81 81" fill="none">
    <circle cx="40" cy="40.5" r="38.5" fill={colors.orange} stroke={colors.brand_5} strokeWidth="3" />
    <path d="M36.3999 51.8H43.5999V59H36.3999V51.8ZM36.3999 23H43.5999V44.6H36.3999V23Z" fill="white" />
  </svg>
);
