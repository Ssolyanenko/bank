import React, { ReactElement } from 'react';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';

import { DebitTravelCard } from 'components';
import { BackButton } from 'components/_basic';
import classes from './CardProductsInner.module.scss';

export const CardProductsInner = (): ReactElement => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className={classes.cardProductsInner}>
      <BackButton handleBack={() => navigate(-1)}>{t('buttonNames.back')}</BackButton>
      <DebitTravelCard />
    </div>
  );
};
