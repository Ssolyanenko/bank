import { MONTHS, WEEK } from 'constants/days';
import { TransactionsHistory } from 'interfaces/history';

export const groupHistoryByDay = (objectArray: TransactionsHistory[]): { [key: string]: TransactionsHistory[] } =>
  objectArray.reduce((acc: { [key: string]: TransactionsHistory[] }, currentElement: TransactionsHistory) => {
    const date = currentElement.date.split('.');
    const [dateDay, dateMonth, dateYear] = date;
    const dateNow = new Date(+dateYear, +dateMonth, +dateDay);
    const weekDay = WEEK[dateNow.getDay()];
    const month = MONTHS[dateNow.getMonth()];
    const key = `${month} ${dateDay}, ${weekDay}`;

    if (!acc[key]) acc[key] = [];
    acc[key].push(currentElement);

    return acc;
  }, {});
