import { getMinutesDifference } from 'helpers/getMinuteDifference';

describe('getMinutesDifference', (): void => {
  test('return the correct time from the future in minutes and seconds', (): void => {
    const currentTime = '2023-04-06T09:30:00.000Z';

    expect(getMinutesDifference('2023-04-06T09:35:30.000Z', currentTime)).toBe('05:30');
  });

  test('return the correct time from the past in minutes and seconds', (): void => {
    const currentTime = '2023-04-06T09:30:00.000Z';

    expect(getMinutesDifference('2023-04-06T08:00:00.000Z', currentTime)).toBe('90:00');
  });

  test('throws an error if the date format is invalid', () => {
    const currentTime = '2023-04-06T09:30:00.000Z';

    expect(getMinutesDifference('invalid date format', currentTime)).toBe('NaN:NaN');
  });
});
