export interface FormBlockFormik {
  setFieldValue(field: string, value: string, shouldValidate?: boolean): void;
  setFieldTouched(field: string, isTouched?: boolean, shouldValidate?: boolean): void;
}

export interface DropDownElement {
  id: number;
  text: string;
}

export interface DebitCardOrderInitialValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  deliveryType: string;
  deliveryCountry: string;
  bankBranchId: string;
  city: string;
  house: string;
  street: string;
  unit: string;
  apartment: string;
  postCode: string;
  deliveryAddress: string;
  isTermsAgreed: boolean;
  isAccuracyConfirmed: boolean;
}
