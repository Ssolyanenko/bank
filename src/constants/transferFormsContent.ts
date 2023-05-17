import { ByPhoneNumberFormInitialErrors, ByPhoneNumberFormInitialValues } from 'interfaces/transferPage';
import { ERROR_MESSAGE } from './errors';

export enum TransferFormsNames {
  MY_CARD = 'myCard',
  PAYMENT_AMOUNT = 'paymentAmount',
  PHONE_NUMBER = 'phoneNumber',
  CARD_INFORMATION = 'cardInformation',
}

export enum TransferFormsLabels {
  MY_CARD_LABEL = 'Choose card',
  PAYMENT_AMOUNT_LABEL = 'Payment amount',
  PHONE_NUMBER_LABEL = `Recipient's phone number`,
}

export enum TransferFormsPlaceholders {
  MY_CARD_PLACEHOLDER = 'Your card - 0000',
  PAYMENT_AMOUNT_PLACEHOLDER = 'Enter the amount',
  PHONE_NUMBER_PLACEHOLDER = '+44 1234567899',
}

export const BY_PHONE_NUMBER_FORM_INITIAL_VALUES: ByPhoneNumberFormInitialValues = {
  myCard: '',
  phoneNumber: '',
  paymentAmount: '',
  cardInformation: { id: 0, cardNumber: '', cardProductName: '' },
};

export const BY_PHONE_NUMBER_INITIAL_ERRORS: ByPhoneNumberFormInitialErrors = {
  phoneNumber: ERROR_MESSAGE.required,
};

export const MODAL_RADIO_BUTTONS_GROUP_NAME = 'paymentCards';
