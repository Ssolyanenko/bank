import { FC, ReactElement } from 'react';

import { IconProps } from 'interfaces/common/Icons';
import colors from 'styles/variables.module.scss';

export const CardTemplateSimpleIcon: FC<IconProps> = ({ className }): ReactElement => (
  <svg className={className} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g>
      <path
        d="M30 6H6C4.335 6 3.015 7.335 3.015 9L3 27C3 28.665 4.335 30 6 30H30C31.665 30 33 28.665 33 27V9C33 7.335 31.665 6 30 6ZM31 28H5V16H31V28ZM31 12H5V8H31V12Z"
        fill={colors.grayDark_6}
      />
    </g>
    <defs>
      <clipPath id="clip0_3671_107538">
        <rect width="36" height="36" />
      </clipPath>
    </defs>
  </svg>
);
