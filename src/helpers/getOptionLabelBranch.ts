import { Branch } from 'interfaces/branch';

export const getOptionLabelBranch = (option: Branch): string => `${option.address.trim()}, ${option.number}`;
