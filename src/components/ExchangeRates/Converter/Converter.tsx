import React, { FC, ReactElement, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { CURRENCY_RATE, RATES_ARRAY } from 'constants/rates';
import { SelectList, InputConverter } from 'components';
import { ExchangeIcon } from 'assets';
import { ExchangeRatesActions } from 'constants/user';
import { postRateError, requestRate } from 'store';
import { useTypedDispatch } from 'hooks';
import { EXCHANGE_RATE_URL } from 'constants/requestUrls';
import classes from './Converter.module.scss';

export const Converter: FC = (): ReactElement => {
  const { t } = useTranslation();
  const dispatch = useTypedDispatch();

  const [valueFrom, setValueFrom] = useState(RATES_ARRAY[0]);
  const [valueTo, setValueTo] = useState(RATES_ARRAY[1]);
  const [currencyRate, setCurrency] = useState(CURRENCY_RATE);
  const [amount, setAmount] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    if (valueFrom !== valueTo) {
      dispatch(
        requestRate({
          body: {
            baseCodes: [valueFrom],
            termCode: valueTo,
          },
          typeAction: ExchangeRatesActions.GET_RATES,
          url: EXCHANGE_RATE_URL,
          actionError: postRateError,
          setRates: setCurrency,
        })
      );
    } else {
      setCurrency({
        commercialRate: {
          valueTo: {
            Buy: 1,
            Sell: 1,
          },
        },
      });
    }
  }, [valueFrom, valueTo, dispatch]);

  useEffect(() => {
    const rate = currencyRate.commercialRate[valueFrom]?.Sell || 1;

    if (amount && rate) setPrice((rate * +amount).toFixed(5).toString());
    else setPrice('');
  }, [amount, currencyRate, valueFrom]);

  const changeRate = (): void => {
    const temporary = valueFrom;
    setValueFrom(valueTo);
    setValueTo(temporary);
  };

  return (
    <div>
      <div className={classes.convert}>
        <SelectList value={valueFrom} setValue={setValueFrom} />
        <SelectList value={valueTo} setValue={setValueTo} />
      </div>
      <div className={classes.iconExchange}>
        <ExchangeIcon className={classes.icon} onClick={changeRate} />
      </div>
      <div className={classes.inputAmount}>
        <InputConverter rate={valueFrom} value={amount} text={t('converter.amount')} setValue={setAmount} />
        <InputConverter rate={valueTo} value={price} text={t('converter.price')} setValue={setPrice} />
      </div>
    </div>
  );
};
