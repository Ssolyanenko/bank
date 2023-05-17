import { createSelector } from 'reselect';

import { Store } from 'store';
import { EntriesInfo, Transaction, TransactionsData, TransactionsMaxAmount } from 'interfaces/Transactions';

export const getTransactionsData = (state: Store): TransactionsData => state.transactionsData;

export const getTransactions = createSelector(
  [getTransactionsData],
  ({ transactionsInfo: { transactions } }): Transaction[] => transactions
);

export const getEntriesInfo = createSelector(
  [getTransactionsData],
  ({ transactionsInfo: { entriesOnPage, totalEntries, currentPage, totalPages } }): EntriesInfo => ({
    entriesOnPage,
    totalEntries,
    currentPage,
    totalPages,
  })
);

export const getMaxAmount = createSelector([getTransactionsData], ({ maxAmount }): TransactionsMaxAmount => maxAmount);
