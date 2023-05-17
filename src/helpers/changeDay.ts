import classes from 'components/Map/Sidebar/CurrentBranch/CurrentBranch.module.scss';

export const changeDay = (dayId: string, setDay: (day: string) => void): void => {
  Array.from(document.getElementsByClassName(classes.buttonDay)).forEach((element) => {
    element.classList.remove(classes.active);
  });
  document.getElementById(dayId)?.classList.add(classes.active);
  setDay(dayId);
};
