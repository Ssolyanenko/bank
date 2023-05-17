import { SetStateAction } from 'react';

import { Coordinates } from 'interfaces/coordinates';

export const getLocation = (
  setLocation: { (value: SetStateAction<Coordinates>): void },
  setCenter: { (value: SetStateAction<Coordinates>): void }
): void => {
  const { geolocation } = navigator;

  if (geolocation) {
    geolocation.getCurrentPosition((position: GeolocationPosition) => {
      const coordinates = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      setLocation(coordinates);
      setCenter(coordinates);
    });
  }
};
