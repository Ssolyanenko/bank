import { Reducer } from 'redux';

import {
  AuthenticationLoginActions,
  AuthenticationLogoutActions,
  PasswordRecoveryActions,
  AuthenticationSMSActions,
  RequestCurrentUser,
  GetUser,
  GetUserNotification,
  PostUserEmail,
  PostUserNotification,
  PostUserControlQuestion,
  PostUserChangePassword,
} from 'constants/user';
import { UserState } from 'interfaces/user';
import { FetchStatus } from 'constants/fetchStatus';

export const initialState: UserState = {
  userLogin: {
    isAuth: false,
    isSMSAuth: false,
    isSMSOpen: false,
    isSMSBanState: false,
    banTimeUntil: '',
    isFirstLogin: false,
    errorMessage: '',
    token: '',
  },
  userAccount: {
    login: '',
    firstName: '',
    lastName: '',
    passport: '',
    phone: '',
    email: '',
    isVip: false,
    enabledNotificationSettings: [],
  },
  isSend: false,
  errorMessage: '',
  passwordRecovery: {
    isSMSBanState: false,
    isCheckPassport: false,
    isCheckSms: false,
    isChangePassword: false,
    phoneUser: '',
    blockedUntil: '',
    errorMessage: '',
  },
  securityChangePassword: {
    isSMSOpen: false,
    errorMessage: '',
  },
  fetchStatus: FetchStatus.SUCCESS,
};

