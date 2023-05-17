import React, { FC, ReactElement } from 'react';
import { Box } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';

import { changePasswordValidation } from 'helpers';
import {
  CloseButton,
  FormError,
  InputPassword,
  Loader,
  ModalConfirmation,
  PrimaryButton,
  SecondaryButton,
} from 'components/_basic';
import { changePasswordError, changePasswordSuccess, getIsOpen, requestPostSecurityPassword } from 'store';
import { useTypedDispatch, useTypedSelector } from 'hooks';
import { LabelSecurityForm } from 'constants/formInputs';
import { InputNames } from 'constants/input';
import { RoutingPaths } from 'constants/routingPaths';
import { ButtonType, Size } from 'interfaces/common/componentsSettings';
import { CheckmarkIcon } from 'assets';
import classes from './ChangePassword.module.scss';

export const ChangePassword: FC = (): ReactElement => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useTypedDispatch();
  const { isSMSOpen, errorMessage } = useTypedSelector(getIsOpen);

  const closeModalHandler = (): void => {
    window.location.reload();
    navigate(`/${RoutingPaths.MAIN_PAGE_URL}/${RoutingPaths.USER_ACCOUNT}`);
  };

  return (
    <>
      <Formik
        initialValues={{
          currentPassword: '',
          createNewPassword: '',
          confirmNewPassword: '',
        }}
        validationSchema={changePasswordValidation}
        onSubmit={async ({ currentPassword, createNewPassword }, { setSubmitting }): Promise<void> => {
          setSubmitting(true);
          await dispatch(
            requestPostSecurityPassword({
              currentPassword,
              newPassword: createNewPassword,
              actionSuccess: changePasswordSuccess,
              actionError: changePasswordError,
            })
          );
          setSubmitting(false);
        }}
      >
        {({ isValid, dirty, errors, touched, isSubmitting }): ReactElement => (
          <Form>
            {isSubmitting && <Loader />}
            <Box className={classes.header}>
              <Box component="span" className={classes.headerText}>
                Enter your current password, then create and confirm a new one.
              </Box>
            </Box>

            <Box className={classes.changePasswordInput}>
              <Field
                as={InputPassword}
                labelText={LabelSecurityForm.CURRENT_PASSWORD}
                name={InputNames.CURRENT_PASSWORD}
                isError={!!(touched.currentPassword && errors.currentPassword)}
              />

              <FormError name={InputNames.CURRENT_PASSWORD} />
              {errorMessage && <p className={classes.formError}>{errorMessage}</p>}
            </Box>
            <Box className={classes.inputContainer}>
              <Box className={`${classes.changePasswordInput} ${classes.inputNewPassword}`}>
                <Field
                  as={InputPassword}
                  labelText={LabelSecurityForm.NEW_PASSWORD}
                  name={InputNames.CREATE_NEW_PASSWORD}
                  isError={!!(touched.createNewPassword && errors.createNewPassword)}
                />
                <FormError name={InputNames.CREATE_NEW_PASSWORD} />
              </Box>
              <Box className={classes.changePasswordInput}>
                <Field
                  as={InputPassword}
                  labelText={LabelSecurityForm.CONFIRM_PASSWORD}
                  name={InputNames.CONFIRM_NEW_PASSWORD}
                  isError={!!(touched.confirmNewPassword && errors.confirmNewPassword)}
                />
                <FormError name={InputNames.CONFIRM_NEW_PASSWORD} />
              </Box>
            </Box>

            <Box className={classes.buttonsWrapper}>
              <PrimaryButton className={classes.button} type={ButtonType.SUBMIT} isDisabled={!(dirty && isValid)}>
                {t('buttonNames.submit')}
              </PrimaryButton>
              <SecondaryButton className={classes.button} type={ButtonType.RESET}>
                {t('buttonNames.cancel')}
              </SecondaryButton>
            </Box>
          </Form>
        )}
      </Formik>

      <ModalConfirmation isOpened={isSMSOpen} onClose={closeModalHandler} maxWidth="600px">
        <Box className={classes.modalCloseButton}>
          <CloseButton size={Size.MEDIUM} onClick={closeModalHandler} />
        </Box>
        <CheckmarkIcon className={classes.modalIcon} />
        <Box className={classes.modalText}>Password changed successfully</Box>
      </ModalConfirmation>
    </>
  );
};
