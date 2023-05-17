import * as Yup from 'yup';

import { ERROR_MESSAGE } from 'constants/errors';
import { InputNames } from 'constants/input';

const ERROR_MESSAGE_LOGIN = {
  required: 'Field must be filled',
  requiredPassword: 'Field "Password" must be filled',
  requiredConfirmationCode: 'The confirmation code field must be filled',
  passwordsMatch: 'Passwords must match',
  capitalLettersAndNumbers: 'The field should contain only capital letters and numbers',
  min: (min: number): string => `Field should contain at least ${min} symbols`,
  minPasswordField: 'Password should contain at least 7 symbols',
  requiredAmountDigitsConfirmationCode: 'Field should contain 4 numbers',
  maxLoginPassword: (max: number): string => `Must be ${max} characters or less`,
};

export const RegExpLatin = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{7,}$/;
export const RegExpLatinPassport = /^(?=\d*)(?=[A-Z]*)[^\W_a-z]{2,30}$/;
export const RegExpPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{7,}$/;
export const RegExpSMS = /^[0-9]*$/gi;

export const login = Yup.object({
  login: Yup.string()
    .required(ERROR_MESSAGE_LOGIN.required)
    .min(7, ERROR_MESSAGE_LOGIN.min(7))
    .max(20, ERROR_MESSAGE_LOGIN.maxLoginPassword(20))
    .matches(RegExpLatin, ERROR_MESSAGE.passwordValidation),
  password: Yup.string()
    .required(ERROR_MESSAGE_LOGIN.required)
    .min(7, ERROR_MESSAGE_LOGIN.min(7))
    .max(20, ERROR_MESSAGE_LOGIN.maxLoginPassword(20))
    .matches(RegExpPass, ERROR_MESSAGE.passwordValidation),
});

export const SMSValidation = Yup.object({
  smsCode: Yup.string()
    .required(ERROR_MESSAGE_LOGIN.requiredConfirmationCode)
    .min(4, ERROR_MESSAGE_LOGIN.requiredAmountDigitsConfirmationCode)
    .max(4, ERROR_MESSAGE_LOGIN.requiredAmountDigitsConfirmationCode)
    .matches(RegExpSMS, ERROR_MESSAGE_LOGIN.requiredAmountDigitsConfirmationCode),
});

export const passportValidation = Yup.object({
  passport: Yup.string()
    .required(ERROR_MESSAGE_LOGIN.required)
    .min(2, ERROR_MESSAGE_LOGIN.min(2))
    .max(30, ERROR_MESSAGE_LOGIN.maxLoginPassword(30))
    .matches(RegExpLatinPassport, ERROR_MESSAGE_LOGIN.capitalLettersAndNumbers),
});

export const PasswordValidation = Yup.object({
  newPassword: Yup.string()
    .required(ERROR_MESSAGE_LOGIN.requiredPassword)
    .min(7, ERROR_MESSAGE_LOGIN.minPasswordField)
    .max(20, ERROR_MESSAGE_LOGIN.maxLoginPassword(20))
    .matches(RegExpPass, ERROR_MESSAGE.passwordValidation),
});

export const PasswordValidationWithConfirm = PasswordValidation.concat(
  Yup.object({
    confirmPassword: Yup.string()
      .min(7, ERROR_MESSAGE_LOGIN.minPasswordField)
      .max(20, ERROR_MESSAGE_LOGIN.maxLoginPassword(20))
      .matches(RegExpPass, ERROR_MESSAGE.passwordValidation)
      .required(ERROR_MESSAGE_LOGIN.requiredPassword)
      .oneOf([Yup.ref(InputNames.NEW_PASSWORD), null], ERROR_MESSAGE_LOGIN.passwordsMatch),
  })
);
