import { REFRESH_TOKEN_URL } from 'constants/requestUrls';
import { ACCESS_TOKEN } from 'constants/user';
import { requestAccessToken } from './requestAccessToken';
import { sendIntervalRequest } from './sendIntervalRequest';

export const requestAccessTokenInterval = async (url: string = REFRESH_TOKEN_URL): Promise<unknown> => {
  const authToken: string | null = sessionStorage.getItem(ACCESS_TOKEN);

  try {
    const res = await fetch(url, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...(authToken && { Authorization: `Bearer ${authToken}` }),
      },
      credentials: 'include',
      method: 'GET',
    });

    if (res.ok) {
      const token: string = res.headers.get('Authorization') || '';
      sessionStorage.setItem(ACCESS_TOKEN, token);
      sessionStorage.setItem('refreshTokenLastModifiedDate', Date.now().toString());

      return;
    }

    sendIntervalRequest(requestAccessToken, REFRESH_TOKEN_URL, 5000, 11000);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};
