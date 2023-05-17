import { TransactionsActions } from 'constants/transactions';
import { initialStateTransactionsData, transactionsData } from 'store/transactions/transactions.reducer';
import { DEFAULT_TRANSACTIONS_INFO_VALUES } from 'constants/transactionsHistory';

describe('transactions.reducer', (): void => {
  test('should handle GET TRANSACTIONS INFO SUCCESS action', (): void => {
    expect(
      transactionsData(initialStateTransactionsData, {
        type: TransactionsActions.GET_TRANSACTIONS_INFO_SUCCESS,
        transactionsInfo: DEFAULT_TRANSACTIONS_INFO_VALUES,
      })
    ).toEqual({
      ...initialStateTransactionsData,
      transactionsInfo: DEFAULT_TRANSACTIONS_INFO_VALUES,
    });
  });

  test('should handle GET TRANSACTIONS INFO ERROR action', (): void => {
    expect(
      transactionsData(initialStateTransactionsData, { type: TransactionsActions.GET_TRANSACTIONS_INFO_ERROR })
    ).toEqual({
      ...initialStateTransactionsData,
    });
  });

  test('should handle GET MAX AMOUNT VALUE SUCCESS action', (): void => {
    expect(
      transactionsData(initialStateTransactionsData, {
        type: TransactionsActions.GET_MAX_AMOUNT_VALUE_SUCCESS,
        maxAmount: {
          amount: 500,
          formattedAmount: '500.00',
        },
      })
    ).toEqual({
      ...initialStateTransactionsData,
      maxAmount: {
        amount: 500,
        formattedAmount: '500.00',
      },
    });
  });

  test('should handle GET MAX AMOUNT VALUE ERROR action', (): void => {
    expect(
      transactionsData(initialStateTransactionsData, { type: TransactionsActions.GET_MAX_AMOUNT_VALUE_ERROR })
    ).toEqual({
      ...initialStateTransactionsData,
    });
  });
});
