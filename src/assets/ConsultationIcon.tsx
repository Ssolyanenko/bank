import { FC } from 'react';

import { IconProps } from 'interfaces/common/Icons';
import colors from 'styles/variables.module.scss';

export const ConsultationIcon: FC<IconProps> = ({ className }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M21 12.22C21 6.73 16.74 3 12 3C7.31 3 3 6.65 3 12.28C2.4 12.62 2 13.26 2 14V16C2 17.1 2.9 18 4 18H5V11.9C5 8.03 8.13 4.9 12 4.9C15.87 4.9 19 8.03 19 11.9V19H11V21H19C20.1 21 21 20.1 21 19V17.78C21.59 17.47 22 16.86 22 16.14V13.84C22 13.14 21.59 12.53 21 12.22Z"
      fill={colors.grayDark_6}
    />
    <path
      d="M9 14C9.55228 14 10 13.5523 10 13C10 12.4477 9.55228 12 9 12C8.44772 12 8 12.4477 8 13C8 13.5523 8.44772 14 9 14Z"
      fill={colors.grayDark_6}
    />
    <path
      d="M15 14C15.5523 14 16 13.5523 16 13C16 12.4477 15.5523 12 15 12C14.4477 12 14 12.4477 14 13C14 13.5523 14.4477 14 15 14Z"
      fill={colors.grayDark_6}
    />
    <path
      d="M18.0005 11.03C17.5205 8.18 15.0405 6 12.0505 6C9.02046 6 5.76046 8.51 6.02046 12.45C8.49046 11.44 10.3505 9.24 10.8805 6.56C12.1905 9.19 14.8805 11 18.0005 11.03Z"
      fill={colors.grayDark_6}
    />
  </svg>
);
