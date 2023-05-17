import { RatesInterface } from 'interfaces/rates';

export enum RateAbbreviation {
  EUR = 'EUR',
  USD = 'USD',
  GBP = 'GBP',
  CHF = 'CHF',
  EUR_USD = 'EUR/USD',
}

export const RATES_ARRAY = ['USD', 'EUR', 'GBP', 'CHF'];

export const CURRENCY_RATE: RatesInterface = {
  commercialRate: {
    USD: {
      Buy: 0.8017363126330045,
      Sell: 0.8344602437608822,
    },
  },
};

export const INITIAL_RATES: RatesInterface = {
  commercialRate: {
    EUR: {
      Buy: 0.828835,
      Sell: 0.862665,
    },
    USD: {
      Buy: 0.8017363126330045,
      Sell: 0.8344602437608822,
    },
  },
};

export const PRICE = 'Price';

export const AMOUNT = 'Amount';
