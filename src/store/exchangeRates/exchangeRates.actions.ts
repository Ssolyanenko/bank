import { ExchangeRatesActions } from 'constants/user';
import { RequestRateMiddleware, ActionType } from 'interfaces/action';
import { RequestError } from 'interfaces/user';
import { PostRequest } from '../../services/postRequest';

export const postRateError = (error: string): RequestError => ({
  type: ExchangeRatesActions.GET_RATES_ERROR,
  payload: { error },
});

export const requestRate =
  ({ body, typeAction, url, actionError, setRates }: RequestRateMiddleware): ActionType =>
  async (dispatch) => {
    try {
      dispatch({ type: typeAction });
      const rates = await PostRequest(url, body);

      if (rates.status === 200) setRates(rates);
    } catch (error) {
      if (error instanceof Error) {
        const { message } = JSON.parse(error.message);
        dispatch(actionError(message));
      }
    }
  };
