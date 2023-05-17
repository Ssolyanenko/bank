export const getAvailableNotifications = (notifications: string[], notificationName: string): string[] => {
  if (notifications.includes(notificationName)) {
    return notifications.filter((item) => item !== notificationName);
  }

  return [...notifications, notificationName];
};
