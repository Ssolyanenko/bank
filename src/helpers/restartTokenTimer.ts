import { DELAY_ACCESS_REQUEST } from 'constants/delayAccessRequest';
import { REFRESH_TOKEN_URL } from 'constants/requestUrls';
import { requestAccessTokenInterval } from 'services/requestAccessTokenInterval';
import { asyncTimeout } from './asyncTimeout';

export const restartTokenTimer = async (time: number): Promise<void> => {
  await asyncTimeout(time);
  await requestAccessTokenInterval(REFRESH_TOKEN_URL);
  setInterval(requestAccessTokenInterval, DELAY_ACCESS_REQUEST, REFRESH_TOKEN_URL);
};
