import { createSelector } from 'reselect';

import { getUserNotifications } from 'helpers/getUserNotifications';
import { Store } from 'store';
import { UserAccountState, UserLogin, UserState, PasswordRecovery, SecurityChangePassword } from 'interfaces/user';
import { FetchStatus } from 'constants/fetchStatus';
import { Notification } from 'interfaces/notification';
import { initialState } from 'constants/notifications';

export const getUserData = (state: Store): UserState => state.userData;
export const getUserFetching = createSelector([getUserData], (userData): FetchStatus => userData.fetchStatus);
export const getUserLogin = createSelector([getUserData], (userData): UserLogin => userData.userLogin);
export const getUserAccount = createSelector([getUserData], (userData): UserAccountState => userData.userAccount);
export const getIsVip = createSelector([getUserData], (userData): boolean => userData.userAccount.isVip);
export const getSMSError = createSelector([getUserData], (userData): string => userData.errorMessage);
export const getEmail = createSelector([getUserAccount], (userAccount): string => userAccount.email);
export const getPasswordRecovery = createSelector(
  [getUserData],
  (userData): PasswordRecovery => userData.passwordRecovery
);
export const getIsSMSResetBanState = createSelector(
  [getUserData],
  (userData): boolean => userData.passwordRecovery.isSMSBanState
);
export const getIsSMSLoginBanState = createSelector(
  [getUserData],
  (userData): boolean => userData.userLogin.isSMSBanState
);
export const getIsSend = createSelector([getUserData], (userData): boolean => userData.isSend);
export const getPhoneUser = createSelector(
  [getPasswordRecovery],
  (passwordRecovery): string => passwordRecovery.phoneUser
);
export const getIsSMSOpen = createSelector([getUserLogin], (userLogin): boolean => userLogin.isSMSOpen);
export const getIsSMSAuth = createSelector([getUserLogin], (userLogin): boolean => userLogin.isSMSAuth);
export const getIsFirstLogin = createSelector([getUserLogin], (userLogin): boolean => userLogin.isFirstLogin);
export const getErrorMessage = createSelector([getUserLogin], (userLogin): string => userLogin.errorMessage);
export const getIsAuth = createSelector([getUserLogin], (userLogin): boolean => userLogin.isAuth);
export const getIsOpen = createSelector(
  [getUserData],
  (userData): SecurityChangePassword => userData.securityChangePassword
);
export const getNotificationSettings = createSelector(
  [getUserAccount],
  (UserAccount): string[] => UserAccount.enabledNotificationSettings
);
export const getNotifications = createSelector(
  [getNotificationSettings],
  (enabledNotificationSettings): Notification => {
    const userNotifications = getUserNotifications(enabledNotificationSettings);

    if (!userNotifications) {
      return initialState;
    }

    return userNotifications;
  }
);
