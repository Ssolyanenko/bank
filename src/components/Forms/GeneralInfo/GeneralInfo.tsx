import React, { FC, useMemo, ReactElement } from 'react';
import { Formik, Form, Field } from 'formik';
import { Box } from '@mui/material';

import { FormInputBox } from 'components';
import { useTypedSelector } from 'hooks';
import { getUserAccount } from 'store';
import { InputNames, InputLabels } from 'constants/input';
import { toDo } from 'helpers';
import classes from './GeneralInfo.module.scss';

export const GeneralInfo: FC = () => {
  const { firstName, lastName, phone, email, passport } = useTypedSelector(getUserAccount);

  const initialValues = useMemo(
    () => ({
      [InputNames.FIRST_NAME]: firstName,
      [InputNames.LAST_NAME]: lastName,
      [InputNames.PASSPORT]: passport,
      [InputNames.PHONE]: phone,
      [InputNames.EMAIL]: email,
    }),
    [firstName, lastName, passport, phone, email]
  );

  return (
    <Box className={classes.generalInfo}>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        /* toDo function on submit */
        onSubmit={toDo}
      >
        {(): ReactElement => (
          <Form className={classes.formWrapper}>
            <Box className={classes.rows}>
              <Box className={classes.container}>
                <Box component="label" className={classes.input}>
                  <Field as={FormInputBox} name={InputNames.FIRST_NAME} label={InputLabels.FIRST_NAME} isDisabled />
                </Box>
              </Box>
              <Box className={classes.container}>
                <Box component="label" className={classes.input}>
                  <Field as={FormInputBox} name={InputNames.LAST_NAME} label={InputLabels.LAST_NAME} isDisabled />
                </Box>
              </Box>
              <Box className={classes.container}>
                <Box component="label" className={classes.input}>
                  <Field as={FormInputBox} name={InputNames.PASSPORT} label={InputLabels.ID_NUMBER} isDisabled />
                </Box>
              </Box>
            </Box>
            <Box className={classes.rows}>
              <Box className={classes.container}>
                <Box component="label" className={classes.input}>
                  <Field as={FormInputBox} name={InputNames.PHONE} label={InputLabels.PHONE} isDisabled />
                </Box>
              </Box>
              <Box component="label" className={classes.container}>
                <Box className={classes.input}>
                  <Field as={FormInputBox} name={InputNames.EMAIL} label={InputLabels.EMAIL} isDisabled />
                </Box>
              </Box>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
