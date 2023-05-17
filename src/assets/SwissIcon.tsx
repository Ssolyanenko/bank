import { FC } from 'react';

import { IconProps } from 'interfaces/common/Icons';
import colors from 'styles/variables.module.scss';

export const SwissIcon: FC<IconProps> = ({ className }) => (
  <svg className={className} width="34" height="24" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="34" height="24" rx="2" fill={colors.white_1} />
    <mask id="mask0_1483_26347" maskUnits="userSpaceOnUse" x="0" y="0" width="34" height="24">
      <rect width="34" height="24" rx="2" fill={colors.white_1} />
    </mask>
    <g mask="url(#mask0_1483_26347)">
      <path
        d="M3.9375 -1C0.00271893 -1 -2 1.92422 -2 5.53125V18.5938C-2 22.2008 0.00271893 25.125 3.9375 25.125H30.0625C33.9973 25.125 36 22.2008 36 18.5938V5.53125C36 1.92422 33.9973 -1 30.0625 -1"
        fill={colors.error_3}
      />
      <path
        d="M9.28125 15.0312H14.0312V19.7812H19.375V15.0312H24.125V9.6875H19.375V4.9375H14.0312V9.6875H9.28125V15.0312Z"
        fill={colors.white_1}
      />
    </g>
  </svg>
);
