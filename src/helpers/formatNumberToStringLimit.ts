export const formatNumberToStringLimit = (limit: number): string => {
  const [integerPart, decimalPart = '00'] = limit.toFixed(2).split('.');
  const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return `${formattedIntegerPart}.${decimalPart}`;
};
