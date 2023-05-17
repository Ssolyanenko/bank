import classesMain from 'components/LandingPageComponents/LandingPageMain/LandingPageMain.module.scss';

export const removeClassShow = (title: string): void => {
  Array.from(document.getElementsByClassName(title)).forEach((element) => {
    element.classList.remove(classesMain.show);
  });
};
