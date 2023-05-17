import { CardTypes } from 'constants/cardTypes';
import { setLogoIconColor } from 'helpers/setLogoIconColor';
import colors from 'styles/variables.module.scss';

describe('setLogoIconColor', () => {
  test('should return color #FFD600', () => {
    expect(setLogoIconColor(CardTypes.DEBIT_SMART)).toBe(colors.orange);
  });

  test('should return color #FFFFFF', () => {
    expect(setLogoIconColor(CardTypes.BILLABLE)).toBe(colors.white_1);
  });
});
