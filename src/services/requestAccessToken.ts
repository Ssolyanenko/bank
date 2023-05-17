import { ACCESS_TOKEN } from 'constants/user';

export const requestAccessToken = async (url: string): Promise<void> => {
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
    }
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};
