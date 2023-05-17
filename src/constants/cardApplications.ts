import { CardApplicationStatus } from 'constants/cardApplicationStatus';
import { CardDeliveryMethod } from 'constants/cardDeliveryMethod';
import { CardApplication } from 'interfaces/application';
import { CardApplicationStatusText } from 'interfaces/cardApplications';

export const CARD_APPLICATIONS: CardApplication[] = [
  {
    id: '1',
    userCardId: 1,
    deliveryType: CardDeliveryMethod.EXPRESS_DELIVERY_BY_COURIER,
    cardProductName: 'Smart Debit card',
    createAt: '02.08.2022',
    deliveryStatus: CardApplicationStatusText.FINALIZED,
  },
  {
    id: '2',
    userCardId: 2,
    deliveryType: CardDeliveryMethod.PARCEL_BY_MAIL,
    cardProductName: 'Debit Travel card',
    createAt: '12.10.2022',
    deliveryStatus: CardApplicationStatusText.APPROVED,
  },
  {
    id: '3',
    userCardId: 3,
    deliveryType: CardDeliveryMethod.EXPRESS_DELIVERY_BY_COURIER,
    cardProductName: 'Smart Debit card',
    createAt: '09.11.2022',
    deliveryStatus: CardApplicationStatusText.ON_THE_WAY,
  },
  {
    id: '4',
    userCardId: 4,
    deliveryType: CardDeliveryMethod.PICK_UP_AT_THE_BANK,
    cardProductName: 'Credit Card Billable Premium',
    createAt: '05.09.2022',
    deliveryStatus: CardApplicationStatusText.REJECTED,
  },
  {
    id: '5',
    userCardId: 5,
    deliveryType: CardDeliveryMethod.PARCEL_BY_MAIL,
    cardProductName: 'Credit Card Billable',
    createAt: '10.07.2022',
    deliveryStatus: CardApplicationStatusText.READY_FOR_PICK_UP,
  },
  {
    id: '6',
    userCardId: 6,
    deliveryType: CardDeliveryMethod.PICK_UP_AT_THE_BANK,
    cardProductName: 'Credit Card Billable Premium',
    createAt: '05.09.2022',
    deliveryStatus: CardApplicationStatus.UNDER_CONSIDERATION,
  },
  {
    id: '7',
    userCardId: 7,
    deliveryType: CardDeliveryMethod.PARCEL_BY_MAIL,
    cardProductName: 'Credit Card Billable Premium',
    createAt: '05.09.2022',
    deliveryStatus: CardApplicationStatusText.READY_FOR_PICK_UP,
  },
  {
    id: '8',
    userCardId: 8,
    deliveryType: CardDeliveryMethod.EXPRESS_DELIVERY_BY_COURIER,
    cardProductName: 'Smart Debit card',
    createAt: '09.11.2022',
    deliveryStatus: CardApplicationStatus.COLLECTED,
  },
  {
    id: '9',
    userCardId: 9,
    deliveryType: CardDeliveryMethod.PICK_UP_AT_THE_BANK,
    cardProductName: 'Credit Card Billable Premium',
    createAt: '05.09.2022',
    deliveryStatus: CardApplicationStatus.UNDER_CONSIDERATION,
  },
];

export enum GetUserCardApplications {
  GET_USER_CARDS_APPLICATIONS_REQUEST = 'GET_USER_CARDS_APPLICATIONS_REQUEST',
  GET_USER_CARDS_APPLICATIONS_SUCCESS = 'GET_USER_CARDS_APPLICATIONS_SUCCESS',
  GET_USER_CARDS_APPLICATIONS_ERROR = 'GET_USER_CARDS_APPLICATIONS_ERROR',
}
