import { removeSpacesFromString } from 'helpers';

describe('removeSpacesString', (): void => {
  test('should remove spaces from a string with spaces', (): void => {
    const input = 'remove spaces from string';
    const expectedOutput = 'removespacesfromstring';

    expect(removeSpacesFromString(input)).toEqual(expectedOutput);
  });

  test('should not modify a string with no spaces', (): void => {
    const input = 'no_spaces_here';
    const expectedOutput = 'no_spaces_here';

    expect(removeSpacesFromString(input)).toEqual(expectedOutput);
  });

  test('should return an empty string when given an empty string', (): void => {
    const input = '';
    const expectedOutput = '';

    expect(removeSpacesFromString(input)).toEqual(expectedOutput);
  });
});
