import { UserCard } from 'interfaces/myCard';

export const CARD_INFO = {
  deliveryType: '',
  deliveryStatus: '',
  cardProductId: 4,
  bankBranchId: '1',
  amount: '4444',
  incomePerMonth: '3000',
  maritalStatus: '',
  residenceCountry: '',
  residenceRegion: '',
  residenceCity: '',
  residenceAddress: '',
  placeOfWorkType: '',
  placeOfWorkName: '',
  placeOfWorkOccupation: '',
  unemployedType: '',
  causeOfUnemployment: '',
  isTermsAgreed: true,
  isAccuracyConfirmed: true,
  isWorkInformally: true,
};

export const CARDS: UserCard[] = [
  {
    isActive: true,
    isBlocked: false,
    id: 138,
    cardProductName: 'Credit Card Billable',
    cardNumber: '4000000000000029',
    amount: 100,
    paymentSystem: 'VISA',
    formattedAmount: '-1,168.65',
    transactionLimit: 5000,
    cvv: '123',
    currency: 'GBP',
    cardType: 'Debit',
    cardExpirationDate: '28/08',
  },
];

export const USER_CARD: UserCard = {
  cardExpirationDate: '1233',
  cardNumber: '5555',
  cardType: '4444',
  cvv: '123',
  formattedAmount: '3334.444',
  transactionLimit: 0,
  id: 0,
  isActive: false,
  paymentSystem: '',
  cardProductName: 'Debit card',
};
