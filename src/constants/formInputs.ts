import {
  FormAdditionalPhone,
  FormAddress,
  FormBankDelivery,
  FormWork,
  FormUserData,
  CreditPremiumCardValues,
  CardTemplateBillableValues,
} from 'interfaces/creditCardPremium';

export enum AdorPosition {
  START = 'start',
  END = 'end',
}

export enum WorkStatus {
  FOR_HIRE = 'Work for hire',
  FOR_MYSELF = 'Work for myself',
  UNEMPLOYED = 'Unemployed',
}

export enum AdditionalPhone {
  MY_ADDITIONAL = 'My additional phone number',
  RELATIVE = "My relative's phone number",
  FRIEND = "My friend's phone number",
}

export const ValueToBEPhone: { [field: string]: string } = {
  'My additional phone number': 'MY_ADDITIONAL_PHONE',
  "My relative's phone number": 'MY_RELATIVES_PHONE',
  "My friend's phone number": 'MY_FRIENDS_PHONE',
};

export enum NamesToBEPhone {
  TYPE = 'additionalPhoneOwner',
  NUMBER = 'additionalPhoneNumber',
  NUMBER_OWNER = 'additionalPhoneOwnerName',
}

export const ValueToBEWork: { [field: string]: string } = {
  'Work for hire': 'WORK_FOR_HIRE',
  'Work for myself': 'WORK_FOR_MYSELF',
  Unemployed: 'UNEMPLOYED',
  pensioner: 'PENSIONER',
  disabledPerson: 'DISABLED_PERSON',
  lookingForJob: 'LOOKING_FOR_JOB',
  suppByFamily: 'SUPPORTED_BY_FAMILY',
  others: 'OTHERS',
};

export enum NamesToBEWork {
  TYPE = 'placeOfWorkType',
  NAME = 'placeOfWorkName',
  INFORMALLY = 'isWorkInformally',
  OCCUPATION = 'placeOfWorkOccupation',
  UNEMPLOYED = 'unemployedType',
  UNEMPLOYED_OTHERS = 'causeOfUnemployment',
}

export const ValueToBEAddress: { [field: string]: string } = {
  'East of England': 'EAST_OF_ENGLAND',
  London: 'LONDON',
  Midlands: 'MIDLANDS',
  'North East and Yorkshire': 'NORTH_EAST_AND_YORKSHIRE',
  'North West': 'NORTH_WEST',
  'South East': 'SOUTH_EAST',
};

export enum NamesToBEAddress {
  TYPE = 'deliveryType',
  ADDRESS = 'residenceAddress',
  REGION = 'residenceRegion',
  CITY = 'residenceCity',
}

export const ValueToBeMarital: { [field: string]: string } = {
  Single: 'SINGLE',
  Married: 'MARRIED',
  Widowed: 'WIDOWED',
  Divorced: 'DIVORCED',
};

export const ValueToBECity: { [field: string]: string } = {
  Cambridge: 'CAMBRIDGE',
  Liverpool: 'LIVERPOOL',
  London: 'LONDON',
  Manchester: 'MANCHESTER',
};

export enum InputAddPhoneBlock {
  ADDITIONAL_PHONE_NUMBER = 'additionalPhoneNumber',
  ADDITIONAL_PHONE_OWNER = 'additionalPhoneOwner',
  ADDITIONAL_PHONE_OWNER_NAME = 'additionalPhoneOwnerName',
}

export enum InputAddressBlock {
  ADDRESS = 'address',
  POST_CODE = 'postCode',
  CITY = 'city',
  STREET = 'street',
  HOUSE = 'house',
  UNIT = 'unit',
  APARTMENT = 'apartment',
}

export enum InputDeliveryBankBlock {
  BANK_COUNTRY = 'bankCountry',
  BANK_CITY = 'bankCity',
  BANK_BRANCH = 'bankBranchId',
}

export enum InputUserDataBlock {
  FIRST_NAME = 'firstName',
  LAST_NAME = 'lastName',
  EMAIL = 'email',
  PHONE = 'phone',
  PASSPORT = 'passport',
}

