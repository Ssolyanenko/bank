import { SetStateAction } from 'react';

import {
  AuthenticationLoginActions,
  AuthenticationLogoutActions,
  PasswordRecoveryActions,
  AuthenticationSMSActions,
  RequestCurrentUser,
  FIRST_LOGIN,
  SMS_FOR_SESSION,
  SMS_FAIL_THIRD_TEXT,
  SMS_FAIL_SECOND_TEXT,
  SMS_FAIL_FIRST_TEXT,
  PASSWORD_FAIL_FIRST_TEXT,
  PASSWORD_FAIL_SECOND_TEXT,
  PASSWORD_FAIL_THIRD_TEXT,
  GetUser,
  GetUserNotification,
  GetUserEmail,
  PostUserEmail,
  PostUserNotification,
  PostUserControlQuestion,
  PostUserChangePassword,
  PhoneNumberValidation,
} from 'constants/user';
import { PutRequest } from 'services/putRequest';
import { PostRequest } from 'services/postRequest';
import { GetRequest } from 'services/getRequest';
import { ActionType, RequestMiddleware, RequestSMS, RequestSMSMiddleware } from 'interfaces/action';
import {
  LoginSuccess,
  NewPasswordSuccess,
  PassportSuccess,
  SavePhoneUser,
  SMSSuccess,
  SMSError,
  SMSBanState,
  SMSFirstStepFail,
  SMSSecondStepFail,
  SuccessAction,
  UserErrorMessage,
  LoginUnregistered,
  SendNewSMS,
  FirstLogin,
  UserLogoutSuccess,
  UserLogoutError,
  FetchCurrentUserSuccess,
  FetchCurrentUserError,
  UserAccount,
  UserAccountState,
  NotificationState,
  RequestSecurityQuestion,
  RequestTransferPhoneValidation,
  RequestSecurityPassword,
  EmailState,
  ChangePasswordSuccess,
  ResponseBodyLogin,
  LoginGetBanTimer,
  PassportDataSuccess,
  ResponseBodyPassport,
} from 'interfaces/user';
import {
  SMS_NEW_URL,
  SIGN_OUT_URL,
  USER_DATA_URL,
  REFRESH_TOKEN_URL,
  NOTIFICATION_URL,
  CHANGE_CONTROL_QUESTION,
  PHONE_FIELD_VALIDATION_URL,
  CHANGE_PASSWORD_SECURITY_SETTINGS,
  EMAIL_URL,
} from 'constants/requestUrls';
import { clearAccessToken, getAccessToken, getAvailableNotifications, getCountFailMessage } from 'helpers';
import { requestLogout } from 'services/requestLogout';
import { requestCurrentUser } from 'services/requestCurrentUser';
import { requestAccessTokenInterval } from 'services/requestAccessTokenInterval';
import { DELAY_ACCESS_REQUEST } from 'constants/delayAccessRequest';
import { TransferFormsNames } from 'constants/transferFormsContent';

let refreshTokenInterval: NodeJS.Timeout;

export const loginSuccess = (isAuth: boolean, isSMSOpen: boolean): LoginSuccess => ({
  type: AuthenticationLoginActions.LOGIN_SUCCESS,
  isAuth,
  isSMSOpen,
  token: getAccessToken(),
});

export const loginError = (errorMessage: string): UserErrorMessage => ({
  type: AuthenticationLoginActions.LOGIN_FAIL,
  errorMessage,
});

export const loginUnregistered = (isUnregistered: boolean): LoginUnregistered => ({
  type: AuthenticationLoginActions.LOGIN_UNREGISTERED,
  isUnregistered,
});

export const loginGetBanTimer = (banTimeUntil: string): LoginGetBanTimer => ({
  type: AuthenticationSMSActions.SET_ACTUAL_TIME_BAN,
  banTimeUntil,
});

export const changePasswordSuccess = (): ChangePasswordSuccess => ({
  type: PostUserChangePassword.POST_CHANGE_PASSWORD_SUCCESS,
  isSMSOpen: true,
});

