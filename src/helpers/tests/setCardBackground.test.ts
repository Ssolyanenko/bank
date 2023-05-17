import { setCardBackground } from 'helpers';

describe('setCardBackground', (): void => {
  test('should return debitTravel', (): void => {
    expect(setCardBackground('Debit Travel card')).toEqual('debitTravel');
  });

  test('should return billable', (): void => {
    expect(setCardBackground('Credit Card Billable')).toEqual('billable');
  });

  test('should return billable', (): void => {
    expect(setCardBackground('Credit card')).toEqual('billable');
  });

  test('should return billablePremium', (): void => {
    expect(setCardBackground('Credit Card Billable Premium')).toEqual('billablePremium');
  });

  test('should return debitSmart', (): void => {
    expect(setCardBackground()).toEqual('debitSmart');
  });
});
