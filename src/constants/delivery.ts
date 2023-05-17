export const DELIVERY_TYPES = {
  email: 'PARCEL_BY_EMAIL',
  courier: 'EXPRESS_DELIVERY_BY_COURIER',
  bank: 'PICK_UP_AT_THE_BANK',
};

export const DELIVERY_STATUSES: { [field: string]: string } = {
  underConsideration: 'UNDER_CONSIDERATION',
  expressDeliveryByCourier: 'EXPRESS_DELIVERY_BY_COURIER',
  approved: 'APPROVED',
  rejected: 'REJECTED',
  readyToPickUp: 'READY_TO_PICK_UP',
  onTheWay: 'ON_THE_WAY',
  delivered: 'DELIVERED',
};
