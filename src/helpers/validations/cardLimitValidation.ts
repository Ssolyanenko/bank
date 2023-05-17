import * as Yup from 'yup';

import { REG_EXP } from 'constants/redExp';
import { ERROR_MESSAGE } from 'constants/errors';

export const cardLimitValidation = Yup.object({
  limit: Yup.string()
    .required()
    .test('is not equall to zero', 'should equall to zero', (value) => value !== '0'),
  limitInfoCheckbox: Yup.bool().oneOf([true], ''),
});

export const cardChangeLimitValidation = Yup.object({
  transactionLimit: Yup.string()
    .matches(REG_EXP.numbersAndCommas, ERROR_MESSAGE.limitChanges)
    .test('max-amount', ERROR_MESSAGE.limitChanges, (value: string | undefined): boolean =>
      value ? Number(value.replace(',', '')) <= 25000 : true
    ),
});
