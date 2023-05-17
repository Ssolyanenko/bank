import React, { FC } from 'react';

import colors from 'styles/variables.module.scss';

interface Props {
  className: string;
}

export const ArrowDownIcon: FC<Props> = ({ className }) => (
  <svg className={className} width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12.1002 0.666672L7.00016 5.75556L1.90016 0.666672L0.333496 2.23334L7.00016 8.90001L13.6668 2.23334L12.1002 0.666672Z"
      fill={colors.grayDark_6}
    />
  </svg>
);
