import { mockBranch } from 'constants/branch';
import { getInfom } from 'helpers/getTimeWork';

describe('getInfom', () => {
  test('should return true', () => {
    expect(getInfom(mockBranch, 'MONDAY')).toBe(true);
  });

  test('should return false', () => {
    expect(getInfom(mockBranch, 'THUESDAY')).toBe(false);
  });
});
