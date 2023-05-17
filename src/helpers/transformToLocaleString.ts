import { AMOUNT_FORMAT } from 'constants/transactionsHistory';

export const transformToLocaleString = (value: number): string =>
  value?.toLocaleString(AMOUNT_FORMAT.EN_GB, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
