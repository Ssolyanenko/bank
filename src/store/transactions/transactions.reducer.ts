import { Reducer } from 'redux';

import { TransactionsData } from 'interfaces/Transactions';
import { TransactionsActions } from 'constants/transactions';
import { DEFAULT_TRANSACTIONS_INFO_VALUES, MAX_AMOUNT } from 'constants/transactionsHistory';

export const initialStateTransactionsData: TransactionsData = {
  maxAmount: MAX_AMOUNT,
  transactionsInfo: DEFAULT_TRANSACTIONS_INFO_VALUES,
};

export const transactionsData: Reducer<TransactionsData> = (state = initialStateTransactionsData, action) => {
  switch (action.type) {
    case TransactionsActions.GET_TRANSACTIONS_INFO_SUCCESS:
      return { ...state, transactionsInfo: action.transactionsInfo };
    case TransactionsActions.GET_TRANSACTIONS_INFO_ERROR:
      return { ...state, transactionsInfo: DEFAULT_TRANSACTIONS_INFO_VALUES };
    case TransactionsActions.GET_MAX_AMOUNT_VALUE_SUCCESS:
      return { ...state, maxAmount: action.maxAmount };
    case TransactionsActions.SET_CURRENT_PAGE:
      return { ...state, transactionsInfo: { ...state.transactionsInfo, currentPage: action.currentPage } };
    default:
      return state;
  }
};
