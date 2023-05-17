import * as PostRequestService from 'services/postRequest';
import { mockStore } from 'helpers';
import { mockInitialState } from 'constants/mockInitialState';
import { RateAbbreviation } from 'constants/rates';
import { ExchangeRatesActions } from 'constants/user';
import { EXCHANGE_RATE_URL } from 'constants/requestUrls';
import { postRateError, requestRate } from 'store';

describe('exchageRates.actions', (): void => {
  describe('requestRate', (): void => {
    test('should handle SUCCESS action', (): void => {
      jest.spyOn(PostRequestService, 'PostRequest').mockResolvedValue({ status: 200 });

      const store = mockStore(mockInitialState);
      const expected = [
        {
          type: ExchangeRatesActions.GET_RATES,
        },
      ];

      const payload = {
        body: {
          baseCodes: [RateAbbreviation.USD, RateAbbreviation.EUR, RateAbbreviation.CHF],
          termCode: RateAbbreviation.GBP,
        },
        typeAction: ExchangeRatesActions.GET_RATES,
        url: EXCHANGE_RATE_URL,
        actionError: postRateError,
        setRates: jest.fn(),
      };

      return store.dispatch(requestRate(payload)).then(() => {
        expect(store.getActions()).toEqual(expected);
      });
    });

    test('should call a callback when SUCCESS', (): void => {
      jest.spyOn(PostRequestService, 'PostRequest').mockResolvedValue({ status: 200 });

      const store = mockStore(mockInitialState);

      const payload = {
        body: {
          baseCodes: [RateAbbreviation.USD, RateAbbreviation.EUR, RateAbbreviation.CHF],
          termCode: RateAbbreviation.GBP,
        },
        typeAction: ExchangeRatesActions.GET_RATES,
        url: EXCHANGE_RATE_URL,
        actionError: postRateError,
        setRates: jest.fn(),
      };

      return store.dispatch(requestRate(payload)).then(() => {
        expect(payload.setRates).toBeCalledTimes(1);
      });
    });

    test('should handle ERROR action', (): void => {
      jest
        .spyOn(PostRequestService, 'PostRequest')
        .mockRejectedValue(new Error(JSON.stringify({ message: 'Async error' })));

      const store = mockStore(mockInitialState);
      const expected = [
        { type: ExchangeRatesActions.GET_RATES },
        {
          type: ExchangeRatesActions.GET_RATES_ERROR,
          payload: { error: 'Async error' },
        },
      ];

      const payload = {
        body: {
          baseCodes: [RateAbbreviation.USD, RateAbbreviation.EUR, RateAbbreviation.CHF],
          termCode: RateAbbreviation.GBP,
        },
        typeAction: ExchangeRatesActions.GET_RATES,
        url: EXCHANGE_RATE_URL,
        actionError: postRateError,
        setRates: jest.fn(),
      };

      return store.dispatch(requestRate(payload)).then(() => {
        expect(store.getActions()).toEqual(expected);
      });
    });

    test('should not call a callback when ERROR', (): void => {
      jest
        .spyOn(PostRequestService, 'PostRequest')
        .mockRejectedValue(new Error(JSON.stringify({ message: 'Async error' })));

      const store = mockStore(mockInitialState);

      const payload = {
        body: {
          baseCodes: [RateAbbreviation.USD, RateAbbreviation.EUR, RateAbbreviation.CHF],
          termCode: RateAbbreviation.GBP,
        },
        typeAction: ExchangeRatesActions.GET_RATES,
        url: EXCHANGE_RATE_URL,
        actionError: postRateError,
        setRates: jest.fn(),
      };

      return store.dispatch(requestRate(payload)).then(() => {
        expect(payload.setRates).not.toBeCalled();
      });
    });

    test('should check status 400', (): void => {
      jest.spyOn(PostRequestService, 'PostRequest').mockResolvedValue({ status: 400 });

      const store = mockStore(mockInitialState);
      const expected = [
        {
          type: ExchangeRatesActions.GET_RATES,
        },
      ];

      const payload = {
        body: {
          baseCodes: [RateAbbreviation.USD, RateAbbreviation.EUR, RateAbbreviation.CHF],
          termCode: RateAbbreviation.GBP,
        },
        typeAction: ExchangeRatesActions.GET_RATES,
        url: EXCHANGE_RATE_URL,
        actionError: postRateError,
        setRates: jest.fn(),
      };

      return store.dispatch(requestRate(payload)).then(() => {
        expect(store.getActions()).toEqual(expected);
      });
    });

    test('should not call a callback when status 400', (): void => {
      jest.spyOn(PostRequestService, 'PostRequest').mockResolvedValue({ status: 400 });

      const store = mockStore(mockInitialState);

      const payload = {
        body: {
          baseCodes: [RateAbbreviation.USD, RateAbbreviation.EUR, RateAbbreviation.CHF],
          termCode: RateAbbreviation.GBP,
        },
        typeAction: ExchangeRatesActions.GET_RATES,
        url: EXCHANGE_RATE_URL,
        actionError: postRateError,
        setRates: jest.fn(),
      };

      return store.dispatch(requestRate(payload)).then(() => {
        expect(payload.setRates).not.toBeCalled();
      });
    });
  });
});
