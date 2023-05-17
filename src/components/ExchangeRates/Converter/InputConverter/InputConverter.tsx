import React, { ChangeEvent, FC, ReactElement } from 'react';

import { getRateSign } from 'helpers/getRate';
import { PRICE } from 'constants/rates';
import classes from './InputConverter.module.scss';

interface Props {
  rate: string;
  value: string;
  text: string;
  setValue(rate: string): void;
}

export const InputConverter: FC<Props> = ({ rate, value, text, setValue }): ReactElement => {
  const handleChange = (event: ChangeEvent): void => {
    if (+(event.target as HTMLInputElement).value || (event.target as HTMLInputElement).value === '')
      setValue((event.target as HTMLInputElement).value);
  };

  return (
    <div className={classes.container}>
      <span className={classes.textOperation}>{text}</span>
      <div className={classes.inputContainer}>
        {value && <span className={classes.textRate}>{getRateSign(rate)}</span>}
        <input disabled={text === PRICE} className={classes.inputValue} value={value} onChange={handleChange} />
      </div>
      <div className={classes.underline} />
    </div>
  );
};
