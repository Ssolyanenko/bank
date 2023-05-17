import { convertCommaInNums } from 'helpers';

describe('convertCommaInNums', (): void => {
  test('converts a string with commas to a number', (): void => {
    expect(convertCommaInNums('1,234.56')).toBe(1234.56);
  });

  test('converts a string without commas to a number', (): void => {
    expect(convertCommaInNums('1234.56')).toBe(1234.56);
  });

  test('returns NaN for an invalid input', (): void => {
    expect(convertCommaInNums('1,234.56a')).toBe(1234.56);
  });

  test('handles negative numbers', (): void => {
    expect(convertCommaInNums('-1,234.56')).toBe(-1234.56);
  });

  test('handles decimal numbers with no integer part', (): void => {
    expect(convertCommaInNums(',0.56')).toBe(0.56);
  });
});
