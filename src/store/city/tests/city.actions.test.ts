import { mockStore } from 'helpers';
import { mockInitialState } from 'constants/mockInitialState';
import { ChangeCityActions } from 'constants/city';
import { changeCity } from 'store/city';

describe('city.actions', () => {
  describe('getBranches', () => {
    test('should handle SUCCESS action', () => {
      const store = mockStore(mockInitialState);
      const expected = [{ type: ChangeCityActions.CHANGE_CITY_SUCCESS, payload: 'test' }];

      return store.dispatch(changeCity('test')).then(() => {
        expect(store.getActions()).toEqual(expected);
      });
    });
  });
});
