import { FC } from 'react';

import { IconProps } from 'interfaces/common/Icons';
import colors from 'styles/variables.module.scss';

export const AppLogoIcon: FC<IconProps> = ({ className, color = colors.orange }) => (
  <svg className={className} viewBox="0 0 60 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.7208 17.1499V21.5249H0.666748V17.1499H12.7208Z" fill={color} />
    <path
      d="M30.9955 4.75407L21.0834 33.5106H15.0906L27.5776 0.333496H31.4057L30.9955 4.75407ZM39.2898 33.5106L29.3549 4.75407L28.922 0.333496H32.7729L45.3054 33.5106H39.2898ZM38.8113 21.2059V25.7404H20.7644V21.2059H38.8113Z"
      fill={color}
    />
    <path d="M59.5242 17.1499V21.5249H47.4701V17.1499H59.5242Z" fill={color} />
  </svg>
);
