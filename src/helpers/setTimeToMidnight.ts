import dayjs, { Dayjs } from 'dayjs';

export const setTimeToMidnight = (date: Date | string | null): Dayjs => dayjs(dayjs(date).format('MMMM D, YYYY'));
