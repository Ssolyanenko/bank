import { RateAbbreviation } from 'constants/rates';
import { getRateSign } from 'helpers/getRate';

describe('getRateSign', () => {
  test('should return sign USD', () => {
    expect(getRateSign(RateAbbreviation.USD)).toBe('$');
  });

  test('should return sign UER', () => {
    expect(getRateSign(RateAbbreviation.EUR)).toBe('€');
  });

  test('should return sign CHF', () => {
    expect(getRateSign(RateAbbreviation.CHF)).toBe('Fr');
  });

  test('should return sign GBP', () => {
    expect(getRateSign(RateAbbreviation.GBP)).toBe('£');
  });

  test('should return null', () => {
    expect(getRateSign('POl')).toBe(null);
  });
});