export const changePasswordError = (errorMessage: string): UserErrorMessage => ({
  type: PostUserChangePassword.POST_CHANGE_PASSWORD_ERROR,
  errorMessage,
});

export const logoutSuccess = (): UserLogoutSuccess => ({
  type: AuthenticationLogoutActions.LOGOUT_SUCCESS,
  isAuth: false,
  token: '',
});

export const logoutError = (): UserLogoutError => ({
  type: AuthenticationLogoutActions.LOGOUT_ERROR,
  isAuth: false,
});

export const postPassportSuccess = (isCheckPassport: boolean): PassportSuccess => ({
  type: PasswordRecoveryActions.POST_PASSPORT_SUCCESS,
  isCheckPassport,
});

export const postPassportDataSuccess = (phone: string, blockedUntilTime: string | null): PassportDataSuccess => ({
  type: PasswordRecoveryActions.POST_PASSPORT_DATA_SUCCESS,
  phone,
  blockedUntilTime,
});

export const postSmsSuccess = (isCheckSms: boolean): SuccessAction => ({
  type: PasswordRecoveryActions.POST_SMS_SUCCESS,
  isCheckSms,
});

export const postNewPasswordSuccess = (isChangePassword: boolean): NewPasswordSuccess => ({
  type: PasswordRecoveryActions.POST_NEW_PASSWORD_SUCCESS,
  isChangePassword,
});

export const postSaveMessageError = (errorMessage: string): UserErrorMessage => ({
  type: PasswordRecoveryActions.POST_USER_DATA_ERROR,
  errorMessage,
});

export const postSavePhoneUser = (phoneUser: string): SavePhoneUser => ({
  type: PasswordRecoveryActions.POST_SAVE_PHONE_USER,
  phoneUser,
});

export const setSMSFirstStepFail = (isSMSFirstStepFail: boolean): SMSFirstStepFail => ({
  type: AuthenticationSMSActions.SET_SMS_FIRST_STEP_FAIL,
  isSMSFirstStepFail,
});

export const setSMSSecondStepFail = (isSMSSecondStepFail: boolean): SMSSecondStepFail => ({
  type: AuthenticationSMSActions.SET_SMS_SECOND_STEP_FAIL,
  isSMSSecondStepFail,
});

export const setSMSLoginBan = (isSMSBanState: boolean): SMSBanState => ({
  type: AuthenticationSMSActions.SET_SMS_LOGIN_BAN,
  isSMSBanState,
});

export const setSMSResetPassportBan = (isSMSBanState: boolean): SMSBanState => ({
  type: AuthenticationSMSActions.SET_SMS_RESET_PASSPORT_BAN,
  isSMSBanState,
});

export const setSMSError = (error: string): SMSError => ({
  type: AuthenticationSMSActions.SET_SMS_ERROR,
  payload: { error },
});

export const setSMSErrorMessage = (errorMessage: string): UserErrorMessage => ({
  type: AuthenticationSMSActions.SET_SMS_ERROR,
  errorMessage,
});

export const setSMSSuccess = (isSMSAuth: boolean): SMSSuccess => ({
  type: AuthenticationSMSActions.SET_SMS_VALID,
  isSMSAuth,
});

export const setNewCode = (isSend: boolean): SendNewSMS => ({
  type: AuthenticationSMSActions.SET_NEW_SMS,
  isSend,
});

export const setFirstlogin = (isFirstLogin: boolean): FirstLogin => ({
  type: AuthenticationLoginActions.SET_FIRST_LOGIN,
  isFirstLogin,
});

export const getCurrentUserSuccess = (userData: UserAccountState): FetchCurrentUserSuccess => ({
  type: RequestCurrentUser.CURRENT_USER_FETCH_SUCCESS,
  isAuth: true,
  token: getAccessToken(),
  userData,
});

