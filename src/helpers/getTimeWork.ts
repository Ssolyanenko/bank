import { WEEK_DAYS } from 'constants/days';
import { Branch } from 'interfaces/branch';
import { Contact } from 'interfaces/contact';

export const getTimeWork = (branch: Branch, day: string): string => {
  const times = branch.operationModes.find((elem) => elem.dayOfWeek.toLowerCase() === day.toLowerCase());
  const res = times ? `${times.openingTime.split(':')[0]} - ${times.closingTime.split(':')[0]}` : '';
  const time = res === '00 - 00' ? '24/7' : res;

  return time;
};

const groupByTime = (
  objectArray: {
    dayOfWeek: string;
    openingTime: string;
    closingTime: string;
  }[]
): { [key: string]: string[] } =>
  objectArray.reduce(
    (
      acc: { [key: string]: string[] },
      currentElement: {
        dayOfWeek: string;
        openingTime: string;
        closingTime: string;
      }
    ) => {
      const key = `from ${currentElement.openingTime.slice(0, 5)} to ${currentElement.closingTime.slice(0, 5)}`;

      if (!acc[key]) acc[key] = [];
      acc[key].push(currentElement.dayOfWeek);

      return acc;
    },
    {}
  );

export const getTimeContact = (contact: Contact): string[] => {
  const days = contact.operationModes.map((workTime) => workTime);
  const groupDays = groupByTime(days);

  const objGroupDays: { [key: string]: string } = {};

  Object.keys(groupDays).forEach((key) => {
    const strDays: string = groupDays[key]
      .reduce((acc: string[], item: string) => {
        const name: string = item.slice(0, 1) + item.slice(1, 3).toLowerCase();
        acc.push(name);

        return acc;
      }, [])
      .join(', ');

    objGroupDays[strDays] = key;
  });

  const res: string[] = [];

  if (Object.keys(objGroupDays).length === 1) {
    res.push(`Every day ${Object.values(objGroupDays)[0]}`);

    return res;
  }

  Object.keys(objGroupDays).forEach((key) => {
    if (key === WEEK_DAYS) {
      res.push(`Weekdays ${objGroupDays[key]}`);
    } else res.push(`${key} ${objGroupDays[key]}`);
  });

  return res;
};

export const getInfom = (branch: Branch, day: string): boolean => {
  const times = branch.operationModes.find((elem) => elem.dayOfWeek.toLowerCase() === day.toLowerCase());

  if (times) {
    if (times.openingTime === times.closingTime && !times.launchBreakBeginning) return true;

    const date = new Date();
    const [openHour, openMinutes] = times.openingTime.slice(0, -1).split(':');
    const [closeHour, closeMinutes] = times.closingTime.slice(0, -1).split(':');
    const openTime = new Date(date.getFullYear(), date.getMonth(), date.getDate(), +openHour, +openMinutes, 0, 0);
    const closingTime = new Date(date.getFullYear(), date.getMonth(), date.getDate(), +closeHour, +closeMinutes, 0, 0);

    if (date.getTime() >= openTime.getTime() && date.getTime() <= closingTime.getTime()) {
      if (times.launchBreakBeginning && times.launchBreakEnd) {
        const [openHour, openMinutes] = times.launchBreakBeginning.slice(0, -1).split(':');
        const [closeHour, closeMinutes] = times.launchBreakEnd.slice(0, -1).split(':');
        const openTime = new Date(date.getFullYear(), date.getMonth(), date.getDate(), +openHour, +openMinutes, 0, 0);
        const closingTime = new Date(
          date.getFullYear(),
          date.getMonth(),
          date.getDate(),
          +closeHour,
          +closeMinutes,
          0,
          0
        );

        if (date.getTime() <= openTime.getTime() || date.getTime() >= closingTime.getTime()) {
          return true;
        }

        return false;
      }

      return true;
    }
  }

  return false;
};
