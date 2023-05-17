import { RateAbbreviation } from 'constants/rates';
import { getRateText } from 'helpers/getRate';

describe('getRateText', () => {
  test('should return text US Dollar', () => {
    expect(getRateText(RateAbbreviation.USD)).toBe('US Dollar');
  });

  test('should return text Euro', () => {
    expect(getRateText(RateAbbreviation.EUR)).toBe('Euro');
  });

  test('should return text Swiss franc', () => {
    expect(getRateText(RateAbbreviation.CHF)).toBe('Swiss franc');
  });

  test('should return text Euro to Dollar', () => {
    expect(getRateText(RateAbbreviation.EUR_USD)).toBe('Euro to Dollar');
  });

  test('should return text British pound', () => {
    expect(getRateText(RateAbbreviation.GBP)).toBe('British pound');
  });

  test('should return null', () => {
    expect(getRateText('POL')).toBe(null);
  });
});
