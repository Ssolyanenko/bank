import * as Service from 'services/requestLogout';
import * as PostRequestService from 'services/postRequest';
import * as GetRequestService from 'services/getRequest';
import * as RequestCurrentUserService from 'services/requestCurrentUser';
import * as PutRequestService from 'services/putRequest';
import * as GetUserActionService from 'store/user/user.actions';
import {
  CHANGE_PASSWORD_PASSPORT_URL,
  EMAIL_URL,
  LOGIN_URL,
  NOTIFICATION_URL,
  SMS_URL,
  USER_DATA_URL,
  CHANGE_PASSWORD_CHECK_SMS_URL,
  CHANGE_PASSWORD_NEW_PASSWORD_URL,
} from 'constants/requestUrls';
import {
  ACCESS_GRANTED,
  AuthenticationLoginActions,
  AuthenticationLogoutActions,
  AuthenticationSMSActions,
  ExchangeRatesActions,
  FIRST_LOGIN,
  PasswordRecoveryActions,
  PhoneNumberValidation,
  RequestCurrentUser,
  RESPONSE_MESSAGE_NEW_PASSWORD,
  RESPONSE_MESSAGE_PASSPORT,
  PASSWORD_FAIL_FIRST_TEXT,
  PASSWORD_FAIL_SECOND_TEXT,
  PASSWORD_FAIL_THIRD_TEXT,
  SMS_SEND_AGAIN,
  SMS_NOT_VALID,
  SMS_FAIL_FIRST_TEXT,
  SMS_FAIL_SECOND_TEXT,
  SMS_FAIL_THIRD_TEXT,
  SESSION_CODE_IS_CORRECT,
  GetUser,
  GetUserNotification,
  GetUserEmail,
  PostUserEmail,
  PostUserNotification,
  PostUserControlQuestion,
  PostUserChangePassword,
} from 'constants/user';
import { fakeSessionStorage, getAccessToken, mockStore } from 'helpers';
import { mockInitialState } from 'constants/mockInitialState';
import { SMS_MOCK_REQUEST } from 'constants/mockUsers';
import { NotificationTypes } from 'constants/notificationsTypes';
import {
  fetchCurrentUser,
  getUserNotifications,
  loginSuccess,
  loginError,
  loginUnregistered,
  postSaveMessageError,
  postNewPasswordSuccess,
  requestPhoneFieldValidation,
  requestPostSecurityQuestion,
  requestSMS,
  postSmsSuccess,
  requestSmsDataLogin,
  requestUserIDResetPassword,
  requestUserSMSResetPassword,
  requestUserResetPassword,
  requestUserLogin,
  requestUserLogout,
  requestUserNotificationChange,
  requestUserNotifications,
  setSMSError,
  setSMSErrorMessage,
  setSMSFirstStepFail,
  setSMSSecondStepFail,
  setSMSSuccess,
  postPassportSuccess,
  requestGetEmail,
  requestPostEmail,
  requestUserDataAfterLogin,
  requestPostSecurityPassword,
} from 'store/user';
import { postRateError } from 'store/exchangeRates';
import { ActionType } from 'interfaces/action';

Object.defineProperty(global, 'sessionStorage', {
  value: fakeSessionStorage(),
});

