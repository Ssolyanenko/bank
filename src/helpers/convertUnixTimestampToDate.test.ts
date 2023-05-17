import { convertUnixTimestampToDate } from './convertUnixTimestampToDate';

describe('convertUnixTimestampToDate', () => {
  test('should return  "09/22"', () => {
    expect(convertUnixTimestampToDate(1663707600000)).toBe('09/22');
  });
});
