import { FC } from 'react';

import { ArrowIcon } from 'assets/ArrowIcon';
import classes from './BackButton.module.scss';

interface Props {
  handleBack(): void;
  children: string;
  className?: string;
}

export const BackButton: FC<Props> = ({ handleBack, children, className = '' }) => (
  <button type="button" className={`${classes.buttonWrapper} ${className}`} onClick={handleBack}>
    <ArrowIcon className={classes.arrowIcon} />
    <span className={classes.text}>{children}</span>
  </button>
);
