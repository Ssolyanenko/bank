import { FC, ReactElement } from 'react';

import { IconProps } from 'interfaces/common/Icons';
import colors from 'styles/variables.module.scss';

export const FacebookIcon: FC<IconProps> = ({ className }): ReactElement => (
  <svg className={className} width="40" height="40" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20.5" cy="20.5" r="20" fill={colors.blue_8} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.854 28.7052H18.2163V20.9561H16.3984V17.9699H18.2163V16.1786C18.2163 13.7442 19.2427 12.2949 22.1588 12.2949H24.5863V15.2811H23.0695C21.934 15.2811 21.8585 15.6979 21.8585 16.4768L21.854 17.9699H24.6036L24.2815 20.9561H21.854V28.7052Z"
      fill={colors.white_1}
    />
  </svg>
);
