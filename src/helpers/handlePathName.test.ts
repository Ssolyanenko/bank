import { handlePathName } from 'helpers/handlePathName';

describe('handlePathName', () => {
  test('should return "my-loans"', () => expect(handlePathName('My loans')).toBe('my-loans'));
});
