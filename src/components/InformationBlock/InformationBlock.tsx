import { FC } from 'react';

import classes from './InformationBlock.module.scss';

export interface Props {
  className?: string;
  children: string;
}

export const InformationBlock: FC<Props> = ({ className, children }) => (
  <div className={`${classes.blockWrapper} ${className}`}>
    <span className={classes.blockText}>{children}</span>
  </div>
);