export enum InputWorkBlock {
  WORK = 'work',
  WORK_FOR_HIRE_COMPANY = 'workForHireCompany',
  WORK_FOR_HIRE_JOB_TITLE = 'workForHireJob',
  WORK_FOR_MYSELF_CHECK = 'workForMyselfCheck',
  WORK_FOR_MYSELF_OCCUPATION = 'workForMyselfOccupation',
  WORK_FOR_MYSELF_COMPANY = 'workForMyselfCompany',
  UNEMPLOYED = 'unemployed',
  UNEMPLOYED_OTHERS = 'unemployedOthers',
}

export enum InputCreditPremiumField {
  AMOUNT = 'amount',
  INCOME = 'incomePerMonth',
  MARITAL = 'marital',

  BANK_COUNTRY = 'bankCountry',
  BANK_CITY = 'bankCity',
  BANK_BRANCH = 'bankBranchId',
  TERMS_CHECK = 'isTermsAgreed',
}

export enum InputCreditBillableField {
  CATEGORIES = 'categories',
  AMOUNT = 'amount',
  INCOME = 'incomePerMonth',
  MARITAL = 'marital',

  BANK_COUNTRY = 'bankCountry',
  BANK_CITY = 'bankCity',
  BANK_BRANCH = 'bankBranchId',
  IS_TERMS_AGREED = 'isTermsAgreed',
  IS_ACCURACY_CONFIRMED = 'isAccuracyConfirmed',
}

export enum LabelsAddPhoneBlock {
  ADDITIONAL_PHONE_NUMBER = 'Additional phone number',
  ADDITIONAL_PHONE_OWNER = 'Additional phone number owner',
  ADDITIONAL_PHONE_OWNER_NAME = `Owner's name *`,
}

export enum LabelsAddressBlock {
  ADDRESS = 'Actual residence address',
  POST_CODE = 'Post Code',
  CITY = 'Town/City',
  STREAT = 'Street Name',
  HOUSE = 'House Number',
  UNIT = 'Unit',
  APARTMENT = 'Apartment',
}

export enum LabelsDeliveryBankBlock {
  BANK_COUNTRY = 'Country',
  BANK_CITY = 'Town/City',
  BANK_BRANCH = 'Bank branch',
}

export enum LabelsUserDataBlock {
  FIRST_NAME = 'First Name',
  LAST_NAME = 'Last Name',
  EMAIL = 'Email',
  PHONE = 'Phone',
  PASSPORT = 'ID Number',
}

export enum LabelsWorkBlock {
  WORK = 'Place of work',
  WORK_FOR_HIRE_COMPANY = 'Organisation',
  WORK_FOR_HIRE_JOB_TITLE = 'Job Title',
  WORK_FOR_MYSELF_CHECK = 'Work informally',
  WORK_FOR_MYSELF_OCCUPATION = 'Occupation',
  WORK_FOR_MYSELF_COMPANY = 'Organisation',
  UNEMPLOYED = 'Unemployed',
  UNEMPLOYED_OTHERS = 'Cause of unemployment',
}

export enum LabelsCreditPremium {
  AMOUNT = 'Amount',
  INCOME = 'Monthly income',
  MARITAL = 'Marital status',
  TERMS_CHECK = 'The terms of the',
}

export enum LabelsCreditBillable {
  AMOUNT = 'Amount',
  INCOME = 'Monthly income',
  MARITAL = 'Marital status',
  TERMS_CHECK = 'The terms of the',
  CATEGORIES = 'Categories',
}

export enum LabelSecurityForm {
  CURRENT_PASSWORD = 'Enter current password',
  NEW_PASSWORD = 'Create new password',
  CONFIRM_PASSWORD = 'Confirm new password',
  SECURITY_QUESTION = 'Choose security question',
  YOUR_SECURITY_QUESTION = 'Enter your security question',
  ANSWER = 'Enter your security question answer',
}

