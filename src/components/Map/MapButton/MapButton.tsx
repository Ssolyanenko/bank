import React, { FC, ReactElement } from 'react';

import classes from './MapButton.module.scss';

interface Props {
  icon: JSX.Element;
  text: string;
}

export const MapButton: FC<Props> = ({ icon, text }): ReactElement => (
  <div className={classes.request}>
    <div className={classes.buttonRequest}>
      {icon}
      <div className={classes.textInform}>{text}</div>
    </div>
  </div>
);
