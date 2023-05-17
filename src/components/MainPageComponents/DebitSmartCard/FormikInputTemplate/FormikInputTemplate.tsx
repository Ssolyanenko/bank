import React, { FC, ReactElement } from 'react';
import { useField } from 'formik';

import { TextFieldTemplate } from 'interfaces/textFieldTemplate';
import classes from './FormikInputTemplate.module.scss';

export const FormikInputTemplate: FC<TextFieldTemplate> = ({
  wrapperClass = '',
  labelClassName = '',
  inputClassName = '',
  label,
  name,
  type = 'text',
  isDisabled = false,
}): ReactElement => {
  const [field, meta] = useField(name);

  return (
    <div className={`${classes.inputWrapper} ${wrapperClass}`}>
      <label htmlFor={label} className={`${classes.inputLabel} ${labelClassName}`}>
        {label}
      </label>
      <input {...field} className={`${classes.inputField} ${inputClassName}`} type={type} disabled={isDisabled} />
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    </div>
  );
};