export enum PlaceholdersWorkBlock {
  WORK = 'Select your place of work ',
  WORK_FOR_MYSELF_OCCUPATION = 'Enter the name of occupation',
  WORK_FOR_HIRE_COMPANY = 'Enter the name of organisation',
  WORK_FOR_HIRE_JOB_TITLE = 'Enter the job title',
  WORK_FOR_MYSELF_COMPANY = 'Enter the name of organisation',
  UNEMPLOYED_OTHERS = 'Enter the cause of unemployment',
}

export enum PlaceholdersAddPhoneBlock {
  ADDITIONAL_PHONE_NUMBER = '+44 1234567899',
  ADDITIONAL_PHONE_OWNER = 'Select an owner of a phone number',
  ADDITIONAL_PHONE_OWNER_NAME = 'Enter the name of an owner',
}

export enum PlaceholdersAddressBlock {
  ADDRESS = 'Select your region',
  POST_CODE = 'Enter your postal code',
  CITY = 'Enter your Town/City',
  STREAT = 'Enter your street name ',
  HOUSE = 'Enter you house number ',
  UNIT = 'Enter you house unit',
  APARTMENT = 'Enter your apartment number',
}

export enum PlaceholdersDeliveryBankBlock {
  BANK_CITY = 'Enter your town/city',
  BANK_BRANCH = 'Select the bank',
}

export enum PlaceholdersCreditPremium {
  AMOUNT = 'Enter the amount',
  INCOME = 'Enter your income',
  MARITAL = 'Select your status ',
  TERMS_CHECK = 'The terms of the ',
}

export enum PlaceholdersCreditBillable {
  AMOUNT = 'Enter the amount',
  INCOME = 'Enter your income',
  MARITAL = 'Select your status ',
  TERMS_CHECK = 'The terms of the ',
  CATEGORIES = 'Select the categories',
}

export enum PlaceholderSecurityForm {
  SECURITY_QUESTION = 'Choose security question',
}

export enum ErrorMessageNames {
  AMOUNT = 'amount',
  POST_CODE = 'post code',
  CITY = 'city',
  STREET = 'street name',
  HOUSE = 'house number',
  UNIT = 'unit',
  APARTMENT = 'flat',
  PHONE = 'phone',
  OWNER = 'owner',
  APARTMENT_NUMBER = 'apartment number',
  BANK_BRANCH = ' ',
}

export const INITIAL_VALUES_USER_DATA_BLOCK: FormUserData = {
  login: '',
  firstName: '',
  lastName: '',
  passport: '',
  phone: '',
  email: '',
  isVip: false,
};

export const INITIAL_VALUES_ADDRESS_BLOCK: FormAddress = {
  address: '',
  postCode: '',
  city: '',
  street: '',
  house: '',
  unit: '',
  apartment: '',
  deliveryType: '',
  residenceCountry: 'GREAT_BRITAN',
  residenceAddress: '',
  residenceRegion: '',
  residenceCity: '',
};

export const INITIAL_VALUES_ADD_PHONE_BLOCK: FormAdditionalPhone = {
  additionalPhoneOwner: '',
  additionalPhoneNumber: '+44 ',
  additionalPhoneOwnerName: '',
};

export const INITIAL_VALUES_WORK_BLOCK: FormWork = {
  work: '',
  workForHireCompany: '',
  workForHireJob: '',
  workForMyselfCheck: false,
  workForMyselfOccupation: '',
  workForMyselfCompany: '',
  unemployed: 'pensioner',
  unemployedOthers: '',
  placeOfWorkType: '',
  placeOfWorkName: '',
  placeOfWorkOccupation: '',
  unemployedType: '',
  causeOfUnemployment: '',
  isWorkInformally: false,
};

export const INITIAL_VALUES_BANK_BLOCK: FormBankDelivery = {
  bankCountry: 'Great Britain',
  bankCity: '',
  bankBranchId: '',
  isTermsAgreed: false,
  isAccuracyConfirmed: false,
};

