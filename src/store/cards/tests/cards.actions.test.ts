import * as PostRequestService from 'services/postRequest';
import * as GetRequestService from 'services/getRequest';
import * as PutRequestService from 'services/putRequest';
import { mockStore } from 'helpers';
import { mockInitialState } from 'constants/mockInitialState';
import {
  CardActivation,
  CardAmountFieldValidation,
  ChangeCardLimit,
  ChangeCardPinCode,
  GetCreditCardsInfoActions,
  GetDebitCardsInfoActions,
  GetUserCardDetailsByIdActions,
  GetUserCardsActions,
  OrderCreditPremium,
  OrderDebitCard,
} from 'constants/cardTypes';
import { GetUserCardApplications } from 'constants/cardApplications';
import { ERROR, SUCCESS } from 'constants/text';
import { CardDeliveryMethod } from 'constants/cardDeliveryMethod';
import { CardApplicationStatus } from 'constants/cardApplicationStatus';
import { ERROR_MESSAGE } from 'constants/errors';
import { CardsHistory } from 'constants/cardsFilter';
import { GET_USER_CARDS_URL } from 'constants/requestUrls';
import { CARD_INFO, CARDS, USER_CARD } from 'constants/mockCards';
import { CardActivateBlock } from 'constants/cardActivateBlockText';
import {
  postOrderCardTemplateSuccess,
  postOrderCardTemplateError,
  requestOrderCardTemplate,
  postOrderDebitCardTemplateSuccess,
  requestOrderDebitCardTemplate,
  getCreditCardsInfoSuccess,
  requestCreditCardsInfo,
  getCreditCardsInfoError,
  getDebitCardsInfoError,
  getDebitCardsInfoSuccess,
  requestDebitCardsInfo,
  getCardApplicationsSuccess,
  requestUserCardApplications,
  getCardApplicationsError,
  requestCardFilteredHistory,
  getCardHistory,
  getAllUserCards,
  requestUserCards,
  requestUserCardDetailsById,
  getUserCardById,
  resetUserCard,
  requestCardAmountFieldValidation,
  getCardHistoryError,
  cardFilteredDataError,
  requestCardActivation,
  postCardActivationError,
  activateBlockCard,
  changeTransactionLimitSuccess,
  pinCodeChangeError,
  putTransactionLimitCard,
  requestPinCodeChange,
  changeTransactionLimitError,
} from 'store/cards/cards.actions';