describe('user.actions', (): void => {
  describe('requestUserLogout', (): void => {
    test('should handle SUCCESS action', (): void => {
      jest.spyOn(Service, 'requestLogout').mockResolvedValue({});

      const store = mockStore(mockInitialState);
      const expected = [
        { type: AuthenticationLogoutActions.LOGOUT_REQUEST },
        {
          type: AuthenticationLogoutActions.LOGOUT_SUCCESS,
          isAuth: false,
          token: '',
        },
      ];

      return store.dispatch(requestUserLogout()).then(() => {
        expect(store.getActions()).toEqual(expected);
      });
    });

    test('should handle ERROR action', (): void => {
      jest.spyOn(Service, 'requestLogout').mockRejectedValue(new Error('Async error'));

      const store = mockStore(mockInitialState);
      const expected = [
        { type: AuthenticationLogoutActions.LOGOUT_REQUEST },
        {
          type: AuthenticationLogoutActions.LOGOUT_ERROR,
          isAuth: false,
        },
      ];

      return store.dispatch(requestUserLogout()).then(() => {
        expect(store.getActions()).toEqual(expected);
      });
    });
  });

  describe('requestSMS', (): void => {
    test('should receive data', (): void => {
      jest
        .spyOn(PostRequestService, 'PostRequest')
        .mockResolvedValue({ message: SMS_SEND_AGAIN, status: 200, res: true });

      const store = mockStore(mockInitialState);
      const expected = [
        {
          isSend: true,
          type: AuthenticationSMSActions.SET_NEW_SMS,
        },
      ];

      return store.dispatch(requestSMS(SMS_MOCK_REQUEST)).then(() => {
        expect(store.getActions()).toEqual(expected);
      });
    });

    test('should handle ERROR action', (): void => {
      jest
        .spyOn(PostRequestService, 'PostRequest')
        .mockRejectedValue(new Error(JSON.stringify({ message: 'Async error' })));

      const expected = [{ payload: { error: 'Async error' }, type: AuthenticationSMSActions.SET_SMS_ERROR }];
      const store = mockStore(mockInitialState);

      return store.dispatch(requestSMS(SMS_MOCK_REQUEST)).then(() => {
        expect(store.getActions()).toEqual(expected);
      });
    });
  });

  describe('requestPostSecurityQuestion', (): void => {
    test('should handle SUCCESS action', (): void => {
      jest
        .spyOn(PostRequestService, 'PostRequest')
        .mockResolvedValue({ message: 'Control question/answer changed successfully', status: 200, res: true });
      const store = mockStore(mockInitialState);

      const securityQuestionInfo = {
        question: 'Favourite car?',
        answer: 'Bentley',
      };
      const expected = [
        { type: PostUserControlQuestion.POST_CONTROL_QUESTION_REQUEST },
        { type: PostUserControlQuestion.POST_CONTROL_QUESTION_SUCCESS },
      ];

      return store.dispatch(requestPostSecurityQuestion(securityQuestionInfo)).then((): void => {
        expect(store.getActions()).toEqual(expected);
      });
    });

    test('should handle ERROR action', (): void => {
      jest.spyOn(PostRequestService, 'PostRequest').mockRejectedValue(new Error('Wrong symbols error'));
      const store = mockStore(mockInitialState);
      const securityQuestionInfo = { question: 'Street number', answer: '' };
      const expected = [
        { type: PostUserControlQuestion.POST_CONTROL_QUESTION_REQUEST },
        { type: PostUserControlQuestion.POST_CONTROL_QUESTION_ERROR },
      ];

      return store.dispatch(requestPostSecurityQuestion(securityQuestionInfo)).then((): void => {
        expect(store.getActions()).toEqual(expected);
      });
    });
  });

  describe('requestPostSecurityPassword', (): void => {
    test('should handle SUCCESS action', (): void => {
      jest
        .spyOn(PostRequestService, 'PostRequest')
        .mockResolvedValue({ currentPassword: 'Password2', newPassword: 'Password23', res: true });
      const store = mockStore(mockInitialState);

      const securityPasswordInfo = {
        currentPassword: 'Password2',
        newPassword: 'Password23',
      };
      const expected = [
        { type: PostUserChangePassword.POST_CHANGE_PASSWORD_REQUEST },
        { type: PostUserChangePassword.POST_CHANGE_PASSWORD_SUCCESS, isSMSOpen: true },
      ];

      return store.dispatch(requestPostSecurityPassword(securityPasswordInfo)).then((): void => {
        expect(store.getActions()).toEqual(expected);
      });
    });

    test('should handle ERROR action', (): void => {
      jest
        .spyOn(PostRequestService, 'PostRequest')
        .mockRejectedValue(new Error(JSON.stringify({ message: 'Wrong symbols error' })));
      const store = mockStore(mockInitialState);
      const securityPasswordInfo = {
        currentPassword: 'test',
        newPassword: 'test',
      };
      const expected = [
        { type: PostUserChangePassword.POST_CHANGE_PASSWORD_REQUEST },
        { type: PostUserChangePassword.POST_CHANGE_PASSWORD_ERROR, errorMessage: 'Wrong symbols error' },
      ];

      return store.dispatch(requestPostSecurityPassword(securityPasswordInfo)).then((): void => {
        expect(store.getActions()).toEqual(expected);
      });
    });
  });

  test('should handle SUCCESS action', (): void => {
    const expected = {
      type: AuthenticationLoginActions.LOGIN_UNREGISTERED,
      isUnregistered: true,
    };

    expect(loginUnregistered(true)).toEqual(expected);
  });

  test('should handle ERROR action', (): void => {
    const expected = {
      type: AuthenticationSMSActions.SET_SMS_ERROR,
      payload: { error: '' },
    };

    expect(setSMSError('')).toEqual(expected);
  });

  test('should handle isSMSFirstStepFail action', (): void => {
    const expected = {
      type: AuthenticationSMSActions.SET_SMS_FIRST_STEP_FAIL,
      isSMSFirstStepFail: false,
    };

    expect(setSMSFirstStepFail(false)).toEqual(expected);
  });

  test('should handle isSMSSecondStepFail action', (): void => {
    const expected = {
      type: AuthenticationSMSActions.SET_SMS_SECOND_STEP_FAIL,
      isSMSSecondStepFail: false,
    };

    expect(setSMSSecondStepFail(false)).toEqual(expected);
  });

  test('should handle getUserNotifications action', (): void => {
    const store = mockStore(mockInitialState);
    const notification = { enabledNotificationSettings: ['test'] };
    const expected = {
      type: GetUserNotification.GET_NOTIFICATION_SUCCESS,
      payload: notification,
    };

    expect(store.dispatch(getUserNotifications(notification))).toEqual(expected);
  });

  test('should handle postRateError action', (): void => {
    const expected = {
      type: ExchangeRatesActions.GET_RATES_ERROR,
      payload: { error: '' },
    };

    expect(postRateError('')).toEqual(expected);
  });

  describe('requestUserLogin', (): void => {
    test('should handle successful Login', (): void => {
      jest.spyOn(PostRequestService, 'PostRequest').mockResolvedValue({
        message: ACCESS_GRANTED,
        phoneUser: '+12345678912345',
        blockedUntil: null,
        status: 200,
        res: true,
      });

      const token = getAccessToken();

      const store = mockStore(mockInitialState);

      const data = {
        body: { login: 'Test1234', password: 'Test1234' },
        url: LOGIN_URL,
        actionSuccess: loginSuccess,
        actionError: loginError,
      };

      const expected = [
        {
          type: AuthenticationLoginActions.LOGIN_REQUEST,
        },
        {
          type: PasswordRecoveryActions.POST_SAVE_PHONE_USER,
        },
        {
          type: AuthenticationLoginActions.LOGIN_SUCCESS,
          isAuth: true,
          isSMSOpen: true,
        },
        {
          type: AuthenticationSMSActions.SET_SMS_REQUEST,
        },
        {
          type: AuthenticationSMSActions.SET_ACTUAL_TIME_BAN,
          banTimeUntil: '',
        },
        {
          type: AuthenticationSMSActions.SET_SMS_LOGIN_BAN,
          isSMSBanState: false,
        },
      ];

      return store.dispatch(requestUserLogin(data)).then((): void => {
        expect(store.getActions()).toEqual(expected);
      });
    });

    test('should handle successful Login with SMS block', (): void => {
      jest.spyOn(PostRequestService, 'PostRequest').mockResolvedValue({
        message: ACCESS_GRANTED,
        phoneUser: '+12345678912345',
        blockedUntil: '2023-04-06T09:35:26.936397Z',
        status: 200,
        res: true,
      });

      const token = getAccessToken();

      const store = mockStore(mockInitialState);

      const data = {
        body: { login: 'Test1234', password: 'Test1234' },
        url: LOGIN_URL,
        actionSuccess: loginSuccess,
        actionError: loginError,
      };

      const expected = [
        {
          type: AuthenticationLoginActions.LOGIN_REQUEST,
        },
        {
          type: PasswordRecoveryActions.POST_SAVE_PHONE_USER,
        },
        {
          type: AuthenticationLoginActions.LOGIN_SUCCESS,
          isAuth: true,
          isSMSOpen: true,
        },
        {
          type: AuthenticationSMSActions.SET_ACTUAL_TIME_BAN,
          banTimeUntil: '2023-04-06T09:35:26.936397Z',
        },
        {
          type: AuthenticationSMSActions.SET_SMS_LOGIN_BAN,
          isSMSBanState: true,
        },
      ];

      return store.dispatch(requestUserLogin(data)).then((): void => {
        expect(store.getActions()).toEqual(expected);
      });
    });

    test('should handle first unsuccessful login', (): void => {
      jest
        .spyOn(PostRequestService, 'PostRequest')
        .mockRejectedValue(
          new Error(JSON.stringify({ message: PASSWORD_FAIL_FIRST_TEXT, failsCount: 1, status: 400, res: false }))
        );

      const store = mockStore(mockInitialState);

      const data = {
        body: { login: 'Test1234', password: 'Test1234' },
        url: LOGIN_URL,
        actionSuccess: loginSuccess,
        actionError: loginError,
      };

      const expected = [
        {
          type: AuthenticationLoginActions.LOGIN_REQUEST,
        },
        {
          type: AuthenticationSMSActions.SET_SMS_LOGIN_BAN,
          isSMSBanState: false,
        },
        {
          type: AuthenticationLoginActions.LOGIN_FAIL,
          errorMessage: PASSWORD_FAIL_FIRST_TEXT,
        },
      ];

      return store.dispatch(requestUserLogin(data)).then((): void => {
        expect(store.getActions()).toEqual(expected);
      });
    });

    test('should handle second unsuccessful login', (): void => {
      jest
        .spyOn(PostRequestService, 'PostRequest')
        .mockRejectedValue(
          new Error(JSON.stringify({ message: PASSWORD_FAIL_SECOND_TEXT, failsCount: 2, status: 400, res: false }))
        );

      const store = mockStore(mockInitialState);

      const data = {
        body: { login: 'Test1234', password: 'Test1234' },
        url: LOGIN_URL,
        actionSuccess: loginSuccess,
        actionError: loginError,
      };

      const expected = [
        {
          type: AuthenticationLoginActions.LOGIN_REQUEST,
        },
        {
          type: AuthenticationSMSActions.SET_SMS_LOGIN_BAN,
          isSMSBanState: false,
        },
        {
          type: AuthenticationLoginActions.LOGIN_FAIL,
          errorMessage: PASSWORD_FAIL_SECOND_TEXT,
        },
      ];

      return store.dispatch(requestUserLogin(data)).then((): void => {
        expect(store.getActions()).toEqual(expected);
      });
    });

    test('should handle third unsuccessful login', (): void => {
      jest
        .spyOn(PostRequestService, 'PostRequest')
        .mockRejectedValue(
          new Error(JSON.stringify({ message: PASSWORD_FAIL_THIRD_TEXT, failsCount: 3, status: 400, res: false }))
        );

      const store = mockStore(mockInitialState);

      const data = {
        body: { login: 'Test1234', password: 'Test1234' },
        url: LOGIN_URL,
        actionSuccess: loginSuccess,
        actionError: loginError,
      };

      const expected = [
        {
          type: AuthenticationLoginActions.LOGIN_REQUEST,
        },
        {
          type: AuthenticationSMSActions.SET_SMS_LOGIN_BAN,
          isSMSBanState: true,
        },
        {
          type: AuthenticationLoginActions.LOGIN_FAIL,
          errorMessage: PASSWORD_FAIL_THIRD_TEXT,
        },
      ];

      return store.dispatch(requestUserLogin(data)).then((): void => {
        expect(store.getActions()).toEqual(expected);
      });
    });
  });

  describe('requestUserIDResetPassword', (): void => {
    test('should call PostRequest with correct arguments without BAN', async () => {
      jest.spyOn(PostRequestService, 'PostRequest').mockResolvedValue({
        message: RESPONSE_MESSAGE_PASSPORT,
        phone: '+777777777',
        blockedUntil: null,
        status: 200,
        res: true,
      });
      const store = mockStore(mockInitialState);

      const data = {
        body: { passport: '1TT' },
        url: CHANGE_PASSWORD_PASSPORT_URL,
        actionSuccess: postPassportSuccess,
        actionError: postSaveMessageError,
        nextStep: jest.fn(),
      };

      const expected = [
        {
          type: PasswordRecoveryActions.POST_USER_DATA_REQUEST,
        },
        {
          type: AuthenticationSMSActions.SET_SMS_RESET_PASSPORT_BAN,
          isSMSBanState: false,
        },
        {
          type: PasswordRecoveryActions.POST_PASSPORT_DATA_SUCCESS,
          phone: '+777777777',
          blockedUntilTime: null,
        },
        {
          type: PasswordRecoveryActions.POST_PASSPORT_SUCCESS,
          isCheckPassport: true,
        },
      ];

      return store.dispatch(requestUserIDResetPassword(data)).then((): void => {
        expect(store.getActions()).toEqual(expected);
      });
    });

    test('should call PostRequest with correct arguments - BAN', async () => {
      jest.spyOn(PostRequestService, 'PostRequest').mockResolvedValue({
        message: RESPONSE_MESSAGE_PASSPORT,
        blockedUntil: '2023-04-17T09:21:17.911205Z',
        phone: '+777777777',
        status: 200,
        res: true,
      });

      const store = mockStore({
        ...mockInitialState,
        userData: {
          ...mockInitialState.userData,
          passwordRecovery: {
            ...mockInitialState.userData.passwordRecovery,
            blockedUntil: '2023-04-17T09:21:17.911205Z',
          },
        },
      });

      const data = {
        body: { passport: '1TT' },
        url: CHANGE_PASSWORD_PASSPORT_URL,
        actionSuccess: postPassportSuccess,
        actionError: postSaveMessageError,
        nextStep: jest.fn(),
      };

      const expected = [
        {
          type: PasswordRecoveryActions.POST_USER_DATA_REQUEST,
        },
        {
          type: AuthenticationSMSActions.SET_SMS_RESET_PASSPORT_BAN,
          isSMSBanState: true,
        },
        {
          type: PasswordRecoveryActions.POST_PASSPORT_DATA_SUCCESS,
          phone: '+777777777',
          blockedUntilTime: '2023-04-17T09:21:17.911205Z',
        },
        {
          type: PasswordRecoveryActions.POST_PASSPORT_SUCCESS,
          isCheckPassport: true,
        },
      ];

      return store.dispatch(requestUserIDResetPassword(data)).then((): void => {
        expect(store.getActions()).toEqual(expected);
      });
    });

    test('should throw an error if incorrect arguments are passed', (): void => {
      jest
        .spyOn(PostRequestService, 'PostRequest')
        .mockRejectedValue(new Error(JSON.stringify({ message: 'Async error' })));

      const store = mockStore(mockInitialState);

      const data = {
        body: { passport: 'TEST1222' },
        url: CHANGE_PASSWORD_PASSPORT_URL,
        actionSuccess: postPassportSuccess,
        actionError: postSaveMessageError,
      };

      const expected = [
        {
          type: PasswordRecoveryActions.POST_USER_DATA_REQUEST,
        },
        {
          type: PasswordRecoveryActions.POST_USER_DATA_ERROR,
          errorMessage: 'Async error',
        },
      ];

      return store.dispatch(requestUserIDResetPassword(data)).then((): void => {
        expect(store.getActions()).toEqual(expected);
      });
    });
  });

  describe('requestUserSMSResetPassword', (): void => {
    test('should call PostRequest with correct SMS - Forgot password', (): void => {
      jest
        .spyOn(PostRequestService, 'PostRequest')
        .mockResolvedValue({ message: RESPONSE_MESSAGE_PASSPORT, status: 200, res: true });

      const store = mockStore(mockInitialState);

      const data = {
        body: { smsCode: '1234' },
        url: CHANGE_PASSWORD_CHECK_SMS_URL,
        actionSuccess: postSmsSuccess,
        actionError: postSaveMessageError,
        nextStep: jest.fn(),
      };

      const expected = [
        {
          type: PasswordRecoveryActions.POST_USER_DATA_REQUEST,
        },
        {
          type: PasswordRecoveryActions.POST_SMS_SUCCESS,
          isCheckSms: true,
        },
      ];

      return store.dispatch(requestUserSMSResetPassword(data)).then((): void => {
        expect(store.getActions()).toEqual(expected);
      });
    });

    test('should handle first fail SMS', (): void => {
      jest
        .spyOn(PostRequestService, 'PostRequest')
        .mockRejectedValue(
          new Error(JSON.stringify({ message: SMS_NOT_VALID, failsCount: 1, status: 400, res: false }))
        );

      const store = mockStore(mockInitialState);

      const data = {
        body: { smsCode: '1233' },
        url: CHANGE_PASSWORD_CHECK_SMS_URL,
        actionSuccess: postSmsSuccess,
        actionError: postSaveMessageError,
        nextStep: jest.fn(),
      };

      const expected = [
        {
          type: PasswordRecoveryActions.POST_USER_DATA_REQUEST,
        },
        {
          type: AuthenticationSMSActions.SET_SMS_RESET_PASSPORT_BAN,
          isSMSBanState: false,
        },
        {
          type: PasswordRecoveryActions.POST_USER_DATA_ERROR,
          errorMessage: SMS_FAIL_FIRST_TEXT,
        },
      ];

      return store.dispatch(requestUserSMSResetPassword(data)).then((): void => {
        expect(store.getActions()).toEqual(expected);
      });
    });

    test('should handle second fail SMS', (): void => {
      jest
        .spyOn(PostRequestService, 'PostRequest')
        .mockRejectedValue(
          new Error(JSON.stringify({ message: SMS_NOT_VALID, failsCount: 2, status: 400, res: false }))
        );

      const store = mockStore(mockInitialState);

      const data = {
        body: { smsCode: '1233' },
        url: CHANGE_PASSWORD_CHECK_SMS_URL,
        actionSuccess: postSmsSuccess,
        actionError: postSaveMessageError,
        nextStep: jest.fn(),
      };

      const expected = [
        {
          type: PasswordRecoveryActions.POST_USER_DATA_REQUEST,
        },
        {
          type: AuthenticationSMSActions.SET_SMS_RESET_PASSPORT_BAN,
          isSMSBanState: false,
        },
        {
          type: PasswordRecoveryActions.POST_USER_DATA_ERROR,
          errorMessage: SMS_FAIL_SECOND_TEXT,
        },
      ];

      return store.dispatch(requestUserSMSResetPassword(data)).then((): void => {
        expect(store.getActions()).toEqual(expected);
      });
    });

    test('should handle third fail SMS', (): void => {
      jest
        .spyOn(PostRequestService, 'PostRequest')
        .mockRejectedValue(
          new Error(JSON.stringify({ message: SMS_NOT_VALID, failsCount: 3, status: 400, res: false }))
        );

      const store = mockStore(mockInitialState);

      const data = {
        body: { smsCode: '1233' },
        url: CHANGE_PASSWORD_CHECK_SMS_URL,
        actionSuccess: postSmsSuccess,
        actionError: postSaveMessageError,
        nextStep: jest.fn(),
      };

      const expected = [
        {
          type: PasswordRecoveryActions.POST_USER_DATA_REQUEST,
        },
        {
          type: AuthenticationSMSActions.SET_SMS_RESET_PASSPORT_BAN,
          isSMSBanState: true,
        },
        {
          type: PasswordRecoveryActions.POST_USER_DATA_ERROR,
          errorMessage: SMS_FAIL_THIRD_TEXT,
        },
      ];

      return store.dispatch(requestUserSMSResetPassword(data)).then((): void => {
        expect(store.getActions()).toEqual(expected);
      });
    });
  });

  describe('requestUserResetPassword', (): void => {
    test('should call PostRequest with correct new Password', (): void => {
      jest
        .spyOn(PostRequestService, 'PostRequest')
        .mockResolvedValue({ message: RESPONSE_MESSAGE_NEW_PASSWORD, status: 200, res: true });

      const store = mockStore(mockInitialState);

      const data = {
        body: { newPassword: 'Password2', confirmPassword: 'Password2' },
        url: CHANGE_PASSWORD_NEW_PASSWORD_URL,
        actionSuccess: postNewPasswordSuccess,
        actionError: postSaveMessageError,
      };

      const expected = [
        {
          type: PasswordRecoveryActions.POST_NEW_PASSWORD_SUCCESS,
          isChangePassword: true,
        },
      ];

      return store.dispatch(requestUserResetPassword(data)).then((): void => {
        expect(store.getActions()).toEqual(expected);
      });
    });
    test('should call PostRequest with incorrect new Password', (): void => {
      jest
        .spyOn(PostRequestService, 'PostRequest')
        .mockRejectedValue(new Error(JSON.stringify({ message: 'Async error' })));

      const store = mockStore(mockInitialState);

      const data = {
        body: { newPassword: 'Password2', confirmPassword: 'Password2' },
        url: CHANGE_PASSWORD_NEW_PASSWORD_URL,
        actionSuccess: postNewPasswordSuccess,
        actionError: postSaveMessageError,
      };

      const expected = [
        {
          type: PasswordRecoveryActions.POST_USER_DATA_ERROR,
          errorMessage: 'Async error',
        },
      ];

      return store.dispatch(requestUserResetPassword(data)).then((): void => {
        expect(store.getActions()).toEqual(expected);
      });
    });
  });

  describe('requestSmsDataLogin', (): void => {
    test('should call PostRequest with correct SMS - Login', (): void => {
      jest
        .spyOn(PostRequestService, 'PostRequest')
        .mockResolvedValue({ message: SESSION_CODE_IS_CORRECT, status: 200, res: true });

      const token = getAccessToken();

      const store = mockStore(mockInitialState);

      const data = {
        body: { smsCode: '1234' },
        url: SMS_URL,
        actionSuccess: setSMSSuccess,
        actionError: setSMSErrorMessage,
      };

      const expected = [
        {
          type: AuthenticationSMSActions.SET_SMS_REQUEST,
        },
        {
          type: AuthenticationSMSActions.SET_SMS_RESET_PASSPORT_BAN,
          isSMSBanState: false,
        },
        {
          type: AuthenticationLoginActions.LOGIN_SUCCESS,
          isAuth: true,
          isSMSOpen: false,
          token,
        },
        {
          type: AuthenticationSMSActions.SET_SMS_VALID,
          isSMSAuth: true,
        },
      ];

      return store.dispatch(requestSmsDataLogin(data)).then((): void => {
        expect(store.getActions()).toEqual(expected);
      });
    });

    test(' should handle first login call PostRequest with SMS', (): void => {
      jest.spyOn(PostRequestService, 'PostRequest').mockResolvedValue({ message: FIRST_LOGIN, status: 200, res: true });

      const store = mockStore(mockInitialState);

      const data = {
        body: { smsCode: '1234' },
        url: SMS_URL,
        actionSuccess: setSMSSuccess,
        actionError: setSMSErrorMessage,
      };

      const expected = [
        {
          type: AuthenticationSMSActions.SET_SMS_REQUEST,
        },
        {
          type: AuthenticationLoginActions.SET_FIRST_LOGIN,
          isFirstLogin: true,
        },
      ];

      return store.dispatch(requestSmsDataLogin(data)).then((): void => {
        expect(store.getActions()).toEqual(expected);
      });
    });

    test('should handle first fail SMS - Login', (): void => {
      jest
        .spyOn(PostRequestService, 'PostRequest')
        .mockRejectedValue(
          new Error(JSON.stringify({ message: SMS_FAIL_FIRST_TEXT, failsCount: 1, status: 400, res: false }))
        );

      const store = mockStore(mockInitialState);

      const data = {
        body: { smsCode: '1233' },
        url: SMS_URL,
        actionSuccess: setSMSSuccess,
        actionError: setSMSErrorMessage,
      };

      const expected = [
        {
          type: AuthenticationSMSActions.SET_SMS_REQUEST,
        },
        {
          type: AuthenticationSMSActions.SET_SMS_LOGIN_BAN,
          isSMSBanState: false,
        },
        {
          type: AuthenticationSMSActions.SET_SMS_ERROR,
          errorMessage: SMS_FAIL_FIRST_TEXT,
        },
      ];

      return store.dispatch(requestSmsDataLogin(data)).then((): void => {
        expect(store.getActions()).toEqual(expected);
      });
    });

    test('should handle second fail SMS - Login', (): void => {
      jest
        .spyOn(PostRequestService, 'PostRequest')
        .mockRejectedValue(
          new Error(JSON.stringify({ message: SMS_FAIL_SECOND_TEXT, failsCount: 2, status: 400, res: false }))
        );

      const store = mockStore(mockInitialState);

      const data = {
        body: { smsCode: '1233' },
        url: SMS_URL,
        actionSuccess: setSMSSuccess,
        actionError: setSMSErrorMessage,
      };

      const expected = [
        {
          type: AuthenticationSMSActions.SET_SMS_REQUEST,
        },
        {
          type: AuthenticationSMSActions.SET_SMS_LOGIN_BAN,
          isSMSBanState: false,
        },
        {
          type: AuthenticationSMSActions.SET_SMS_ERROR,
          errorMessage: SMS_FAIL_SECOND_TEXT,
        },
      ];

      return store.dispatch(requestSmsDataLogin(data)).then((): void => {
        expect(store.getActions()).toEqual(expected);
      });
    });

    test('should handle second fail SMS - Login', (): void => {
      jest
        .spyOn(PostRequestService, 'PostRequest')
        .mockRejectedValue(
          new Error(JSON.stringify({ message: SMS_FAIL_THIRD_TEXT, failsCount: 3, status: 400, res: false }))
        );

      const store = mockStore(mockInitialState);

      const data = {
        body: { smsCode: '1233' },
        url: SMS_URL,
        actionSuccess: setSMSSuccess,
        actionError: setSMSErrorMessage,
      };

      const expected = [
        {
          type: AuthenticationSMSActions.SET_SMS_REQUEST,
        },
        {
          type: AuthenticationSMSActions.SET_SMS_LOGIN_BAN,
          isSMSBanState: true,
        },
        {
          type: AuthenticationSMSActions.SET_SMS_ERROR,
          errorMessage: SMS_FAIL_THIRD_TEXT,
        },
      ];

      return store.dispatch(requestSmsDataLogin(data)).then((): void => {
        expect(store.getActions()).toEqual(expected);
      });
    });
  });

  describe('requestPhoneFieldValidation', (): void => {
    test('should handle SUCCESS', (): void => {
      jest.spyOn(PostRequestService, 'PostRequest').mockResolvedValue({ statusRegistered: true, statusMessage: true });

      const phoneNumber = {
        phoneNumber: '+729323568999',
      };

      const expected = [
        {
          type: PhoneNumberValidation.PHONE_NUMBER_FIELD_REQUEST,
        },
        {
          type: PhoneNumberValidation.PHONE_NUMBER_FIELD_SUCCESS,
        },
      ];

      const store = mockStore(mockInitialState);

      return store.dispatch(requestPhoneFieldValidation(phoneNumber, jest.fn())).then(() => {
        expect(store.getActions()).toEqual(expected);
      });
    });

    test('should handle ERROR due to invalid phone number', (): void => {
      jest
        .spyOn(PostRequestService, 'PostRequest')
        .mockResolvedValue({ statusRegistered: false, statusMessage: false });

      const phoneNumber = {
        phoneNumber: '+729323568test',
      };

      const expected = [
        {
          type: PhoneNumberValidation.PHONE_NUMBER_FIELD_REQUEST,
        },
        {
          type: PhoneNumberValidation.PHONE_NUMBER_FIELD_ERROR,
        },
      ];

      const store = mockStore(mockInitialState);

      return store.dispatch(requestPhoneFieldValidation(phoneNumber, jest.fn())).then(() => {
        expect(store.getActions()).toEqual(expected);
      });
    });

    test('should catch ERROR', (): void => {
      jest
        .spyOn(PostRequestService, 'PostRequest')
        .mockRejectedValue(new Error(JSON.stringify({ message: 'Async error' })));

      const phoneNumber = {
        phoneNumber: '+729323568test',
      };

      const expected = [
        {
          type: PhoneNumberValidation.PHONE_NUMBER_FIELD_REQUEST,
        },
        {
          type: PhoneNumberValidation.PHONE_NUMBER_FIELD_ERROR,
        },
      ];

      const store = mockStore(mockInitialState);

      return store.dispatch(requestPhoneFieldValidation(phoneNumber, jest.fn())).then(() => {
        expect(store.getActions()).toEqual(expected);
      });
    });
  });

  describe('requestUserNotifications', (): void => {
    test('should handle SUCCESS', (): void => {
      jest.spyOn(GetRequestService, 'GetRequest').mockResolvedValue({ NOTIFICATION_URL });

      const expected = [
        {
          type: GetUserNotification.GET_NOTIFICATION_REQUEST,
        },
        {
          payload: {
            NOTIFICATION_URL,
          },
          type: GetUserNotification.GET_NOTIFICATION_SUCCESS,
        },
      ];
      const store = mockStore(mockInitialState);

      return store.dispatch(requestUserNotifications()).then(() => {
        expect(store.getActions()).toEqual(expected);
      });
    });
  });

  describe('fetchCurrentUser', (): void => {
    test('should handle SUCCESS', (): void => {
      jest.spyOn(RequestCurrentUserService, 'requestCurrentUser').mockResolvedValue(USER_DATA_URL);

      const token = getAccessToken();
      const store = mockStore({
        ...mockInitialState,
        userData: {
          ...mockInitialState.userData,
          userLogin: { ...mockInitialState.userData.userLogin, token: 'test' },
        },
      });
      const expected = [
        {
          isAuth: true,
          token,
          type: RequestCurrentUser.CURRENT_USER_FETCH_SUCCESS,
          userData: USER_DATA_URL,
        },
      ];

      return store.dispatch(fetchCurrentUser()).then(() => {
        expect(store.getActions()).toEqual(expected);
      });
    });

    test('should have been called getCurrentUserError', (): void => {
      jest.spyOn(RequestCurrentUserService, 'requestCurrentUser').mockRejectedValue(new Error('Async error'));
      const spyGetCurrentUserError = jest.spyOn(GetUserActionService, 'getCurrentUserError');

      const store = mockStore({
        ...mockInitialState,
        userData: {
          ...mockInitialState.userData,
          userLogin: {
            ...mockInitialState.userData.userLogin,
            errorHandler: () => {
              throw new Error('Error!!!');
            },
          },
        },
      });

      return store.dispatch(fetchCurrentUser()).catch(() => {
        expect(spyGetCurrentUserError).toHaveBeenCalled();
      });
    });

    test('should not to have been called getCurrentUserSuccess', (): void => {
      jest.spyOn(RequestCurrentUserService, 'requestCurrentUser').mockResolvedValue(USER_DATA_URL);
      const spyGetCurrentUserSuccess = jest.spyOn(GetUserActionService, 'getCurrentUserSuccess');
      const store = mockStore(mockInitialState);

      return store.dispatch(fetchCurrentUser()).then(() => {
        expect(spyGetCurrentUserSuccess).not.toHaveBeenCalled();
      });
    });
  });

  describe('requestUserNotificationChange', (): void => {
    test('should handle ERROR', (): void => {
      jest.spyOn(GetRequestService, 'GetRequest').mockResolvedValue({ NOTIFICATION_URL });

      const expected = [
        {
          type: PostUserNotification.POST_NOTIFICATION_REQUEST,
        },
        {
          type: PostUserNotification.POST_NOTIFICATION_ERROR,
        },
      ];
      const store = mockStore(mockInitialState);

      return store.dispatch(requestUserNotificationChange(NotificationTypes.EMAIL)).then(() => {
        expect(store.getActions()).toEqual(expected);
      });
    });

    test('should handle SUCCESS', (): void => {
      jest
        .spyOn(PutRequestService, 'PutRequest')
        .mockResolvedValue({ message: 'Notification settings changed successfully', status: 200, res: true });

      const expected = [
        {
          type: PostUserNotification.POST_NOTIFICATION_REQUEST,
        },
        {
          type: GetUserNotification.GET_NOTIFICATION_REQUEST,
        },
        {
          payload: {
            NOTIFICATION_URL,
          },
          type: GetUserNotification.GET_NOTIFICATION_SUCCESS,
        },
      ];
      const store = mockStore(mockInitialState);

      return store.dispatch(requestUserNotificationChange(NotificationTypes.PUSH)).then(() => {
        expect(store.getActions()).toEqual(expected);
      });
    });
  });

  describe('requestGetEmail', (): void => {
    test('should handle SUCCESS', (): void => {
      const email = 'test@test.com';

      jest.spyOn(GetRequestService, 'GetRequest').mockResolvedValue({ email });

      const expected = [
        { type: GetUserEmail.GET_EMAIL_REQUEST },
        {
          type: PostUserEmail.POST_EMAIL_SUCCESS,
          email,
        },
      ];
      const store = mockStore(mockInitialState);

      return store.dispatch(requestGetEmail(EMAIL_URL)).then(() => {
        expect(store.getActions()).toEqual(expected);
      });
    });

    test('should handle ERROR', (): void => {
      jest.spyOn(GetRequestService, 'GetRequest').mockRejectedValue(new Error('Async error'));

      const expected = [{ type: GetUserEmail.GET_EMAIL_REQUEST }, { type: GetUserEmail.GET_EMAIL_ERROR }];
      const store = mockStore(mockInitialState);

      return store.dispatch(requestGetEmail(EMAIL_URL)).then(() => {
        expect(store.getActions()).toEqual(expected);
      });
    });
  });

  describe('requestPostEmail', (): void => {
    test('should handle SUCCESS', (): void => {
      const email = 'test@test.com';

      jest.spyOn(PutRequestService, 'PutRequest').mockResolvedValue({ res: 'test' });

      jest.spyOn(GetUserActionService, 'requestGetEmail').mockImplementation(() => ({} as ActionType));

      const setIsEnteredMock = jest.fn();

      const expected = [{ type: PostUserEmail.POST_EMAIL_REQUEST }];
      const store = mockStore(mockInitialState);

      return store.dispatch(requestPostEmail(EMAIL_URL, { email }, setIsEnteredMock)).then(() => {
        expect(store.getActions()).toEqual(expected);
      });
    });

    test('should call a callback when SUCCESS', (): void => {
      const email = 'test@test.com';

      jest.spyOn(PutRequestService, 'PutRequest').mockResolvedValue({ res: 'test' });

      jest.spyOn(GetUserActionService, 'requestGetEmail').mockImplementation(() => ({} as ActionType));

      const setIsEnteredMock = jest.fn();

      const store = mockStore(mockInitialState);

      return store.dispatch(requestPostEmail(EMAIL_URL, { email }, setIsEnteredMock)).then(() => {
        expect(setIsEnteredMock).toBeCalledTimes(1);
      });
    });

    test('should handle ERROR', (): void => {
      const email = 'test@test.com';

      jest.spyOn(PutRequestService, 'PutRequest').mockRejectedValue(new Error('Async error'));

      jest.spyOn(GetUserActionService, 'requestGetEmail').mockImplementation(() => ({} as ActionType));

      const setIsEnteredMock = jest.fn();

      const expected = [{ type: PostUserEmail.POST_EMAIL_REQUEST }, { type: PostUserEmail.POST_EMAIL_ERROR }];
      const store = mockStore(mockInitialState);

      return store.dispatch(requestPostEmail(EMAIL_URL, { email }, setIsEnteredMock)).then(() => {
        expect(store.getActions()).toEqual(expected);
      });
    });

    test('should not call a callback when ERROR', (): void => {
      const email = 'test@test.com';

      jest.spyOn(PutRequestService, 'PutRequest').mockRejectedValue(new Error('Async error'));

      jest.spyOn(GetUserActionService, 'requestGetEmail').mockImplementation(() => ({} as ActionType));

      const setIsEnteredMock = jest.fn();

      const store = mockStore(mockInitialState);

      return store.dispatch(requestPostEmail(EMAIL_URL, { email }, setIsEnteredMock)).then(() => {
        expect(setIsEnteredMock).not.toBeCalled();
      });
    });
  });

  describe('requestUserDataAfterLogin', (): void => {
    test('should handle SUCCESS', (): void => {
      const data = { email: 'test@test.com' };

      jest.spyOn(GetRequestService, 'GetRequest').mockResolvedValue(data);

      const expected = [
        { type: GetUser.GET_USER_REQUEST },
        {
          type: GetUser.GET_USER_SUCCESS,
          payload: data,
        },
      ];
      const store = mockStore(mockInitialState);

      return store.dispatch(requestUserDataAfterLogin(USER_DATA_URL)).then(() => {
        expect(store.getActions()).toEqual(expected);
      });
    });

    test('should handle ERROR', (): void => {
      jest.spyOn(GetRequestService, 'GetRequest').mockRejectedValue(new Error('Async error'));

      const expected = [{ type: GetUser.GET_USER_REQUEST }, { type: GetUser.GET_USER_ERROR }];
      const store = mockStore(mockInitialState);

      return store.dispatch(requestUserDataAfterLogin(USER_DATA_URL)).then(() => {
        expect(store.getActions()).toEqual(expected);
      });
    });
  });
});
