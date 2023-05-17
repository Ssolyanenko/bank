import { FC, ReactElement } from 'react';

import { IconProps } from 'interfaces/common/Icons';
import colors from 'styles/variables.module.scss';

export const CircledArrowsIcon: FC<IconProps> = ({ className }): ReactElement => (
  <svg className={className} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_3671_107685)">
      <path
        d="M26.65 30.175H30.75V32.175H22.75V24.175H24.75V28.7653C27.495 26.5603 30.25 21.705 30.25 17.925C30.25 11.82 24.66 6.765 18.75 6.03V4C26.325 4.75 32.25 10.14 32.25 17.925C32.25 22.41 29.77 27.43 26.65 30.175Z"
        fill={colors.grayDark_6}
      />
      <path
        d="M5.25 6H9.35C6.23 8.745 3.75 13.765 3.75 18.25C3.75 26.035 9.675 31.425 17.25 32.175V30.145C11.34 29.41 5.75 24.355 5.75 18.25C5.75 14.47 8.505 9.61471 11.25 7.40971V12H13.25V4H5.25V6Z"
        fill={colors.grayDark_6}
      />
    </g>
    <defs>
      <clipPath>
        <rect width="36" height="36" />
      </clipPath>
    </defs>
  </svg>
);
