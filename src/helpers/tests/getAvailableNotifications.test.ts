import { getAvailableNotifications } from 'helpers';

describe('getAvailableNotifications', () => {
  const inputArray = ['one', 'two', 'three'];

  test('should remove value from array', () => {
    const expectedArray = ['one', 'three'];
    const testValue = 'two';

    expect(getAvailableNotifications(inputArray, testValue)).toStrictEqual(expectedArray);
  });

  test('should add value to array', () => {
    const expectedArray = ['one', 'two', 'three', 'four'];
    const testValue = 'four';

    expect(getAvailableNotifications(inputArray, testValue)).toStrictEqual(expectedArray);
  });
});
