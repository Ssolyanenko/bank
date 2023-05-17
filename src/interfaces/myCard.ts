import { CardTypes } from 'constants/cardTypes';
import { FetchStatus } from 'constants/fetchStatus';
import { PaymentSystem } from 'constants/paymentSystem';
import { CardName, CardTemplate as CardTemplateProps, Currency } from 'interfaces/cardTemplate';
import { CardApplication } from 'interfaces/application';
import { Statuses } from './statuses';

export interface MyCard extends Omit<CardTemplateProps, 'cardDate' | 'vipOnly' | 'productInfo'> {
  cardTitle: string;
  cardDate: string;
  cardNumber: string;
  cardType: CardTypes;
  paymentSystem: PaymentSystem;
  onClickRedirect(): void;
}

export interface CardData {
  id: number;
  cardProductName: CardName;
  cardType: string;
  productInfo: string;
  vipOnly: boolean;
  paymentSystem: string;
}

export interface UserCard extends Omit<CardData, 'vipOnly' | 'productInfo'> {
  cardNumber: string;
  cardExpirationDate: string;
  cvv: string;
  formattedAmount: string;
  isActive: boolean;
  transactionLimit: number;
  currency?: Currency;
  isBlocked?: boolean;
  amount?: number;
}

export interface RequestCardsInfo {
  type: string;
  cardsInfo: CardData[];
}

export interface RequestUserCards {
  type: string;
  cards: UserCard[];
}

export interface RequestUserCardById {
  type: string;
  card: UserCard;
}

export interface RequestError {
  type: string;
  error: string;
}

export interface RequestChangeTransactionLimit {
  type: string;
  message: string;
  transactionLimit: number;
}

export type ChangeTransactionInfo = Omit<RequestChangeTransactionLimit, 'type'>

export interface RequestCardOrder {
  type: string;
  text: string;
  status: string;
}

export interface RequestCardPayload {
  text: string;
  status: Statuses;
}

export interface RequestCardHistory {
  type: string;
  cardFilteredData: CardHistory[];
}

export interface RequestActivateBlockCard {
  status: Statuses;
  message: string;
  error: string;
}

export interface ActivateBlockCard {
  type: string;
  status: string;
  message: string;
}

export interface CardsInfo {
  cardsInfo: CardData[];
  isCardsDataLoaded?: boolean;
  error: string;
}

export interface CardsStateInfo {
  debit: CardsInfo;
  credit: CardsInfo;
}

export type PostRequestStatus = 'success' | 'error' | '';

export interface RequestCardActivation {
  type: string;
}

export interface CardsActivationState {
  activationStatus: PostRequestStatus;
  error: string;
}

export interface ChangeCardPinCode {
  status: PostRequestStatus;
  error: '';
}

export interface CardTransactionLimit {
  message: string;
  transactionLimit: number;
}

export interface ChangeStatusSuccess {
  message: string;
  status: string;
}

export interface CardsState {
  cards: CardsStateInfo;
  cardOrderTemplateSuccess: RequestCardPayload;
  debitCardOrderTemplateSuccess: RequestCardPayload;
  cardHistory?: CardHistory[];
  cardFilteredHistory?: CardFilteredHistory;
  isUnlocked?: boolean;
  userCards: UserCard[];
  cardApplications: CardApplication[];
  fetchStatus: FetchStatus;
  userCard: UserCardDetails | null;
  cardsActivation: CardsActivationState;
  changeCardPinCode: ChangeCardPinCode;
  activateBlockCard: RequestActivateBlockCard;
  cardTransactionLimit: CardTransactionLimit;
}

export interface CardHistory {
  date: string;
  time: string;
  summary: string;
  typeTransfer: string;
  place: string;
}

export interface CardFilteredHistory {
  error?: string;
  cardFilteredData?: CardHistory[];
  isUnlocked?: boolean;
}

export interface CreditPremium {
  deliveryType: string;
  deliveryStatus: string;
  cardProductId: number;
  bankBranchId: string;
  amount: string;
  incomePerMonth: string;
  maritalStatus: string;
  residenceCountry: string;
  residenceRegion: string;
  residenceCity: string;
  residenceAddress: string;
  additionalPhoneOwner?: string;
  additionalPhoneNumber?: string;
  additionalPhoneOwnerName?: string;
  placeOfWorkType: string;
  placeOfWorkName: string;
  placeOfWorkOccupation: string;
  unemployedType: string;
  causeOfUnemployment: string;
  isTermsAgreed: boolean;
  isWorkInformally: boolean;
  isAccuracyConfirmed: boolean;
  categories?: number[];
}

export interface UserCardDetails {
  activationTime: string;
  amount: number;
  cardHolder: string;
  cardNumber: string;
  cardProductName: CardName;
  currency: Currency;
  cvv: string;
  expirationDate: string;
  formattedAmount: string;
  fullAccountNumber: string;
  id: number;
  interestRate?: string;
  transactionLimit: string;
  isActive: boolean;
  isBlocked: boolean;
  loanAmount?: string;
  loanPeriod?: string;
  nextPaymentDueOn?: string;
  payableMonthly?: string;
  paymentSystem: string;
  repaidAmount?: string;
  shortAccountNumber: string;
}

export interface ChangeStatusCard {
  cardId: string;
  url: string;
  isChangeStatusAgreed: boolean;
  actionSuccess?({ message, status }: ChangeStatusSuccess): ChangeStatusSuccess;
  actionError?(error: string): RequestError;
}

export interface ChangeLimitCard {
  cardId: number;
  transactionLimit: number;
  changeLimitAgreed: boolean;
}
