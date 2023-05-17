import React, { FC, ReactElement, useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';

import { CloseButton, FormError, Input, ModalConfirmation, PrimaryButton, Switcher } from 'components/_basic';
import { Switchers } from 'constants/text';
import { ButtonType, Size } from 'interfaces/common/componentsSettings';
import { EMAIL_URL } from 'constants/requestUrls';
import { MAX_WIDTH } from 'constants/numbers';
import { RoutingPaths } from 'constants/routingPaths';
import { useTypedSelector, useTypedDispatch } from 'hooks';
import { InputNames } from 'constants/input';
import { emailValidation } from 'helpers';
import { NotificationTypes } from 'constants/notificationsTypes';
import { CheckmarkIcon } from 'assets/CheckmarkIcon';
import {
  getEmail,
  requestPostEmail,
  getNotifications,
  getNotificationSettings,
  requestUserNotifications,
  requestUserNotificationChange,
} from 'store';
import classes from './FormNotifications.module.scss';

export const FormNotifications: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useTypedDispatch();
  const email = useTypedSelector(getEmail);
  const enabledNotifications = useTypedSelector(getNotifications);
  const userNotificationsSettings = useTypedSelector(getNotificationSettings);

  const [isEntered, setIsEntered] = useState(!email.length);
  const [activeSubmit, setActiveSubmit] = useState(false);
  const [isModalOpened, setIsModalOpened] = useState(false);

  useEffect(() => {
    dispatch(requestUserNotifications());
  }, [dispatch]);

  const changeToggler = (notificationName: string): boolean => userNotificationsSettings.includes(notificationName);

  const handleNotificationChange = (togglerName: string): void => {
    dispatch(requestUserNotificationChange(togglerName));
  };

  const closeModalHandler = (): void => {
    navigate(`/${RoutingPaths.MAIN_PAGE_URL}/${RoutingPaths.USER_ACCOUNT}`);
    setIsModalOpened(false);
  };

  return (
    <>
      <Formik
        initialValues={{
          email,
        }}
        validationSchema={emailValidation}
        initialTouched={{ email: true }}
        onSubmit={(values): void => {
          setIsModalOpened(true);
          dispatch(requestPostEmail(EMAIL_URL, values, setIsEntered));
        }}
      >
        {({ isValid, errors, touched }): ReactElement => (
          <Box className={classes.notifications}>
            <Form className={classes.form}>
              <Box>
                <Box component="span" className={classes.header}>
                  To receive email newsletter
                </Box>
              </Box>
              <Box className={classes.container}>
                <Box className={classes.input} component="label">
                  <Field
                    as={Input}
                    label="Enter your email"
                    id={InputNames.EMAIL}
                    name={InputNames.EMAIL}
                    type="email"
                    disabled={!isEntered || activeSubmit}
                    onBlur={(): void => {
                      setActiveSubmit(true);
                    }}
                    hasError={!!(touched.email && errors.email)}
                  />
                  <FormError additionalClass={classes.emailError} name="email" />
                </Box>
                <Box className={classes.buttons}>
                  <PrimaryButton
                    className={classes.button}
                    type={ButtonType.SUBMIT}
                    isDisabled={!isValid || !activeSubmit}
                  >
                    {t('buttonNames.submit')}
                  </PrimaryButton>
                </Box>
              </Box>
              <Box className={classes.controlItems}>
                <Box className={classes.controlItem}>
                  <Typography className={classes.controlItemTitle}>Email newsletter</Typography>
                  <Switcher
                    handleChange={(): void => {
                      handleNotificationChange(NotificationTypes.EMAIL);
                      setActiveSubmit(true);
                    }}
                    isChecked={changeToggler(NotificationTypes.EMAIL)}
                  />
                  <span className={classes.handler}>{enabledNotifications.EMAIL ? Switchers.ON : Switchers.OFF}</span>
                </Box>
                <Box className={classes.controlItem}>
                  <Typography className={classes.controlItemTitle}>SMS notifications</Typography>
                  <Switcher
                    handleChange={(): void => {
                      handleNotificationChange(NotificationTypes.SMS);
                      setActiveSubmit(true);
                    }}
                    isChecked={changeToggler(NotificationTypes.SMS)}
                  />
                  <span className={classes.handler}>{enabledNotifications.SMS ? Switchers.ON : Switchers.OFF}</span>
                </Box>
                <Box className={classes.controlItem}>
                  <Typography className={classes.controlItemTitle}>PUSH notifications</Typography>
                  <Switcher
                    handleChange={(): void => {
                      handleNotificationChange(NotificationTypes.PUSH);
                      setActiveSubmit(true);
                    }}
                    isChecked={changeToggler(NotificationTypes.PUSH)}
                  />
                  <span className={classes.handler}>{enabledNotifications.PUSH ? Switchers.ON : Switchers.OFF}</span>
                </Box>
              </Box>
            </Form>
          </Box>
        )}
      </Formik>

      <ModalConfirmation isOpened={isModalOpened} onClose={closeModalHandler} maxWidth={MAX_WIDTH}>
        <Box className={classes.modalCloseButton}>
          <CloseButton size={Size.MEDIUM} onClick={closeModalHandler} />
        </Box>
        <CheckmarkIcon className={classes.modalIcon} />
        <Box className={classes.modalText}>Your email has been successfully submitted!</Box>
      </ModalConfirmation>
    </>
  );
};
