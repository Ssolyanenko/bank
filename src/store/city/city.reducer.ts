import { Reducer } from 'redux';

import { ChangeCityActions } from 'constants/city';
import { CityState } from 'interfaces/user';

export const initialStateCity: CityState = {
  city: 'London',
};

export const cityData: Reducer<CityState> = (state = initialStateCity, action) => {
  switch (action.type) {
    case ChangeCityActions.CHANGE_CITY_SUCCESS:
      return { ...state, city: action.payload };
    default:
      return state;
  }
};
