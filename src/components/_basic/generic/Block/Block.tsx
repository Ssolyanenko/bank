import React, { FC, ReactNode } from 'react';

import classes from './Block.module.scss';

interface Props {
  children: ReactNode;
  title: string;
}

export const Block: FC<Props> = ({ title, children }) => (
  <div className={classes.mainPage}>
    <h2 className={classes.title}>{title}</h2>
    <div className={classes.body}>{children}</div>
  </div>
);
