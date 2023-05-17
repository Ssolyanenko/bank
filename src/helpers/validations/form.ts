import * as Yup from 'yup';

import {
  InputAddPhoneBlock,
  InputAddressBlock,
  InputWorkBlock,
  ErrorMessageNames,
  AdditionalPhone,
  WorkStatus,
} from 'constants/formInputs';
import { DebitCardOrderFieldNames, DeliveryMethodNames } from 'constants/debitCardsOrderForm';
import { ERROR_MESSAGE } from 'constants/errors';
import { REG_EXP } from 'constants/redExp';

const getRequired = (): Yup.StringSchema => Yup.string().required(ERROR_MESSAGE.required);

const getRegExpAndRequired = (regExp: RegExp, errorMessage = ''): Yup.StringSchema =>
  Yup.string().matches(regExp, ERROR_MESSAGE.invalid(errorMessage)).required(ERROR_MESSAGE.required);

const getRegExpAndMax = (regExp: RegExp, max: number, errorMessage = ''): Yup.StringSchema =>
  Yup.string().matches(regExp, ERROR_MESSAGE.invalid(errorMessage)).max(max, ERROR_MESSAGE.max(max));

const getRegExpPhone = (): Yup.StringSchema =>
  Yup.string().min(5, ERROR_MESSAGE.required).matches(REG_EXP.phone, ERROR_MESSAGE.invalid(ErrorMessageNames.PHONE));

const getRegExpMaxAndRequired = (regExp: RegExp, max: number, errorMessage = ''): Yup.StringSchema =>
  Yup.string()
    .matches(regExp, ERROR_MESSAGE.invalid(errorMessage))
    .max(max, ERROR_MESSAGE.max(max))
    .required(ERROR_MESSAGE.required);

const addressBlock = {
  address: getRequired(),
  postCode: Yup.string().when(InputAddressBlock.ADDRESS, {
    is: (address: string) => address !== undefined,
    then: getRegExpMaxAndRequired(REG_EXP.postCode, 8, ErrorMessageNames.POST_CODE),
  }),
  city: Yup.string().when(InputAddressBlock.ADDRESS, {
    is: (address: string) => address !== undefined,
    then: getRegExpMaxAndRequired(REG_EXP.lettersAndOneSpaceAllowed, 10, ErrorMessageNames.CITY),
  }),
  street: Yup.string().when(InputAddressBlock.ADDRESS, {
    is: (address: string) => address !== undefined,
    then: getRegExpMaxAndRequired(REG_EXP.streetName, 30, ErrorMessageNames.STREET),
  }),
  house: Yup.string().when(InputAddressBlock.ADDRESS, {
    is: (address: string) => address !== undefined,
    then: getRegExpMaxAndRequired(REG_EXP.numbers, 3, ErrorMessageNames.HOUSE),
  }),
  unit: Yup.string().when(InputAddressBlock.ADDRESS, {
    is: (address: string) => address !== undefined,
    then: getRegExpAndMax(REG_EXP.numbersAndLetters, 3, ErrorMessageNames.UNIT),
  }),
  apartment: Yup.string().when(InputAddressBlock.ADDRESS, {
    is: (address: string) => address !== undefined,
    then: getRegExpAndMax(REG_EXP.apartment, 3, ErrorMessageNames.APARTMENT),
  }),
};

const additionalPhoneBlock = {
  additionalPhoneNumber: getRegExpPhone().required(ERROR_MESSAGE.required),
  additionalPhoneOwner: getRequired(),
  additionalPhoneOwnerName: Yup.string().when(InputAddPhoneBlock.ADDITIONAL_PHONE_OWNER, {
    is: (additionalPhoneOwner: string): boolean => additionalPhoneOwner !== AdditionalPhone.MY_ADDITIONAL,
    then: getRegExpMaxAndRequired(REG_EXP.lettersAndSpaces, 20, ErrorMessageNames.OWNER),
  }),
};

const workBlock = {
  work: getRequired(),
  workForHireCompany: Yup.string().when(InputWorkBlock.WORK, {
    is: (work: string) => work === WorkStatus.FOR_HIRE,
    then: getRegExpMaxAndRequired(REG_EXP.organisation, 30),
  }),
  workForHireJob: Yup.string().when(InputWorkBlock.WORK, {
    is: (work: string) => work === WorkStatus.FOR_HIRE,
    then: getRegExpMaxAndRequired(REG_EXP.lettersAndOneSpaceAllowed, 30),
  }),
  workForMyselfCompany: Yup.string().when([InputWorkBlock.WORK, InputWorkBlock.WORK_FOR_MYSELF_CHECK], {
    is: (work: string, workForMyselfCheck: boolean) => work === WorkStatus.FOR_MYSELF && !workForMyselfCheck,
    then: getRegExpMaxAndRequired(REG_EXP.organisation, 30),
  }),
  workForMyselfOccupation: Yup.string().when([InputWorkBlock.WORK, InputWorkBlock.WORK_FOR_MYSELF_CHECK], {
    is: (work: string, workForMyselfCheck: boolean) => work === WorkStatus.FOR_MYSELF && workForMyselfCheck,
    then: getRegExpMaxAndRequired(REG_EXP.lettersAndOneSpaceAllowed, 30),
  }),
  unemployed: Yup.string().when(InputWorkBlock.WORK, {
    is: (work: string) => work === WorkStatus.UNEMPLOYED,
    then: getRequired(),
  }),
  unemployedOthers: Yup.string().when(InputWorkBlock.UNEMPLOYED, {
    is: (unemployed: string) => unemployed === 'others',
    then: getRegExpMaxAndRequired(REG_EXP.lettersAndSpaces, 20),
  }),
};