export const getCurrentUserError = (error: string): FetchCurrentUserError => ({
  type: RequestCurrentUser.CURRENT_USER_FETCH_ERROR,
  token: '',
  isAuth: false,
  error,
});

export const setUserData = (data: UserAccountState): UserAccount => ({
  type: GetUser.GET_USER_SUCCESS,
  payload: data,
});

export const getUserNotifications = (enabledNotificationSettings: NotificationState) => ({
  type: GetUserNotification.GET_NOTIFICATION_SUCCESS,
  payload: enabledNotificationSettings,
});

export const setUserEmail = (email: string) => ({
  type: PostUserEmail.POST_EMAIL_SUCCESS,
  email,
});

export const requestSMS =
  ({ body, url, responseMessage, actionError }: RequestSMS): ActionType =>
  async (dispatch) => {
    try {
      const smsData = await PostRequest(url, body);

      if (smsData.message === responseMessage) {
        return dispatch(setNewCode(true));
      }
    } catch (error) {
      const { message } = JSON.parse(error.message);
      dispatch(actionError(message));
    }
  };

export const requestSmsDataLogin =
  ({ body, url, actionSuccess, actionError }: RequestSMSMiddleware): ActionType =>
  async (dispatch) => {
    dispatch({ type: AuthenticationSMSActions.SET_SMS_REQUEST });

    try {
      const smsData = await PostRequest(url, body);

      if (smsData.message === FIRST_LOGIN) {
        return dispatch(setFirstlogin(true));
      }

      dispatch(setSMSResetPassportBan(false));
      dispatch(loginSuccess(true, false));
      dispatch(actionSuccess(true));
    } catch (error) {
      if (error instanceof Error) {
        try {
          const { failsCount } = JSON.parse(error.message);
          const failTexts = [SMS_FAIL_FIRST_TEXT, SMS_FAIL_SECOND_TEXT, SMS_FAIL_THIRD_TEXT];

          if (failsCount) {
            const { text, index } = getCountFailMessage(failsCount, failTexts);
            dispatch(setSMSLoginBan(index === -1));
            dispatch(actionError(text));
          }
        } catch (error) {
          dispatch(actionError(error.message));
        }
      }
    }
  };

export const requestUserLogin =
  ({ body, url, actionSuccess, actionError }: RequestMiddleware): ActionType =>
  async (dispatch) => {
    dispatch({ type: AuthenticationLoginActions.LOGIN_REQUEST });

    try {
      clearAccessToken();

      const { phone, blockedUntil }: ResponseBodyLogin = await PostRequest(url, body);

      dispatch(postSavePhoneUser(phone));
      dispatch(actionSuccess(true, true));

      if (blockedUntil) {
        dispatch(loginGetBanTimer(blockedUntil));
        dispatch(setSMSLoginBan(true));

        return;
      }

      await PostRequest(SMS_NEW_URL, { smsFilterType: SMS_FOR_SESSION });
      dispatch({ type: AuthenticationSMSActions.SET_SMS_REQUEST });
      sessionStorage.setItem('refreshTokenLastModifiedDate', Date.now().toString());
      clearInterval(refreshTokenInterval);
      refreshTokenInterval = setInterval(requestAccessTokenInterval, DELAY_ACCESS_REQUEST, REFRESH_TOKEN_URL);
      dispatch(loginGetBanTimer(''));
      dispatch(setSMSLoginBan(false));
    } catch (error) {
      if (error instanceof Error) {
        try {
          const { failsCount, message } = JSON.parse(error.message);
          const failTexts = [PASSWORD_FAIL_FIRST_TEXT, PASSWORD_FAIL_SECOND_TEXT, PASSWORD_FAIL_THIRD_TEXT];

          if (!failsCount) {
            dispatch(actionError(message));

            return;
          }

          const { text, index } = getCountFailMessage(failsCount, failTexts);
          dispatch(setSMSLoginBan(index === -1));
          dispatch(actionError(text));
        } catch (error) {
          dispatch(actionError(error.message));
        }
      }
    }
  };

