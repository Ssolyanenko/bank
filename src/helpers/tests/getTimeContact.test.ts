import { MOCK_CONTACT } from 'constants/contacts';
import { getTimeContact } from 'helpers/getTimeWork';

describe('getTimeContact', () => {
  test('should return time work', () => {
    expect(getTimeContact(MOCK_CONTACT)).toStrictEqual(['Every day from 08:00 to 20:00']);
  });
});
