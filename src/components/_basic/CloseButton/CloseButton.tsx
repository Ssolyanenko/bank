import React, { FC } from 'react';

import { ButtonType, Size } from 'interfaces/common/componentsSettings';
import { CloseIcon } from 'assets/CloseIcon';
import classes from './CloseButton.module.scss';

interface Props {
  onClick(): void;
  className?: string;
  size: Size;
}

export const CloseButton: FC<Props> = ({ size, onClick, className = '' }) => (
  <div className={`${classes.container} ${className}`}>
    <button type={ButtonType.BUTTON} className={classes.button} onClick={onClick}>
      <CloseIcon size={size} />
    </button>
  </div>
);
