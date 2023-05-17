export const convertUnixTimestampToDate = (cardDate: number): string => {
  const date = new Date(cardDate);
  const month = `0${date.getMonth() + 1}`;
  const year = `${date.getFullYear()}`;

  return `${month.slice(-2)}/${year.slice(-2)}`;
};
