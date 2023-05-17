import React, { FC } from 'react';

import { IconProps as Props } from 'interfaces/common/Icons';
import colors from 'styles/variables.module.scss';

export const CheckmarkIcon: FC<Props> = ({ className }) => (
  <svg className={className} width="80" height="80" viewBox="0 0 81 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="40.5" cy="40" r="38.5" strokeWidth="3" stroke={colors.brand_5} fill={colors.orange} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M57.429 29.7357L39.2671 52.4444L25 40.5538L27.6919 37.3235L38.6614 46.4633L54.1483 27.1111L57.429 29.7357Z"
      fill="white"
    />
  </svg>
);
