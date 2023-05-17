import { ReactElement } from 'react';

import classes from './ArrowsBlock.module.scss';

export const ArrowsBlock = (): ReactElement => (
  <div className={classes.arrowDown}>
    <span />
    <span />
    <span />
  </div>
);
