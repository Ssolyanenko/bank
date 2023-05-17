import { FC } from 'react';

import { IconProps } from 'interfaces/common/Icons';
import colors from 'styles/variables.module.scss';

export const ExchangeIcon: FC<IconProps> = ({ className, onClick }) => (
  <svg
    onClick={onClick}
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.6416 1.71094L15.5856 2.79019L18.7978 6.00019H3.00056V7.50019H18.7978L15.5863 10.7109L16.6416 11.7894L21.6793 6.75019L16.6416 1.71094ZM7.36031 12.2109L2.32031 17.2502L7.36031 22.2894L8.41481 21.2109L5.20406 18.0002H21.0006V16.5002H5.20331L8.41481 13.2894L7.36031 12.2109Z"
      fill={colors.grayDark_6}
    />
  </svg>
);
