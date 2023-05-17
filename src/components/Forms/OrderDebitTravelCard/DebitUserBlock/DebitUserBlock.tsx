import { FC, useEffect, ReactElement } from 'react';
import { Box } from '@mui/material';

import { FormInputBox } from 'components/FormInputBox';
import { DebitCardOrderFieldNames, DebitCardOrderFieldLabels } from 'constants/debitCardsOrderForm';
import { useTypedSelector } from 'hooks';
import { getUserAccount } from 'store';
import classes from './DebitUserBlock.module.scss';

interface Props {
  setFieldValue(field: string, value: string, shouldValidate?: boolean): void;
}

const { FIRST_NAME_LABEL, LAST_NAME_LABEL, EMAIL_LABEL, PHONE_LABEL } = DebitCardOrderFieldLabels;

export const DebitUserBlock: FC<Props> = ({ setFieldValue }): ReactElement => {
  const { firstName, lastName, phone, email } = useTypedSelector(getUserAccount);

  const { FIRST_NAME, LAST_NAME, EMAIL, PHONE } = DebitCardOrderFieldNames;

  useEffect((): void => {
    setFieldValue(FIRST_NAME, firstName);
    setFieldValue(LAST_NAME, lastName);
    setFieldValue(PHONE, phone);
    setFieldValue(EMAIL, email);
  }, [setFieldValue, lastName, firstName, phone, email, FIRST_NAME, LAST_NAME, EMAIL, PHONE]);

  return (
    <>
      <Box className={classes.row}>
        <Box component="label" className={classes.label}>
          <FormInputBox name={FIRST_NAME} label={FIRST_NAME_LABEL} isDisabled />
        </Box>
        <Box component="label" className={classes.label}>
          <FormInputBox name={LAST_NAME} label={LAST_NAME_LABEL} isDisabled />
        </Box>
      </Box>
      <Box className={classes.row}>
        <Box component="label" className={classes.label}>
          <FormInputBox name={EMAIL} label={EMAIL_LABEL} type="email" isDisabled />
        </Box>
        <Box component="label" className={classes.label}>
          <FormInputBox name={PHONE} label={PHONE_LABEL} type="tel" isDisabled />
        </Box>
      </Box>
    </>
  );
};
