import { SetStateAction } from 'react';

import { ACCESS_TOKEN } from 'constants/user';
import { UserData } from 'interfaces/userData';

export const requestUser = async (
  url: string,
  setUserDatas: { (value: SetStateAction<UserData | undefined>): void }
): Promise<void> => {
  const authToken: string | null = sessionStorage.getItem(ACCESS_TOKEN);

  try {
    const res = await fetch(url, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...(authToken && { Authorization: `Bearer ${authToken}` }),
      },
      method: 'GET',
    });

    if (res.ok) {
      const data = await res.json();
      setUserDatas(data);
    }
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};
