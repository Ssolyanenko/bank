import { DOUBLE_LEFT, LEFT, RIGHT, DOUBLE_RIGHT } from 'constants/pagination';
import { DARK_GRAY, GRAY } from 'constants/colors';
import { getSwitchColor } from 'helpers';

describe('changePages', (): void => {
  test('should return correct value for active double left switch', (): void => {
    expect(getSwitchColor(DOUBLE_LEFT, 3, 10)).toBe(DARK_GRAY);
  });

  test('should return correct value for active left switch', (): void => {
    expect(getSwitchColor(LEFT, 3, 10)).toBe(DARK_GRAY);
  });

  test('should return correct value for active right switch', (): void => {
    expect(getSwitchColor(RIGHT, 3, 10)).toBe(DARK_GRAY);
  });

  test('should return correct value for active double right switch', (): void => {
    expect(getSwitchColor(DOUBLE_RIGHT, 3, 10)).toBe(DARK_GRAY);
  });

  test('should return correct value for inactive double left switch', (): void => {
    expect(getSwitchColor(DOUBLE_LEFT, 1, 10)).toBe(GRAY);
  });

  test('should return correct value for inactive left switch', (): void => {
    expect(getSwitchColor(LEFT, 0, 10)).toBe(GRAY);
  });

  test('should return correct value for inactive right switch', (): void => {
    expect(getSwitchColor(RIGHT, 10, 10)).toBe(GRAY);
  });

  test('should return correct value for inactive double right switch', (): void => {
    expect(getSwitchColor(DOUBLE_RIGHT, 9, 10)).toBe(GRAY);
  });
});
