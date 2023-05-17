export const smsCodeTimer = (timer: { minutes: number; sec: number }): { minutes: number; sec: number } => {
  if (timer.sec === 0 && timer.minutes > 0) return { minutes: timer.minutes - 1, sec: 59 };

  if (timer.sec > 0) return { minutes: timer.minutes, sec: timer.sec - 1 };

  return timer;
};
