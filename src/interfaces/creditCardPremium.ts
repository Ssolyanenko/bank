import { ChangeEvent, FormEvent, ReactNode } from 'react';
import { SelectChangeEvent } from '@mui/material';
import { FormikErrors, FormikTouched } from 'formik';

export interface Enumeration {
  id: number;
  text: string;
}

export interface RadioButtonsInfo {
  id: number;
  value: string;
  label: ReactNode;
}

export interface FormUserData {
  login: string;
  firstName: string;
  lastName: string;
  passport: string;
  phone: string;
  email: string;
  isVip: boolean;
}

export interface FormAddress {
  address: string;
  postCode: string;
  city: string;
  street: string;
  house: string;
  unit: string;
  apartment: string;
  deliveryType: string;
  residenceCountry: string;
  residenceAddress: string;
  residenceRegion: string;
  residenceCity: string;
}

export interface FormAdditionalPhone {
  additionalPhoneOwner: string;
  additionalPhoneNumber: string;
  additionalPhoneOwnerName: string;
}

export interface FormWork {
  work: string;
  workForHireCompany: string;
  workForHireJob: string;
  workForMyselfCheck: boolean;
  workForMyselfOccupation: string;
  workForMyselfCompany: string;
  unemployed: string;
  unemployedOthers: string;
  placeOfWorkType: string;
  placeOfWorkName: string;
  placeOfWorkOccupation: string;
  unemployedType: string;
  causeOfUnemployment: string;
  isWorkInformally: boolean;
}

export interface FormBankDelivery {
  bankCountry: string;
  bankCity: string;
  bankBranchId: string;
  isTermsAgreed: boolean;
  isAccuracyConfirmed: boolean;
}

export interface CreditPremiumCardValues extends FormAddress, FormAdditionalPhone, FormWork, FormBankDelivery {
  [index: string]: string | boolean | undefined;
  amount: string;
  incomePerMonth: string;
  marital: string;
}

export interface CardTemplateBillableValues extends FormAddress, FormAdditionalPhone, FormWork, FormBankDelivery {
  [index: string]: string | string[] | boolean | undefined;
  amount: string;
  categories: string[];
  incomePerMonth: string;
  marital: string;
}

export interface FormikDefaultValues {
  [field: string]: string | undefined;
}

export interface FormikElementProps {
  formikValues: FormikDefaultValues;
  formikErrors: FormikErrors<CreditPremiumCardValues>;
  formikTouched: FormikTouched<CreditPremiumCardValues>;
  onChange(e: SelectChangeEvent | ChangeEvent<Element> | FormEvent<SVGSVGElement>): void;
  onBlur(e: SelectChangeEvent | ChangeEvent<Element>): void;
}
