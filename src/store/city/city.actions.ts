import { ActionType } from 'interfaces/action';
import { ChangeCityActions } from 'constants/city';

export const changeCity =
  (city: string): ActionType =>
  async (dispatch) => {
    dispatch({ type: ChangeCityActions.CHANGE_CITY_SUCCESS, payload: city });
  };
