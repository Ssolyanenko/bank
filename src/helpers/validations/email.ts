import * as Yup from 'yup';

import { ERROR_MESSAGE } from 'constants/errors';
import { REG_EXP } from 'constants/redExp';

export const emailValidation = Yup.object({
  email: Yup.string()
    .required(ERROR_MESSAGE.required)
    .matches(REG_EXP.email, ERROR_MESSAGE.invalid('email'))
    .min(5, ERROR_MESSAGE.minEmail)
    .max(50, ERROR_MESSAGE.maxEmail(50))
    .email(ERROR_MESSAGE.invalid('email')),
});
