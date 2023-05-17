import React, { FC, ReactElement, useState } from 'react';

import { TabTitle } from 'components/_basic';
import classes from './Tabs.module.scss';

interface Props {
  children: ReactElement[];
  className?: string;
}

export const Tabs: FC<Props> = ({ children, className = '' }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <ul className={classes.tabs}>
      <li className={`${classes.title} ${className}`}>
        {children.map(
          ({ props: { title } }, index): ReactElement => (
            <TabTitle
              selectedTab={selectedTab}
              key={index}
              title={title}
              index={index}
              setSelectedTab={setSelectedTab}
            />
          )
        )}
      </li>
      {children[selectedTab]}
    </ul>
  );
};
