import { setCardName } from 'helpers';

describe('setCardName', (): void => {
  test('should return Debit Card', (): void => {
    expect(setCardName('Debit Card')).toEqual('Debit Card');
  });

  test('should return Travel card', (): void => {
    expect(setCardName('Debit Travel card')).toEqual('Travel card');
  });
});
