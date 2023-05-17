import { FC, ReactElement } from 'react';

import { IconProps } from 'interfaces/common/Icons';
import colors from 'styles/variables.module.scss';

export const ListIcon: FC<IconProps> = ({ className }): ReactElement => (
  <svg className={className} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M29.5 6.5V29.5H6.5V6.5H29.5ZM28.5 4.5H7.5C5.85 4.5 4.5 5.85 4.5 7.5V28.5C4.5 30.15 5.85 31.5 7.5 31.5H28.5C30.15 31.5 31.5 30.15 31.5 28.5V7.5C31.5 5.85 30.15 4.5 28.5 4.5Z"
      fill={colors.grayDark_6}
    />
    <path d="M21 25H10.5V23H21V25ZM25.5 19H10.5V17H25.5V19ZM25.5 13H10.5V11H25.5V13Z" fill={colors.grayDark_6} />
  </svg>
);
