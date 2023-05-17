import React, { FC } from 'react';

import { IconProps as Props } from 'interfaces/common/Icons';
import colors from 'styles/variables.module.scss';

export const WarningIcon: FC<Props> = ({ className }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7.99999 3.99301L13.02 12.6663H2.97999L7.99999 3.99301ZM7.99999 1.33301L0.666656 13.9997H15.3333L7.99999 1.33301ZM8.66666 10.6663H7.33332V11.9997H8.66666V10.6663ZM8.66666 6.66634H7.33332V9.33301H8.66666V6.66634Z"
      fill={colors.error_3}
    />
  </svg>
);
