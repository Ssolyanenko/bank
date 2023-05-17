import { Reducer } from 'redux';

import {
  CardActivation,
  GetCreditCardsInfoActions,
  GetDebitCardsInfoActions,
  GetUserCardsActions,
  OrderCreditPremium,
  OrderDebitCard,
  GetUserCardDetailsByIdActions,
  ChangeCardLimit,
  ChangeCardPinCode,
} from 'constants/cardTypes';
import { CardsState } from 'interfaces/myCard';
import { CardsHistory } from 'constants/cardsFilter';
import { LockCardActions } from 'constants/lockCardModalContent';
import { ERROR, IDLE, SUCCESS } from 'constants/text';
import { GetUserCardApplications } from 'constants/cardApplications';
import { FetchStatus } from 'constants/fetchStatus';
import { CardActivateBlock } from 'constants/cardActivateBlockText';

const initialState: CardsState = {
  cardOrderTemplateSuccess: {
    text: '',
    status: IDLE,
  },
  debitCardOrderTemplateSuccess: {
    text: '',
    status: IDLE,
  },
  cardFilteredHistory: {
    error: '',
  },
  isUnlocked: true,
  cards: {
    credit: {
      cardsInfo: [],
      error: '',
    },
    debit: {
      cardsInfo: [],
      error: '',
    },
  },
  cardsActivation: {
    activationStatus: '',
    error: '',
  },
  changeCardPinCode: {
    status: '',
    error: '',
  },
  activateBlockCard: {
    status: IDLE,
    message: '',
    error: '',
  },
  userCards: [],
  cardApplications: [],
  fetchStatus: FetchStatus.IDLE,
  userCard: null,
  cardTransactionLimit: {
    message: '',
    transactionLimit: 0,
  },
};

