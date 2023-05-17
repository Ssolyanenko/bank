import dayjs from 'dayjs';

export const getMinutesDifference = (date: string | Date, currentTime?: string | Date): string => {
  const dateString = typeof date === 'string' ? date : dayjs(date).toISOString();
  const currentTimeString = currentTime
    ? typeof currentTime === 'string'
      ? currentTime
      : dayjs(currentTime).toISOString()
    : undefined;

  const diffInSeconds = dayjs(dateString).diff(dayjs(currentTimeString), 'seconds');
  const [diffInMinutes, diffInSecondsRemaining] = [
    Math.floor(Math.abs(diffInSeconds) / 60),
    Math.abs(diffInSeconds) % 60,
  ];

  return `${diffInMinutes.toString().padStart(2, '0')}:${diffInSecondsRemaining.toString().padStart(2, '0')}`;
};
