import React, { FC, ReactElement, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { LandingPageHeader, LandingPageMain, LandingPageFooter, Slider, RootModal } from 'components';
import { ModalWrapper } from 'components/_basic';
import { images } from 'constants/images';
import { TITLE, SUBTITLE } from 'constants/classToAnimation';
import { removeClassShow } from 'helpers';
import { useTypedDispatch } from 'hooks';
import { STEPS } from 'constants/stepForm';
import { postSaveMessageError, requestUserLogout } from 'store';
import colors from 'styles/variables.module.scss';
import classes from './LandingPage.module.scss';

export const LandingPage: FC = (): ReactElement => {
  const { t } = useTranslation();
  const dispatch = useTypedDispatch();

  const [activeIndex, setActiveIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [openFinallyPopup, setOpenFinallyPopup] = useState(false);

  useEffect(() => {
    dispatch(requestUserLogout());
  }, [dispatch]);

  const onCloseFinallyPopup = (): void => setOpenFinallyPopup(false);

  const onOpenFinallyPopup = (): void => setOpenFinallyPopup(true);

  const openModal = (): void => {
    setOpen(true);
  };

  const onCloseModal = (): void => {
    const [firstStep, secondStep, thirdStep] = STEPS;

    firstStep.isCompleted = true;
    secondStep.isCompleted = false;
    thirdStep.isCompleted = false;
    setOpen(false);
    dispatch(postSaveMessageError(''));
  };

  useEffect((): (() => void) => {
    const interval = setInterval(() => {
      setActiveIndex((current: number): number => (current === images.length - 1 ? 0 : current + 1));
    }, 5000);

    return (): void => clearInterval(interval);
  }, []);

  const switchIndex = (index: number): void => {
    removeClassShow(TITLE);
    removeClassShow(SUBTITLE);
    setActiveIndex(index);
  };

  return (
    <div className={classes.paper}>
      <div className={classes.page}>
        <LandingPageHeader iconsColor="white" changeColor={{ color: colors.white_1 }} iconsSize="32px" />
        <LandingPageMain
          openModal={openModal}
          onOpenFinallyPopup={onOpenFinallyPopup}
          title={t(`landingPage.titles.${activeIndex}.title`)}
          subTitle={t(`landingPage.titles.${activeIndex}.subTitle`)}
        />
        <LandingPageFooter images={images} activeIndex={activeIndex} switchIndex={switchIndex} />
        <RootModal onOpenFinallyPopup={onOpenFinallyPopup} onOpen={open} onCloseModal={onCloseModal} />
        <ModalWrapper
          textButton={t('landingPage.logIn')}
          subTitle={t('landingPage.subTitlePasswordRecovery')}
          open={openFinallyPopup}
          onClose={onCloseFinallyPopup}
          id="ModalSuccessfully"
        />
        <Slider slides={images} activeSlide={activeIndex} />
      </div>
    </div>
  );
};
