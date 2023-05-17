import { Reducer } from 'redux';

import { BranchActions, mockBranch } from 'constants/branch';

export const defaultStateBranch = {
  branches: [mockBranch],
};

export const branchData: Reducer = (state = defaultStateBranch, action) => {
  switch (action.type) {
    case BranchActions.GET_BRANCH_SUCCESS:
      return { branches: action.payload };
    case BranchActions.SET_BRANCH_SUCCESS:
      return { branches: action.payload };
    default:
      return state;
  }
};
