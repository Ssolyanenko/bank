import React, { FC, ReactElement, useEffect, useState } from 'react';
import { Field, Form, Formik } from 'formik';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Button, FormError, Input, Loader, PrimaryButton } from 'components/_basic';
import { ButtonType, Size } from 'interfaces/common/componentsSettings';
import { getPasswordRecovery, postPassportSuccess, postSaveMessageError, requestUserIDResetPassword } from 'store';
import { passportValidation } from 'helpers/validations';
import { useTypedDispatch, useTypedSelector } from 'hooks';
import { InputLabels, InputNames } from 'constants/input';
import { CHANGE_PASSWORD_PASSPORT_URL } from 'constants/requestUrls';
import { ButtonNames } from 'constants/text';
import { RoutingPaths } from 'constants/routingPaths';
import classes from './FirstStepForm.module.scss';

interface Props {
  handleNextStep(): void;
}

export const FirstStepForm: FC<Props> = ({ handleNextStep }): ReactElement => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useTypedDispatch();
  const { isCheckPassport, errorMessage } = useTypedSelector(getPasswordRecovery);

  const [isButtonClick, setIsClicking] = useState(false);

  useEffect(() => {
    if (isCheckPassport && isButtonClick) {
      handleNextStep();
    }
  }, [isCheckPassport, isButtonClick, handleNextStep, dispatch]);

  return (
    <Formik
      initialValues={{
        passport: '',
      }}
      validationSchema={passportValidation}
      onSubmit={async (values, { setSubmitting }): Promise<void> => {
        setSubmitting(true);
        await dispatch(
          requestUserIDResetPassword({
            body: values,
            url: CHANGE_PASSWORD_PASSPORT_URL,
            actionSuccess: postPassportSuccess,
            actionError: postSaveMessageError,
            nextStep: setIsClicking,
          })
        );
        setSubmitting(false);
      }}
    >
      {({ values, isValid, errors, dirty, isSubmitting }): ReactElement => (
        <>
          {isSubmitting && <Loader />}
          <Box className={classes.formPassport}>
            <Form className={classes.formInputPassport}>
              <Field
                as={Input}
                name={InputNames.PASSPORT}
                labelText={InputLabels.ID_NUMBER}
                hasError={!!(values.passport && errors.passport)}
              />
              <Box className={`${classes.formError} ${classes.validationError}`}>
                <FormError name={InputNames.PASSPORT} />
                {errorMessage && (
                  <Box className={`${classes.formError} ${classes.requestError}`}>
                    <span>{errorMessage}</span>
                    <Button
                      className={classes.buttonRedirect}
                      name={ButtonNames.CONTACT_BANK}
                      type={ButtonType.BUTTON}
                      onClick={(): void => {
                        navigate(RoutingPaths.CONTACTS);
                      }}
                    >
                      {t('buttonNames.contactBank')}
                    </Button>
                  </Box>
                )}
              </Box>
              <PrimaryButton
                className={classes.buttonSubmit}
                size={Size.LARGE}
                type={ButtonType.SUBMIT}
                isDisabled={!(dirty && isValid)}
              >
                {t('buttonNames.continue')}
              </PrimaryButton>
            </Form>
          </Box>
        </>
      )}
    </Formik>
  );
};
