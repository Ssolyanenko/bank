export const sendIntervalRequest = (
  requestFunc: (url: string) => Promise<void>,
  url: string,
  timeoutInterval: number,
  clearTimeInterval: number
): void => {
  const interval = setInterval(requestFunc, timeoutInterval, url);
  setTimeout(() => clearInterval(interval), clearTimeInterval);
};
