import * as GetRequestService from 'services/getRequest';
import { mockStore } from 'helpers';
import { mockInitialState } from 'constants/mockInitialState';
import { BranchActions, MOCK_BRANCHES } from 'constants/branch';
import { getBranches, setBranches } from 'store/branches';

describe('branch.actions', () => {
  describe('getBranches', () => {
    test('should handle SUCCESS action', () => {
      jest.spyOn(GetRequestService, 'GetRequest').mockResolvedValue('test');

      const store = mockStore(mockInitialState);
      const expected = [
        { type: BranchActions.GET_BRANCH_REQUEST },
        { type: BranchActions.GET_BRANCH_SUCCESS, payload: 'test' },
      ];

      return store.dispatch(getBranches('test')).then(() => {
        expect(store.getActions()).toEqual(expected);
      });
    });

    test('should handle ERROR action', () => {
      jest.spyOn(GetRequestService, 'GetRequest').mockRejectedValue(new Error('Async error'));

      const store = mockStore(mockInitialState);
      const expected = [{ type: BranchActions.GET_BRANCH_REQUEST }, { type: BranchActions.GET_BRANCH_ERROR }];

      return store.dispatch(getBranches('test')).then(() => {
        expect(store.getActions()).toEqual(expected);
      });
    });
  });

  describe('setBranches', () => {
    test('should handle SUCCESS action', () => {
      const store = mockStore(mockInitialState);
      const expected = [
        { type: BranchActions.SET_BRANCH_REQUEST },
        { type: BranchActions.SET_BRANCH_SUCCESS, payload: MOCK_BRANCHES },
      ];

      return store.dispatch(setBranches(MOCK_BRANCHES)).then(() => {
        expect(store.getActions()).toEqual(expected);
      });
    });
  });
});
