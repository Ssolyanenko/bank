import converter from './converter.json';
import exchangeRates from './exchangeRates.json';
import rates from './rates.json';

export const translationsExchageRates = {
  ...converter,
  ...exchangeRates,
  ...rates,
};
