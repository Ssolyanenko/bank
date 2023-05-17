import { transformToLocaleString } from 'helpers/transformToLocaleString';

describe('transformToLocaleString', (): void => {
  test('should transform to locale string', (): void => {
    expect(transformToLocaleString(123123123)).toBe('123,123,123.00');
  });

  test('should transform to locale string with two decimals', (): void => {
    expect(transformToLocaleString(123.123123)).toBe('123.12');
  });
});
