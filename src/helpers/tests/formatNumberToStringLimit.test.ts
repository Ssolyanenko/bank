import { formatNumberToStringLimit } from 'helpers';

describe('formatNumberToStringLimit', (): void => {
  test('should format number with decimal part', (): void => {
    expect(formatNumberToStringLimit(3000.2)).toBe('3,000.20');
  });

  test('should format number with decimal part and no thousand separators', (): void => {
    expect(formatNumberToStringLimit(100.2)).toBe('100.20');
  });

  test('should format number without decimal part', (): void => {
    expect(formatNumberToStringLimit(3000)).toBe('3,000.00');
  });

  test('should format large number with decimal part', (): void => {
    expect(formatNumberToStringLimit(123456789.12)).toBe('123,456,789.12');
  });

  test('should format large number without decimal part', (): void => {
    expect(formatNumberToStringLimit(123456789)).toBe('123,456,789.00');
  });
});
