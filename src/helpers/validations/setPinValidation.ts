import * as Yup from 'yup';

import { ERROR_MESSAGE } from 'constants/errors';
import { REG_EXP } from 'constants/redExp';
import { PinCodeFormFieldNames } from 'constants/setPinCodeForm';

const { newPin } = PinCodeFormFieldNames;

export const setPinValidation = Yup.object({
  newPin: Yup.string()
    .required(ERROR_MESSAGE.required)
    .min(4, ERROR_MESSAGE.min(4))
    .matches(REG_EXP.numbers, ERROR_MESSAGE.onlyDigits),
  newPinConfirm: Yup.string()
    .required(ERROR_MESSAGE.required)
    .min(4, ERROR_MESSAGE.min(4))
    .matches(REG_EXP.numbers, ERROR_MESSAGE.onlyDigits)
    .when(newPin, {
      is: undefined,
      then: Yup.string(),
      otherwise: Yup.string().oneOf([Yup.ref(newPin)], ERROR_MESSAGE.doesNotMatch),
    }),
});
