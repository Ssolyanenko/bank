import { logTime } from 'helpers/logTime';

describe('logTime', () => {
  test('should return time', () => {
    expect(logTime({ minutes: 20, sec: 25 })).toBe('20:25');
    expect(logTime({ minutes: 13, sec: 5 })).toBe('13:05');
  });
});
