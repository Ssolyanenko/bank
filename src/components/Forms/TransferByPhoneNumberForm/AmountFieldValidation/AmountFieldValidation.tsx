import { FC, useCallback, useEffect } from 'react';
import { FormikValues, useFormikContext } from 'formik';

import { TransferFormsNames } from 'constants/transferFormsContent';
import { ERROR_MESSAGE } from 'constants/errors';
import { useTypedDispatch } from 'hooks';
import { MIN_AMOUNT } from 'constants/numbers';
import { requestCardAmountFieldValidation } from 'store';

export const AmountFieldValidation: FC = (): null => {
  const dispatch = useTypedDispatch();
  const { values, errors, setFieldError } = useFormikContext<FormikValues>();

  const { paymentAmount, cardInformation } = values;
  const { paymentAmount: paymentAmountError } = errors;
  const { id } = cardInformation;

  const requestAmount = useCallback((): void => {
    if (id === 0) {
      setFieldError(TransferFormsNames.PAYMENT_AMOUNT, ERROR_MESSAGE.chooseCard);
    }

    if (+paymentAmount < MIN_AMOUNT) {
      setFieldError(TransferFormsNames.PAYMENT_AMOUNT, ERROR_MESSAGE.minAmount);
    }

    if (paymentAmount && !paymentAmountError && +paymentAmount > MIN_AMOUNT) {
      dispatch(
        requestCardAmountFieldValidation(
          {
            cardId: id,
            paymentAmount: +paymentAmount,
          },
          setFieldError
        )
      );
    }
  }, [paymentAmount, paymentAmountError, id, setFieldError, dispatch]);

  useEffect((): void => requestAmount(), [requestAmount]);

  return null;
};
