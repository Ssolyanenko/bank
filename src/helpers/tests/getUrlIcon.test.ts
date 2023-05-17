import { BranchType } from 'constants/branchType';
import { getUrlIcon } from 'helpers/getIcon';

describe('getUrlIcon', () => {
  test('should return url for banck branch', () => {
    expect(getUrlIcon(BranchType.BANK_BRANCH)).toBe('svg/BankBranch.svg');
  });

  test('should return url for terminal', () => {
    expect(getUrlIcon(BranchType.TERMINAL)).toBe('svg/Terminal.svg');
  });

  test('should return url for ATM', () => {
    expect(getUrlIcon(BranchType.ATM)).toBe('svg/ATM.svg');
  });

  test('should return empty string', () => {
    expect(getUrlIcon('Hello')).toBe('');
  });
});
