export const requestPages = async (): Promise<[number, number]> => {
  const response = await fetch('pages');

  if (response.ok) {
    const json = await response.json();

    return json;
  }

  return [230, 23];
};
