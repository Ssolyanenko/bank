import React, { FC } from 'react';

import colors from 'styles/variables.module.scss';

interface Props {
  className: string;
  color?: string;
}

export const ArrowIcon: FC<Props> = ({ className, color = colors.grayDark_7 }) => (
  <svg className={className} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path
      className={className}
      d="M17.5098 3.8701L15.7298 2.1001L5.83984 12.0001L15.7398 21.9001L17.5098 20.1301L9.37984 12.0001L17.5098 3.8701Z"
      fill={color}
    />
  </svg>
);
