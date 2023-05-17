import { createSelector } from 'reselect';

import { CardNames } from 'constants/cardTypes';
import {
  CardData,
  CardTransactionLimit,
  CardsActivationState,
  CardsState,
  ChangeCardPinCode,
  RequestActivateBlockCard,
  RequestCardPayload,
  UserCard,
  UserCardDetails,
} from 'interfaces/myCard';
import { Store } from 'store';
import { CardApplication } from 'interfaces/application';

export const getCardData = (state: Store): CardsState => state.cardsData;

export const getIsUnlocked = createSelector(
  [getCardData],
  (cardData: CardsState): boolean | undefined => cardData.isUnlocked
);
export const getIsCreditCardsDataLoaded = createSelector(
  [getCardData],
  (cardData: CardsState): boolean | undefined => cardData.cards.credit.isCardsDataLoaded
);
export const getCreditCards = createSelector(
  [getCardData],
  (cardData: CardsState): CardData[] => cardData.cards.credit.cardsInfo
);
export const getIsDebitCardsDataLoaded = createSelector(
  [getCardData],
  (cardData: CardsState): boolean | undefined => cardData.cards.debit.isCardsDataLoaded
);
export const getDebitCards = createSelector(
  [getCardData],
  (cardData: CardsState): CardData[] => cardData.cards.debit.cardsInfo
);
export const getIsCardOrdered = createSelector(
  [getCardData],
  (cardData: CardsState): RequestCardPayload => cardData.cardOrderTemplateSuccess
);
export const getIsDebitCardOrdered = createSelector(
  [getCardData],
  (cardData: CardsState): RequestCardPayload => cardData.debitCardOrderTemplateSuccess
);
export const getIsActivatedBlockCard = createSelector(
  [getCardData],
  (cardData: CardsState): RequestActivateBlockCard => cardData.activateBlockCard
);
export const getUserCards = createSelector([getCardData], (cardData: CardsState): UserCard[] => cardData.userCards);
export const getUserCardsFetching = createSelector([getCardData], (cardData: CardsState) => cardData.fetchStatus);

export const getUserCard = createSelector([getCardData], (cardData): UserCardDetails | null => cardData.userCard);

export const getCardsApplications = createSelector(
  [getCardData],
  (cardData: CardsState): CardApplication[] => cardData.cardApplications
);

export const getCreditBillableCard = createSelector(
  [getCreditCards],
  (cardData: CardData[]): CardData =>
    cardData.find(({ cardProductName }): boolean => cardProductName === CardNames.BILLABLE)!
);

export const getCreditPremiumCard = createSelector(
  [getCreditCards],
  (cardData: CardData[]): CardData =>
    cardData.find(({ cardProductName }): boolean => cardProductName === CardNames.BILLABLE_PREMIUM)!
);

export const getDebitTravelCard = createSelector(
  [getDebitCards],
  (cardData: CardData[]): CardData =>
    cardData.find(({ cardProductName }): boolean => cardProductName === CardNames.DEBIT_TRAVEL)!
);

export const getDebitSmartCard = createSelector(
  [getDebitCards],
  (cardData: CardData[]): CardData =>
    cardData.find(({ cardProductName }): boolean => cardProductName === CardNames.DEBIT_SMART)!
);

export const getCardActivated = createSelector(
  [getCardData],
  (cardData: CardsState): CardsActivationState => cardData.cardsActivation
);

export const getCurrentTransactionLimit = createSelector(
  [getCardData],
  (cardData: CardsState): CardTransactionLimit => cardData.cardTransactionLimit
);

export const getChangeCardPinCode = createSelector(
  [getCardData],
  (cardData: CardsState): ChangeCardPinCode => cardData.changeCardPinCode
);
