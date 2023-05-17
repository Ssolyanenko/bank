import classesMain from 'components/LandingPageComponents/LandingPageMain/LandingPageMain.module.scss';

export const addClassShow = (title: string): void => {
  Array.from(document.getElementsByClassName(title)).forEach((element) => {
    element.classList.add(classesMain.show);
  });
};
