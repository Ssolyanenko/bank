import * as Yup from 'yup';

import { ERROR_MESSAGE } from 'constants/errors';
import { ErrorMessageNames } from 'constants/formInputs';
import { REG_EXP } from 'constants/redExp';

export const TransferByPhoneNumberFormValidation = Yup.object({
  myCard: Yup.string().required(ERROR_MESSAGE.required),
  phoneNumber: Yup.string()
    .min(12, ERROR_MESSAGE.min(12))
    .max(14, ERROR_MESSAGE.max(14))
    .matches(REG_EXP.transferPhone, ERROR_MESSAGE.invalid(ErrorMessageNames.PHONE))
    .required(ERROR_MESSAGE.required),
  paymentAmount: Yup.string()
    .matches(REG_EXP.numbers, ERROR_MESSAGE.invalid(ErrorMessageNames.AMOUNT))
    .required(ERROR_MESSAGE.required),
});