export const requestUserIDResetPassword =
  ({ body, url, actionSuccess, actionError, nextStep = () => {} }: RequestMiddleware): ActionType =>
  async (dispatch) => {
    dispatch({ type: PasswordRecoveryActions.POST_USER_DATA_REQUEST });

    try {
      clearAccessToken();

      const { blockedUntil, phone }: ResponseBodyPassport = await PostRequest(url, body);

      dispatch(setSMSResetPassportBan(!!blockedUntil));
      dispatch(postPassportDataSuccess(phone, blockedUntil));
      dispatch(actionSuccess(true));
      nextStep(true);
    } catch (error) {
      if (error instanceof Error) {
        const data = JSON.parse(error.message);
        dispatch(actionError(data.message));
      }
    }
  };

export const requestUserSMSResetPassword =
  ({ body, url, actionSuccess, actionError, nextStep = () => {} }: RequestMiddleware): ActionType =>
  async (dispatch) => {
    dispatch({ type: PasswordRecoveryActions.POST_USER_DATA_REQUEST });

    try {
      await PostRequest(url, body);

      dispatch(actionSuccess(true));
      nextStep(true);
    } catch (error) {
      if (error instanceof Error) {
        try {
          const { failsCount } = JSON.parse(error.message);
          const failTexts = [SMS_FAIL_FIRST_TEXT, SMS_FAIL_SECOND_TEXT, SMS_FAIL_THIRD_TEXT];

          if (failsCount) {
            const { text, index } = getCountFailMessage(failsCount, failTexts);

            dispatch(setSMSResetPassportBan(index === -1));
            dispatch(actionError(text));
          }
        } catch (error) {
          dispatch(actionError(error.message));
        }
      }
    }
  };

export const requestUserResetPassword =
  ({ body, url, actionSuccess, actionError }: RequestMiddleware): ActionType =>
  async (dispatch) => {
    try {
      await PostRequest(url, body);

      dispatch(actionSuccess(true));
    } catch (error) {
      if (error instanceof Error) {
        const { message } = JSON.parse(error.message);
        dispatch(actionError(message));
      }
    }
  };

export const requestUserDataAfterLogin =
  (url: string): ActionType =>
  async (dispatch) => {
    dispatch({ type: GetUser.GET_USER_REQUEST });

    try {
      const data = await GetRequest(url);

      if (data) {
        dispatch(setUserData(data));
      }
    } catch (error) {
      dispatch({ type: GetUser.GET_USER_ERROR });
    }
  };

export const requestGetEmail =
  (url: string): ActionType =>
  async (dispatch) => {
    dispatch({ type: GetUserEmail.GET_EMAIL_REQUEST });

    try {
      const data = await GetRequest(url);

      if (data?.email) {
        dispatch(setUserEmail(data.email));
      }
    } catch (error) {
      if (error instanceof Error) {
        dispatch({ type: GetUserEmail.GET_EMAIL_ERROR });
      }
    }
  };

export const requestPostEmail =
  (url: string, body: EmailState, setIsEntred: { (value: SetStateAction<boolean>): void }): ActionType =>
  async (dispatch) => {
    dispatch({ type: PostUserEmail.POST_EMAIL_REQUEST });

    try {
      const data = await PutRequest(url, body);

      if (data.res) {
        requestGetEmail(EMAIL_URL);
        setIsEntred(false);
      }
    } catch (error) {
      if (error instanceof Error) {
        dispatch({ type: PostUserEmail.POST_EMAIL_ERROR });
      }
    }
  };

export const requestUserLogout = (): ActionType => async (dispatch) => {
  dispatch({ type: AuthenticationLogoutActions.LOGOUT_REQUEST });

  try {
    await requestLogout(SIGN_OUT_URL);
    dispatch(logoutSuccess());
    clearInterval(refreshTokenInterval);
  } catch (error) {
    if (error instanceof Error) dispatch(logoutError());
  }
};

