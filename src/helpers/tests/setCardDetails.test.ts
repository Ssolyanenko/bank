import { CardTypes } from 'constants/cardTypes';
import { setCardName, setCardType } from 'helpers';

describe('setCardName', () => {
  test('should delete first word', () => {
    expect(setCardName('Debit Travel card')).toEqual('Travel card');
  });
});

describe('setCardType', () => {
  test('should return debit travel card', () => {
    expect(setCardType('Debit Travel card')).toEqual(CardTypes.DEBIT_TRAVEL);
  });

  test('should return Debit Smart card', () => {
    expect(setCardType('Debit Smart card')).toEqual(CardTypes.DEBIT_SMART);
  });

  test('should return credit billable card', () => {
    expect(setCardType('Credit Card Billable')).toEqual(CardTypes.BILLABLE);
  });

  test('should return credit billable premium card', () => {
    expect(setCardType('Credit Card Billable Premium')).toEqual(CardTypes.BILLABLE_PREMIUM);
  });
});
