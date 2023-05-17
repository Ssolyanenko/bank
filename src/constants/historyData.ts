import { Transaction } from 'interfaces/Transactions';
import { HistoryTypes } from './historyTypes';

export const HISTORY_DATA: Transaction[] = [
  {
    amount: 150.49,
    amountFormatted: '150.49',
    currency: 'GBP',
    id: 100,
    title: 'VISA USA PAYMENT',
    transactionTime: '2023-04-11T10:25:31',
    transactionType: HistoryTypes.TRANSFER,
  },
  {
    amount: 150.49,
    amountFormatted: '150.49',
    currency: 'GBP',
    id: 100,
    title: 'VISA USA PAYMENT',
    transactionTime: '2023-04-11T10:25:31',
    transactionType: HistoryTypes.TRANSFER,
  },
  {
    amount: 150.49,
    amountFormatted: '150.49',
    currency: 'GBP',
    id: 100,
    title: 'VISA USA PAYMENT',
    transactionTime: '2023-04-11T10:25:31',
    transactionType: HistoryTypes.TRANSFER,
  },
];

export const MOCK_HISTORY_DATA = [
  { date: '29.05.2022', time: '12:06', summary: '-5000.00', typeTransfer: HistoryTypes.TRANSFER, place: 'Market' },
  { date: '29.05.2022', time: '12:06', summary: '-5000.70', typeTransfer: HistoryTypes.TRANSFER, place: 'Market' },
];
