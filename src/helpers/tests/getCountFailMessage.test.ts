import { getCountFailMessage } from 'helpers';

describe('getCountFailMessage', (): void => {
  const PASSWORD_FAIL_FIRST_TEXT = 'Password Fail First Text';
  const PASSWORD_FAIL_SECOND_TEXT = 'Password Fail Second Text';
  const PASSWORD_FAIL_THIRD_TEXT = 'Password Fail Third Text';
  const failsText = [PASSWORD_FAIL_FIRST_TEXT, PASSWORD_FAIL_SECOND_TEXT, PASSWORD_FAIL_THIRD_TEXT];

  test('should return the first fail text when the failsCount is 1', (): void => {
    const { text, index } = getCountFailMessage(1, failsText);

    expect(text).toBe(PASSWORD_FAIL_FIRST_TEXT);
    expect(index).toBe(0);
  });

  test('should return the second fail text when the failsCount is 2', (): void => {
    const { text, index } = getCountFailMessage(2, failsText);

    expect(text).toBe(PASSWORD_FAIL_SECOND_TEXT);
    expect(index).toBe(1);
  });

  test('should return the third fail text when the failsCount is 3', (): void => {
    const { text, index } = getCountFailMessage(3, failsText);

    expect(text).toBe(PASSWORD_FAIL_THIRD_TEXT);
    expect(index).toBe(-1);
  });

  test('should return the first fail text when the failsCount is 4', (): void => {
    const { text, index } = getCountFailMessage(4, failsText);

    expect(text).toBe(PASSWORD_FAIL_FIRST_TEXT);
    expect(index).toBe(0);
  });

  test('should return the second fail text when the failsCount is 5', (): void => {
    const { text, index } = getCountFailMessage(5, failsText);

    expect(text).toBe(PASSWORD_FAIL_SECOND_TEXT);
    expect(index).toBe(1);
  });

  test('should return the third fail text when the failsCount is 6', (): void => {
    const { text, index } = getCountFailMessage(6, failsText);

    expect(text).toBe(PASSWORD_FAIL_THIRD_TEXT);
    expect(index).toBe(-1);
  });

  test('should return the first fail text when the failsCount is 7', (): void => {
    const { text, index } = getCountFailMessage(7, failsText);

    expect(text).toBe(PASSWORD_FAIL_FIRST_TEXT);
    expect(index).toBe(0);
  });
});
