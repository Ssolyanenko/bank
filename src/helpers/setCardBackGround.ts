import { CardTypes } from 'constants/cardTypes';

export const setCardBackground = (type?: string): string => {
  switch (type) {
    case 'Debit Travel card':
      return CardTypes.DEBIT_TRAVEL;
    case 'Credit Card Billable':
    case 'Credit card':
      return CardTypes.BILLABLE;
    case 'Credit Card Billable Premium':
      return CardTypes.BILLABLE_PREMIUM;
    default:
      return CardTypes.DEBIT_SMART;
  }
};
