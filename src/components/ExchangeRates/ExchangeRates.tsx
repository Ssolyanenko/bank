import { FC, ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { useTypedSelector } from 'hooks/useTypedSelector';
import { Converter, Rates } from 'components';
import { BackButton, ChatButton } from 'components/_basic';
import { RoutingPaths } from 'constants/routingPaths';
import { getIsAuth } from 'store';
import classes from './ExchangeRates.module.scss';

export const ExchangeRates: FC = (): ReactElement => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const isAuth = useTypedSelector(getIsAuth);

  const handleBack = (): void => {
    navigate(isAuth ? `/${RoutingPaths.MAIN_PAGE_URL}` : '/');
  };

  return (
    <>
      <Box className={classes.main}>
        <Box className={classes.backButtonContainer}>
          <BackButton handleBack={handleBack}>{t('buttonNames.back')}</BackButton>
        </Box>
        <Box className={classes.mainContent}>
          <Box className={`${classes.contentContainer} ${classes.rates}`}>
            <span className={classes.title}>{t('exchangeRates.exchangeRates')}</span>
            <Rates />
          </Box>
          <Box className={classes.contentContainer}>
            <Box component="span" className={classes.title}>
              {t('exchangeRates.currencyConverter')}
            </Box>
            <Converter />
          </Box>
        </Box>
      </Box>
      <ChatButton />
    </>
  );
};
