import { DOUBLE_LEFT, LEFT, RIGHT, DOUBLE_RIGHT } from 'constants/pagination';
import { handleChangePages } from 'helpers/changePages';

describe('changePages', (): void => {
  test('should return correct value on double left click', (): void => {
    expect(handleChangePages(DOUBLE_LEFT, 3, 10)).toBe(1);
  });

  test('should return correct value on left click', (): void => {
    expect(handleChangePages(LEFT, 3, 10)).toBe(2);
  });

  test('should return correct value on right click', (): void => {
    expect(handleChangePages(RIGHT, 3, 10)).toBe(4);
  });

  test('should return correct value on double right click', (): void => {
    expect(handleChangePages(DOUBLE_RIGHT, 3, 10)).toBe(5);
  });
});
