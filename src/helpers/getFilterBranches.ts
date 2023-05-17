import { Branch } from 'interfaces/branch';

export const getFilterBranches = (branchData: Branch[], name: string): Branch[] =>
  branchData.filter((branch: Branch) =>
    branch.address.split(' ').slice(1).join(' ').toLowerCase().startsWith(name.toLowerCase())
  );
