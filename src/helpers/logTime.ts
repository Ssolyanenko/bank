export const logTime = (timer: { minutes: number; sec: number }): string => {
  if (timer.sec < 10) return `${timer.minutes}:0${timer.sec}`;

  return `${timer.minutes}:${timer.sec}`;
};
