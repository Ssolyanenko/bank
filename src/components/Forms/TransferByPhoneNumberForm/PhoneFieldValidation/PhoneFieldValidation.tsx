import { FC, useEffect, useCallback } from 'react';
import { FormikValues, useFormikContext } from 'formik';

import { useTypedDispatch } from 'hooks';
import { requestPhoneFieldValidation } from 'store';

export const PhoneFieldValidation: FC = (): null => {
  const dispatch = useTypedDispatch();
  const { values, errors, setFieldError } = useFormikContext<FormikValues>();

  const { phoneNumber } = values;
  const { phoneNumber: phoneNumberError } = errors;

  const requestPhone = useCallback((): void => {
    if (phoneNumber && !phoneNumberError) {
      dispatch(requestPhoneFieldValidation({ phoneNumber }, setFieldError));
    }
  }, [phoneNumberError, phoneNumber, dispatch, setFieldError]);

  useEffect((): void => requestPhone(), [requestPhone]);

  return null;
};
