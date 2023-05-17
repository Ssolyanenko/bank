import React, { FC, ReactElement } from 'react';
import { FormControl, MenuItem, Select, SelectChangeEvent, StyledEngineProvider } from '@mui/material';

import { ArrowDownIcon } from 'assets';
import { RATES_ARRAY } from 'constants/rates';
import { getRateIcon, getRateText } from 'helpers/getRate';
import classes from './SelectList.module.scss';

interface Props {
  value: string;
  setValue(rate: string): void;
}

export const SelectList: FC<Props> = ({ value, setValue }): ReactElement => {
  const handleSelectChange = ({ target: { value } }: SelectChangeEvent<string>): void => setValue(value);

  return (
    <div className={classes.rates}>
      <div className={classes.option}>
        <span>{getRateIcon(value, classes.icon)}</span>
        <span className={classes.text}>{getRateText(value)}</span>
      </div>
      <StyledEngineProvider injectFirst>
        <FormControl fullWidth>
          <Select
            className={classes.select}
            value={value}
            IconComponent={ArrowDownIcon}
            onChange={handleSelectChange}
            MenuProps={{
              anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'right',
              },
              transformOrigin: {
                vertical: 'top',
                horizontal: 'right',
              },
            }}
          >
            {RATES_ARRAY.map(
              (rate, index): ReactElement => (
                <MenuItem className={classes.menuItem} value={rate} key={rate + index}>
                  {rate}
                </MenuItem>
              )
            )}
          </Select>
        </FormControl>
      </StyledEngineProvider>
    </div>
  );
};
