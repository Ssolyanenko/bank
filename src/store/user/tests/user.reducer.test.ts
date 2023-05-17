import { initialState, userData } from 'store/user/user.reducer';
import {
  AuthenticationLoginActions,
  AuthenticationLogoutActions,
  AuthenticationSMSActions,
  PasswordRecoveryActions,
  GetUser,
  PostUserControlQuestion,
  PostUserChangePassword,
} from 'constants/user';
import { fakeSessionStorage, getAccessToken } from 'helpers';
import {
  setUserData,
  setUserEmail,
  loginError,
  setFirstlogin,
  setSMSErrorMessage,
  setSMSLoginBan,
  setSMSSuccess,
  setNewCode,
  postSmsSuccess,
  postPassportSuccess,
  postNewPasswordSuccess,
  postSavePhoneUser,
  postSaveMessageError,
  getCurrentUserSuccess,
  getCurrentUserError,
  getUserNotifications,
  changePasswordError,
  changePasswordSuccess,
} from 'store/user';
import { FetchStatus } from 'constants/fetchStatus';

Object.defineProperty(global, 'sessionStorage', {
  value: fakeSessionStorage(),
});

describe('userData.reducer', (): void => {
  describe('login', () => {
    const isAuth = true;
    const isSMSOpen = true;
    const token = getAccessToken();

    test('should handle REQUEST LOGIN action', (): void => {
      expect(userData(initialState, { type: AuthenticationLoginActions.LOGIN_REQUEST })).toEqual({
        ...initialState,
        userLogin: { ...initialState.userLogin, errorMessage: '' },
        fetchStatus: FetchStatus.SUCCESS,
      });
    });

    test('should handle SUCCESS LOGIN action', (): void => {
      expect(
        userData(initialState, { type: AuthenticationLoginActions.LOGIN_SUCCESS, isAuth, isSMSOpen, token })
      ).toEqual({
        ...initialState,
        userLogin: {
          ...initialState.userLogin,
          isAuth,
          isSMSOpen,
          token,
        },
      });
    });

    test('should handle ERROR action', (): void => {
      expect(userData(initialState, loginError(''))).toEqual({
        ...initialState,
        userLogin: { ...initialState.userLogin, errorMessage: '' },
      });
    });

    test('should handle SUCCESS FIRST LOGIN action', (): void => {
      expect(userData(initialState, setFirstlogin(false))).toEqual({
        ...initialState,
        userLogin: { ...initialState.userLogin, isFirstLogin: false, isSMSOpen: false },
      });
    });
  });

  describe('logout', (): void => {
    const isAuth = false;
    const token = '';

    test('should handle SUCCESS action', (): void => {
      expect(userData(initialState, { type: AuthenticationLogoutActions.LOGOUT_SUCCESS, isAuth, token })).toEqual({
        ...initialState,
        userLogin: {
          ...initialState.userLogin,
          isAuth,
          token,
        },
      });
    });

    test('should handle ERROR action', (): void => {
      expect(userData(initialState, { type: AuthenticationLogoutActions.LOGOUT_ERROR, isAuth })).toEqual({
        ...initialState,
        userLogin: {
          ...initialState.userLogin,
          isAuth,
        },
      });
    });
  });

  describe('user data', (): void => {
    const user = {
      login: '',
      firstName: '',
      lastName: '',
      passport: '',
      phone: '',
      email: '',
      isVip: false,
      enabledNotificationSettings: [],
    };

    test('should handle SUCCESS GET USER action', (): void => {
      expect(userData(initialState, setUserData(user))).toEqual({
        ...initialState,
        userAccount: {
          ...initialState.userAccount,
          login: '',
          firstName: '',
          lastName: '',
          passport: '',
          phone: '',
          email: '',
          isVip: false,
        },
        fetchStatus: FetchStatus.SUCCESS,
      });
    });

    test('should handle SUCCESS CURRENT USER action', (): void => {
      const token = getAccessToken();

      expect(userData(initialState, getCurrentUserSuccess(user))).toEqual({
        ...initialState,
        userLogin: {
          ...initialState.userLogin,
          isAuth: true,
          token,
        },
        userAccount: {
          ...initialState.userAccount,
          login: '',
          firstName: '',
          lastName: '',
          passport: '',
          phone: '',
          email: '',
          isVip: false,
          enabledNotificationSettings: [],
        },
      });
    });

    test('should handle ERROR action', (): void => {
      expect(userData(initialState, getCurrentUserError('test'))).toEqual({
        ...initialState,
        userLogin: {
          ...initialState.userLogin,
          isAuth: false,
          token: '',
        },
        fetchStatus: FetchStatus.ERROR,
      });
    });

    test('should handle SUCCESS POST EMAIL action', (): void => {
      expect(userData(initialState, setUserEmail('test'))).toEqual({
        ...initialState,
        userAccount: { ...initialState.userAccount, email: 'test' },
        fetchStatus: FetchStatus.SUCCESS,
      });
    });
  });

  describe('sms', (): void => {
    test('should handle REQUEST SMS action', (): void => {
      expect(userData(initialState, { type: AuthenticationSMSActions.SET_SMS_REQUEST })).toEqual({
        ...initialState,
        errorMessage: '',
      });
    });

    test('should handle ERROR action', (): void => {
      expect(userData(initialState, setSMSErrorMessage('error'))).toEqual({ ...initialState, errorMessage: 'error' });
    });

    test('should handle SET SMS VALID action', (): void => {
      expect(userData(initialState, setSMSSuccess(false))).toEqual({
        ...initialState,
        userLogin: { ...initialState.userLogin, isSMSAuth: false },
      });
    });

    test('should handle SET SMS BAN LOGIN action', (): void => {
      expect(userData(initialState, setSMSLoginBan(false))).toEqual({
        ...initialState,
        userLogin: {
          ...initialState.userLogin,
          isSMSBanState: false,
        },
      });
    });

    test('should handle SET SMS BAN PASSWORD RECOVERY action', (): void => {
      expect(userData(initialState, setSMSLoginBan(false))).toEqual({
        ...initialState,
        passwordRecovery: {
          ...initialState.passwordRecovery,
          isSMSBanState: false,
        },
      });
    });

    test('should handle SET NEW SMS action', (): void => {
      expect(userData(initialState, setNewCode(false))).toEqual({
        ...initialState,
        isSend: false,
      });
    });
  });

  describe('password recovery', (): void => {
    test('should handle SUCCESS SMS action', (): void => {
      expect(userData(initialState, postSmsSuccess(false))).toEqual({
        ...initialState,
        passwordRecovery: {
          ...initialState.passwordRecovery,
          isCheckSms: false,
        },
      });
    });

    test('should handle SUCCESS PASSPORT action', (): void => {
      expect(userData(initialState, postPassportSuccess(false))).toEqual({
        ...initialState,
        passwordRecovery: {
          ...initialState.passwordRecovery,
          isCheckPassport: false,
        },
      });
    });

    test('should handle SUCCESS NEW PASSPORT action', (): void => {
      expect(userData(initialState, postNewPasswordSuccess(false))).toEqual({
        ...initialState,
        passwordRecovery: {
          ...initialState.passwordRecovery,
          isChangePassword: false,
        },
      });
    });

    test('should handle SAVE PHONE action', (): void => {
      expect(userData(initialState, postSavePhoneUser('test'))).toEqual({
        ...initialState,
        passwordRecovery: {
          ...initialState.passwordRecovery,
          phoneUser: 'test',
        },
      });
    });

    test('should handle REQUEST USER action', (): void => {
      expect(userData(initialState, { type: PasswordRecoveryActions.POST_USER_DATA_REQUEST })).toEqual({
        ...initialState,
        fetchStatus: FetchStatus.REQUEST,
        passwordRecovery: {
          ...initialState.passwordRecovery,
          errorMessage: '',
        },
      });
    });

    test('should handle ERROR USER action', (): void => {
      expect(userData(initialState, postSaveMessageError('error'))).toEqual({
        ...initialState,
        passwordRecovery: {
          ...initialState.passwordRecovery,
          errorMessage: 'error',
        },
      });
    });
  });

  describe('change security question', (): void => {
    test('should handle POST CONTROL QUESTION REQUEST action', (): void => {
      expect(userData(initialState, { type: PostUserControlQuestion.POST_CONTROL_QUESTION_REQUEST })).toEqual({
        ...initialState,
        fetchStatus: FetchStatus.REQUEST,
      });
    });

    test('should handle POST CONTROL QUESTION SUCCESS action', (): void => {
      expect(userData(initialState, { type: PostUserControlQuestion.POST_CONTROL_QUESTION_SUCCESS })).toEqual({
        ...initialState,
        fetchStatus: FetchStatus.SUCCESS,
      });
    });

    test('should handle POST CONTROL QUESTION ERROR action', (): void => {
      expect(userData(initialState, { type: PostUserControlQuestion.POST_CONTROL_QUESTION_ERROR })).toEqual({
        ...initialState,
        fetchStatus: FetchStatus.ERROR,
      });
    });

    test('should handle POST CONTROL QUESTION ERROR action', (): void => {
      expect(userData(initialState, { type: PostUserControlQuestion.POST_CONTROL_QUESTION_ERROR })).toEqual({
        ...initialState,
        fetchStatus: FetchStatus.ERROR,
      });
    });

    test('should handle REQUEST action to user', (): void => {
      expect(userData(initialState, { type: GetUser.GET_USER_REQUEST })).toEqual({
        ...initialState,
        fetchStatus: FetchStatus.REQUEST,
      });
    });

    test('should handle REQUEST action to user', (): void => {
      expect(userData(initialState, { type: GetUser.GET_USER_REQUEST })).toEqual({
        ...initialState,
        fetchStatus: FetchStatus.REQUEST,
      });
    });

    test('should handle REQUEST security change password', (): void => {
      expect(userData(initialState, { type: PostUserChangePassword.POST_CHANGE_PASSWORD_REQUEST })).toEqual({
        ...initialState,
      });
    });

    test('should handle ERROR security change password', (): void => {
      expect(userData(initialState, changePasswordError('error'))).toEqual({
        ...initialState,
        securityChangePassword: {
          ...initialState.securityChangePassword,
          errorMessage: 'error',
        },
      });
    });

    test('should handle SUSSES security change password', (): void => {
      expect(userData(initialState, changePasswordSuccess())).toEqual({
        ...initialState,
        securityChangePassword: {
          ...initialState.securityChangePassword,
          isSMSOpen: true,
        },
      });
    });

    test('should handle SUCCESS action to user', (): void => {
      expect(userData(initialState, getUserNotifications({ enabledNotificationSettings: ['test'] }))).toEqual({
        ...initialState,
        fetchStatus: FetchStatus.SUCCESS,
        userAccount: {
          email: '',
          enabledNotificationSettings: ['test'],
          login: '',
          firstName: '',
          lastName: '',
          passport: '',
          phone: '',
          isVip: false,
        },
      });
    });
  });
});
