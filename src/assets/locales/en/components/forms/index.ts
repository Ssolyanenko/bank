import { translationsLogin } from './login';
import { translationsOrderDebitSmartCard } from './orderDebitSmartCard';
import { translationsOrderDebitTravelCard } from './orderDebitTravelCard';
import { translationsfilterHistoryForm } from './filterHistoryForm';

export const translationsForms = {
  ...translationsLogin,
  ...translationsOrderDebitSmartCard,
  ...translationsOrderDebitTravelCard,
  ...translationsfilterHistoryForm,
};
