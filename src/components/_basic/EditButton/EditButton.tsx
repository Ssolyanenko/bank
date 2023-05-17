import React, { FC } from 'react';

import { EditIcon } from 'assets/EditIcon';
import { Size } from 'interfaces/common/componentsSettings';
import classes from './EditButton.module.scss';

interface Props {
  onClick?(): void;
  size?: Size;
  className?: string;
}

export const EditButton: FC<Props> = ({ onClick, size = Size.SMALL, className = '' }) => (
  <button className={`${classes.editBtn} ${className} ${classes[size]}`} type="button" onClick={onClick}>
    <EditIcon className={classes.btn} size={size} />
  </button>
);