export const INITIAL_VALUES_CREDIT_PREMIUM: CreditPremiumCardValues = {
  ...INITIAL_VALUES_ADDRESS_BLOCK,
  ...INITIAL_VALUES_ADD_PHONE_BLOCK,
  ...INITIAL_VALUES_WORK_BLOCK,
  ...INITIAL_VALUES_BANK_BLOCK,
  ...INITIAL_VALUES_USER_DATA_BLOCK,
  amount: '',
  incomePerMonth: '',
  marital: '',
};

export const INITIAL_VALUES_CREDIT_BILLABLE: CardTemplateBillableValues = {
  ...INITIAL_VALUES_ADDRESS_BLOCK,
  ...INITIAL_VALUES_ADD_PHONE_BLOCK,
  ...INITIAL_VALUES_WORK_BLOCK,
  ...INITIAL_VALUES_BANK_BLOCK,
  ...INITIAL_VALUES_USER_DATA_BLOCK,
  amount: '',
  categories: [],
  incomePerMonth: '',
  marital: '',
};

export const EnumerationsForm = {
  ADDRESS: [
    { id: 11, text: 'East of England' },
    { id: 12, text: 'London' },
    { id: 13, text: 'Midlands' },
    { id: 14, text: 'North East and Yorkshire' },
    { id: 15, text: 'North West' },
    { id: 16, text: 'South East' },
  ],
  ADDITIONAL_PHONE: [
    { id: 11, text: AdditionalPhone.MY_ADDITIONAL },
    { id: 12, text: AdditionalPhone.RELATIVE },
    { id: 13, text: AdditionalPhone.FRIEND },
  ],
  WORK: [
    { id: 11, text: WorkStatus.FOR_HIRE },
    { id: 12, text: WorkStatus.FOR_MYSELF },
    { id: 13, text: WorkStatus.UNEMPLOYED },
  ],
  MARITAL: [
    { id: 11, text: 'Single' },
    { id: 12, text: 'Married' },
    { id: 13, text: 'Widowed' },
    { id: 14, text: 'Divorced' },
  ],
  BANK_CITY: [
    { id: 11, text: 'Cambridge' },
    { id: 12, text: 'Liverpool' },
    { id: 13, text: 'London' },
    { id: 14, text: 'Manchester' },
  ],
};

export const RadionButtonsWorkBlock = {
  UNEMPLOYED: [
    { id: 11, value: 'pensioner', label: 'Pensioner' },
    { id: 12, value: 'disabledPerson', label: 'Disabled person' },
    { id: 13, value: 'lookingForJob', label: 'Looking for a job' },
    { id: 14, value: 'suppByFamily', label: 'Supported by family' },
    { id: 15, value: 'others', label: 'Others' },
  ],
};

export const ENUMERATIONS_SECURITY_FORM = [
  { id: 1, text: "Mother's maiden name" },
  { id: 2, text: 'Name of childhood best friend' },
  { id: 3, text: 'Favorite book' },
  { id: 4, text: 'Favorite color' },
  { id: 5, text: 'Favorite food' },
  { id: 6, text: 'Add your own question' },
];

export enum SecurityQuestion {
  YOUR_QUESTION = 'Add your own question',
}

export enum DebitCardPlaceholders {
  DELIVERY = 'Delivery',
}

export const ENUMERATION_CATEGORIES = [
  { id: 1, text: 'Online shopping' },
  { id: 2, text: 'Traveling' },
  { id: 3, text: 'Home improvement/furnishings' },
  { id: 4, text: 'Grocery stores' },
  { id: 5, text: 'Wholesales clubs' },
];

export const CARD_DEFAULT_LIMIT = 5000;
export const CARD_LIMIT_AMOUNT = 'limit';
export const CARD_LIMIT_INFO_CHECKBOX = 'limitInfoCheckbox';

export const INITIAL_VALUES_CARD_LIMIT_FORM = {
  [CARD_LIMIT_AMOUNT]: '5,000.00',
  [CARD_LIMIT_INFO_CHECKBOX]: false,
};
