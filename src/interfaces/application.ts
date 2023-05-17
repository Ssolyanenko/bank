import { CardDeliveryMethod } from 'constants/cardDeliveryMethod';
import { СardApplicationStatusses } from './cardApplications';

export interface CardApplication {
  id: string;
  userCardId: number;
  deliveryType: CardDeliveryMethod;
  cardProductName: string;
  createAt: string;
  deliveryStatus: СardApplicationStatusses;
}

export interface CardApplicationsList {
  cardApplicationsList: CardApplication[];
}

export interface RequestUserCardApplications {
  type: string;
  applications: CardApplication[];
}

export interface RequestCardAmountValidation {
  cardId: number;
  paymentAmount: number;
}

export interface CardActivationBody {
  cardId: number;
  pinCode: string;
}

export interface CardChangePinCode {
  cardId: number;
  newPinCode: string;
}
