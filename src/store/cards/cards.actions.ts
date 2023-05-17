import { CardsHistory } from 'constants/cardsFilter';
import {
  CardActivation,
  CardAmountFieldValidation,
  GetCreditCardsInfoActions,
  GetDebitCardsInfoActions,
  GetUserCardDetailsByIdActions,
  GetUserCardsActions,
  OrderCreditPremium,
  OrderDebitCard,
  ChangeCardLimit,
  ChangeCardPinCode,
} from 'constants/cardTypes';
import {
  CARD_FILTERED_HISTORY_URL,
  CARD_HISTORY_URL,
  CREDIT_CARD_ORDER,
  DEBIT_CARD_ORDER,
  DEBIT_CARDS_INFO_URL,
  CREDIT_CARDS_INFO_URL,
  GET_USER_CARD_APPLICATIONS,
  AMOUNT_FIELD_VALIDATION_URL,
  ACTIVATE_CARD_URL,
  TRANSACTION_LIMIT,
  CHANGE_CARD_PIN_URL,
} from 'constants/requestUrls';
import { ActionType } from 'interfaces/action';
import {
  RequestCardsInfo,
  RequestError,
  RequestCardOrder,
  RequestCardHistory,
  CardHistory,
  RequestUserCards,
  UserCard,
  RequestCardPayload,
  CardData,
  RequestUserCardById,
  RequestActivateBlockCard,
  ActivateBlockCard,
  ChangeStatusCard,
  ChangeLimitCard,
  RequestChangeTransactionLimit,
  ChangeTransactionInfo,
} from 'interfaces/myCard';
import { RequestBodyTypes } from 'interfaces/user';
import {
  CardActivationBody,
  CardApplication,
  CardChangePinCode,
  RequestCardAmountValidation,
  RequestUserCardApplications,
} from 'interfaces/application';
import { GetRequest } from 'services/getRequest';
import { PostRequest } from 'services/postRequest';
import { ERROR, SUCCESS } from 'constants/text';
import { ERROR_MESSAGE } from 'constants/errors';
import { TypedDispatch } from 'hooks';
import { GetUserCardApplications } from 'constants/cardApplications';
import { TransferFormsNames } from 'constants/transferFormsContent';
import { PutRequest } from 'services/putRequest';
import { CardActivateBlock } from '../../constants/cardActivateBlockText';

export const getCreditCardsInfoSuccess = (cardsInfo: CardData[]): RequestCardsInfo => ({
  type: GetCreditCardsInfoActions.GET_CREDIT_CARDS_INFO_SUCCESS,
  cardsInfo,
});

export const getDebitCardsInfoSuccess = (cardsInfo: CardData[]): RequestCardsInfo => ({
  type: GetDebitCardsInfoActions.GET_DEBIT_CARDS_INFO_SUCCESS,
  cardsInfo,
});

export const getCreditCardsInfoError = (error: string): RequestError => ({
  type: GetCreditCardsInfoActions.GET_CREDIT_CARDS_INFO_ERROR,
  error,
});

export const getDebitCardsInfoError = (error: string): RequestError => ({
  type: GetDebitCardsInfoActions.GET_DEBIT_CARDS_INFO_ERROR,
  error,
});

export const postOrderCardTemplateSuccess = ({ text, status }: RequestCardPayload): RequestCardOrder => ({
  type: OrderCreditPremium.ORDER_CREDIT_PREMIUM_SUCCESS,
  text,
  status,
});

export const postOrderCardTemplateError = (error: string = ERROR_MESSAGE.somethingWentWrong): RequestError => ({
  type: OrderCreditPremium.ORDER_CREDIT_PREMIUM_ERROR,
  error,
});

export const postOrderDebitCardTemplateSuccess = ({ text, status }: RequestCardPayload): RequestCardOrder => ({
  type: OrderDebitCard.ORDER_DEBIT_CARD_SUCCESS,
  text,
  status,
});

