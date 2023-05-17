import { isOptionEqualToValue } from 'helpers';

describe('isOptionEqualToValue', () => {
  test('should return true', () => {
    expect(isOptionEqualToValue('test', 'test')).toBeTruthy();
  });

  test('should return false', () => {
    expect(isOptionEqualToValue('test', 'test1')).toBeFalsy();
  });
});
