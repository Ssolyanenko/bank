import React, { FC, ReactElement, useState } from 'react';
import { Box, DialogActions, DialogContent } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import { useTranslation } from 'react-i18next';

import { useTypedDispatch, useTypedSelector } from 'hooks';
import { SMSValidation } from 'helpers';
import {
  getIsSMSLoginBanState,
  getPhoneUser,
  getSMSError,
  requestSmsDataLogin,
  setSMSErrorMessage,
  setSMSSuccess,
} from 'store';
import { BanTimer, Input, FormError, Loader, PrimaryButton } from 'components/_basic';
import { ButtonType, Size } from 'interfaces/common/componentsSettings';
import { ConfirmationFormNames } from 'constants/confirmationFormContent';
import { SMS_URL } from 'constants/requestUrls';
import { TimerDelay } from 'constants/timerDelay';
import classes from './ModalForm.module.scss';

const { BAN_DELAY } = TimerDelay;

interface Props {
  timeBlock?: string;
}

export const ModalForm: FC<Props> = ({ timeBlock = '' }): ReactElement => {
  const [isInputClicked, setIsInputClicked] = useState(false);

  const { t } = useTranslation();
  const phoneUser = useTypedSelector(getPhoneUser);
  const isSMSBanState = useTypedSelector(getIsSMSLoginBanState);
  const errorMessage = useTypedSelector(getSMSError);

  const dispatch = useTypedDispatch();

  return (
    <Formik
      initialValues={{
        smsCode: '',
      }}
      validationSchema={SMSValidation}
      onSubmit={async (values, { setSubmitting }): Promise<void> => {
        setSubmitting(true);
        await dispatch(
          requestSmsDataLogin({
            body: values,
            url: SMS_URL,
            actionSuccess: setSMSSuccess,
            actionError: setSMSErrorMessage,
          })
        );
        setSubmitting(false);
      }}
    >
      {({ touched, errors, isSubmitting, isValid, values }): ReactElement => (
        <Form>
          {isSubmitting && <Loader />}
          <h2 className={classes.titlePage}>{t('modalForm.title')}</h2>
          <DialogContent>
            <Box className={classes.confirmationCode}>
              {t('modalForm.confirmationCode')}
              <Box component="span" className={classes.phoneUser}>
                {phoneUser}
              </Box>
            </Box>
            <Box
              component="label"
              className={classes.formInputSMS}
              id="inputLabel"
              onClick={(): void => setIsInputClicked(true)}
            >
              <Field
                as={Input}
                labelText={isInputClicked ? t('modalForm.enterTheCode') : t('modalForm.sessionKey')}
                name={ConfirmationFormNames.SMS_CODE}
                type="text"
                disabled={false}
                isError={!!(touched.smsCode && errors.smsCode)}
                hasError={!!(errorMessage || (touched.smsCode && errors.smsCode))}
              />
            </Box>
            <FormError name={ConfirmationFormNames.SMS_CODE} />
            {errorMessage && (
              <Box className={`${classes.formInputSMS} ${classes.formInputSMSMessage}`} component="span">
                {errorMessage}
              </Box>
            )}
          </DialogContent>
          <DialogActions>
            <Box className={classes.dialogSubmitButton}>
              <PrimaryButton
                isDisabled={isSMSBanState || !isValid || !values.smsCode}
                className={classes.buttonSmsForm}
                size={Size.LARGE}
                type={ButtonType.SUBMIT}
              >
                {isSMSBanState ? <BanTimer timeString={timeBlock || BAN_DELAY} /> : t('modalForm.confirm')}
              </PrimaryButton>
            </Box>
          </DialogActions>
        </Form>
      )}
    </Formik>
  );
};
