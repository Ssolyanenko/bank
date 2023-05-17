import { Notification } from 'interfaces/notification';

export const getUserNotifications = (notificationTypes: string[]): Notification => {
  const userNotifications: Notification = { EMAIL: false, SMS: false, PUSH: false };

  notificationTypes.every((item) => {
    if (item in userNotifications) {
      userNotifications[item] = true;
    }

    return true;
  });

  return userNotifications;
};
