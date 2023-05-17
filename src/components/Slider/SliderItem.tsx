import React, { FC, ReactElement } from 'react';

import classes from './SliderItem.module.scss';

interface Props {
  slide: string;
}

export const SliderItem: FC<Props> = ({ slide }): ReactElement => (
  <div className={classes.sliderItem}>
    <img src={slide} alt={slide} />
  </div>
);
