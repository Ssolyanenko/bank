import { getUserNotifications } from 'helpers';
import { Notification } from 'interfaces/notification';

describe('getUserNotifications', () => {
  test('no notifications enabled', () => {
    const notifications: Notification = { EMAIL: false, SMS: false, PUSH: false };

    expect(getUserNotifications([])).toStrictEqual(notifications);
  });

  test('wrong notifications', () => {
    const notifications: Notification = { EMAIL: false, SMS: false, PUSH: false };

    expect(getUserNotifications(['test'])).toStrictEqual(notifications);
  });

  test('all notifications enabled', () => {
    const notifications: Notification = { EMAIL: true, SMS: true, PUSH: true };

    expect(getUserNotifications(['EMAIL', 'SMS', 'PUSH'])).toStrictEqual(notifications);
  });

  test('some notifications enabled', () => {
    const notifications: Notification = { EMAIL: true, SMS: true, PUSH: false };

    expect(getUserNotifications(['EMAIL', 'SMS'])).toStrictEqual(notifications);
  });
});
