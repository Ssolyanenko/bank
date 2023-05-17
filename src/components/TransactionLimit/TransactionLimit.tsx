import React, { ChangeEvent, FC, FocusEvent, ReactElement, useState } from 'react';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import { Field, Form, Formik, FormikHelpers, FormikValues } from 'formik';

import { Checkbox, FormError, PrimaryButton, Input } from 'components/_basic';
import { putTransactionLimitCard } from 'store';
import { useTypedDispatch } from 'hooks';
import { InputLabels, InputNames } from 'constants/input';
import { MAX_CARD_LIMIT_SYMBOLS, CARD_LIMIT_TO_ADD_ZEROS } from 'constants/numbers';
import { cardChangeLimitValidation, convertCommaInNums, removeDotsAndCommas } from 'helpers';
import { ButtonType } from 'interfaces/common/componentsSettings';
import classes from './TransactionLimit.module.scss';

interface Props {
  defaultLimit: string;
  setDefaultLimit(currentLimit: string): void;
  handleOpenModalSuccess(newLimit: string): void;
}

export const TransactionLimit: FC<Props> = ({
  defaultLimit,
  setDefaultLimit,
  handleOpenModalSuccess,
}): ReactElement => {
  const { cardId = 0 } = useParams();
  const { t } = useTranslation();

  const dispatch = useTypedDispatch();

  const [isTermsAgree, setTermsAgree] = useState(false);
  const [isTermsAgreeError, setTermsAgreeError] = useState(false);
  const [isFirstClick, setFirstClick] = useState(false);

  const handleFirstClick = (
    setFieldValue: FormikHelpers<FormikValues>['setFieldValue'],
    currentLimit: string
  ): void => {
    if (!isFirstClick && currentLimit === defaultLimit) {
      setFieldValue(InputNames.TRANSACTION_LIMIT, '');
      setFirstClick(true);
    }
  };

  const handleBlurClick = (setFieldValue: FormikHelpers<FormikValues>['setFieldValue'], currentLimit: string): void => {
    if (currentLimit === '') {
      setFieldValue(InputNames.TRANSACTION_LIMIT, defaultLimit);
      setDefaultLimit(defaultLimit);
      setFirstClick(false);
    } else if (!currentLimit.includes('.') && currentLimit.length <= CARD_LIMIT_TO_ADD_ZEROS) {
      setFieldValue(InputNames.TRANSACTION_LIMIT, `${currentLimit}.00`);
      setDefaultLimit(`${currentLimit}.00`);
    }
  };

  const handleInputCheck = (currentSum: string, setFieldValue: FormikHelpers<FormikValues>['setFieldValue']): void => {
    const idleAmout = removeDotsAndCommas(currentSum);

    if (idleAmout.length <= MAX_CARD_LIMIT_SYMBOLS) {
      setDefaultLimit(currentSum);
      setFieldValue(InputNames.TRANSACTION_LIMIT, currentSum);
    }
  };

  const handleCheckboxAgree = (): void => {
    setTermsAgree((prevTermsAgree): boolean => !prevTermsAgree);
    setTermsAgreeError(false);
  };

  const handleCheckboxError = (): void => {
    !isTermsAgree && setTermsAgreeError((prevTermsAgree): boolean => !prevTermsAgree);
  };

  return (
    <Formik
      initialValues={{
        transactionLimit: defaultLimit,
        changeLimitAgreed: isTermsAgree,
      }}
      validationSchema={cardChangeLimitValidation}
      onSubmit={({ transactionLimit }, { resetForm, setSubmitting }): void => {
        const orderData = {
          cardId: +cardId,
          transactionLimit: convertCommaInNums(transactionLimit),
          changeLimitAgreed: isTermsAgree,
        };
        setSubmitting(true);
        dispatch(putTransactionLimitCard(orderData));
        handleOpenModalSuccess(transactionLimit);
        setSubmitting(false);
        resetForm();
      }}
    >
      {({ values, setFieldValue, handleBlur, isValid }): ReactElement => (
        <Form className={classes.form}>
          <Box className={classes.formContainer}>
            <Box component="h2" className={classes.formTitle}>
              {t('transactionLimit.title')}
            </Box>
            <Box component="label" className={classes.lable}>
              <Field
                as={Input}
                name={InputNames.TRANSACTION_LIMIT}
                labelText={InputLabels.TRANSACTION_LIMIT_LABEL}
                placeholder={defaultLimit}
                value={values.transactionLimit}
                isShowSuccess
                type="text"
                onBlur={(event: FocusEvent<HTMLInputElement>): void => {
                  handleBlur(event);
                  handleBlurClick(setFieldValue, values.transactionLimit);
                }}
                onClick={(): void => handleFirstClick(setFieldValue, values.transactionLimit)}
                onChange={({ target }: ChangeEvent<HTMLInputElement>): void =>
                  handleInputCheck(target.value, setFieldValue)
                }
              />
              <FormError additionalClass={classes.emailError} name={InputNames.TRANSACTION_LIMIT} />
            </Box>
            <Box className={classes.terms}>
              <Field
                as={Checkbox}
                classTitle={classes.checkbox}
                name={InputNames.CHANGE_LIMIT_AGREED}
                value={isTermsAgree}
                onChange={handleCheckboxAgree}
              >
                <Box component="span">{t('transactionLimit.policy')}</Box>
              </Field>
            </Box>
            {isTermsAgreeError && (
              <div className={`${classes.error} ${classes.allFieldsError}`}>{t('errors.compulsory')}</div>
            )}
            <Box className={classes.submitButtonContainer} onClick={handleCheckboxError}>
              <PrimaryButton
                className={classes.submitButton}
                type={ButtonType.SUBMIT}
                name={ButtonType.SUBMIT}
                isDisabled={!isValid || !isTermsAgree}
              >
                {t('buttonNames.send')}
              </PrimaryButton>
            </Box>
          </Box>
        </Form>
      )}
    </Formik>
  );
};
