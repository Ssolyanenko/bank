import React, { FC, ReactElement, useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';

import { SMSValidation } from 'helpers/validations';
import { BanTimer, FormError, Input, PhoneCodeTimer, PrimaryButton } from 'components/_basic';
import { ButtonType, Size } from 'interfaces/common/componentsSettings';
import {
  postSaveMessageError,
  postSmsSuccess,
  requestUserSMSResetPassword,
  getPasswordRecovery,
  getIsSMSResetBanState,
} from 'store';
import { useTypedSelector, useTypedDispatch } from 'hooks';
import { SMS_FOR_CHANGE_PASSWORD } from 'constants/user';
import { CHANGE_PASSWORD_CHECK_SMS_URL } from 'constants/requestUrls';
import { InputNames } from 'constants/input';
import { TimerDelay } from 'constants/timerDelay';
import { getMinutesDifference, onSendSMSAgain } from 'helpers';
import classes from './SecondStepForm.module.scss';

interface Props {
  handleNextStep(): void;
}

const { DEFAULT_DELAY, BAN_DELAY } = TimerDelay;

export const SecondStepForm: FC<Props> = ({ handleNextStep }): ReactElement => {
  const { t } = useTranslation();
  const dispatch = useTypedDispatch();
  const { isCheckSms, phoneUser, blockedUntil, errorMessage } = useTypedSelector(getPasswordRecovery);
  const isSMSBanState = useTypedSelector(getIsSMSResetBanState);

  const [isActiveNewRequest, setIsActiveNewRequest] = useState(false);
  const [isButtonClick, setIsClicking] = useState(false);
  const [isRestartTimer, setIsRestartTimer] = useState(false);

  useEffect((): void => {
    if (isCheckSms && isButtonClick) {
      handleNextStep();
    }
  }, [isCheckSms, isButtonClick, handleNextStep]);

  const getActualBanMinuteTime = blockedUntil ? getMinutesDifference(blockedUntil, new Date()) : BAN_DELAY;

  const messageExpired = isActiveNewRequest && <div className={classes.timerExpired}>{t('user.codeHasExpired')}</div>;

  const handleClick = (): void =>
    dispatch(onSendSMSAgain(SMS_FOR_CHANGE_PASSWORD, setIsActiveNewRequest, setIsRestartTimer));

  return (
    <Formik
      initialValues={{
        smsCode: '',
      }}
      validationSchema={SMSValidation}
      onSubmit={(values): void => {
        dispatch(
          requestUserSMSResetPassword({
            body: values,
            url: CHANGE_PASSWORD_CHECK_SMS_URL,
            actionSuccess: postSmsSuccess,
            actionError: postSaveMessageError,
            nextStep: setIsClicking,
          })
        );
      }}
    >
      {({ values, errors }): ReactElement => (
        <Box className={classes.form}>
          <Form className={classes.formInputSms}>
            <Typography className={classes.titleInfo}>
              {t('user.smsCodeHaveSend')} {phoneUser}
            </Typography>
            <Box component="label" className={`${errorMessage ? classes.errorMargin : ''}`}>
              <Field
                as={Input}
                labelText={t('input.labels.smsCode')}
                name={InputNames.SMS_CODE}
                hasError={!!(values.smsCode && errors.smsCode)}
                isDisabled={false}
              />
            </Box>
            <FormError name={InputNames.SMS_CODE} additionalClass={classes.error} />
            {errorMessage && <p className={classes.error}>{errorMessage}</p>}
            {!isSMSBanState && (
              <div className={classes.timerInformation}>
                {!isActiveNewRequest ? (
                  <Typography className={classes.timer}>
                    {t('user.codeExpirationTime')}
                    <PhoneCodeTimer
                      timeValue={DEFAULT_DELAY}
                      isRestartTimer={isRestartTimer}
                      setIsRestartTimer={setIsRestartTimer}
                      isActiveNewRequest={isActiveNewRequest}
                      setIsActiveNewRequest={setIsActiveNewRequest}
                    />
                    sec
                  </Typography>
                ) : (
                  messageExpired
                )}
                <button
                  type={ButtonType.BUTTON}
                  disabled={isSMSBanState}
                  className={classes.sendAgain}
                  onClick={handleClick}
                >
                  {t('buttonNames.sendAgain')}
                </button>
              </div>
            )}
            <PrimaryButton
              isDisabled={isSMSBanState}
              className={classes.buttonSubmit}
              size={Size.LARGE}
              type={ButtonType.SUBMIT}
            >
              {isSMSBanState ? <BanTimer timeString={getActualBanMinuteTime} /> : t('buttonNames.continue')}
            </PrimaryButton>
          </Form>
        </Box>
      )}
    </Formik>
  );
};
