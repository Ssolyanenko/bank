import { ACCESS_TOKEN } from 'constants/user';

export const requestLogout = async (url: string): Promise<any> => {
  const authToken: string | null = sessionStorage.getItem(ACCESS_TOKEN);

  const res = await fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`,
    },
  });
  const data = await res.json();
  sessionStorage.removeItem(ACCESS_TOKEN);

  if (!res.ok) {
    throw new Error(data.error.message || `${data.message}`);
  }

  return data;
};
