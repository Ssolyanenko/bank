import { CardTypes } from 'constants/cardTypes';

export const setCardInfoTitle = (cardType: string): string => {
  switch (cardType) {
    case CardTypes.DEBIT_SMART:
      return 'Smart Debit card ';
    case CardTypes.DEBIT_TRAVEL:
      return 'Debit Travel card';
    case CardTypes.BILLABLE:
      return 'Credit Card Billable';
    case CardTypes.BILLABLE_PREMIUM:
      return 'Credit Card Billable Premium';
    default:
      return 'Credit Card';
  }
};
