import { FC, ReactElement, useState } from 'react';
import { Formik, Form } from 'formik';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { ArrowDownIcon } from 'assets';
import { FormError, PrimaryButton, SecondaryButton } from 'components/_basic';
import {
  AmountFieldValidation,
  FormInputBox,
  ModalChoosePaymentCard,
  PhoneFieldValidation,
  ResetFormsConfirmModal,
} from 'components';
import {
  TransferFormsNames,
  TransferFormsLabels,
  TransferFormsPlaceholders,
  BY_PHONE_NUMBER_FORM_INITIAL_VALUES,
  BY_PHONE_NUMBER_INITIAL_ERRORS,
} from 'constants/transferFormsContent';
import { ButtonType, Size } from 'interfaces/common/componentsSettings';
import { TransferByPhoneNumberFormValidation } from 'helpers';
import classes from './TransferByPhoneNumberForm.module.scss';

const { MY_CARD, PHONE_NUMBER, PAYMENT_AMOUNT } = TransferFormsNames;
const { MY_CARD_LABEL, PHONE_NUMBER_LABEL, PAYMENT_AMOUNT_LABEL } = TransferFormsLabels;
const { MY_CARD_PLACEHOLDER, PHONE_NUMBER_PLACEHOLDER, PAYMENT_AMOUNT_PLACEHOLDER } = TransferFormsPlaceholders;

export const TransferByPhoneNumberForm: FC = (): ReactElement => {
  const { t } = useTranslation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);

  const handleClick = (): void => setIsModalOpen(true);

  const handleClose = (): void => setIsModalOpen(false);

  return (
    <Formik
      initialValues={BY_PHONE_NUMBER_FORM_INITIAL_VALUES}
      initialErrors={BY_PHONE_NUMBER_INITIAL_ERRORS}
      validationSchema={TransferByPhoneNumberFormValidation}
      onSubmit={(values): void => {
        console.log(values);
      }}
    >
      {({ isValid, values, setFieldValue, resetForm }): ReactElement => (
        <Form className={classes.formWrapper}>
          <Box className={classes.row}>
            <Box className={classes.inputsWrapper}>
              <Box className={classes.inputLabel} component="label">
                <FormInputBox
                  name={MY_CARD}
                  label={MY_CARD_LABEL}
                  placeholder={MY_CARD_PLACEHOLDER}
                  isRequired
                  isCheckmark={false}
                  onClick={handleClick}
                  isReadonly
                />
              </Box>
              <ArrowDownIcon className={classes.icon} />
              <Box className={classes.inputLabel} component="label">
                <FormInputBox
                  name={PHONE_NUMBER}
                  label={PHONE_NUMBER_LABEL}
                  placeholder={PHONE_NUMBER_PLACEHOLDER}
                  isRequired
                />
              </Box>
            </Box>
            <Box className={classes.inputErrors}>
              <Box className={classes.error}>
                <FormError name={MY_CARD} />
              </Box>
              <Box className={classes.error}>
                <FormError name={PHONE_NUMBER} />
              </Box>
            </Box>
          </Box>
          <Box className={classes.row}>
            <Box className={classes.inputLabel} component="label">
              <FormInputBox
                name={PAYMENT_AMOUNT}
                label={PAYMENT_AMOUNT_LABEL}
                placeholder={PAYMENT_AMOUNT_PLACEHOLDER}
                isRequired
                isMoney
              />
              <FormError name={PAYMENT_AMOUNT} />
            </Box>
          </Box>
          <Box className={classes.buttonWrapper}>
            <PrimaryButton
              className={classes.button}
              type={ButtonType.SUBMIT}
              size={Size.SMALL}
              isDisabled={!isValid || !(values.myCard && values.phoneNumber && values.paymentAmount)}
            >
              {t('buttonNames.continue')}
            </PrimaryButton>
            <SecondaryButton
              className={classes.button}
              onClick={(): void => setIsResetModalOpen(true)}
              type={ButtonType.BUTTON}
              size={Size.SMALL}
            >
              {t('buttonNames.reset')}
            </SecondaryButton>
          </Box>
          <ModalChoosePaymentCard
            isOpen={isModalOpen}
            handleClose={handleClose}
            selectedValue={values.cardInformation.cardNumber}
            setFieldValue={setFieldValue}
          />
          <ResetFormsConfirmModal
            isOpen={isResetModalOpen}
            handleClose={(): void => setIsResetModalOpen(false)}
            handleFormReset={(): void => {
              resetForm();
              setIsResetModalOpen(false);
            }}
          />
          <PhoneFieldValidation />
          <AmountFieldValidation />
        </Form>
      )}
    </Formik>
  );
};
