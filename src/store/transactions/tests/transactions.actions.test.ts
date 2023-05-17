import * as GetRequestService from 'services/getRequest';
import { mockStore } from 'helpers';
import { mockInitialState } from 'constants/mockInitialState';
import {
  requestTransactions,
  requestMaxAmount,
  getTransactionsInfoSuccess,
  getTransactionsInfoError,
  getMaxAmountValueSuccess,
  getMaxAmountValueError,
  setCurrentPage,
} from 'store/transactions/transactions.actions';
import { DEFAULT_FILTERS_VALUES, DEFAULT_TRANSACTIONS_INFO_VALUES, MAX_AMOUNT } from 'constants/transactionsHistory';
import { TransactionsActions } from 'constants/transactions';

describe('transactions.actions', (): void => {
  describe('requestTransactions', (): void => {
    test('should handle SUCCESS action', (): void => {
      jest.spyOn(GetRequestService, 'GetRequest').mockResolvedValue({
        ...DEFAULT_TRANSACTIONS_INFO_VALUES,
      });

      const store = mockStore(mockInitialState);
      const expected = [
        {
          type: TransactionsActions.GET_TRANSACTIONS_INFO_SUCCESS,
          transactionsInfo: DEFAULT_TRANSACTIONS_INFO_VALUES,
        },
      ];

      return store.dispatch(requestTransactions(1, 1, DEFAULT_FILTERS_VALUES, jest.fn())).then((): void => {
        expect(store.getActions()).toEqual(expected);
      });
    });

    test('should handle ERROR action', (): void => {
      jest.spyOn(GetRequestService, 'GetRequest').mockRejectedValue(new Error('Async error'));

      const expected = [{ type: TransactionsActions.GET_TRANSACTIONS_INFO_ERROR }];
      const store = mockStore(mockInitialState);

      return store.dispatch(requestTransactions(1, 1, DEFAULT_FILTERS_VALUES, jest.fn())).then((): void => {
        expect(store.getActions()).toEqual(expected);
      });
    });
  });

  describe('requestMaxAmount', (): void => {
    test('should handle SUCCESS action', (): void => {
      jest.spyOn(GetRequestService, 'GetRequest').mockResolvedValue({
        ...MAX_AMOUNT,
      });

      const store = mockStore(mockInitialState);
      const expected = [
        {
          type: TransactionsActions.GET_MAX_AMOUNT_VALUE_SUCCESS,
          maxAmount: MAX_AMOUNT,
        },
      ];

      return store.dispatch(requestMaxAmount(1, jest.fn(), jest.fn())).then((): void => {
        expect(store.getActions()).toEqual(expected);
      });
    });

    test('should handle ERROR action', (): void => {
      jest.spyOn(GetRequestService, 'GetRequest').mockRejectedValue(new Error('Async error'));

      const expected = [{ type: TransactionsActions.GET_MAX_AMOUNT_VALUE_ERROR }];
      const store = mockStore(mockInitialState);

      return store.dispatch(requestMaxAmount(1, jest.fn(), jest.fn())).then((): void => {
        expect(store.getActions()).toEqual(expected);
      });
    });
  });

  describe('getTransactionsInfoSuccess', (): void => {
    test('should handle SUCCESS action', (): void => {
      const expected = {
        type: TransactionsActions.GET_TRANSACTIONS_INFO_SUCCESS,
        transactionsInfo: DEFAULT_TRANSACTIONS_INFO_VALUES,
      };

      expect(getTransactionsInfoSuccess(DEFAULT_TRANSACTIONS_INFO_VALUES)).toEqual(expected);
    });
  });

  describe('getTransactionsInfoError', (): void => {
    test('should handle SUCCESS action', (): void => {
      const expected = {
        type: TransactionsActions.GET_TRANSACTIONS_INFO_ERROR,
      };

      expect(getTransactionsInfoError()).toEqual(expected);
    });
  });

  describe('getMaxAmountValueSuccess', (): void => {
    test('should handle SUCCESS action', (): void => {
      const expected = {
        type: TransactionsActions.GET_MAX_AMOUNT_VALUE_SUCCESS,
        maxAmount: MAX_AMOUNT,
      };

      expect(getMaxAmountValueSuccess(MAX_AMOUNT)).toEqual(expected);
    });
  });

  describe('getMaxAmountValueError', (): void => {
    test('should handle SUCCESS action', (): void => {
      const expected = {
        type: TransactionsActions.GET_MAX_AMOUNT_VALUE_ERROR,
      };

      expect(getMaxAmountValueError()).toEqual(expected);
    });
  });

  describe('setCurrentPage', (): void => {
    test('should handle SUCCESS action', (): void => {
      const expected = {
        type: TransactionsActions.SET_CURRENT_PAGE,
        currentPage: 1,
      };

      expect(setCurrentPage(1)).toEqual(expected);
    });
  });
});
