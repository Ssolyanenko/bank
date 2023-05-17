import { FC } from 'react';

import { IconProps } from 'interfaces/common/Icons';
import colors from 'styles/variables.module.scss';

export const ExoticCurrencyIcon: FC<IconProps> = ({ className }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.28 12H18V14H13V21H11V14H6V12H10.72L5 3H7.37L12 10.29L16.63 3H19L13.28 12Z" fill={colors.grayDark_6} />
  </svg>
);
