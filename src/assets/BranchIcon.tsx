import { FC } from 'react';

import { IconProps } from 'interfaces/common/Icons';
import colors from 'styles/variables.module.scss';

export const BranchIcon: FC<IconProps> = ({ className }) => (
  <svg className={className} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="18.5" fill="white" stroke={colors.orange} strokeWidth="3" />
    <path
      d="M14.5 18H12.5V25H14.5V18ZM20.5 18H18.5V25H20.5V18ZM29 27H10V29H29V27ZM26.5 18H24.5V25H26.5V18ZM19.5 11.26L24.71 14H14.29L19.5 11.26ZM19.5 9L10 14V16H29V14L19.5 9Z"
      fill={colors.grayDark_6}
    />
  </svg>
);
