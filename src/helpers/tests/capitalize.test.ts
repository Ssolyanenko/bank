import { capitalize } from 'helpers';

describe('capitalize', (): void => {
  test('should return correct value for uppercase value', (): void => {
    expect(capitalize('TRANSFER')).toBe('Transfer');
  });

  test('should return correct value for lowercase value', (): void => {
    expect(capitalize('transfer')).toBe('Transfer');
  });
});
