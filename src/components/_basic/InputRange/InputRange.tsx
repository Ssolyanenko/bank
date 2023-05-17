import React, { FC } from 'react';
import Slider from '@mui/material/Slider';

interface Props {
  className: string;
  count: number[];
  handleChangeCount(event: Event, newValue: number | number[]): void;
  min: number;
  max: number;
}

export const InputRange: FC<Props> = ({ className, count, handleChangeCount, min, max }) => (
  <Slider
    className={className}
    value={count}
    onChange={handleChangeCount}
    valueLabelDisplay="auto"
    min={min}
    max={max}
  />
);
