import { FC } from 'react';

import { IconProps } from 'interfaces/common/Icons';
import colors from 'styles/variables.module.scss';

export const UtilitiesIcon: FC<IconProps> = ({ className, color = colors.grayDark_8 }) => (
  <svg className={className} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M28.3334 24.9993H31.6667V28.3327H28.3334V24.9993ZM28.3334 18.3327H31.6667V21.666H28.3334V18.3327ZM28.3334 11.666H31.6667V14.9993H28.3334V11.666ZM22.9 11.666L25 13.066V11.666H22.9Z"
      fill={color}
    />
    <path d="M16.6666 5V7.51667L20 9.73333V8.33333H35V31.6667H28.3333V35H38.3333V5H16.6666Z" fill={color} />
    <path
      d="M13.6166 9.5L25 17.0833V35H1.66663V17.4667L13.6166 9.5ZM16.6666 31.6667H21.6666V18.6L13.6166 13.4833L4.99996 18.9667V31.6667H9.99996V21.6667H16.6666V31.6667Z"
      fill={color}
    />
  </svg>
);
