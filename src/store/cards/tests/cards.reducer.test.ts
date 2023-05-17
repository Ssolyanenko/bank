import {
  CardActivation,
  ChangeCardLimit,
  ChangeCardPinCode,
  GetCreditCardsInfoActions,
  GetDebitCardsInfoActions,
  GetUserCardDetailsByIdActions,
  GetUserCardsActions,
  OrderCreditPremium,
  OrderDebitCard,
} from 'constants/cardTypes';
import { FetchStatus } from 'constants/fetchStatus';
import { LockCardActions } from 'constants/lockCardModalContent';
import { GetUserCardApplications } from 'constants/cardApplications';
import { ERROR, IDLE, SUCCESS } from 'constants/text';
import { USER_CARD } from 'constants/mockCards';
import { CardsState } from 'interfaces/myCard';
import {
  postOrderCardTemplateSuccess,
  postOrderCardTemplateError,
  postOrderDebitCardTemplateError,
  postOrderDebitCardTemplateSuccess,
  getCreditCardsInfoSuccess,
  getCreditCardsInfoError,
  getDebitCardsInfoSuccess,
  getDebitCardsInfoError,
  cardFilteredDataSuccess,
  cardFilteredDataError,
  getAllUserCards,
  getUserCardById,
} from 'store/cards/cards.actions';
import { cardsData } from 'store/cards/cards.reducer';
import { CardActivateBlock } from '../../../constants/cardActivateBlockText';

