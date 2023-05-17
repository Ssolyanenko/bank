import * as Yup from 'yup';
import i18next from 'i18next';
import { RequiredStringSchema } from 'yup/lib/string';
import { AnyObject } from 'yup/lib/types';

import { REG_EXP } from 'constants/redExp';

const ERROR_MESSAGE = {
  invalid: i18next.t('security.invalid'),
  maxCharactersQuestion: i18next.t('security.maxCharactersQuestion'),
  minCharactersQuestion: i18next.t('security.minCharactersQuestion'),
  maxCharactersQuestionAnswer: i18next.t('security.maxCharactersQuestionAnswer'),
  required: i18next.t('security.required'),
  doNotMatch: i18next.t('security.doNotMatch'),
  min: i18next.t('security.min'),
  maxCharactersPassword: i18next.t('security.maxCharactersPassword'),
  matches: i18next.t('security.matches'),
  mustBeDifferent: i18next.t('security.mustBeDifferent'),
};

const getPasswordValidation = (): RequiredStringSchema<string | undefined, AnyObject> =>
  Yup.string()
    .min(7, ERROR_MESSAGE.min)
    .max(20, ERROR_MESSAGE.maxCharactersPassword)
    .matches(REG_EXP.password, ERROR_MESSAGE.matches)
    .required(ERROR_MESSAGE.required);

export const changePasswordValidation = Yup.object({
  currentPassword: getPasswordValidation(),
  createNewPassword: getPasswordValidation().notOneOf(
    [Yup.ref('currentPassword'), null],
    ERROR_MESSAGE.mustBeDifferent
  ),
  confirmNewPassword: getPasswordValidation().when('createNewPassword', {
    is: (createNewPassword: string) => createNewPassword !== undefined,
    then: Yup.string().oneOf([Yup.ref('createNewPassword')], ERROR_MESSAGE.doNotMatch),
  }),
});

export const changeSecurityQuestionValidation = Yup.object({
  selectQuestion: Yup.string().when('securityQuestion', {
    is: (securityQuestion: string) => securityQuestion === undefined,
    then: Yup.string()
      .matches(REG_EXP.spaces, ERROR_MESSAGE.invalid)
      .max(50, ERROR_MESSAGE.maxCharactersQuestion)
      .required(ERROR_MESSAGE.required),
  }),
  answer: Yup.string()
    .min(5, ERROR_MESSAGE.minCharactersQuestion)
    .matches(REG_EXP.spaces, ERROR_MESSAGE.invalid)
    .max(50, ERROR_MESSAGE.maxCharactersQuestionAnswer)
    .required(ERROR_MESSAGE.required),
  yourSecurityQuestion: Yup.string().when('securityQuestion', {
    is: (securityQuestion: string) => securityQuestion === 'Add your own question',
    then: Yup.string()
      .min(5, ERROR_MESSAGE.minCharactersQuestion)
      .matches(REG_EXP.spaces, ERROR_MESSAGE.invalid)
      .max(50, ERROR_MESSAGE.maxCharactersQuestion)
      .required(ERROR_MESSAGE.required),
  }),
});
