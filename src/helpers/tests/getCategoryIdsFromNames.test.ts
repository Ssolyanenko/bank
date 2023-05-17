import { ENUMERATION_CATEGORIES } from 'constants/formInputs';
import { getCategoryIdsFromNames } from 'helpers/getCategoryIdsFromNames';

describe('getCategoryIdsFromNames', (): void => {
  it('should return an empty array when input is an empty array', (): void => {
    const result = getCategoryIdsFromNames([]);
    expect(result).toEqual([]);
  });

  it('should return an array of ids when input has matching categories', (): void => {
    const result = getCategoryIdsFromNames(['Online shopping', 'Traveling']);
    expect(result).toEqual([1, 2]);
  });

  it('should return an array with nulls removed when input has some non-matching categories', (): void => {
    const result = getCategoryIdsFromNames(['Online shopping', 'Non-existing category']);
    expect(result).toEqual([1]);
  });

  it('should return an array with nulls removed when input has duplicates', (): void => {
    const result = getCategoryIdsFromNames(['Online shopping', 'Online shopping']);
    expect(result).toEqual([1]);
  });

  it('should return an array with all matching ids when input has duplicates', (): void => {
    const result = getCategoryIdsFromNames(['Online shopping', 'Online shopping', 'Grocery stores']);
    expect(result).toEqual([1, 4]);
  });

  it('should not modify the original categories array', (): void => {
    const categories = ENUMERATION_CATEGORIES.slice();
    const result = getCategoryIdsFromNames(['Online shopping', 'Traveling']);
    expect(categories).toEqual(ENUMERATION_CATEGORIES);
  });
});
