import { BranchActions, mockBranch } from 'constants/branch';
import { branchData, defaultStateBranch } from 'store/branches/branch.reducer';

describe('branch.reducer', () => {
  test('should handle SUCCESS GET BRANCH action', () => {
    expect(
      branchData(defaultStateBranch, {
        type: BranchActions.GET_BRANCH_SUCCESS,
        payload: [mockBranch],
      })
    ).toEqual({ branches: [mockBranch] });
  });

  test('should handle SUCCESS SET BRANCH action', () => {
    expect(
      branchData(defaultStateBranch, {
        type: BranchActions.SET_BRANCH_SUCCESS,
        payload: [mockBranch],
      })
    ).toEqual({ branches: [mockBranch] });
  });
});
