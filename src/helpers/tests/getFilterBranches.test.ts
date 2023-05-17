import { MOCK_BRANCHES } from 'constants/branch';
import { getFilterBranches } from 'helpers/getFilterBranches';

describe('getFilterBranches', () => {
  test('should return the filter array', () => {
    expect(getFilterBranches(MOCK_BRANCHES, 'War')).toStrictEqual([MOCK_BRANCHES[0]]);
    expect(getFilterBranches(MOCK_BRANCHES, 'Gunn')).toStrictEqual([MOCK_BRANCHES[1]]);
  });
});