export const cardsData: Reducer<CardsState> = (state = initialState, action) => {
  switch (action.type) {
    case GetCreditCardsInfoActions.GET_CREDIT_CARDS_INFO_REQUEST:
      return {
        ...state,
        cards: {
          ...state.cards,
          credit: {
            ...state.cards.credit,
            isCardsDataLoaded: false,
          },
        },
        fetchStatus: FetchStatus.REQUEST,
      };
    case GetUserCardsActions.GET_USER_CARDS_REQUEST:
    case GetUserCardDetailsByIdActions.GET_USER_CARD_DETAILS_BY_ID_REQUEST:
    case ChangeCardPinCode.CHANGE_CARD_PIN_CODE_REQUEST:
      return {
        ...state,
        fetchStatus: FetchStatus.REQUEST,
      };
    case GetCreditCardsInfoActions.GET_CREDIT_CARDS_INFO_SUCCESS:
      return {
        ...state,
        cards: {
          ...state.cards,
          credit: {
            ...state.cards.credit,
            cardsInfo: [...action.cardsInfo],
            isCardsDataLoaded: true,
            error: '',
          },
        },
        fetchStatus: FetchStatus.SUCCESS,
      };
    case GetCreditCardsInfoActions.GET_CREDIT_CARDS_INFO_ERROR:
      return {
        ...state,
        cards: {
          ...state.cards,
          credit: {
            ...state.cards.credit,
            isCardsDataLoaded: false,
            error: action.error,
          },
        },
        fetchStatus: FetchStatus.ERROR,
      };
    case GetDebitCardsInfoActions.GET_DEBIT_CARDS_INFO_REQUEST:
      return {
        ...state,
        cards: {
          ...state.cards,
          debit: {
            ...state.cards.debit,
            isCardsDataLoaded: false,
          },
        },
        fetchStatus: FetchStatus.REQUEST,
      };
    case GetDebitCardsInfoActions.GET_DEBIT_CARDS_INFO_SUCCESS:
      return {
        ...state,
        cards: {
          ...state.cards,
          debit: {
            ...state.cards.debit,
            cardsInfo: [...action.cardsInfo],
            isCardsDataLoaded: true,
          },
        },
        fetchStatus: FetchStatus.SUCCESS,
      };
    case GetDebitCardsInfoActions.GET_DEBIT_CARDS_INFO_ERROR:
      return {
        ...state,
        cards: {
          ...state.cards,
          debit: {
            ...state.cards.debit,
            isCardsDataLoaded: false,
            error: action.error,
          },
        },
        fetchStatus: FetchStatus.ERROR,
      };
    case OrderCreditPremium.ORDER_CREDIT_PREMIUM_REQUEST:
      return {
        ...state,
        isOrderedCard: false,
        error: '',
        fetchStatus: FetchStatus.REQUEST,
      };
    case OrderCreditPremium.ORDER_CREDIT_PREMIUM_SUCCESS:
      return {
        ...state,
        cardOrderTemplateSuccess: {
          ...state.cardOrderTemplateSuccess,
          text: action.text,
          status: action.status,
        },
        fetchStatus: FetchStatus.SUCCESS,
      };
    case OrderCreditPremium.ORDER_CREDIT_PREMIUM_ERROR:
      return {
        ...state,
        cardOrderTemplateSuccess: {
          ...state.cardOrderTemplateSuccess,
          text: action.error,
          status: ERROR,
        },
        fetchStatus: FetchStatus.ERROR,
      };
    case OrderDebitCard.ORDER_DEBIT_CARD_REQUEST:
      return {
        ...state,
        isOrderedDebitCard: false,
        error: '',
        fetchStatus: FetchStatus.REQUEST,
      };
    case OrderDebitCard.ORDER_DEBIT_CARD_SUCCESS:
      return {
        ...state,
        debitCardOrderTemplateSuccess: {
          ...state.debitCardOrderTemplateSuccess,
          text: action.text,
          status: action.status,
        },
        fetchStatus: FetchStatus.SUCCESS,
      };
    case OrderDebitCard.ORDER_DEBIT_CARD_ERROR:
      return {
        ...state,
        debitCardOrderTemplateSuccess: {
          ...state.debitCardOrderTemplateSuccess,
          text: action.error,
          status: ERROR,
        },
        fetchStatus: FetchStatus.ERROR,
      };
    case ChangeCardLimit.CHANGE_CARD_TRANSACTIONS_LIMIT_REQUEST:
      return {
        ...state,
        cardTransactionLimit: {
          ...state.cardTransactionLimit,
          message: '',
        },
        fetchStatus: FetchStatus.REQUEST,
      };
    case ChangeCardLimit.CHANGE_CARD_TRANSACTIONS_LIMIT_SUCCESS:
      return {
        ...state,
        cardTransactionLimit: {
          ...state.cardTransactionLimit,
          message: action.message,
          transactionLimit: action.transactionLimit,
        },
        fetchStatus: FetchStatus.SUCCESS,
      };
    case ChangeCardLimit.CHANGE_CARD_TRANSACTIONS_LIMIT_ERROR:
      return {
        ...state,
        cardTransactionLimit: {
          ...state.cardTransactionLimit,
          message: action.error,
        },
        fetchStatus: FetchStatus.ERROR,
      };
    case CardsHistory.CARD_FILTERED_DATA_SUCCESS:
      return {
        ...state,
        cardFilteredHistory: { ...state.cardFilteredHistory, cardFilteredData: action.cardFilteredData },
        fetchStatus: FetchStatus.SUCCESS,
      };
    case CardsHistory.CARD_FILTERED_DATA_ERROR:
      return {
        ...state,
        cardFilteredHistory: { ...state.cardFilteredHistory, error: action.error },
        fetchStatus: FetchStatus.ERROR,
      };
    case CardsHistory.CARD_HISTORY_SUCCESS:
      return {
        ...state,
        cardHistory: action.cardHistory,
        fetchStatus: FetchStatus.SUCCESS,
      };
    case LockCardActions.BLOCK_CARD:
      return {
        ...state,
        isUnlocked: false,
      };
    case LockCardActions.UNLOCK_CARD:
      return {
        ...state,
        isUnlocked: true,
      };
    case GetUserCardsActions.GET_USER_CARDS_SUCCESS:
      return {
        ...state,
        userCards: action.cards,
        fetchStatus: FetchStatus.SUCCESS,
      };
    case GetUserCardDetailsByIdActions.GET_USER_CARD_DETAILS_BY_ID_SUCCESS:
      return {
        ...state,
        userCard: action.card,
        cardTransactionLimit: {
          ...state.cardTransactionLimit,
          transactionLimit: action.card.transactionLimit,
        },
        fetchStatus: FetchStatus.SUCCESS,
      };
    case GetUserCardDetailsByIdActions.RESET_USER_CARD_DETAILS:
      return {
        ...state,
        userCard: null,
      };
    case GetUserCardApplications.GET_USER_CARDS_APPLICATIONS_REQUEST:
      return { ...state, fetchStatus: FetchStatus.REQUEST };
    case GetUserCardApplications.GET_USER_CARDS_APPLICATIONS_SUCCESS:
      return { ...state, cardApplications: action.applications, fetchStatus: FetchStatus.SUCCESS };
    case GetUserCardApplications.GET_USER_CARDS_APPLICATIONS_ERROR:
      return { ...state, fetchStatus: FetchStatus.ERROR };
    case CardActivation.CARD_ACTIVATION_REQUEST:
      return { ...state, fetchStatus: FetchStatus.REQUEST };
    case CardActivation.CARD_ACTIVATION_SUCCESS:
      return {
        ...state,
        cardsActivation: {
          ...state.cardsActivation,
          activationStatus: SUCCESS,
        },
        fetchStatus: FetchStatus.SUCCESS,
      };
    case CardActivation.CARD_ACTIVATION_ERROR:
      return {
        ...state,
        cardsActivation: {
          ...state.cardsActivation,
          activationStatus: ERROR,
          error: action.error,
        },
        fetchStatus: FetchStatus.ERROR,
      };
    case ChangeCardPinCode.CHANGE_CARD_PIN_CODE_SUCCESS:
      return {
        ...state,
        changeCardPinCode: {
          ...state.changeCardPinCode,
          status: SUCCESS,
        },
        fetchStatus: FetchStatus.SUCCESS,
      };
    case ChangeCardPinCode.CHANGE_CARD_PIN_CODE_ERROR:
      return {
        ...state,
        changeCardPinCode: {
          ...state.changeCardPinCode,
          status: ERROR,
          error: action.error,
        },
        fetchStatus: FetchStatus.ERROR,
      };
    case CardActivateBlock.ACTIVATE_BLOCK_CARD_REQUEST:
      return {
        ...state,
        fetchStatus: FetchStatus.REQUEST,
      };
    case CardActivateBlock.ACTIVATE_BLOCK_CARD_SUCCESS:
      return {
        ...state,
        activateBlockCard: {
          ...state.activateBlockCard,
          message: action.message,
          status: SUCCESS,
        },
        fetchStatus: FetchStatus.SUCCESS,
      };
    case CardActivateBlock.ACTIVATE_BLOCK_CARD_ERROR:
      return {
        ...state,
        activateBlockCard: {
          ...state.activateBlockCard,
          message: action.message,
          error: action.error,
          status: ERROR,
        },
        fetchStatus: FetchStatus.ERROR,
      };
    default:
      return state;
  }
};
