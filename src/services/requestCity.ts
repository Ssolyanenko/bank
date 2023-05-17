import { SetStateAction } from 'react';

import { CITY_WORLD_URL } from 'constants/requestUrls';

export const requestCity = async (setCities: { (value: SetStateAction<string[]>): void }): Promise<void> => {
  const response = await fetch(CITY_WORLD_URL);

  if (response.ok) {
    const json = await response.json();
    const cityName: string[] = json.map(({ name }: { name: string }) => name);
    setCities([...cityName]);
  }
};