export const fetchCurrentUser = (): ActionType => async (dispatch, getState) => {
  const { token } = getState().userData.userLogin;

  if (!token) {
    return;
  }

  try {
    const userData = await requestCurrentUser(USER_DATA_URL);
    dispatch(getCurrentUserSuccess(userData));
  } catch (error) {
    if (error instanceof Error) {
      clearAccessToken();
      dispatch(getCurrentUserError(error.message));
    }
  }
};

export const requestUserNotifications = (): ActionType => async (dispatch) => {
  dispatch({ type: GetUserNotification.GET_NOTIFICATION_REQUEST });

  try {
    const data = await GetRequest(NOTIFICATION_URL);

    dispatch(getUserNotifications(data));
  } catch (error) {
    if (error instanceof Error) {
      dispatch({ type: GetUserNotification.GET_NOTIFICATION_ERROR });
    }
  }
};

export const requestUserNotificationChange =
  (notificationName: string): ActionType =>
  async (dispatch, getState) => {
    dispatch({ type: PostUserNotification.POST_NOTIFICATION_REQUEST });

    const enabledNotifications = getState().userData.userAccount.enabledNotificationSettings;
    const availableNotifications = getAvailableNotifications(enabledNotifications, notificationName);

    try {
      const data = await PutRequest(NOTIFICATION_URL, {
        enabledNotificationSettings: availableNotifications,
      });

      if (data.res) {
        dispatch(requestUserNotifications());
      }
    } catch (error) {
      if (error instanceof Error) {
        dispatch({ type: PostUserNotification.POST_NOTIFICATION_ERROR });
      }
    }
  };

export const requestPostSecurityQuestion =
  ({ question, answer }: RequestSecurityQuestion): ActionType =>
  async (dispatch) => {
    dispatch({ type: PostUserControlQuestion.POST_CONTROL_QUESTION_REQUEST });

    try {
      const result = await PostRequest(CHANGE_CONTROL_QUESTION, { question, answer });

      if (result.status === 200) {
        dispatch({ type: PostUserControlQuestion.POST_CONTROL_QUESTION_SUCCESS });
      }
    } catch (error) {
      if (error instanceof Error) {
        dispatch({ type: PostUserControlQuestion.POST_CONTROL_QUESTION_ERROR });
      }
    }
  };

export const requestPostSecurityPassword =
  ({ currentPassword, newPassword }: RequestSecurityPassword): ActionType =>
  async (dispatch) => {
    dispatch({ type: PostUserChangePassword.POST_CHANGE_PASSWORD_REQUEST });

    try {
      await PostRequest(CHANGE_PASSWORD_SECURITY_SETTINGS, { currentPassword, newPassword });
      dispatch(changePasswordSuccess());
    } catch (error) {
      if (error instanceof Error) {
        const { message } = JSON.parse(error.message);
        dispatch(changePasswordError(message));
      }
    }
  };

export const requestPhoneFieldValidation =
  (
    phoneNumber: RequestTransferPhoneValidation,
    setFieldError: (field: string, message: string | undefined) => void
  ): ActionType =>
  async (dispatch) => {
    dispatch({ type: PhoneNumberValidation.PHONE_NUMBER_FIELD_REQUEST });

    try {
      const { statusRegistered, statusMessage } = await PostRequest(PHONE_FIELD_VALIDATION_URL, phoneNumber);

      if (!statusRegistered) {
        setFieldError(TransferFormsNames.PHONE_NUMBER, statusMessage);
        dispatch({ type: PhoneNumberValidation.PHONE_NUMBER_FIELD_ERROR });
      } else {
        dispatch({ type: PhoneNumberValidation.PHONE_NUMBER_FIELD_SUCCESS });
      }
    } catch (error) {
      if (error instanceof Error) {
        const { message } = JSON.parse(error.message);
        setFieldError(TransferFormsNames.PHONE_NUMBER, message);
        dispatch({ type: PhoneNumberValidation.PHONE_NUMBER_FIELD_ERROR });
      }
    }
  };
