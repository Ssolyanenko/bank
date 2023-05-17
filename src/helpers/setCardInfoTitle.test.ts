import { setCardInfoTitle } from './setCardInfoTitle';

describe('setCardInfoTitle', () => {
  test('should return - Smart Debit card', () => {
    expect(setCardInfoTitle('debitSmart')).toBe('Smart Debit card ');
  });

  test('should return - Debit Travel card', () => {
    expect(setCardInfoTitle('debitTravel')).toBe('Debit Travel card');
  });

  test('should return - Credit Card Billable', () => {
    expect(setCardInfoTitle('billable')).toBe('Credit Card Billable');
  });

  test('should return - Credit Card Billable Premium', () => {
    expect(setCardInfoTitle('billablePremium')).toBe('Credit Card Billable Premium');
  });

  test('should return - Credit Card', () => {
    expect(setCardInfoTitle(' ')).toBe('Credit Card');
  });
});
