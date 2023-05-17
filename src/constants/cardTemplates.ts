import { CardTypes } from 'constants/cardTypes';
import { PaymentSystem } from 'constants/paymentSystem';
import { RoutingPaths } from 'constants/routingPaths';
import { CARD_BLOCK_TITLE, CARD_TITLE } from 'constants/titles';
import { CardProducts as CardProductsProps } from 'interfaces/cardTemplate';
import { UserCard } from 'interfaces/myCard';

export const DEBIT_CARDS: CardProductsProps[] = [
  {
    id: 1,
    cardProductName: 'Debit Smart card',
    cardDate: '08/27',
    amount: 10000000,
    paymentSystem: PaymentSystem.MASTER_CARD,
    cardType: CardTypes.DEBIT_SMART,
    cardNumber: '1928192837465919',
    productInfo:
      'Free transfers by phone number up to 5,000 GBP/Up to 30% cashback in dollars for purchases/Free card service',
    redirectPath: RoutingPaths.DEBIT_SMART_CARD,
    currency: 'GBP',
  },
  {
    id: 2,
    cardProductName: 'Debit Travel card',
    cardDate: '08/27',
    cardNumber: '1928192837465919',
    amount: 10000000,
    cardType: CardTypes.DEBIT_TRAVEL,
    paymentSystem: PaymentSystem.VISA,
    productInfo: 'Free air transportation/5 years miles retention period/Free card service',
    redirectPath: RoutingPaths.DEBIT_TRAVEL_CARD,
    currency: 'GBP',
  },
];

export const CARDS: CardProductsProps[] = [
  {
    id: 1,
    cardProductName: 'Debit card',
    cardDate: '08/29',
    cardNumber: '1928192837465919',
    cardType: CardTypes.DEBIT_SMART,
    paymentSystem: PaymentSystem.MASTER_CARD,
    redirectPath: RoutingPaths.DEBIT_CARDS,
    productInfo:
      'Life becomes easier when you have convenient and secure payment cards. Additional services and privileges will open up new opportunities for you. You just have to choose the most suitable type of card.',
  },
  {
    id: 2,
    cardProductName: 'Credit card',
    cardDate: '08/29',
    cardNumber: '1928192837465919',
    cardType: CardTypes.BILLABLE,
    paymentSystem: PaymentSystem.VISA,
    redirectPath: RoutingPaths.CREDIT_CARDS,
    productInfo:
      'Want to go shopping during promotions and sales? Or do you just need extra money? Credit cards of our bank can help to make dreams come true without postponing for the future. Revolving credit line, online shopping, convenient reissue.',
  },
];

export const CARD_FORM_OREDER_INFO = {
  firstName: { title: 'First Name', name: 'firstName', placeholder: 'Aliaksandra' },
  lastName: { title: 'Last Name', name: 'lastName', placeholder: 'Ivanova' },
  email: { title: 'Email', name: 'email', placeholder: 'aliaksaIvanova@gmail.com' },
  phone: { title: 'Phone', name: 'phoneNumber', placeholder: '+44 123456789' },
  delivery: {
    placeholder: 'Delivery',
    title: 'Delivery Method *',
    options: [
      { id: 1, value: 'byMail', title: 'Parcel by Mail' },
      { id: 2, value: 'byCourier', title: 'Express delivery by courier' },
      { id: 3, value: 'atBank', title: 'Pick up at the bank' },
    ],
  },
};

export const CREDIT_CARDS_BILLABLE = [
  {
    id: 1,
    cardTitle: CARD_BLOCK_TITLE.creditCard,
    cardProductName: CARD_TITLE.creditCard,
    cardDate: '08/29',
    amount: 1000000,
    cardNumber: '1928192837465919',
    cardType: CardTypes.BILLABLE,
    paymentSystem: PaymentSystem.VISA,
    redirectPath: RoutingPaths.CREDIT_CARD_BILLABLE,
    productInfo:
      '2% of Cashback for the 3 categories that You select/1% of Cashback for all remaining categories/Free card service',
    currency: 'GBP',
  },
  {
    id: 2,
    cardTitle: CARD_BLOCK_TITLE.creditCardPremium,
    cardProductName: CARD_TITLE.creditCardPremium,
    cardDate: '03/25',
    amount: 1231239,
    cardNumber: '1928192837465919',
    cardType: CardTypes.BILLABLE_PREMIUM,
    paymentSystem: PaymentSystem.VISA,
    redirectPath: RoutingPaths.CREDIT_CARD_BILLABLE_PREMIUM,
    productInfo:
      '3% of Cashback for all the categories for the first £5000 in online purchases in the first 90 days of the opening account/Free card service',
  },
];

export const MY_CREDIT_CARDS: UserCard[] = [
  {
    id: 1,
    cardProductName: 'Smart Debit card',
    cardNumber: '1928192837465919',
    cardExpirationDate: '08/29',
    cvv: '111',
    amount: 1000000,
    formattedAmount: '100,000.00 GBP',
    cardType: CardTypes.DEBIT_SMART,
    transactionLimit: 5000,
    currency: 'GBP',
    paymentSystem: PaymentSystem.MASTER_CARD,
    isActive: true,
  },
  {
    id: 2,
    cardProductName: 'Smart Debit card',
    cardNumber: '1928192837465915',
    cardExpirationDate: '08/29',
    cvv: '111',
    amount: 1000000,
    formattedAmount: '100,000.00 GBP',
    cardType: CardTypes.DEBIT_SMART,
    transactionLimit: 5000,
    currency: 'GBP',
    paymentSystem: PaymentSystem.MASTER_CARD,
    isActive: true,
  },
];
