import React, { ChangeEvent, FC, ReactElement, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { SetPinCodeFormModal, SetPinSuccessModal } from 'components';
import { InputStyled, EditButton, ModalSuccess, Checkbox, Button } from 'components/_basic';
import { cardLimitMask, cardLimitValidation } from 'helpers';
import { ButtonType } from 'interfaces/common/componentsSettings';
import { SUCCESS } from 'constants/text';
import { CHANGE_PIN_CODE_FORM_CONTENT } from 'constants/pinCodeFormContent';
import { CARD_LIMIT_AMOUNT, CARD_LIMIT_INFO_CHECKBOX, INITIAL_VALUES_CARD_LIMIT_FORM } from 'constants/formInputs';
import classes from './CardLimitForm.module.scss';

const { title, buttonName } = CHANGE_PIN_CODE_FORM_CONTENT;

export const CardLimitForm: FC = (): ReactElement => {
  const { t } = useTranslation();

  const [isEditableLimit, setIsEditableLimit] = useState(false);
  const [isLimitSuccessModal, setIsLimitSuccessModal] = useState(false);
  const [isPinModal, setIsPinModal] = useState(false);
  const [isPinSuccessModal, setIsPinSuccessModal] = useState(false);

  const handlePinChangeModal = (pinValue: string): void => {
    alert(`Value - ${pinValue}`);
    setIsPinModal(false);
    setIsPinSuccessModal(true);
  };

  return (
    <>
      <Formik
        initialValues={INITIAL_VALUES_CARD_LIMIT_FORM}
        validationSchema={cardLimitValidation}
        onSubmit={(values, { setSubmitting, resetForm }): void => {
          setSubmitting(false);
          resetForm();
          setIsLimitSuccessModal(true);
        }}
      >
        {({ values, isValid, setFieldValue, errors }): ReactElement => (
          <Form className={classes.cardLimitForm}>
            <Box component="label" className={classes.limitRow}>
              <Box component="span" className={classes.rowText}>
                Transaction limit, GBP
              </Box>
              <Box className={classes.inputWrapper}>
                <Field
                  as={InputStyled}
                  name={CARD_LIMIT_AMOUNT}
                  type="text"
                  error={errors[CARD_LIMIT_AMOUNT]}
                  onChange={(event: ChangeEvent<HTMLInputElement>): void => {
                    const { value } = event.target;
                    setFieldValue(CARD_LIMIT_AMOUNT, cardLimitMask(value));
                  }}
                  disabled={!isEditableLimit}
                />
                <EditButton className={classes.editButton} onClick={(): void => setIsEditableLimit(!isEditableLimit)} />
              </Box>
            </Box>
            <Box component="label" className={classes.infoWrapper}>
              <Field as={Checkbox} classTitle={classes.infoCheckbox} name={CARD_LIMIT_INFO_CHECKBOX} />
              <p className={classes.infoText}>
                I understand that increasing or deactivating the standard transaction limit violates the rules of safe
                use of the card, and may result in unauthorized transactions.
              </p>
            </Box>
            <Box className={classes.buttonWrapper}>
              <Button
                className={classes.button}
                type={ButtonType.SUBMIT}
                isDisabled={isValid || !(values[CARD_LIMIT_AMOUNT] && values[CARD_LIMIT_INFO_CHECKBOX])}
              >
                {t('buttonNames.save')}
              </Button>
              <Button className={classes.button} type={ButtonType.BUTTON} onClick={() => setIsPinModal(true)}>
                {t('buttonNames.changePinCode')}
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
      <ModalSuccess
        isOpen={isLimitSuccessModal}
        handleClose={(): void => setIsLimitSuccessModal(false)}
        text="Your transaction limit is set"
      />
      <SetPinCodeFormModal
        handlePinChangeModal={handlePinChangeModal}
        title={title}
        buttonName={buttonName}
        isOpen={isPinModal}
        handleClose={(): void => setIsPinModal(false)}
      />
      <SetPinSuccessModal
        isOpen={isPinSuccessModal}
        handleClose={(): void => setIsPinSuccessModal(false)}
        status={SUCCESS}
      />
    </>
  );
};
