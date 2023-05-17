import { getValueWithoutSpaces } from 'helpers';

describe('getValueWithoutSpaces', () => {
  test('should return value without spaces', () => {
    expect(getValueWithoutSpaces('my cards')).toBe('mycards');
  });
});
