import { mockBranch } from 'constants/branch';
import { getResultButton } from 'helpers/getResultButton';

describe('getResultButton', () => {
  test('should return true', () => {
    expect(getResultButton('Top up', mockBranch, 'MONDAY')).toBe(true);
    expect(getResultButton('24/7', mockBranch, 'MONDAY')).toBe(true);
    expect(getResultButton('Open now', mockBranch, 'MONDAY')).toBe(true);
    expect(getResultButton('Withdraw cash', mockBranch, 'MONDAY')).toBe(true);
    expect(getResultButton('Transfer', mockBranch, 'MONDAY')).toBe(true);
    expect(getResultButton('Top up without card', mockBranch, 'MONDAY')).toBe(true);
    expect(getResultButton('Payments', mockBranch, 'MONDAY')).toBe(true);
  });

  test('should return false', () => {
    expect(getResultButton('Currency exchange', mockBranch, 'MONDAY')).toBe(false);
    expect(getResultButton('Pandus', mockBranch, 'MONDAY')).toBe(false);
    expect(getResultButton('Insurance', mockBranch, 'MONDAY')).toBe(false);
    expect(getResultButton('Exotic currency exchange', mockBranch, 'MONDAY')).toBe(false);
    expect(getResultButton('Consultation', mockBranch, 'MONDAY')).toBe(false);
  });

  test('should return empty string', () => {
    expect(getResultButton('Weekends', mockBranch, 'MONDAY')).toBe('');
  });
});
