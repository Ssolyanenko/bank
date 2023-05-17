import React, { FC } from 'react';

import colors from 'styles/variables.module.scss';

interface Props {
  className?: string;
}

export const ArrowCheckIcon: FC<Props> = ({ className = '' }) => (
  <svg className={className} width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M13.5165 0.477999C13.3162 0.285328 12.9915 0.285328 12.7912 0.477999L4.47842 8.47573L1.20875 5.32996C1.00851 5.13727 0.683796 5.13727 0.483509 5.32996C0.283248 5.52263 0.283248 5.83502 0.483509 6.02771L4.11584 9.52236C4.31602 9.71496 4.64084 9.71501 4.84108 9.52236L13.5165 1.17575C13.7167 0.983051 13.7167 0.67067 13.5165 0.477999Z"
      fill={colors.grayDark_6}
    />
  </svg>
);
