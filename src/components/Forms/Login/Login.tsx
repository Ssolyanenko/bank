import React, { FC, ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { ModalForm, ThirdStepForm } from 'components';
import {
  Input,
  InputPassword,
  ModalConfirmation,
  ModalWrapper,
  ModalBox,
  BackButton,
  Button,
  CloseButton,
  Loader,
  PrimaryButton,
  FormError,
} from 'components/_basic';
import { login, clearAccessToken, getMinutesDifference } from 'helpers';
import { ButtonType, Size } from 'interfaces/common/componentsSettings';
import { SendNewSMS } from 'interfaces/user';
import { useTypedSelector, useTypedDispatch } from 'hooks';
import {
  requestUserLogin,
  loginSuccess,
  loginError,
  setSMSSuccess,
  setFirstlogin,
  fetchCurrentUser,
  setNewCode,
  getIsSend,
  getUserLogin,
} from 'store';
import { CheckmarkIcon } from 'assets';
import { LOGIN_URL } from 'constants/requestUrls';
import { RoutingPaths } from 'constants/routingPaths';
import { InputNames } from 'constants/login';
import classes from './Login.module.scss';

interface Props {
  openModal(): void;
  onOpenFinallyPopup(): void;
  onSubmit?(): void;
}

export const Login: FC<Props> = ({ openModal, onOpenFinallyPopup }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useTypedDispatch();
  const isSend = useTypedSelector(getIsSend);
  const { isSMSOpen, isSMSAuth, isFirstLogin, errorMessage, banTimeUntil } = useTypedSelector(getUserLogin);

  const onHandleClose = (): void => {
    dispatch(setSMSSuccess(false));
    dispatch(fetchCurrentUser());
    dispatch(loginSuccess(false, false));
    clearAccessToken();
  };

  const onCloseChangePassword = (): void => {
    onHandleClose();
    dispatch(setFirstlogin(false));
  };

  const redirectMainPage = (): void => navigate(RoutingPaths.MAIN_PAGE_URL);

  const onClose = (): void => {
    redirectMainPage();
    dispatch(setSMSSuccess(false));
    dispatch(fetchCurrentUser());
  };

  const getActualBanMinuteTime = banTimeUntil && getMinutesDifference(banTimeUntil, new Date());

  return (
    <Formik
      initialValues={{
        login: '',
        password: '',
      }}
      validationSchema={login}
      onSubmit={async (values, { setSubmitting }): Promise<void> => {
        setSubmitting(true);
        console.log(1);
        await dispatch(
          requestUserLogin({
            body: values,
            url: LOGIN_URL,
            actionSuccess: loginSuccess,
            actionError: loginError,
          })
        );
        setSubmitting(false);
      }}
    >
      {({ touched, errors, isSubmitting, isValid, values }): ReactElement => (
        <>
          {isSubmitting && <Loader />}
          <Box className={classes.form}>
            <Form>
              <Box className={classes.formHeader}>
                <h1 className={classes.formHeaderTitle}>{t('login.formHeaderTitle')}</h1>
              </Box>
              <Box className={classes.formInputLogin}>
                <Field
                  as={Input}
                  labelText={t('login.inputLabels.login')}
                  placeholder={t('login.inputPlaceholders.login')}
                  name={InputNames.LOGIN}
                  hasError={!!(touched.login && errors.login)}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <FormError additionalClass={classes.formError} name={InputNames.LOGIN} />
              </Box>
              <Box className={classes.formInputPassword}>
                <Field
                  as={InputPassword}
                  labelText={t('login.inputLabels.password')}
                  placeholder={t('login.inputPlaceholders.password')}
                  name={InputNames.PASSWORD}
                  isError={!!(touched.password && errors.password)}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <FormError additionalClass={classes.formError} name={InputNames.PASSWORD} />
              </Box>
              {errorMessage && <div className={classes.formError}>{errorMessage}</div>}
              <Box className={classes.formButtonLogin}>
                <PrimaryButton
                  className={classes.buttonSubmit}
                  size={Size.LARGE}
                  type={ButtonType.SUBMIT}
                  isDisabled={!isValid || !(values.login && values.password)}
                >
                  {t('buttonNames.logIn')}
                </PrimaryButton>
              </Box>
            </Form>
            <Box className={classes.formLinks}>
              <Button className={classes.buttonLink} type={ButtonType.BUTTON} onClick={openModal}>
                {t('buttonNames.forgotPassword')}
              </Button>
            </Box>
            <ModalWrapper
              textButton={t('login.proceed')}
              subTitle={t('login.successfullyLoggedIn')}
              open={isSMSAuth}
              id="ModalSuccessfully"
              onClose={onClose}
            />
          </Box>

          <ModalConfirmation isOpened={isSMSOpen} onClose={onHandleClose} maxWidth="423px">
            <div className={classes.backButton}>
              <BackButton handleBack={onHandleClose}>{t('buttonNames.back')}</BackButton>
            </div>
            <ModalForm timeBlock={getActualBanMinuteTime} />
            <ModalBox timeBlock={getActualBanMinuteTime} />
          </ModalConfirmation>
          <ModalConfirmation isOpened={isSend} onClose={(): SendNewSMS => dispatch(setNewCode(false))} maxWidth="600px">
            <div className={classes.modalCloseButton}>
              <CloseButton size={Size.MEDIUM} onClick={(): SendNewSMS => dispatch(setNewCode(false))} />
            </div>
            <CheckmarkIcon className={classes.modalIcon} />
            <div className={classes.modalText}>{t('login.smsSentSuccessfully')}</div>
          </ModalConfirmation>
          {isFirstLogin && (
            <div className={classes.firstLogin}>
              <BackButton handleBack={onCloseChangePassword}>{t('buttonNames.back')}</BackButton>
              <span className={classes.text}>{t('login.resetPassword')}</span>
              <ThirdStepForm handleSubmit={onOpenFinallyPopup} />
            </div>
          )}
        </>
      )}
    </Formik>
  );
};
