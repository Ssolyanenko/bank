import { createSelector } from 'reselect';

import { Store } from 'store';
import { CityState } from 'interfaces/user';

export const getCityData = (state: Store): CityState => state.cityData;

export const getCity = createSelector([getCityData], (cityData) => cityData.city);
