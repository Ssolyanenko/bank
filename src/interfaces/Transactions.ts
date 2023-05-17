import { HistoryTypes } from 'constants/historyTypes';

export interface Transaction {
  id: number;
  transactionTime: string;
  transactionType: HistoryTypes;
  title: string;
  currency: string;
  amount: number;
  amountFormatted: string;
}

export interface EntriesInfo {
  entriesOnPage: number;
  totalEntries: number;
  currentPage: number;
  totalPages: number;
}

export interface TransactionsMaxAmount {
  amount: number;
  formattedAmount: string;
}

export interface TransactionsFilters {
  titleFilter: string;
  startDate: string;
  endDate: string;
  minAmount: string;
  maxAmount: string;
  operationType: string;
}

export interface TransactionsInfo {
  currentPage: number;
  totalPages: number;
  entriesOnPage: number;
  totalEntries: number;
  transactions: Transaction[];
}

export interface TransactionsData {
  maxAmount: TransactionsMaxAmount;
  transactionsInfo: TransactionsInfo;
}

export interface TransactionsInfoSuccess {
  type: string;
  transactionsInfo: TransactionsInfo;
}

export interface TransactionsInfoError {
  type: string;
}

export interface MaxAmountValueSuccess {
  type: string;
  maxAmount: TransactionsMaxAmount;
}

export interface MaxAmountValueError {
  type: string;
}

export interface SetCurrentPage {
  type: string;
  currentPage: number;
}
