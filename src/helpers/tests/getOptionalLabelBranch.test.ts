import { MOCK_BRANCHES } from 'constants/branch';
import { getOptionLabelBranch } from 'helpers';

describe('renderOption', () => {
  test('should return string', () => {
    const branch = MOCK_BRANCHES[0];
    expect(getOptionLabelBranch(branch)).toContain(`${branch.address}, ${branch.number}`);
  });
});