export const postOrderDebitCardTemplateError = (error: string = ERROR_MESSAGE.somethingWentWrong): RequestError => ({
  type: OrderDebitCard.ORDER_DEBIT_CARD_ERROR,
  error,
});

export const requestCreditCardsInfo = (): ActionType => async (dispatch) => {
  dispatch({ type: GetCreditCardsInfoActions.GET_CREDIT_CARDS_INFO_REQUEST });

  try {
    const cardsInfo = await GetRequest(CREDIT_CARDS_INFO_URL);
    dispatch(getCreditCardsInfoSuccess(cardsInfo));
  } catch (error) {
    if (error instanceof Error) dispatch(getCreditCardsInfoError(error.message));
  }
};

export const requestDebitCardsInfo = (): ActionType => async (dispatch) => {
  dispatch({ type: GetDebitCardsInfoActions.GET_DEBIT_CARDS_INFO_REQUEST });

  try {
    const cardsInfo = await GetRequest(DEBIT_CARDS_INFO_URL);
    dispatch(getDebitCardsInfoSuccess(cardsInfo));
  } catch (error) {
    if (error instanceof Error) dispatch(getDebitCardsInfoError(error.message));
  }
};

export const requestOrderCardTemplate =
  (cardInfo: RequestBodyTypes): ActionType =>
  async (dispatch) => {
    dispatch({ type: OrderCreditPremium.ORDER_CREDIT_PREMIUM_REQUEST });

    try {
      const data = await PostRequest(CREDIT_CARD_ORDER, cardInfo);

      if (data.res) dispatch(postOrderCardTemplateSuccess({ text: data.message, status: SUCCESS }));
      else dispatch(postOrderCardTemplateSuccess({ text: data.message, status: ERROR }));
    } catch (error) {
      if (error instanceof Error) {
        const { message } = JSON.parse(error.message);
        dispatch(postOrderCardTemplateError(message));
      }
    }
  };

export const requestOrderDebitCardTemplate =
  (cardInfo: RequestBodyTypes): ActionType =>
  async (dispatch) => {
    dispatch({ type: OrderDebitCard.ORDER_DEBIT_CARD_REQUEST });

    try {
      const data = await PostRequest(DEBIT_CARD_ORDER, cardInfo);

      if (data.res) dispatch(postOrderDebitCardTemplateSuccess({ text: data.message, status: SUCCESS }));
      else dispatch(postOrderDebitCardTemplateSuccess({ text: data.message, status: ERROR }));
    } catch (error) {
      if (error instanceof Error) {
        const { message } = JSON.parse(error.message);
        dispatch(postOrderDebitCardTemplateError(message));
      }
    }
  };

export const cardFilteredDataSuccess = (cardFilteredData: CardHistory[]): RequestCardHistory => ({
  type: CardsHistory.CARD_FILTERED_DATA_SUCCESS,
  cardFilteredData,
});

export const cardFilteredDataError = (error: string): RequestError => ({
  type: CardsHistory.CARD_FILTERED_DATA_ERROR,
  error,
});

export const requestCardFilteredHistory =
  (cardFilteredData: RequestBodyTypes): ActionType =>
  async (dispatch) => {
    dispatch({ type: CardsHistory.CARD_FILTERED_DATA_REQUEST });

    try {
      const data = await PostRequest(CARD_FILTERED_HISTORY_URL, cardFilteredData);

      if (data.res) dispatch(cardFilteredDataSuccess(data));
    } catch (error) {
      if (error instanceof Error) {
        const { message } = JSON.parse(error.message);
        dispatch(cardFilteredDataError(message));
      }
    }
  };

export const getCardHistorySuccess = (cardHistory: []) => ({
  type: CardsHistory.CARD_FILTERED_DATA_SUCCESS,
  cardHistory,
});

export const getCardHistoryError = (error: string): RequestError => ({
  type: CardsHistory.CARD_FILTERED_DATA_SUCCESS,
  error,
});

