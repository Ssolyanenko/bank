import { mockInitialState } from 'constants/mockInitialState';
import { getCity, getCityData } from 'store/city/city.selectors';

describe('getCityData', (): void => {
  test('should select cityData', (): void => {
    expect(getCityData(mockInitialState)).toEqual({ city: 'London' });
  });
});

describe('getCity', (): void => {
  test('should select city', (): void => {
    expect(getCity(mockInitialState)).toEqual('London');
  });
});
