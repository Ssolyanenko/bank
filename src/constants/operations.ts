export const OPERATION_INITIAL = [
  {
    id: 1,
    date: 'April 26',
    time: '18:05',
    description: 'Transfer to card',
    subDescrition: '*7082 Cameron Williamson',
    amount: '-37.85',
    type: 'moneyTransferCard',
  },
  {
    id: 2,
    date: 'April 24',
    time: '19:16',
    description: 'Transfer to card',
    subDescrition: '*8601 Savannah Nguyen',
    amount: '-32.26',
    type: 'moneyTransferCard',
  },
  {
    id: 3,
    date: 'April 26',
    time: '18:05',
    description: 'Transfer to card',
    subDescrition: '*7082 Cameron Williamson',
    amount: '-37.85',
    type: 'moneyTransferPhone',
  },
];

export enum Operations {
  MONEY_TRANSFER_CARD = 'moneyTransferCard',
  MONEY_TRANSFER_PHONE = 'moneyTransferPhone',
}
