import { FC, ReactElement, useState } from 'react';
import { Box } from '@mui/material';

import { DatePicker } from 'components/_basic';
import { CardStatementIcon } from 'assets';
import { CardStatementButtons } from 'components';
import classes from './CardStatement.module.scss';

export const CardStatement: FC = (): ReactElement => {
  const [valueTo, setValueTo] = useState<Date | null>(null);
  const [valueFrom, setValueFrom] = useState<Date | null>(null);

  return (
    <Box className={classes.formContainer}>
      <Box className={classes.formTitleBox}>
        <CardStatementIcon className={classes.mainIcon} />
        <Box component="h2" className={classes.formTitle}>
          Card Statement
        </Box>
      </Box>
      <Box className={classes.dateFilter}>
        <Box className={classes.dateInputs}>
          <DatePicker date={valueFrom} setDate={setValueFrom} label="From" />
          <DatePicker date={valueTo} setDate={setValueTo} label="To" />
        </Box>
      </Box>
      <CardStatementButtons valueFrom={valueFrom} valueTo={valueTo} />
    </Box>
  );
};
