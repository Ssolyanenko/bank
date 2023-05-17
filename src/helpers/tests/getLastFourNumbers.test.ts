import { getLastFourNumbers } from 'helpers';

describe('getLastFourNumbers', () => {
  test('should return 1111', () => {
    expect(getLastFourNumbers('1234984765381111')).toBe('1111');
  });
});