export const getCardHistory = (): ActionType => async (dispatch) => {
  dispatch({ type: CardsHistory.CARD_HISTORY_REQUEST });

  try {
    const cardHistory = await GetRequest(CARD_HISTORY_URL);
    dispatch(getCardHistorySuccess(cardHistory));
  } catch (error) {
    if (error instanceof Error) {
      dispatch(getCardHistoryError(error.message));
    }
  }
};

export const getActivateBlockCardError = (error = ERROR_MESSAGE.somethingWentWrong): RequestError => ({
  type: CardActivateBlock.ACTIVATE_BLOCK_CARD_ERROR,
  error,
});

export const getActivateBlockCardSuccess = ({ status, message }: RequestActivateBlockCard): ActivateBlockCard => ({
  type: CardActivateBlock.ACTIVATE_BLOCK_CARD_SUCCESS,
  status,
  message,
});

export const activateBlockCard =
  (cardInfo: ChangeStatusCard): ActionType =>
  async (dispatch) => {
    dispatch({ type: CardActivateBlock.ACTIVATE_BLOCK_CARD_REQUEST });

    try {
      const { url } = cardInfo;
      const data = await PutRequest(url, cardInfo);

      dispatch(getActivateBlockCardSuccess(data));
    } catch (error) {
      if (error instanceof Error) {
        const { message } = JSON.parse(error.message);
        dispatch(getActivateBlockCardError(message));
      }
    }
  };

export const getAllUserCards = (cards: UserCard[]): RequestUserCards => ({
  type: GetUserCardsActions.GET_USER_CARDS_SUCCESS,
  cards,
});

export const getCardApplicationsSuccess = (applications: CardApplication[]): RequestUserCardApplications => ({
  type: GetUserCardApplications.GET_USER_CARDS_APPLICATIONS_SUCCESS,
  applications,
});

export const getCardApplicationsError = (error: string): RequestError => ({
  type: GetUserCardApplications.GET_USER_CARDS_APPLICATIONS_ERROR,
  error,
});

export const changeTransactionLimitSuccess = ({
  message,
  transactionLimit,
}: ChangeTransactionInfo): RequestChangeTransactionLimit => ({
  type: ChangeCardLimit.CHANGE_CARD_TRANSACTIONS_LIMIT_SUCCESS,
  message,
  transactionLimit,
});

export const changeTransactionLimitError = (error: string): RequestError => ({
  type: ChangeCardLimit.CHANGE_CARD_TRANSACTIONS_LIMIT_ERROR,
  error,
});

export const requestUserCards =
  (url: string): ActionType =>
  async (dispatch) => {
    dispatch({
      type: GetUserCardsActions.GET_USER_CARDS_REQUEST,
    });

    try {
      const res = await GetRequest(url);

      if (res) {
        dispatch(getAllUserCards(res));
      }
    } catch (error) {
      dispatch({ type: GetUserCardsActions.GET_USER_CARDS_ERROR });
    }
  };

export const requestUserCardApplications = (): ActionType => async (dispatch: TypedDispatch) => {
  dispatch({
    type: GetUserCardApplications.GET_USER_CARDS_APPLICATIONS_REQUEST,
  });

  try {
    const res = await GetRequest(GET_USER_CARD_APPLICATIONS);

    if (res) {
      dispatch(getCardApplicationsSuccess(res));
    }
  } catch (error) {
    dispatch(getCardApplicationsError(error.message));
  }
};

export const getUserCardById = (card: UserCard): RequestUserCardById => ({
  type: GetUserCardDetailsByIdActions.GET_USER_CARD_DETAILS_BY_ID_SUCCESS,
  card,
});

export const requestUserCardDetailsById =
  (url: string): ActionType =>
  async (dispatch) => {
    dispatch({
      type: GetUserCardDetailsByIdActions.GET_USER_CARD_DETAILS_BY_ID_REQUEST,
    });

    try {
      const res = await GetRequest(url);

      if (res) {
        dispatch(getUserCardById(res));
      }
    } catch (error) {
      dispatch({ type: GetUserCardDetailsByIdActions.GET_USER_CARD_DETAILS_BY_ID_ERROR });
    }
  };

