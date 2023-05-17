import { TransactionsFilters, TransactionsInfo, TransactionsMaxAmount } from 'interfaces/Transactions';

export const ENTRIES_PER_PAGE = 10;
export const DATE_FORMAT = 'DD.MM.YYYY';
export const NUMBER_OF_DECIMALS = 2;
export const MIN_AMOUNT = 0;
export const MIN_AMOUNT_FORMATTED = '0.00';
export const MAX_AMOUNT_FORMATTED = '1,000,000.00';
export const MAX_AMOUNT: TransactionsMaxAmount = {
  amount: 1_000_000,
  formattedAmount: '1,000,000.00',
};
export const DEFAULT_RANGE = [0, 1_000_000];
export const DEFAULT_RANGE_FORMATTED = ['0', '1000000'];
export const POSITIVE = 1;
export const NEGATIVE = -1;
export const ENTER_KEY = 'Enter';

export const DEFAULT_FILTERS_VALUES: TransactionsFilters = {
  titleFilter: '',
  startDate: '',
  endDate: '',
  minAmount: '0.00',
  maxAmount: '1,000,000.00',
  operationType: '',
};

export const DEFAULT_TRANSACTIONS_INFO_VALUES: TransactionsInfo = {
  entriesOnPage: 0,
  totalEntries: 0,
  currentPage: 1,
  totalPages: 1,
  transactions: [],
};

export enum AMOUNT_TYPE {
  FROM = 'FROM',
  TO = 'TO',
}

export enum TRANSACTION_TYPE {
  INCOMING = 'Incoming',
  OUTGOING_TRANSFERS = 'Outgoing transfers',
  PAYMENTS = 'Payments',
}

export enum FILTER_TYPE {
  DATE = 'DATE',
  AMOUNT = 'AMOUNT',
  OPERATION_TYPE = 'OPERATION_TYPE',
}

export enum AMOUNT_FORMAT {
  EN_GB = 'en-GB',
}

export enum INPUT_NAMES {
  SEARCH = 'searchInput',
  AMOUNT_VALUE_FROM = 'amountValueFrom',
  AMOUNT_VALUE_TO = 'amountValueTo',
  AMOUNT_RANGE = 'amountRange',
  OPERATION_TYPE = 'operationType',
}