describe('cards.actions', (): void => {
  describe('requestCreditCardsInfo', (): void => {
    test('should handle SUCCESS action', (): void => {
      jest.spyOn(GetRequestService, 'GetRequest').mockResolvedValue([
        {
          id: 2,
          cardProductName: 'Debit Smart card',
          productInfo: 'Product Info',
          cardType: 'CREDIT',
          paymentSystem: 'VISA',
          vipOnly: true,
        },
      ]);

      const store = mockStore(mockInitialState);
      const expected = [
        { type: GetCreditCardsInfoActions.GET_CREDIT_CARDS_INFO_REQUEST },
        getCreditCardsInfoSuccess([
          {
            id: 2,
            cardProductName: 'Debit Smart card',
            productInfo: 'Product Info',
            cardType: 'CREDIT',
            paymentSystem: 'VISA',
            vipOnly: true,
          },
        ]),
      ];

      return store.dispatch(requestCreditCardsInfo()).then((): void => {
        expect(store.getActions()).toEqual(expected);
      });
    });

    test('should handle ERROR action', (): void => {
      jest.spyOn(GetRequestService, 'GetRequest').mockRejectedValue(new Error('Async error'));

      const expected = [
        { type: GetCreditCardsInfoActions.GET_CREDIT_CARDS_INFO_REQUEST },
        getCreditCardsInfoError('Async error'),
      ];
      const store = mockStore(mockInitialState);

      return store.dispatch(requestCreditCardsInfo()).then((): void => {
        expect(store.getActions()).toEqual(expected);
      });
    });
  });

  describe('requestDebitCardsInfo', (): void => {
    test('should handle SUCCESS action', (): void => {
      jest.spyOn(GetRequestService, 'GetRequest').mockResolvedValue([
        {
          id: 2,
          cardProductName: 'Credit Card Billable',
          productInfo: 'Product Info',
          cardType: 'DEBIT',
          paymentSystem: 'VISA',
          vipOnly: true,
        },
      ]);

      const store = mockStore(mockInitialState);
      const expected = [
        { type: GetDebitCardsInfoActions.GET_DEBIT_CARDS_INFO_REQUEST },
        getDebitCardsInfoSuccess([
          {
            id: 2,
            cardProductName: 'Credit Card Billable',
            productInfo: 'Product Info',
            cardType: 'DEBIT',
            paymentSystem: 'VISA',
            vipOnly: true,
          },
        ]),
      ];

      return store.dispatch(requestDebitCardsInfo()).then((): void => {
        expect(store.getActions()).toEqual(expected);
      });
    });

    test('should handle ERROR action', (): void => {
      jest.spyOn(GetRequestService, 'GetRequest').mockRejectedValue(new Error('Async error'));

      const expected = [
        { type: GetDebitCardsInfoActions.GET_DEBIT_CARDS_INFO_REQUEST },
        getDebitCardsInfoError('Async error'),
      ];
      const store = mockStore(mockInitialState);

      return store.dispatch(requestDebitCardsInfo()).then((): void => {
        expect(store.getActions()).toEqual(expected);
      });
    });
  });

  describe('requestOrderCreditCard', (): void => {
    test('should handle SUCCESS action', (): void => {
      jest
        .spyOn(PostRequestService, 'PostRequest')
        .mockResolvedValue({ message: 'Success text', status: 200, res: true });

      const expected = [
        { type: OrderCreditPremium.ORDER_CREDIT_PREMIUM_REQUEST },
        postOrderCardTemplateSuccess({ text: 'Success text', status: SUCCESS }),
      ];
      const store = mockStore(mockInitialState);

      return store.dispatch(requestOrderCardTemplate(CARD_INFO)).then((): void => {
        expect(store.getActions()).toEqual(expected);
      });
    });

    test('should handle no data action', (): void => {
      jest.spyOn(PostRequestService, 'PostRequest').mockResolvedValue({ message: 'no data', status: 200, res: false });

      const expected = [
        { type: OrderCreditPremium.ORDER_CREDIT_PREMIUM_REQUEST },
        postOrderCardTemplateSuccess({ text: 'no data', status: ERROR }),
      ];
      const store = mockStore(mockInitialState);

      return store.dispatch(requestOrderCardTemplate(CARD_INFO)).then((): void => {
        expect(store.getActions()).toEqual(expected);
      });
    });

    test('should handle ERROR action', (): void => {
      jest
        .spyOn(PostRequestService, 'PostRequest')
        .mockRejectedValue(new Error(JSON.stringify({ message: 'Async error' })));

      const expected = [
        { type: OrderCreditPremium.ORDER_CREDIT_PREMIUM_REQUEST },
        postOrderCardTemplateError('Async error'),
      ];
      const store = mockStore(mockInitialState);

      return store.dispatch(requestOrderCardTemplate(CARD_INFO)).then((): void => {
        expect(store.getActions()).toEqual(expected);
      });
    });

    test('should provide default ERROR action message', (): void => {
      jest
        .spyOn(PostRequestService, 'PostRequest')
        .mockRejectedValue(new Error(JSON.stringify({ message: 'Something went wrong. Please try again.' })));

      const expected = [
        { type: OrderCreditPremium.ORDER_CREDIT_PREMIUM_REQUEST },
        postOrderCardTemplateError(ERROR_MESSAGE.somethingWentWrong),
      ];
      const store = mockStore(mockInitialState);

      return store.dispatch(requestOrderCardTemplate(CARD_INFO)).then((): void => {
        expect(store.getActions()).toEqual(expected);
      });
    });
  });

  describe('requestOrderDebitCard', (): void => {
    test('should handle SUCCESS action', (): void => {
      jest
        .spyOn(PostRequestService, 'PostRequest')
        .mockResolvedValue({ message: 'Success text', status: 200, res: true });

      const expected = [
        { type: OrderDebitCard.ORDER_DEBIT_CARD_REQUEST },
        postOrderDebitCardTemplateSuccess({ text: 'Success text', status: SUCCESS }),
      ];
      const store = mockStore(mockInitialState);

      return store.dispatch(requestOrderDebitCardTemplate(CARD_INFO)).then((): void => {
        expect(store.getActions()).toEqual(expected);
      });
    });

    test('should handle no data action', (): void => {
      jest.spyOn(PostRequestService, 'PostRequest').mockResolvedValue({ message: 'no data', status: 200, res: false });

      const expected = [
        { type: OrderDebitCard.ORDER_DEBIT_CARD_REQUEST },
        postOrderDebitCardTemplateSuccess({ text: 'no data', status: ERROR }),
      ];
      const store = mockStore(mockInitialState);

      return store.dispatch(requestOrderDebitCardTemplate(CARD_INFO)).then((): void => {
        expect(store.getActions()).toEqual(expected);
      });
    });

    test('should handle ERROR action', (): void => {
      jest
        .spyOn(PostRequestService, 'PostRequest')
        .mockRejectedValue(new Error(JSON.stringify({ message: 'Async error' })));

      const expected = [
        { type: OrderCreditPremium.ORDER_CREDIT_PREMIUM_REQUEST },
        postOrderCardTemplateError('Async error'),
      ];
      const store = mockStore(mockInitialState);

      return store.dispatch(requestOrderCardTemplate(CARD_INFO)).then((): void => {
        expect(store.getActions()).toEqual(expected);
      });
    });

    test('should provide default ERROR action message', (): void => {
      jest
        .spyOn(PostRequestService, 'PostRequest')
        .mockRejectedValue(new Error(JSON.stringify({ message: 'Something went wrong. Please try again.' })));

      const expected = [
        { type: OrderCreditPremium.ORDER_CREDIT_PREMIUM_REQUEST },
        postOrderCardTemplateError(ERROR_MESSAGE.somethingWentWrong),
      ];
      const store = mockStore(mockInitialState);

      return store.dispatch(requestOrderCardTemplate(CARD_INFO)).then((): void => {
        expect(store.getActions()).toEqual(expected);
      });
    });
  });

  describe('requestCardFilteredHistory', (): void => {
    test('should handle SUCCESS action', (): void => {
      jest
        .spyOn(PostRequestService, 'PostRequest')
        .mockResolvedValue({ message: 'Success text', status: 200, res: true });

      const login = {
        login: 'Test1234',
        password: 'Test1234',
      };
      const expected = [
        {
          type: CardsHistory.CARD_FILTERED_DATA_REQUEST,
        },
        {
          cardFilteredData: {
            message: 'Success text',
            status: 200,
            res: true,
          },
          type: CardsHistory.CARD_FILTERED_DATA_SUCCESS,
        },
      ];
      const store = mockStore(mockInitialState);

      return store.dispatch(requestCardFilteredHistory(login)).then((): void => {
        expect(store.getActions()).toEqual(expected);
      });
    });

    test('should handle ERROR action', (): void => {
      jest
        .spyOn(PostRequestService, 'PostRequest')
        .mockRejectedValue(new Error(JSON.stringify({ message: 'Async error' })));

      const login = {
        login: '',
        password: '',
      };
      const expected = [
        { type: CardsHistory.CARD_FILTERED_DATA_REQUEST },
        {
          error: 'Async error',
          type: CardsHistory.CARD_FILTERED_DATA_ERROR,
        },
      ];
      const store = mockStore(mockInitialState);

      return store.dispatch(requestCardFilteredHistory(login)).then((): void => {
        expect(store.getActions()).toEqual(expected);
      });
    });
  });

  describe('getCardHistory', (): void => {
    test('should handle ERROR action', (): void => {
      jest.spyOn(GetRequestService, 'GetRequest').mockRejectedValue(new Error('Async error'));

      const expected = [
        {
          type: CardsHistory.CARD_HISTORY_REQUEST,
        },
        {
          error: 'Async error',
          type: CardsHistory.CARD_FILTERED_DATA_SUCCESS,
        },
      ];
      const store = mockStore(mockInitialState);

      return store.dispatch(getCardHistory()).then((): void => {
        expect(store.getActions()).toEqual(expected);
      });
    });
  });

  describe('cardFilteredDataError', (): void => {
    test('should handle ERROR action', (): void => {
      const expected = { type: CardsHistory.CARD_FILTERED_DATA_ERROR, error: 'error' };

      expect(cardFilteredDataError('error')).toEqual(expected);
    });
  });

  describe('getCardHistoryError', (): void => {
    test('should handle ERROR action', (): void => {
      const expected = { type: CardsHistory.CARD_FILTERED_DATA_SUCCESS, error: 'error' };

      expect(getCardHistoryError('error')).toEqual(expected);
    });
  });

  describe('getAllUserCards ', (): void => {
    test('should handle SUCCESS action', (): void => {
      const expected = {
        cards: CARDS,
        type: GetUserCardsActions.GET_USER_CARDS_SUCCESS,
      };

      expect(getAllUserCards(CARDS)).toEqual(expected);
    });
  });

  describe('requestUserCardApplications', (): void => {
    test('should handle SUCCESS action', (): void => {
      jest.spyOn(GetRequestService, 'GetRequest').mockResolvedValue([
        {
          cardProductName: 'Debit Travel card',
          createAt: '20-01-2023',
          deliveryStatus: 'On the way',
          deliveryType: 'Express delivery by courier',
          id: '392',
          userCardId: 392,
        },
      ]);

      const expected = [
        { type: GetUserCardApplications.GET_USER_CARDS_APPLICATIONS_REQUEST },
        getCardApplicationsSuccess([
          {
            cardProductName: 'Debit Travel card',
            createAt: '20-01-2023',
            deliveryStatus: CardApplicationStatus.ON_THE_WAY,
            deliveryType: CardDeliveryMethod.EXPRESS_DELIVERY_BY_COURIER,
            id: '392',
            userCardId: 392,
          },
        ]),
      ];
      const store = mockStore(mockInitialState);

      return store.dispatch(requestUserCardApplications()).then((): void => {
        expect(store.getActions()).toEqual(expected);
      });
    });

    test('should handle ERROR action', (): void => {
      jest.spyOn(GetRequestService, 'GetRequest').mockRejectedValue(new Error('Something went wrong error'));

      const expected = [
        { type: GetUserCardApplications.GET_USER_CARDS_APPLICATIONS_REQUEST },
        getCardApplicationsError('Something went wrong error'),
      ];
      const store = mockStore(mockInitialState);

      return store.dispatch(requestUserCardApplications()).then((): void => {
        expect(store.getActions()).toEqual(expected);
      });
    });
  });

  describe('requestUserCards', (): void => {
    test('should handle SUCCESS action', (): void => {
      jest.spyOn(GetRequestService, 'GetRequest').mockResolvedValue([
        {
          cardProductName: 'Debit Travel card',
          createAt: '20-01-2023',
          deliveryStatus: 'On the way',
          deliveryType: 'Express delivery by courier',
          id: '392',
        },
      ]);

      const expected = [
        {
          type: GetUserCardsActions.GET_USER_CARDS_REQUEST,
        },
        {
          cards: [
            {
              cardProductName: 'Debit Travel card',
              createAt: '20-01-2023',
              deliveryStatus: 'On the way',
              deliveryType: 'Express delivery by courier',
              id: '392',
            },
          ],
          type: GetUserCardsActions.GET_USER_CARDS_SUCCESS,
        },
      ];
      const store = mockStore(mockInitialState);

      return store.dispatch(requestUserCards(GET_USER_CARDS_URL)).then((): void => {
        expect(store.getActions()).toEqual(expected);
      });
    });

    test('should handle ERROR action', (): void => {
      jest.spyOn(GetRequestService, 'GetRequest').mockRejectedValue(new Error('Async Error'));

      const expected = [
        {
          type: GetUserCardsActions.GET_USER_CARDS_REQUEST,
        },
        {
          type: GetUserCardsActions.GET_USER_CARDS_ERROR,
        },
      ];
      const store = mockStore(mockInitialState);

      return store.dispatch(requestUserCards(GET_USER_CARDS_URL)).then((): void => {
        expect(store.getActions()).toEqual(expected);
      });
    });

    describe('requestUserCardDetailsById', (): void => {
      test('should handle SUCCESS action', (): void => {
        jest.spyOn(GetRequestService, 'GetRequest').mockResolvedValue([
          {
            cardProductName: 'Debit Travel card',
            createAt: '20-01-2023',
            deliveryStatus: 'On the way',
            deliveryType: 'Express delivery by courier',
            id: '392',
          },
        ]);

        const expected = [
          {
            type: GetUserCardDetailsByIdActions.GET_USER_CARD_DETAILS_BY_ID_REQUEST,
          },
          {
            card: [
              {
                cardProductName: 'Debit Travel card',
                createAt: '20-01-2023',
                deliveryStatus: 'On the way',
                deliveryType: 'Express delivery by courier',
                id: '392',
              },
            ],
            type: GetUserCardDetailsByIdActions.GET_USER_CARD_DETAILS_BY_ID_SUCCESS,
          },
        ];
        const store = mockStore(mockInitialState);

        return store.dispatch(requestUserCardDetailsById(GET_USER_CARDS_URL)).then((): void => {
          expect(store.getActions()).toEqual(expected);
        });
      });

      test('should handle ERROR action', (): void => {
        jest.spyOn(GetRequestService, 'GetRequest').mockRejectedValue(new Error('Async Error'));

        const expected = [
          {
            type: GetUserCardDetailsByIdActions.GET_USER_CARD_DETAILS_BY_ID_REQUEST,
          },
          {
            type: GetUserCardDetailsByIdActions.GET_USER_CARD_DETAILS_BY_ID_ERROR,
          },
        ];
        const store = mockStore(mockInitialState);

        return store.dispatch(requestUserCardDetailsById(GET_USER_CARDS_URL)).then((): void => {
          expect(store.getActions()).toEqual(expected);
        });
      });
    });

    describe('getUserCardById ', (): void => {
      test('should handle SUCCESS action', (): void => {
        const expected = {
          card: USER_CARD,
          type: GetUserCardDetailsByIdActions.GET_USER_CARD_DETAILS_BY_ID_SUCCESS,
        };

        expect(getUserCardById(USER_CARD)).toEqual(expected);
      });
    });
  });

  describe('resetUserCard', (): void => {
    test('should handle SUCCESS action', (): void => {
      const expected = [{ type: GetUserCardDetailsByIdActions.RESET_USER_CARD_DETAILS }];
      const store = mockStore(mockInitialState);

      return store.dispatch(resetUserCard()).then(() => {
        expect(store.getActions()).toEqual(expected);
      });
    });
  });

  describe('requestCardAmountFieldValidation', (): void => {
    test('should handle ERROR action with no statusRegistered', (): void => {
      jest.spyOn(PostRequestService, 'PostRequest').mockResolvedValue({ statusRegistered: false });

      const expected = [
        { type: CardAmountFieldValidation.CARD_AMOUNT_FIELD_VALIDATION_REQUEST },
        { type: CardAmountFieldValidation.CARD_AMOUNT_FIELD_VALIDATION_ERROR },
      ];
      const store = mockStore(mockInitialState);

      return store
        .dispatch(
          requestCardAmountFieldValidation(
            {
              cardId: 1,
              paymentAmount: 10000,
            },
            jest.fn()
          )
        )
        .then(() => {
          expect(store.getActions()).toEqual(expected);
        });
    });

    test('should handle SUCCESS action with statusRegistered', (): void => {
      jest.spyOn(PostRequestService, 'PostRequest').mockResolvedValue({ statusRegistered: true });

      const expected = [
        { type: CardAmountFieldValidation.CARD_AMOUNT_FIELD_VALIDATION_REQUEST },
        { type: CardAmountFieldValidation.CARD_AMOUNT_FIELD_VALIDATION_SUCCESS },
      ];
      const store = mockStore(mockInitialState);

      return store
        .dispatch(
          requestCardAmountFieldValidation(
            {
              cardId: 1,
              paymentAmount: 10000,
            },
            jest.fn()
          )
        )
        .then(() => {
          expect(store.getActions()).toEqual(expected);
        });
    });

    test('should handle server error response', (): void => {
      jest
        .spyOn(PostRequestService, 'PostRequest')
        .mockRejectedValue(new Error(JSON.stringify({ message: 'Async error' })));
      const expected = [
        { type: CardAmountFieldValidation.CARD_AMOUNT_FIELD_VALIDATION_REQUEST },
        { type: CardAmountFieldValidation.CARD_AMOUNT_FIELD_VALIDATION_ERROR },
      ];
      const store = mockStore(mockInitialState);

      return store
        .dispatch(
          requestCardAmountFieldValidation(
            {
              cardId: 1,
              paymentAmount: 100,
            },
            jest.fn()
          )
        )
        .then((): void => {
          expect(store.getActions()).toEqual(expected);
        });
    });
  });

  describe('requestCardActivation', (): void => {
    test('should handle SUCCESS status', (): void => {
      jest
        .spyOn(PutRequestService, 'PutRequest')
        .mockResolvedValue({ message: 'Success text', status: 200, res: true });

      const expected = [
        { type: CardActivation.CARD_ACTIVATION_REQUEST },
        { type: CardActivation.CARD_ACTIVATION_SUCCESS },
      ];
      const store = mockStore(mockInitialState);

      return store.dispatch(requestCardActivation({ cardId: 1, pinCode: '1111' }), jest.fn()).then((): void => {
        expect(store.getActions()).toEqual(expected);
      });
    });

    test('should handle server error response', (): void => {
      jest
        .spyOn(PutRequestService, 'PutRequest')
        .mockRejectedValue(new Error(JSON.stringify({ message: 'Async error' })));

      const expected = [{ type: CardActivation.CARD_ACTIVATION_REQUEST }, postCardActivationError('Async error')];
      const store = mockStore(mockInitialState);

      return store.dispatch(requestCardActivation({ cardId: 1, pinCode: '1111' })).then((): void => {
        expect(store.getActions()).toEqual(expected);
      });
    });

    test('should handle default server error response message', (): void => {
      jest
        .spyOn(PutRequestService, 'PutRequest')
        .mockRejectedValue(new Error(JSON.stringify({ message: ERROR_MESSAGE.somethingWentWrong })));

      const expected = [
        { type: CardActivation.CARD_ACTIVATION_REQUEST },
        postCardActivationError(ERROR_MESSAGE.somethingWentWrong),
      ];
      const store = mockStore(mockInitialState);

      return store.dispatch(requestCardActivation({ cardId: 1, pinCode: '1111' })).then((): void => {
        expect(store.getActions()).toEqual(expected);
      });
    });
  });

  describe('putTransactionLimitCard', (): void => {
    const mockAction = { cardId: 13, transactionLimit: 5000, changeLimitAgreed: true };

    test('shoud handle SUCCESS response', (): void => {
      jest
        .spyOn(PutRequestService, 'PutRequest')
        .mockResolvedValue({ message: 'Success message', transactionLimit: 5000, status: 200, res: true });

      const expected = [
        { type: ChangeCardLimit.CHANGE_CARD_TRANSACTIONS_LIMIT_REQUEST },
        changeTransactionLimitSuccess({ message: 'Success message', transactionLimit: 5000 }),
      ];
      const store = mockStore(mockInitialState);

      return store.dispatch(putTransactionLimitCard(mockAction)).then((): void => {
        expect(store.getActions()).toEqual(expected);
      });
    });

    test('should handle ERROR response', (): void => {
      jest
        .spyOn(PutRequestService, 'PutRequest')
        .mockRejectedValue(new Error(JSON.stringify({ message: 'Error message' })));

      const expected = [
        { type: ChangeCardLimit.CHANGE_CARD_TRANSACTIONS_LIMIT_REQUEST },
        changeTransactionLimitError('Error message'),
      ];
      const store = mockStore(mockInitialState);

      return store.dispatch(putTransactionLimitCard(mockAction)).then((): void => {
        expect(store.getActions()).toEqual(expected);
      });
    });
  });

  describe('requestPinCodeChange', (): void => {
    const mockAction = { cardId: 13, newPinCode: '1111' };

    test('should handle SUCCESS response', (): void => {
      jest
        .spyOn(PutRequestService, 'PutRequest')
        .mockResolvedValue({ message: 'Success message', status: 200, res: true });

      const expected = [
        { type: ChangeCardPinCode.CHANGE_CARD_PIN_CODE_REQUEST },
        { type: ChangeCardPinCode.CHANGE_CARD_PIN_CODE_SUCCESS },
      ];
      const store = mockStore(mockInitialState);

      return store.dispatch(requestPinCodeChange(mockAction), jest.fn()).then((): void => {
        expect(store.getActions()).toEqual(expected);
      });
    });

    test('should handle ERROR response', (): void => {
      jest
        .spyOn(PutRequestService, 'PutRequest')
        .mockRejectedValue(new Error(JSON.stringify({ message: 'Async error' })));

      const expected = [{ type: ChangeCardPinCode.CHANGE_CARD_PIN_CODE_REQUEST }, pinCodeChangeError('Async error')];
      const store = mockStore(mockInitialState);

      return store.dispatch(requestPinCodeChange(mockAction), jest.fn()).then((): void => {
        expect(store.getActions()).toEqual(expected);
      });
    });

    test('should handle default ERROR message response', (): void => {
      jest.spyOn(PutRequestService, 'PutRequest').mockRejectedValue(new Error(JSON.stringify({})));

      const expected = [
        { type: ChangeCardPinCode.CHANGE_CARD_PIN_CODE_REQUEST },
        pinCodeChangeError(ERROR_MESSAGE.somethingWentWrong),
      ];
      const store = mockStore(mockInitialState);

      return store.dispatch(requestPinCodeChange(mockAction), jest.fn()).then((): void => {
        expect(store.getActions()).toEqual(expected);
      });
    });
  });

  describe('activateCard', (): void => {
    test('should handle SUCCESS', (): void => {
      jest
        .spyOn(PutRequestService, 'PutRequest')
        .mockResolvedValue({ cardId: '138', changeStatusAgreed: true, status: 200, res: true });
      const expected = [
        { type: CardActivateBlock.ACTIVATE_BLOCK_CARD_REQUEST },
        { type: CardActivateBlock.ACTIVATE_BLOCK_CARD_SUCCESS, status: 200 },
      ];
      const store = mockStore(mockInitialState);

      return store
        .dispatch(activateBlockCard({ url: 'https://test.com', cardId: '138', isChangeStatusAgreed: true }))
        .then((): void => {
          expect(store.getActions()).toEqual(expected);
        });
    });

    test('should handle ERROR', (): void => {
      jest
        .spyOn(PutRequestService, 'PutRequest')
        .mockRejectedValue(new Error(JSON.stringify({ message: 'Async error' })));
      const expected = [
        { type: CardActivateBlock.ACTIVATE_BLOCK_CARD_REQUEST },
        { error: 'Async error', type: CardActivateBlock.ACTIVATE_BLOCK_CARD_ERROR },
      ];
      const store = mockStore(mockInitialState);

      return store
        .dispatch(activateBlockCard({ url: 'https://test.com', cardId: '138', isChangeStatusAgreed: true }))
        .then((): void => {
          expect(store.getActions()).toEqual(expected);
        });
    });

    test('should handle custom ERROR', (): void => {
      jest.spyOn(PutRequestService, 'PutRequest').mockRejectedValue(new Error(JSON.stringify({})));
      const expected = [
        { type: CardActivateBlock.ACTIVATE_BLOCK_CARD_REQUEST },
        { error: ERROR_MESSAGE.somethingWentWrong, type: CardActivateBlock.ACTIVATE_BLOCK_CARD_ERROR },
      ];
      const store = mockStore(mockInitialState);

      return store
        .dispatch(activateBlockCard({ url: 'https://test.com', cardId: '138', isChangeStatusAgreed: true }))
        .then((): void => {
          expect(store.getActions()).toEqual(expected);
        });
    });
  });
});
