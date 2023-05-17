import React, { FC, ReactElement } from 'react';

import { Size } from 'interfaces/common/componentsSettings';
import { IconSize } from 'constants/size';

interface Props {
  size: Size;
}

export const CloseIcon: FC<Props> = ({ size }): ReactElement => {
  const widthHeightValue = IconSize[size];

  return (
    <svg
      width={widthHeightValue}
      height={widthHeightValue}
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 1l10 10M1 11L11 1" strokeWidth="1.1" stroke="currentColor" />
    </svg>
  );
};
