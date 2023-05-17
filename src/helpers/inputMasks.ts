export const cardLimitMask = (value: string): string =>
  value.replace(/[^0-9]/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const pinCodeMask = (value: string): string => value.slice(0, 4);
