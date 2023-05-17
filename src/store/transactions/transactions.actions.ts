import { SetStateAction } from 'react';

import { GetRequest } from 'services/getRequest';
import {
  MaxAmountValueError,
  MaxAmountValueSuccess,
  SetCurrentPage,
  TransactionsFilters,
  TransactionsInfo,
  TransactionsInfoError,
  TransactionsInfoSuccess,
  TransactionsMaxAmount,
} from 'interfaces/Transactions';
import { TRANSACTIONS, TRANSACTIONS_MAX_AMOUNT } from 'constants/requestUrls';
import {
  DEFAULT_RANGE,
  DEFAULT_RANGE_FORMATTED,
  ENTRIES_PER_PAGE,
  MIN_AMOUNT,
  MIN_AMOUNT_FORMATTED,
} from 'constants/transactionsHistory';
import { ActionType } from 'interfaces/action';
import { TransactionsActions } from 'constants/transactions';

export const getTransactionsInfoSuccess = (transactionsInfo: TransactionsInfo): TransactionsInfoSuccess => ({
  type: TransactionsActions.GET_TRANSACTIONS_INFO_SUCCESS,
  transactionsInfo,
});

export const getTransactionsInfoError = (): TransactionsInfoError => ({
  type: TransactionsActions.GET_TRANSACTIONS_INFO_ERROR,
});

export const getMaxAmountValueSuccess = (maxAmount: TransactionsMaxAmount): MaxAmountValueSuccess => ({
  type: TransactionsActions.GET_MAX_AMOUNT_VALUE_SUCCESS,
  maxAmount,
});

export const getMaxAmountValueError = (): MaxAmountValueError => ({
  type: TransactionsActions.GET_MAX_AMOUNT_VALUE_ERROR,
});

export const setCurrentPage = (currentPage: number): SetCurrentPage => ({
  type: TransactionsActions.SET_CURRENT_PAGE,
  currentPage,
});

export const requestTransactions =
  (
    userCardId: number,
    previousPage: number,
    { titleFilter, startDate, endDate, minAmount, maxAmount, operationType }: TransactionsFilters,
    setIsLoading: { (value: SetStateAction<boolean>): void }
  ): ActionType =>
  async (dispatch) => {
    try {
      const transactionsInfo: TransactionsInfo = await GetRequest(
        `${TRANSACTIONS}?userCardId=${userCardId}&pageNumber=${previousPage}&entriesPerPage=${ENTRIES_PER_PAGE}&titleFilter=${titleFilter}&startDate=${startDate}&endDate=${endDate}&minAmount=${minAmount}&maxAmount=${maxAmount}&operationType=${operationType}`
      );
      dispatch(getTransactionsInfoSuccess(transactionsInfo));
    } catch (error) {
      dispatch(getTransactionsInfoError());
    }

    setIsLoading(false);
  };

export const requestMaxAmount =
  (
    userCardId: number,
    setAmountValue: { (value: SetStateAction<number[]>): void },
    setAmountValueFormatted: { (value: SetStateAction<string[]>): void }
  ): ActionType =>
  async (dispatch) => {
    try {
      const { amount, formattedAmount }: TransactionsMaxAmount = await GetRequest(
        `${TRANSACTIONS_MAX_AMOUNT}?userCardId=${userCardId}`
      );
      dispatch(getMaxAmountValueSuccess({ amount, formattedAmount }));
      setAmountValue([MIN_AMOUNT, amount]);
      setAmountValueFormatted([MIN_AMOUNT_FORMATTED, formattedAmount]);
    } catch (error) {
      dispatch(getMaxAmountValueError());
      setAmountValue(DEFAULT_RANGE);
      setAmountValueFormatted(DEFAULT_RANGE_FORMATTED);
    }
  };
