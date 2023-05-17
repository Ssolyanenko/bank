import { FC, useEffect, useState, ReactElement } from 'react';
import { Field, FieldArray, useField } from 'formik';
import { Box } from '@mui/material';

import { FormInputBox } from 'components';
import { DropDown, FormError } from 'components/_basic';
import {
  EnumerationsForm,
  LabelsAddPhoneBlock,
  InputAddPhoneBlock,
  PlaceholdersAddPhoneBlock,
  AdditionalPhone,
} from 'constants/formInputs';
import classes from './AdditionalPhoneBlock.module.scss';

interface Props {
  setFieldValue(field: string, value: string, shouldValidate?: boolean): void;
  additionalPhoneOwnerError: string;
}

export const AdditionalPhoneBlock: FC<Props> = ({ setFieldValue, additionalPhoneOwnerError }): ReactElement => {
  const [additionalPhoneNumber] = useField(InputAddPhoneBlock.ADDITIONAL_PHONE_NUMBER);
  const [additionalPhoneOwner] = useField(InputAddPhoneBlock.ADDITIONAL_PHONE_OWNER);
  const [additionalPhoneOwnerName] = useField(InputAddPhoneBlock.ADDITIONAL_PHONE_OWNER_NAME);

  const [isPhoneOwnerClicked, setIsPhoneOwnerClicked] = useState(false);

  useEffect((): void => {
    setFieldValue(additionalPhoneNumber.value, InputAddPhoneBlock.ADDITIONAL_PHONE_NUMBER);
    setFieldValue(additionalPhoneOwner.value, InputAddPhoneBlock.ADDITIONAL_PHONE_OWNER);
    setFieldValue(additionalPhoneOwnerName.value, InputAddPhoneBlock.ADDITIONAL_PHONE_OWNER_NAME);
  }, [setFieldValue, additionalPhoneNumber.value, additionalPhoneOwner.value, additionalPhoneOwnerName.value]);

  return (
    <FieldArray
      name={InputAddPhoneBlock.ADDITIONAL_PHONE_NUMBER}
      render={(): ReactElement => (
        <Box className={classes.componentWrapper}>
          <Box className={classes.rowWrapper}>
            <Box
              component="label"
              className={classes.elementWrapper}
              onClick={(): void => setIsPhoneOwnerClicked(true)}
            >
              <Field
                as={DropDown}
                label={LabelsAddPhoneBlock.ADDITIONAL_PHONE_OWNER}
                enumerations={EnumerationsForm.ADDITIONAL_PHONE}
                name={InputAddPhoneBlock.ADDITIONAL_PHONE_OWNER}
                placeholder={PlaceholdersAddPhoneBlock.ADDITIONAL_PHONE_OWNER}
                isRequired
              />
              {isPhoneOwnerClicked && additionalPhoneOwnerError && (
                <div className={classes.error}>{additionalPhoneOwnerError}</div>
              )}
            </Box>
            <Box component="label" className={classes.elementWrapper}>
              <FormInputBox
                name={InputAddPhoneBlock.ADDITIONAL_PHONE_NUMBER}
                label={LabelsAddPhoneBlock.ADDITIONAL_PHONE_NUMBER}
                placeholder={PlaceholdersAddPhoneBlock.ADDITIONAL_PHONE_NUMBER}
                setFieldValue={setFieldValue}
                isRequired
                type="tel"
              />
              <FormError name={InputAddPhoneBlock.ADDITIONAL_PHONE_NUMBER} />
            </Box>
          </Box>
          {additionalPhoneOwner.value && additionalPhoneOwner.value !== AdditionalPhone.MY_ADDITIONAL && (
            <Box className={classes.rowWrapper}>
              <Box component="label" className={classes.elementWrapper}>
                <FormInputBox
                  name={InputAddPhoneBlock.ADDITIONAL_PHONE_OWNER_NAME}
                  label={LabelsAddPhoneBlock.ADDITIONAL_PHONE_OWNER_NAME}
                  placeholder={PlaceholdersAddPhoneBlock.ADDITIONAL_PHONE_OWNER_NAME}
                  setFieldValue={setFieldValue}
                />
                <FormError name={InputAddPhoneBlock.ADDITIONAL_PHONE_OWNER_NAME} />
              </Box>
            </Box>
          )}
        </Box>
      )}
    />
  );
};
