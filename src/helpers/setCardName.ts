export const setCardName = (cardProductName: string): string => {
  if (cardProductName.split(' ').length < 3) return cardProductName;

  return cardProductName.split(' ').slice(1).join(' ');
};
