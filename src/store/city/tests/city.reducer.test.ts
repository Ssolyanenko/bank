import { ChangeCityActions } from 'constants/city';
import { cityData, initialStateCity } from 'store/city/city.reducer';

describe('city.reducer', () => {
  test('should handle SUCCESS CHANGE CITY action', () => {
    expect(
      cityData(initialStateCity, {
        type: ChangeCityActions.CHANGE_CITY_SUCCESS,
        payload: 'Another',
      })
    ).toEqual({ city: 'Another' });
  });
});
