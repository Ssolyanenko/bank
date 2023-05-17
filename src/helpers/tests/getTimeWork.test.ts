import { mockBranch } from 'constants/branch';
import { getTimeWork } from 'helpers/getTimeWork';

describe('getTimeWork', () => {
  test('should return time work', () => {
    expect(getTimeWork(mockBranch, 'MONDAY')).toBe('24/7');
  });
});
