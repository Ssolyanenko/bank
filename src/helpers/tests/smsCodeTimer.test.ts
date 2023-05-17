import { smsCodeTimer } from 'helpers/smsCodeTimer';

describe('smsCodeTimer', () => {
  test('should return the correct time', () => {
    expect(smsCodeTimer({ minutes: 30, sec: 0 })).toStrictEqual({ minutes: 29, sec: 59 });
  });

  test('should return the correct seconds', () => {
    expect(smsCodeTimer({ minutes: 0, sec: 30 })).toStrictEqual({ minutes: 0, sec: 29 });
  });

  test('should return the correct minutes', () => {
    expect(smsCodeTimer({ minutes: 0, sec: 0 })).toStrictEqual({ minutes: 0, sec: 0 });
  });
});
