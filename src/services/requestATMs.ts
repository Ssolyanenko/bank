export const requestATM = async (url: string, city: string): Promise<void> => {
  try {
    const res = await fetch(`${url}${city}`);

    if (res.ok) {
      const data = await res.json();

      return data;
    }
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};
