import { DebitCardOrderInitialValues, DropDownElement } from 'interfaces/orderDebitForm';

export const DEBIT_CARD_ORDER_FORM_INITIAL_VALUES: DebitCardOrderInitialValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  deliveryType: '',
  deliveryCountry: 'Great Britain',
  bankBranchId: '',
  city: '',
  house: '',
  street: '',
  unit: '',
  apartment: '',
  postCode: '',
  deliveryAddress: '',
  isTermsAgreed: false,
  isAccuracyConfirmed: false,
};

export enum DebitCardOrderFieldNames {
  FIRST_NAME = 'firstName',
  LAST_NAME = 'lastName',
  EMAIL = 'email',
  PHONE = 'phone',
  DELIVERY_TYPE = 'deliveryType',
  BANK_BRANCH_ID = 'bankBranchId',
  DELIVERY_COUNTRY = 'deliveryCountry',
  CITY = 'city',
  HOUSE = 'house',
  STREET = 'street',
  UNIT = 'unit',
  APARTMENT = 'apartment',
  POST_CODE = 'postCode',
  DELIVERY_ADDRESS = 'deliveryAddress',
  IS_TERMS_AGREED = 'isTermsAgreed',
  IS_ACCURACY_CONFIRMED = 'isAccuracyConfirmed',
}

export const DELIVERY_METHODS: DropDownElement[] = [
  { id: 1, text: 'Parcel by mail' },
  { id: 2, text: 'Express delivery by courier' },
  { id: 3, text: 'Pick up at the bank' },
];

export enum DeliveryMethodNames {
  BY_MAIL = 'Parcel by mail',
  BY_COURIER = 'Express delivery by courier',
  AT_THE_BANK = 'Pick up at the bank',
}

export const DeliveryTypes: { [field: string]: string } = {
  'Parcel by mail': 'PARCEL_BY_MAIL',
  'Express delivery by courier': 'EXPRESS_DELIVERY_BY_COURIER',
  'Pick up at the bank': 'PICK_UP_AT_THE_BANK',
};

export enum DebitCardOrderFieldLabels {
  FIRST_NAME_LABEL = 'First Name',
  LAST_NAME_LABEL = 'Last Name',
  EMAIL_LABEL = 'Email',
  PHONE_LABEL = 'Phone',
  DELIVERY_TYPE_LABEL = 'Delivery method *',
  BANK_BRANCH_ID_LABEL = 'Bank Branch *',
  DELIVERY_COUNTRY_LABEL = 'Country',
  CITY_LABEL = 'Town/City *',
  HOUSE_LABEL = 'House Number',
  STREET_LABEL = 'Street Name',
  UNIT_LABEL = 'Unit',
  APARTMENT_LABEL = 'Apartment',
  POST_CODE_LABEL = 'Post Code',
}

export enum DebitCardOrderFieldPlaceholders {
  DELIVERY_TYPE_PLACEHOLDER = 'Delivery',
  BANK_BRANCH_ID_PLACEHOLDER = 'Select the bank',
  CITY_PLACEHOLDER = 'Enter your Town/City',
  HOUSE_PLACEHOLDER = 'Enter your house number',
  STREET_PLACEHOLDER = 'Enter your street name',
  UNIT_PLACEHOLDER = 'Enter your house unit',
  APARTMENT_PLACEHOLDER = 'Enter your apartment number',
  POST_CODE_PLACEHOLDER = 'Enter your postal code',
}

export const CITIES: DropDownElement[] = [
  { id: 1, text: 'Cambridge' },
  { id: 2, text: 'Liverpool' },
  { id: 3, text: 'London' },
  { id: 4, text: 'Manchester' },
];