describe('cardsData.reducer', (): void => {
  let initialState: CardsState;
  beforeEach((): void => {
    initialState = {
      cardOrderTemplateSuccess: {
        text: '',
        status: IDLE,
      },
      debitCardOrderTemplateSuccess: {
        text: '',
        status: IDLE,
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
  });

  describe('credit cards info', (): void => {
    test('should handle REQUEST action', (): void => {
      expect(cardsData(initialState, { type: GetCreditCardsInfoActions.GET_CREDIT_CARDS_INFO_REQUEST })).toEqual({
        ...initialState,
        cards: {
          ...initialState.cards,
          credit: { ...initialState.cards.credit, isCardsDataLoaded: false },
        },
        fetchStatus: FetchStatus.REQUEST,
      });
    });

    test('should handle REQUEST action to user cards', (): void => {
      expect(cardsData(initialState, { type: GetUserCardsActions.GET_USER_CARDS_REQUEST })).toEqual({
        ...initialState,
        fetchStatus: FetchStatus.REQUEST,
      });
    });

    test('should handle REQUEST action to user card details', (): void => {
      expect(
        cardsData(initialState, { type: GetUserCardDetailsByIdActions.GET_USER_CARD_DETAILS_BY_ID_REQUEST })
      ).toEqual({
        ...initialState,
        fetchStatus: FetchStatus.REQUEST,
      });
    });

    test('should handle SUCCESS action to card filtered data', (): void => {
      expect(
        cardsData(
          initialState,
          cardFilteredDataSuccess([
            {
              date: '21/08/2022',
              time: '14:34',
              summary: 'test',
              typeTransfer: 'test',
              place: 'test',
            },
          ])
        )
      ).toEqual({
        ...initialState,
        fetchStatus: FetchStatus.SUCCESS,
        cardFilteredHistory: {
          ...initialState.cardFilteredHistory,
          cardFilteredData: [
            {
              date: '21/08/2022',
              time: '14:34',
              summary: 'test',
              typeTransfer: 'test',
              place: 'test',
            },
          ],
        },
      });
    });

    test('should handle ERROR action to card filtered data', (): void => {
      expect(cardsData(initialState, cardFilteredDataError('error message'))).toEqual({
        ...initialState,
        fetchStatus: FetchStatus.ERROR,
        cardFilteredHistory: {
          error: 'error message',
        },
      });
    });

    test('should handle SUCCESS action to user cards', (): void => {
      expect(cardsData(initialState, getAllUserCards([USER_CARD]))).toEqual({
        ...initialState,
        fetchStatus: FetchStatus.SUCCESS,
        userCards: [USER_CARD],
      });
    });

    test('should handle SUCCESS action to user cards details by id', (): void => {
      expect(cardsData(initialState, getUserCardById(USER_CARD))).toEqual({
        ...initialState,
        fetchStatus: FetchStatus.SUCCESS,
        userCard: USER_CARD,
      });
    });

    test('should reset user card details', (): void => {
      expect(cardsData(initialState, { type: GetUserCardDetailsByIdActions.RESET_USER_CARD_DETAILS })).toEqual({
        ...initialState,
        userCard: null,
      });
    });

    test('should handle SUCCESS action', (): void => {
      expect(
        cardsData(
          initialState,
          getCreditCardsInfoSuccess([
            {
              id: 2,
              cardProductName: 'Credit Card Billable',
              productInfo: 'Product Info',
              cardType: 'CREDIT',
              paymentSystem: 'VISA',
              vipOnly: true,
            },
          ])
        )
      ).toEqual({
        ...initialState,
        fetchStatus: FetchStatus.SUCCESS,
        cards: {
          ...initialState.cards,
          credit: {
            ...initialState.cards.credit,
            isCardsDataLoaded: true,
            error: '',
            cardsInfo: [
              {
                id: 2,
                cardProductName: 'Credit Card Billable',
                productInfo: 'Product Info',
                cardType: 'CREDIT',
                paymentSystem: 'VISA',
                vipOnly: true,
              },
            ],
          },
        },
      });
    });

    test('should handle ERROR action', (): void => {
      expect(cardsData(initialState, getCreditCardsInfoError('error message'))).toEqual({
        ...initialState,
        fetchStatus: FetchStatus.ERROR,
        cards: {
          ...initialState.cards,
          credit: {
            ...initialState.cards.credit,
            isCardsDataLoaded: false,
            error: 'error message',
          },
        },
      });
    });
  });

  describe('debit cards info', (): void => {
    test('should handle REQUEST action', (): void => {
      expect(cardsData(initialState, { type: GetDebitCardsInfoActions.GET_DEBIT_CARDS_INFO_REQUEST })).toEqual({
        ...initialState,
        cards: { ...initialState.cards, debit: { ...initialState.cards.debit, isCardsDataLoaded: false } },
        fetchStatus: FetchStatus.REQUEST,
      });
    });

    test('should handle SUCCESS action', (): void => {
      expect(
        cardsData(
          initialState,
          getDebitCardsInfoSuccess([
            {
              id: 2,
              cardProductName: 'Debit Smart card',
              productInfo: 'Product Info',
              cardType: 'DEBIT',
              paymentSystem: 'VISA',
              vipOnly: true,
            },
          ])
        )
      ).toEqual({
        ...initialState,
        cards: {
          ...initialState.cards,
          debit: {
            ...initialState.cards.debit,
            isCardsDataLoaded: true,
            error: '',
            cardsInfo: [
              {
                id: 2,
                cardProductName: 'Debit Smart card',
                productInfo: 'Product Info',
                cardType: 'DEBIT',
                paymentSystem: 'VISA',
                vipOnly: true,
              },
            ],
          },
        },
        fetchStatus: FetchStatus.SUCCESS,
      });
    });

    test('should handle ERROR action', (): void => {
      expect(cardsData(initialState, getDebitCardsInfoError('error message'))).toEqual({
        ...initialState,
        cards: {
          ...initialState.cards,
          debit: {
            ...initialState.cards.debit,
            isCardsDataLoaded: false,
            error: 'error message',
          },
        },
        fetchStatus: FetchStatus.ERROR,
      });
    });
  });

  describe('order credit card premium', (): void => {
    test('should handle REQUEST action', (): void => {
      expect(cardsData(initialState, { type: OrderCreditPremium.ORDER_CREDIT_PREMIUM_REQUEST })).toEqual({
        ...initialState,
        isOrderedCard: false,
        error: '',
        fetchStatus: FetchStatus.REQUEST,
      });
    });

    test('should handle SUCCESS action', (): void => {
      expect(cardsData(initialState, postOrderCardTemplateSuccess({ text: 'Success text', status: SUCCESS }))).toEqual({
        ...initialState,
        cardOrderTemplateSuccess: {
          text: 'Success text',
          status: SUCCESS,
        },
        fetchStatus: FetchStatus.SUCCESS,
      });
    });

    test('should handle ERROR action', (): void => {
      expect(cardsData(initialState, postOrderCardTemplateError('error'))).toEqual({
        ...initialState,
        cardOrderTemplateSuccess: {
          text: 'error',
          status: ERROR,
        },
        fetchStatus: FetchStatus.ERROR,
      });
    });
  });

  describe('order debit card', (): void => {
    test('should handle REQUEST action', (): void => {
      expect(cardsData(initialState, { type: OrderDebitCard.ORDER_DEBIT_CARD_REQUEST })).toEqual({
        ...initialState,
        isOrderedDebitCard: false,
        error: '',
        fetchStatus: FetchStatus.REQUEST,
      });
    });

    test('should handle SUCCESS action', (): void => {
      expect(
        cardsData(initialState, postOrderDebitCardTemplateSuccess({ text: 'Success text', status: SUCCESS }))
      ).toEqual({
        ...initialState,
        debitCardOrderTemplateSuccess: {
          text: 'Success text',
          status: SUCCESS,
        },
        fetchStatus: FetchStatus.SUCCESS,
      });
    });

    test('should handle ERROR action', (): void => {
      expect(cardsData(initialState, postOrderDebitCardTemplateError('error'))).toEqual({
        ...initialState,
        debitCardOrderTemplateSuccess: {
          text: 'error',
          status: ERROR,
        },
        fetchStatus: FetchStatus.ERROR,
      });
    });
  });

  describe('block a card', (): void => {
    test('should handle BLOCK_CARD action', (): void => {
      expect(cardsData(initialState, { type: LockCardActions.BLOCK_CARD })).toEqual({
        ...initialState,
        isUnlocked: false,
      });
    });

    test('should handle UNLOCK_CARD action', (): void => {
      expect(cardsData(initialState, { type: LockCardActions.UNLOCK_CARD })).toEqual({
        ...initialState,
        isUnlocked: true,
      });
    });
  });

  describe('get user card applications', () => {
    test('should handle REQUEST action', () => {
      expect(cardsData(initialState, { type: GetUserCardApplications.GET_USER_CARDS_APPLICATIONS_REQUEST })).toEqual({
        ...initialState,
        fetchStatus: FetchStatus.REQUEST,
      });
    });

    test('should handle SUCCESS action', () => {
      expect(
        cardsData(initialState, {
          type: GetUserCardApplications.GET_USER_CARDS_APPLICATIONS_SUCCESS,
          applications: [
            {
              type: 'cardOrderInfoDto',
              id: 389,
              deliveryType: 'PICK_UP_AT_THE_BANK',
              deliveryStatus: 'underConsideration',
              cardProductName: 'Debit Travel card',
              createAt: '20-01-2023',
            },
          ],
        })
      ).toEqual({
        ...initialState,
        cardApplications: [
          {
            type: 'cardOrderInfoDto',
            id: 389,
            deliveryType: 'PICK_UP_AT_THE_BANK',
            deliveryStatus: 'underConsideration',
            cardProductName: 'Debit Travel card',
            createAt: '20-01-2023',
          },
        ],
        fetchStatus: FetchStatus.SUCCESS,
      });
    });

    test('should handle ERROR action', () => {
      expect(cardsData(initialState, { type: GetUserCardApplications.GET_USER_CARDS_APPLICATIONS_ERROR })).toEqual({
        ...initialState,
        fetchStatus: FetchStatus.ERROR,
      });
    });
  });

  describe('card activation handlers', (): void => {
    test('should handle REQUEST action', (): void => {
      expect(cardsData(initialState, { type: CardActivation.CARD_ACTIVATION_REQUEST })).toEqual({
        ...initialState,
        fetchStatus: FetchStatus.REQUEST,
      });
    });

    test('should handle SUCCESS action', (): void => {
      expect(cardsData(initialState, { type: CardActivation.CARD_ACTIVATION_SUCCESS })).toEqual({
        ...initialState,
        cardsActivation: {
          ...initialState.cardsActivation,
          activationStatus: SUCCESS,
        },
        fetchStatus: FetchStatus.SUCCESS,
      });
    });

    test('should handle ERROR action', (): void => {
      expect(
        cardsData(initialState, {
          type: CardActivation.CARD_ACTIVATION_ERROR,
          error: 'error message',
        })
      ).toEqual({
        ...initialState,
        cardsActivation: {
          ...initialState.cardsActivation,
          activationStatus: ERROR,
          error: 'error message',
        },
        fetchStatus: FetchStatus.ERROR,
      });
    });
  });

  describe('change card limit', (): void => {
    test('should handle REQUEST action', (): void => {
      expect(cardsData(initialState, { type: ChangeCardLimit.CHANGE_CARD_TRANSACTIONS_LIMIT_REQUEST })).toEqual({
        ...initialState,
        fetchStatus: FetchStatus.REQUEST,
      });
    });

    test('should handle SUCCESS action', (): void => {
      expect(
        cardsData(initialState, {
          type: ChangeCardLimit.CHANGE_CARD_TRANSACTIONS_LIMIT_SUCCESS,
          message: '',
          transactionLimit: 0,
        })
      ).toEqual({
        ...initialState,
        fetchStatus: FetchStatus.SUCCESS,
      });
    });
  });

  describe('change card pin code', (): void => {
    test('should handle REQUEST action', (): void => {
      expect(cardsData(initialState, { type: ChangeCardPinCode.CHANGE_CARD_PIN_CODE_REQUEST })).toEqual({
        ...initialState,
        fetchStatus: FetchStatus.REQUEST,
      });
    });

    test('should handle SUCCESS action', (): void => {
      expect(cardsData(initialState, { type: ChangeCardPinCode.CHANGE_CARD_PIN_CODE_SUCCESS })).toEqual({
        ...initialState,
        changeCardPinCode: {
          ...initialState.changeCardPinCode,
          status: SUCCESS,
        },
        fetchStatus: FetchStatus.SUCCESS,
      });
    });

    test('should handle ERROR action', (): void => {
      expect(
        cardsData(initialState, {
          type: ChangeCardPinCode.CHANGE_CARD_PIN_CODE_ERROR,
          error: 'error message',
        })
      ).toEqual({
        ...initialState,
        changeCardPinCode: {
          ...initialState.changeCardPinCode,
          status: ERROR,
          error: 'error message',
        },
        fetchStatus: FetchStatus.ERROR,
      });
    });
  });

  describe('activateBlockCard', (): void => {
    test('should handle REQUEST action', (): void => {
      expect(cardsData(initialState, { type: CardActivateBlock.ACTIVATE_BLOCK_CARD_REQUEST })).toEqual({
        ...initialState,
        fetchStatus: FetchStatus.REQUEST,
      });
    });

    test('should handle SUCCESS action', (): void => {
      expect(
        cardsData(initialState, {
          type: CardActivateBlock.ACTIVATE_BLOCK_CARD_SUCCESS,
          error: '',
          message: 'test message',
        })
      ).toEqual({
        ...initialState,
        activateBlockCard: {
          ...initialState.activateBlockCard,
          status: SUCCESS,
          message: 'test message',
          error: '',
        },
        fetchStatus: FetchStatus.SUCCESS,
      });
    });

    test('should handle ERROR action', (): void => {
      expect(
        cardsData(initialState, {
          type: CardActivateBlock.ACTIVATE_BLOCK_CARD_ERROR,
          error: 'error message',
          message: 'test message',
        })
      ).toEqual({
        ...initialState,
        activateBlockCard: {
          ...initialState.activateBlockCard,
          status: ERROR,
          message: 'test message',
          error: 'error message',
        },
        fetchStatus: FetchStatus.ERROR,
      });
    });
  });
});
