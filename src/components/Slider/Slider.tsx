import React, { FC, ReactElement } from 'react';

import { SliderItem } from './SliderItem';
import classes from './Slider.module.scss';

interface Props {
  slides: string[];
  activeSlide: number;
}

export const Slider: FC<Props> = ({ slides, activeSlide }): ReactElement => (
  <div className={classes.slider} style={{ transform: `translateX(${-100 * activeSlide}%)` }}>
    {slides.map((slide, index) => (
      <SliderItem slide={slide} key={slide + index} />
    ))}
  </div>
);
