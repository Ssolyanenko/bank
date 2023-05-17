import React, { FC, ReactElement } from 'react';

import classes from './TabTitle.module.scss';

interface Props {
  title: string;
  index: number;
  setSelectedTab(index: number): void;
  selectedTab: number;
}

export const TabTitle: FC<Props> = ({ title, setSelectedTab, index, selectedTab }): ReactElement => (
  <button
    onClick={(): void => setSelectedTab(index)}
    className={`${classes.tabTitle} ${index === selectedTab ? classes.active : ''}`}
  >
    {title}
  </button>
);
