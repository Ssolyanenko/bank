import { CardTypes } from 'constants/cardTypes';
import colors from 'styles/variables.module.scss';

export const setLogoIconColor = (cardType: string): string => {
  switch (cardType) {
    case CardTypes.DEBIT_SMART:
      return colors.orange;
    default:
      return colors.white_1;
  }
};
