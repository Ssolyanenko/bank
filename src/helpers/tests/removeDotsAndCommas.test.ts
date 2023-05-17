import { removeDotsAndCommas } from 'helpers';

describe('removeDotsAndCommas', (): void => {
  test('removes dots and commas from a string with dots and commas', (): void => {
    const input = '1,234.56';
    const expectedOutput = '123456';
    const actualOutput = removeDotsAndCommas(input);
    expect(actualOutput).toBe(expectedOutput);
  });

  test('returns an empty string when given an empty string', (): void => {
    const input = '';
    const expectedOutput = '';
    const actualOutput = removeDotsAndCommas(input);
    expect(actualOutput).toBe(expectedOutput);
  });

  test('does not modify a string without dots or commas', (): void => {
    const input = 'Hello, world!';
    const expectedOutput = 'Hello world!';
    const actualOutput = removeDotsAndCommas(input);
    expect(actualOutput).toBe(expectedOutput);
  });

  test('removes multiple dots and commas from a string with dots and commas', (): void => {
    const input = '1,234.56,78';
    const expectedOutput = '12345678';
    const actualOutput = removeDotsAndCommas(input);
    expect(actualOutput).toBe(expectedOutput);
  });

  test('removes only dots and commas from a string with other characters', (): void => {
    const input = '1,234.56.78a,b.c';
    const expectedOutput = '12345678abc';
    const actualOutput = removeDotsAndCommas(input);
    expect(actualOutput).toBe(expectedOutput);
  });
});
