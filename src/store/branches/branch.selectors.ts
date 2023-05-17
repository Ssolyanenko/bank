import { createSelector } from 'reselect';
import { Store } from 'store';

export const getBranchData = (state: Store) => state.branchData;

export const getBranch = createSelector([getBranchData], (branchData) => branchData.branches);
