import { FC, ReactElement, useLayoutEffect, useMemo } from 'react';
import { InputAdornment, TextField } from '@mui/material';
import { Field, useField } from 'formik';

import { AdorPosition } from 'constants/formInputs';
import { AdornmentStatuses } from 'constants/text';
import { STATUS_ICONS } from 'constants/statusIcons';
import colors from 'styles/variables.module.scss';
import classes from './FormInput.module.scss';

interface Props {
  name: string;
  type?: string;
  label?: string;
  isDisabled?: boolean;
  isRequired?: boolean;
  isReadonly?: boolean;
  placeholder?: string;
  minValue?: string;
  maxValue?: string;
  isMoney?: boolean;
  isCheckmark?: boolean;
  onClick?(): void;
  setFieldValue?(field: string, value?: string, shouldValidate?: boolean): void;
}

export const FormInputBox: FC<Props> = ({
  name,
  label = '',
  type = 'text',
  placeholder = '',
  minValue = 0,
  maxValue = 9999,
  isRequired = false,
  isDisabled = false,
  isReadonly = false,
  isMoney = false,
  isCheckmark = true,
  onClick,
  setFieldValue,
}): ReactElement => {
  const [field, meta] = useField(name);

  const hasTouched = meta.touched;
  const validationFailed = meta.error;
  const hasValue = meta.value && !isDisabled && isCheckmark;

  const startAd = meta.touched && isMoney ? '£' : null;
  let endAd = null;

  if (hasTouched) {
    if (validationFailed) {
      endAd = AdornmentStatuses.ERROR;
    } else if (hasValue) {
      endAd = AdornmentStatuses.SUCCESS;
    }
  }

  const FORM_VALUES: { [field: string]: string } = useMemo(
    () =>
      meta.value && {
        amount: meta.value
          .replace(/\s/g, '')
          .match(/(\S{0,4})/)
          .slice(1, 5)
          .join(''),
        incomePerMonth: meta.value
          .replace(/\s/g, '')
          .match(/(\S{0,15})/)
          .slice(1, 15)
          .join(''),
        myAdditionalPhone: meta.value
          .match(/(.{0,14})/)
          .slice(1, 14)
          .join(''),
        relativesPhone: meta.value
          .match(/(.{0,14})/)
          .slice(1, 14)
          .join(''),
        friendsPhone: meta.value
          .match(/(.{0,14})/)
          .slice(1, 14)
          .join(''),
        house: meta.value
          .match(/(.{0,3})/)
          .slice(1, 3)
          .join(''),
        apartment: meta.value
          .match(/(.{0,5})/)
          .slice(1, 5)
          .join(''),
        unit: meta.value
          .match(/(.{0,3})/)
          .slice(1, 3)
          .join(''),
      },
    [meta.value]
  );

  useLayoutEffect(() => {
    setFieldValue && setFieldValue(name, FORM_VALUES[name] ?? meta.value ?? '');
  }, [setFieldValue, name, meta.value, FORM_VALUES]);

  return (
    <Field
      {...field}
      as={TextField}
      className={classes.input}
      variant="outlined"
      label={label}
      name={name}
      type={type}
      disabled={isDisabled}
      fullWidth
      required={isRequired}
      onClick={onClick}
      InputProps={{
        startAdornment: <InputAdornment position={AdorPosition.START}>{startAd}</InputAdornment>,
        endAdornment: <InputAdornment position={AdorPosition.END}>{endAd && STATUS_ICONS[endAd]}</InputAdornment>,
        inputProps: { min: minValue, max: maxValue },
        readOnly: isReadonly,
      }}
      placeholder={placeholder}
      sx={{
        '& .MuiOutlinedInput-root.Mui-focused': {
          '& > fieldset': {
            borderColor: colors.orange,
          },
        },
      }}
      InputLabelProps={{
        style: { color: colors.grayDark_7 },
      }}
    />
  );
};
