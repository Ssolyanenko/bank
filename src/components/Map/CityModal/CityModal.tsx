import React, { FC, ReactElement, useEffect, useState } from 'react';

import { InputSearchCity, MapButton } from 'components';
import { requestCity } from 'services/requestCity';
import { PopularCities } from 'interfaces/coordinates';
import classes from './CityModal.module.scss';

interface Props {
  selectedCity: string;
  popularCities: PopularCities[];
  closeModal(): void;
  changeCity(arg: string): void;
}

export const CityModal: FC<Props> = ({ closeModal, selectedCity, changeCity, popularCities }): ReactElement => {
  const [cities, setCities] = useState(['']);

  const selectCity = (city: string): void => {
    changeCity(city);
  };

  useEffect(() => {
    requestCity(setCities);
  }, []);

  return (
    <div className={classes.cityModal} role="presentation">
      <div className={classes.cityModalContent} role="presentation">
        <span className={classes.location}>
          Your are here: <span className={classes.cityName}> {selectedCity}</span>
        </span>
        <InputSearchCity
          cities={cities}
          closeModal={closeModal}
          selectCity={selectCity}
          placeholder="Enter city name"
        />
        <span className={classes.title}>Featured cities</span>
        <div className={classes.popularCities}>
          {popularCities
            .filter(({ city }): boolean => city !== selectedCity)
            .map(({ city, id }) => (
              <span
                key={id}
                className={classes.city}
                onClick={() => {
                  changeCity(city);
                  closeModal();
                }}
                role="presentation"
              >
                <MapButton key={id} text={city} icon={React.createElement('div', null)} />
              </span>
            ))}
        </div>
      </div>
      <button
        className={classes.closeButton}
        onClick={(): void => {
          closeModal();
        }}
        aria-label=" "
      >
        &times;
      </button>
    </div>
  );
};
