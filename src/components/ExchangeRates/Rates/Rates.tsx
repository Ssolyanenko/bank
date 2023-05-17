import React, { FC, ReactElement, useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { getRateIcon, getRateText } from 'helpers/getRate';
import { ExchangeRatesActions } from 'constants/user';
import { postRateError, requestRate } from 'store';
import { useTypedDispatch } from 'hooks';
import { INITIAL_RATES, RateAbbreviation } from 'constants/rates';
import { EXCHANGE_RATE_URL } from 'constants/requestUrls';
import classes from './Rates.module.scss';

export const Rates: FC = (): ReactElement => {
  const { t } = useTranslation();
  const dispatch = useTypedDispatch();

  const [rates, setRates] = useState(INITIAL_RATES);

  useEffect(() => {
    dispatch(
      requestRate({
        body: {
          baseCodes: [RateAbbreviation.USD, RateAbbreviation.EUR, RateAbbreviation.CHF],
          termCode: RateAbbreviation.GBP,
        },
        typeAction: ExchangeRatesActions.GET_RATES,
        url: EXCHANGE_RATE_URL,
        actionError: postRateError,
        setRates,
      })
    );
  }, [dispatch]);

  return (
    <Box className={classes.exchangeRates}>
      <Box className={classes.tableHeader}>
        <Box className={classes.firstCells}>
          <Box component="span" className={classes.subTitle}>
            {t('rates.subTitles.currency')}
          </Box>
        </Box>
        <Box className={classes.secondCells}>
          <Box component="span" className={classes.subTitle}>
            {t('rates.subTitles.buying')}
          </Box>
        </Box>
        <Box className={classes.thirdCells}>
          <Box component="span" className={classes.subTitle}>
            {t('rates.subTitles.selling')}
          </Box>
        </Box>
      </Box>
      <Box>
        {Object.keys(rates.commercialRate).map((rate, index) => (
          <Box key={rate + index} className={classes.currencyRow}>
            <Box className={`${classes.firstCells} ${classes.currencyNameWrapper}`}>
              {getRateIcon(rate)}
              <Box>
                <Box className={classes.abbreviation}>{rate}</Box>
                <Box className={classes.currencyName}>{getRateText(rate)}</Box>
              </Box>
            </Box>
            <Box className={classes.secondCells}>
              <Box component="span" className={classes.rate}>
                {rates.commercialRate[rate].Buy.toFixed(2)}
              </Box>
            </Box>
            <Box className={classes.thirdCells}>
              <Box component="span" className={classes.rate}>
                {rates.commercialRate[rate].Sell.toFixed(2)}
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
