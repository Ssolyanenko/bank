import React, { FC } from 'react';

import classes from './CardTemplateDots.module.scss';

export const CardTemplateDots: FC = () => (
  <div className={classes.dotsWrapper}>
    <span className={classes.dot} />
    <span className={classes.dot} />
    <span className={classes.dot} />
    <span className={classes.dot} />
  </div>
);
