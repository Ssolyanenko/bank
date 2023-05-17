import React, { FC, ReactElement, useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { ButtonType, Size } from 'interfaces/common/componentsSettings';
import { PasswordValidationWithConfirm } from 'helpers';
import { FormError, InputPassword, PrimaryButton } from 'components/_basic';
import {
  postNewPasswordSuccess,
  postSaveMessageError,
  requestUserResetPassword,
  setFirstlogin,
  getPasswordRecovery,
  getIsFirstLogin,
} from 'store';
import { useTypedSelector, useTypedDispatch } from 'hooks';
import { InputNames } from 'constants/input';
import { PASSWORD_SHOULD_CONTAIN } from 'constants/user';
import { CHANGE_PASSWORD_FIRST_ENTRY, CHANGE_PASSWORD_NEW_PASSWORD_URL } from 'constants/requestUrls';
import colors from 'styles/variables.module.scss';
import classes from './ThirdStepForm.module.scss';

interface Props {
  handleSubmit(): void;
}

export const ThirdStepForm: FC<Props> = ({ handleSubmit }): ReactElement => {
  const { t } = useTranslation();
  const dispatch = useTypedDispatch();
  const isChangePassword = useTypedSelector(getPasswordRecovery);
  const isFirstLogin = useTypedSelector(getIsFirstLogin);

  const [isButtonClick, setIsClicking] = useState(false);

  useEffect((): void => {
    if (isChangePassword && isButtonClick) {
      handleSubmit();
      dispatch(setFirstlogin(false));
    }
  }, [isChangePassword, isButtonClick, handleSubmit, dispatch]);

  return (
    <Formik
      initialValues={{
        newPassword: '',
        confirmPassword: '',
      }}
      validationSchema={PasswordValidationWithConfirm}
      onSubmit={(values): void => {
        dispatch(
          requestUserResetPassword({
            body: values,
            url: isFirstLogin ? CHANGE_PASSWORD_FIRST_ENTRY : CHANGE_PASSWORD_NEW_PASSWORD_URL,
            actionSuccess: postNewPasswordSuccess,
            actionError: postSaveMessageError,
          })
        );
        setIsClicking(true);
      }}
    >
      {({ values, isValid, errors, touched }): ReactElement => (
        <Box className={classes.form}>
          <Form className={classes.formInputPassportID}>
            <Field
              as={InputPassword}
              name={InputNames.NEW_PASSWORD}
              labelText={t('input.labels.newPassword')}
              isError={!!(touched.newPassword && errors.newPassword)}
              InputLabelProps={{
                style: { color: colors.grayDark_7 },
              }}
            />
            <Box className={classes.boxSmS}>
              {!touched.newPassword && (
                <Typography className={classes.smsForUser}>{PASSWORD_SHOULD_CONTAIN}</Typography>
              )}
              <FormError additionalClass={classes.formError} name={InputNames.NEW_PASSWORD} />
            </Box>
            <Field
              as={InputPassword}
              className={classes.confirmNewPassword}
              name={InputNames.CONFIRM_PASSWORD}
              labelText={t('input.labels.confirmPassword')}
              isError={!!(touched.confirmPassword && errors.confirmPassword)}
              InputLabelProps={{
                style: { color: colors.grayDark_7 },
              }}
            />
            <FormError additionalClass={classes.formError} name={InputNames.CONFIRM_PASSWORD} />
            <PrimaryButton
              className={classes.buttonSubmit}
              size={Size.LARGE}
              type={ButtonType.SUBMIT}
              isDisabled={!isValid || !(values.newPassword && values.confirmPassword)}
            >
              {t('buttonNames.continue')}
            </PrimaryButton>
          </Form>
        </Box>
      )}
    </Formik>
  );
};
