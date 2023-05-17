import React, { FC, ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { RoutingPaths } from 'constants/routingPaths';
import { PrimaryButton } from 'components/_basic';
import { Size } from 'interfaces/common/componentsSettings';
import classes from './NotFoundPage.module.scss';

export const NotFoundPage: FC = (): ReactElement => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleClick = (): void => navigate(`/${RoutingPaths.MAIN_PAGE_URL}`);

  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        <h2 className={classes.title}>{t('notFoundPage.title')}</h2>
        <p className={classes.message}>{t('notFoundPage.message')}</p>
        <PrimaryButton className={classes.button} size={Size.SMALL} onClick={handleClick}>
          {t('buttonNames.goToMainPage')}
        </PrimaryButton>
      </div>
      <img className={classes.image} src="/images/NotFoundPage.png" alt="Page not found error" />
    </div>
  );
};