const deliveryBankBlock = {
  bankCity: getRegExpMaxAndRequired(REG_EXP.letters, 10, ErrorMessageNames.CITY),
  bankBranchId: getRequired(),
};

export const orderCardTemplatePremium = Yup.object({
  amount: getRegExpMaxAndRequired(REG_EXP.numbers, 4)
    .min(4, ERROR_MESSAGE.min(4))
    .matches(REG_EXP.minAmount, ERROR_MESSAGE.minCardAmount(1000))
    .matches(REG_EXP.maxAmount, ERROR_MESSAGE.maxAmount(5000)),
  incomePerMonth: getRegExpAndRequired(REG_EXP.numbers),
  marital: getRequired(),
  ...addressBlock,
  ...additionalPhoneBlock,
  ...workBlock,
  ...deliveryBankBlock,
});

export const orderCreditCardBillable = Yup.object({
  amount: getRegExpMaxAndRequired(REG_EXP.numbers, 4)
    .min(4, ERROR_MESSAGE.min(4))
    .matches(REG_EXP.minAmount, ERROR_MESSAGE.minCardAmount(1000))
    .matches(REG_EXP.maxAmount, ERROR_MESSAGE.maxAmount(5000)),
  incomePerMonth: getRegExpAndRequired(REG_EXP.numbers),
  categories: Yup.array()
    .required(ERROR_MESSAGE.required)
    .min(3, ERROR_MESSAGE.minCategories)
    .max(3, ERROR_MESSAGE.maxCategories),
  marital: getRequired(),
  ...addressBlock,
  ...additionalPhoneBlock,
  ...workBlock,
  ...deliveryBankBlock,
});

const debitAddressBlock = {
  postCode: Yup.string().when(DebitCardOrderFieldNames.DELIVERY_TYPE, {
    is: (deliveryType: string) => deliveryType !== DeliveryMethodNames.AT_THE_BANK,
    then: getRegExpMaxAndRequired(REG_EXP.postCode, 8, ErrorMessageNames.POST_CODE),
  }),
  street: Yup.string().when(DebitCardOrderFieldNames.DELIVERY_TYPE, {
    is: (deliveryType: string) => deliveryType !== DeliveryMethodNames.AT_THE_BANK,
    then: getRegExpMaxAndRequired(REG_EXP.streetName, 30, ErrorMessageNames.STREET),
  }),
  house: Yup.string().when(DebitCardOrderFieldNames.DELIVERY_TYPE, {
    is: (deliveryType: string) => deliveryType !== DeliveryMethodNames.AT_THE_BANK,
    then: getRegExpMaxAndRequired(REG_EXP.numbers, 3, ErrorMessageNames.HOUSE),
  }),
  unit: Yup.string().when(DebitCardOrderFieldNames.DELIVERY_TYPE, {
    is: (deliveryType: string) => deliveryType !== DeliveryMethodNames.AT_THE_BANK,
    then: getRegExpAndMax(REG_EXP.numbersAndLetters, 3, ErrorMessageNames.UNIT),
  }),
  apartment: Yup.string().when(DebitCardOrderFieldNames.DELIVERY_TYPE, {
    is: (deliveryType: string) => deliveryType !== DeliveryMethodNames.AT_THE_BANK,
    then: getRegExpAndMax(REG_EXP.apartment, 3, ErrorMessageNames.APARTMENT_NUMBER),
  }),
};

const debitBankBlock = {
  bankBranchId: Yup.string().when(DebitCardOrderFieldNames.DELIVERY_TYPE, {
    is: (deliveryType: string) => deliveryType === DeliveryMethodNames.AT_THE_BANK,
    then: getRequired(),
  }),
};

export const orderDebitCardValidation = Yup.object({
  deliveryType: getRequired(),
  city: getRegExpMaxAndRequired(REG_EXP.lettersAndSpaces, 10, ErrorMessageNames.CITY),
  ...debitBankBlock,
  ...debitAddressBlock,
});