export const resetUserCard =
  (): ActionType =>
  async (dispatch: TypedDispatch): Promise<void> => {
    try {
      dispatch({ type: GetUserCardDetailsByIdActions.RESET_USER_CARD_DETAILS });
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  };

export const requestCardAmountFieldValidation =
  (
    { cardId, paymentAmount }: RequestCardAmountValidation,
    setFieldError: (field: string, message: string | undefined) => void
  ): ActionType =>
  async (dispatch) => {
    dispatch({ type: CardAmountFieldValidation.CARD_AMOUNT_FIELD_VALIDATION_REQUEST });

    try {
      const { statusMessage, statusRegistered } = await PostRequest(AMOUNT_FIELD_VALIDATION_URL, {
        cardId,
        paymentAmount,
      });

      if (!statusRegistered) {
        setFieldError(TransferFormsNames.PAYMENT_AMOUNT, statusMessage);
        dispatch({ type: CardAmountFieldValidation.CARD_AMOUNT_FIELD_VALIDATION_ERROR });
      } else {
        dispatch({ type: CardAmountFieldValidation.CARD_AMOUNT_FIELD_VALIDATION_SUCCESS });
      }
    } catch (error) {
      if (error instanceof Error) {
        const { message } = JSON.parse(error.message);
        setFieldError(TransferFormsNames.PAYMENT_AMOUNT, message);
        dispatch({ type: CardAmountFieldValidation.CARD_AMOUNT_FIELD_VALIDATION_ERROR });
      }
    }
  };

export const postCardActivationError = (error: string): RequestError => ({
  type: CardActivation.CARD_ACTIVATION_ERROR,
  error,
});

export const requestCardActivation =
  ({ cardId, pinCode }: CardActivationBody): ActionType =>
  async (dispatch: TypedDispatch): Promise<void> => {
    dispatch({ type: CardActivation.CARD_ACTIVATION_REQUEST });

    try {
      const data = await PutRequest(ACTIVATE_CARD_URL, { cardId, pinCode });
      data.res && dispatch({ type: CardActivation.CARD_ACTIVATION_SUCCESS });
    } catch (error) {
      if (error instanceof Error) {
        const { message } = JSON.parse(error.message);
        dispatch(postCardActivationError(message));
      }
    }
  };

export const putTransactionLimitCard =
  ({ cardId, transactionLimit, changeLimitAgreed }: ChangeLimitCard): ActionType =>
  async (dispatch: TypedDispatch): Promise<void> => {
    dispatch({ type: ChangeCardLimit.CHANGE_CARD_TRANSACTIONS_LIMIT_REQUEST });

    try {
      const data = await PutRequest(TRANSACTION_LIMIT, { cardId, transactionLimit, changeLimitAgreed });

      dispatch(changeTransactionLimitSuccess(data));
    } catch (error) {
      if (error instanceof Error) {
        const { message } = JSON.parse(error.message);
        dispatch(changeTransactionLimitError(message));
      }
    }
  };

export const pinCodeChangeError = (error: string = ERROR_MESSAGE.somethingWentWrong): RequestError => ({
  type: ChangeCardPinCode.CHANGE_CARD_PIN_CODE_ERROR,
  error,
});

export const requestPinCodeChange =
  ({ cardId, newPinCode }: CardChangePinCode): ActionType =>
  async (dispatch: TypedDispatch): Promise<void> => {
    dispatch({ type: ChangeCardPinCode.CHANGE_CARD_PIN_CODE_REQUEST });

    try {
      await PutRequest(CHANGE_CARD_PIN_URL, { cardId, newPinCode });

      dispatch({ type: ChangeCardPinCode.CHANGE_CARD_PIN_CODE_SUCCESS });
    } catch (error) {
      if (error instanceof Error) {
        const { message } = JSON.parse(error.message);
        dispatch(pinCodeChangeError(message));
      }
    }
  };
