import { ENUMERATION_CATEGORIES } from 'constants/formInputs';

export const getCategoryIdsFromNames = (categories: string[]): number[] =>
  ENUMERATION_CATEGORIES.filter(({ text }) => categories.includes(text)).map(({ id }) => id);
