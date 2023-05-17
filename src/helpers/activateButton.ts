import { CardApplicationStatus } from 'constants/cardApplicationStatus';

export const activateButton = (status: string): boolean => status === CardApplicationStatus.COLLECTED;
