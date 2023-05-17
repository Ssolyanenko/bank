import { FC, ChangeEvent, useState, ReactElement } from 'react';
import { Formik, Form, Field } from 'formik';
import { Box } from '@mui/material';

import { InputPassword, FormError, PrimaryButton } from 'components/_basic';
import { pinCodeMask, setPinValidation } from 'helpers';
import { ButtonType, Size } from 'interfaces/common/componentsSettings';
import { PIN_CODE_FORM_INITIAL_VALUES, PIN_CODE_FORM_LABELS, PinCodeFormFieldNames } from 'constants/setPinCodeForm';
import { PinCodeFormInitialValues } from 'interfaces/setPinCodeForm';
import classes from './SetPinCodeForm.module.scss';

interface Props {
  handlePinChangeModal(pinValue: string): void;
  title: string;
  buttonName: string;
  values?: PinCodeFormInitialValues;
  handleValueChange?(name: string, value: string): void;
}

const { newPin, newPinConfirm } = PinCodeFormFieldNames;
const { newPinLabel, newPinConfirmLabel } = PIN_CODE_FORM_LABELS;

export const SetPinCodeForm: FC<Props> = ({
  handlePinChangeModal,
  title,
  buttonName,
  values = PIN_CODE_FORM_INITIAL_VALUES,
  handleValueChange,
}): ReactElement => {
  const [isFieldClicked, setIsFieldClicked] = useState(false);

  const handleFieldChange = (
    name: string,
    value: string,
    setFieldValue: (field: string, value: string, shouldValidate?: boolean) => void
  ): void => {
    setFieldValue(name, pinCodeMask(value));
    handleValueChange && handleValueChange(name, value);
  };

  const resetValues = (): void => {
    if (handleValueChange) {
      handleValueChange(newPin, '');
      handleValueChange(newPinConfirm, '');
    }
  };

  return (
    <Formik
      initialValues={values}
      validationSchema={setPinValidation}
      onSubmit={({ newPin }, { setSubmitting, resetForm }): void => {
        setSubmitting(true);
        handlePinChangeModal(newPin);
        setSubmitting(false);
        resetValues();
        resetForm();
      }}
    >
      {({ values, errors, touched, setFieldValue, isValid }): ReactElement => (
        <Form className={classes.setPinCodeForm}>
          <h2 className={classes.formTitle}>{title}</h2>
          <Box component="label" className={classes.inputLabel} onClick={(): void => setIsFieldClicked(true)}>
            <Field
              as={InputPassword}
              labelText={newPinLabel(isFieldClicked)}
              name={newPin}
              isError={!!(touched.newPin && errors.newPin)}
              onChange={({ target: { value } }: ChangeEvent<HTMLInputElement>): void => {
                handleFieldChange(newPin, value, setFieldValue);
              }}
            />
            <FormError additionalClass={classes.inputError} name={newPin} />
          </Box>
          <Box component="label" className={classes.inputLabel}>
            <Field
              as={InputPassword}
              labelText={newPinConfirmLabel}
              name={newPinConfirm}
              isError={!!(touched.newPinConfirm && errors.newPinConfirm)}
              onChange={({ target: { value } }: ChangeEvent<HTMLInputElement>): void => {
                handleFieldChange(newPinConfirm, value, setFieldValue);
              }}
            />
            <FormError additionalClass={classes.inputError} name={newPinConfirm} />
          </Box>
          <PrimaryButton
            type={ButtonType.SUBMIT}
            size={Size.LARGE}
            isDisabled={!isValid || !(values.newPin && values.newPinConfirm)}
          >
            {buttonName}
          </PrimaryButton>
        </Form>
      )}
    </Formik>
  );
};
