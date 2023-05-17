import { FC, ReactElement, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { Login } from 'components/Forms';
import { PrimaryButton } from 'components/_basic';
import { removeClassShow } from 'helpers/removeClassShow';
import { addClassShow } from 'helpers/addClassShow';
import classes from './LandingPageMain.module.scss';

interface Props {
  title: string;
  subTitle: string;
  openModal(): void;
  onOpenFinallyPopup(): void;
}

export const LandingPageMain: FC<Props> = ({ openModal, onOpenFinallyPopup, title, subTitle }): ReactElement => {
  const { t } = useTranslation();

  useEffect(() => {
    removeClassShow(classes.title);
    removeClassShow(classes.subTitle);
    setTimeout(() => {
      addClassShow(classes.title);
      addClassShow(classes.subTitle);
    }, 50);
  });

  return (
    <div className={classes.lanMain}>
      <div className={classes.titleWrapper}>
        <span className={classes.title}>{title}</span>
        <span className={classes.subTitle}>{subTitle}</span>
        <PrimaryButton
          onClick={(): void => {}} // TODO learn more
        >
          {t('landingPageMain.learnMore')}
        </PrimaryButton>
      </div>
      <Login openModal={openModal} onOpenFinallyPopup={onOpenFinallyPopup} />
    </div>
  );
};
