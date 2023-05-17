import React, { FC, ReactElement } from 'react';

import { LocationIcon } from 'assets';
import classes from './CityContainer.module.scss';

interface Props {
  cities: string[];
  closeModal(): void;
  selectItem(street: string): void;
}

export const CityContainer: FC<Props> = ({ cities, closeModal, selectItem }): ReactElement => (
  <div className={classes.container}>
    {cities.map((city: string, index: number) => (
      <div className={classes.cityContainer} key={city + index}>
        <LocationIcon color="black" size="20px" className={classes.icon} />
        <span
          role="presentation"
          onClick={(): void => {
            selectItem(city);
            closeModal();
          }}
          className={classes.city}
          key={city + index}
        >
          {city}
        </span>
      </div>
    ))}
  </div>
);