export const userData: Reducer<UserState> = (state = initialState, action) => {
  switch (action.type) {
    case AuthenticationLoginActions.LOGIN_SUCCESS:
      return {
        ...state,
        userLogin: {
          ...state.userLogin,
          isAuth: action.isAuth,
          isSMSOpen: action.isSMSOpen,
          token: action.token,
          errorMessage: '',
        },
      };
    case AuthenticationLoginActions.LOGIN_REQUEST:
      return { ...state, userLogin: { ...state.userLogin, errorMessage: '' } };
    case GetUser.GET_USER_SUCCESS:
      return {
        ...state,
        userAccount: {
          ...state.userAccount,
          login: action.payload.login,
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          passport: action.payload.passport,
          phone: action.payload.phone,
          email: action.payload.email,
          isVip: action.payload.isVip,
        },
        fetchStatus: FetchStatus.SUCCESS,
      };
    case GetUser.GET_USER_REQUEST:
      return {
        ...state,
        fetchStatus: FetchStatus.REQUEST,
      };
    case PostUserEmail.POST_EMAIL_SUCCESS:
      return { ...state, userAccount: { ...state.userAccount, email: action.email }, fetchStatus: FetchStatus.SUCCESS };
    case PostUserNotification.POST_NOTIFICATION_SUCCESS:
      return {
        ...state,
        userAccount: { ...state.userAccount, enabledNotificationSettings: action.enabledNotificationSettings },
        fetchStatus: FetchStatus.SUCCESS,
      };
    case GetUserNotification.GET_NOTIFICATION_SUCCESS:
      return {
        ...state,
        userAccount: { ...state.userAccount, enabledNotificationSettings: action.payload.enabledNotificationSettings },
        fetchStatus: FetchStatus.SUCCESS,
      };
    case PostUserControlQuestion.POST_CONTROL_QUESTION_REQUEST:
      return { ...state, fetchStatus: FetchStatus.REQUEST };
    case PostUserControlQuestion.POST_CONTROL_QUESTION_SUCCESS:
      return { ...state, fetchStatus: FetchStatus.SUCCESS };
    case PostUserControlQuestion.POST_CONTROL_QUESTION_ERROR:
      return { ...state, fetchStatus: FetchStatus.ERROR };
    case AuthenticationLoginActions.LOGIN_FAIL:
      return { ...state, userLogin: { ...state.userLogin, errorMessage: action.errorMessage } };
    case AuthenticationLogoutActions.LOGOUT_SUCCESS:
      return { ...state, userLogin: { ...state.userLogin, isAuth: action.isAuth, token: action.token } };
    case AuthenticationLogoutActions.LOGOUT_ERROR:
      return { ...state, userLogin: { ...state.userLogin, isAuth: action.isAuth } };
    case AuthenticationLoginActions.SET_FIRST_LOGIN:
      return {
        ...state,
        userLogin: { ...state.userLogin, isFirstLogin: action.isFirstLogin, isSMSOpen: false, isAuth: false },
      };
    case AuthenticationSMSActions.SET_SMS_REQUEST:
      return { ...state, errorMessage: '' };
    case AuthenticationSMSActions.SET_SMS_ERROR:
      return { ...state, errorMessage: action.errorMessage };
    case AuthenticationSMSActions.SET_SMS_VALID:
      return { ...state, userLogin: { ...state.userLogin, isSMSAuth: action.isSMSAuth } };
    case AuthenticationSMSActions.SET_SMS_RESET_PASSPORT_BAN:
      return { ...state, passwordRecovery: { ...state.passwordRecovery, isSMSBanState: action.isSMSBanState } };
    case AuthenticationSMSActions.SET_SMS_LOGIN_BAN:
      return { ...state, userLogin: { ...state.userLogin, isSMSBanState: action.isSMSBanState } };
    case AuthenticationSMSActions.SET_ACTUAL_TIME_BAN:
      return { ...state, userLogin: { ...state.userLogin, banTimeUntil: action.banTimeUntil } };
    case AuthenticationSMSActions.SET_NEW_SMS:
      return { ...state, isSend: action.isSend };
    case PasswordRecoveryActions.POST_PASSPORT_SUCCESS:
      return { ...state, passwordRecovery: { ...state.passwordRecovery, isCheckPassport: action.isCheckPassport } };
    case PasswordRecoveryActions.POST_PASSPORT_DATA_SUCCESS:
      return {
        ...state,
        passwordRecovery: { ...state.passwordRecovery, phoneUser: action.phone, blockedUntil: action.blockedUntilTime },
      };
    case PasswordRecoveryActions.POST_SMS_SUCCESS:
      return { ...state, passwordRecovery: { ...state.passwordRecovery, isCheckSms: action.isCheckSms } };
    case PasswordRecoveryActions.POST_NEW_PASSWORD_SUCCESS:
      return { ...state, passwordRecovery: { ...state.passwordRecovery, isChangePassword: action.isChangePassword } };
    case PasswordRecoveryActions.POST_SAVE_PHONE_USER:
      return { ...state, passwordRecovery: { ...state.passwordRecovery, phoneUser: action.phoneUser } };
    case PasswordRecoveryActions.POST_USER_DATA_REQUEST:
      return {
        ...state,
        passwordRecovery: { ...state.passwordRecovery, errorMessage: '' },
        fetchStatus: FetchStatus.REQUEST,
      };
    case PasswordRecoveryActions.POST_USER_DATA_ERROR:
      return { ...state, passwordRecovery: { ...state.passwordRecovery, errorMessage: action.errorMessage } };
    case RequestCurrentUser.CURRENT_USER_FETCH_SUCCESS:
      return {
        ...state,
        userLogin: { ...state.userLogin, isAuth: action.isAuth, token: action.token },
        userAccount: { ...state.userAccount, ...action.userData },
      };
    case RequestCurrentUser.CURRENT_USER_FETCH_ERROR: {
      return {
        ...state,
        userLogin: { ...state.userLogin, isAuth: action.isAuth, token: action.token },
        fetchStatus: FetchStatus.ERROR,
      };
    }
    case PostUserChangePassword.POST_CHANGE_PASSWORD_REQUEST:
      return { ...state, securityChangePassword: { ...state.securityChangePassword, errorMessage: '' } };
    case PostUserChangePassword.POST_CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        securityChangePassword: { ...state.securityChangePassword, isSMSOpen: action.isSMSOpen },
      };
    case PostUserChangePassword.POST_CHANGE_PASSWORD_ERROR:
      return {
        ...state,
        securityChangePassword: { ...state.securityChangePassword, errorMessage: action.errorMessage },
      };
    default:
      return state;
  }
};
