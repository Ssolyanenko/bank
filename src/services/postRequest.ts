import { RequestBodyTypes } from 'interfaces/user';
import { ACCESS_TOKEN } from 'constants/user';

export const PostRequest = async (urlRequest: string, body: RequestBodyTypes | string): Promise<any> => {
  const authToken: string | null = sessionStorage.getItem(ACCESS_TOKEN);

  try {
    const res = await fetch(urlRequest, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...(authToken && { Authorization: `Bearer ${authToken}` }),
      },
      credentials: 'include',
      method: 'POST',
      referrer: 'origin',
      body: JSON.stringify(body),
    });
    const token: string = res.headers.get('Authorization') || '';
    const data = await res.json();

    if (!res.ok && res.status !== 308) {
      throw new Error(JSON.stringify(data));
    }

    if (!sessionStorage.getItem(ACCESS_TOKEN)) {
      sessionStorage.setItem(ACCESS_TOKEN, token);
    }

    return { ...data, status: res.status, res: res.ok };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};
