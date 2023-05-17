import { CardTypes } from 'constants/cardTypes';
import { CardName } from 'interfaces/cardTemplate';

export const setCardType = (name: CardName): CardTypes | string => {
  switch (name) {
    case 'Debit Travel card':
      return CardTypes.DEBIT_TRAVEL;
    case 'Debit Smart card':
      return CardTypes.DEBIT_SMART;
    case 'Credit Card Billable':
      return CardTypes.BILLABLE;
    case 'Credit Card Billable Premium':
      return CardTypes.BILLABLE_PREMIUM;
    default:
      return '';
  }
};
