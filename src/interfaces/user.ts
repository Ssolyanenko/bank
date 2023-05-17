import { FetchStatus } from 'constants/fetchStatus';
import { ChangeStatusCard, ChangeLimitCard, CreditPremium } from './myCard';
import { CardActivationBody, CardChangePinCode, RequestCardAmountValidation } from './application';

export interface UserState {
  userLogin: UserLogin;
  userAccount: UserAccountState;
  isSend: boolean;
  errorMessage: string;
  passwordRecovery: PasswordRecovery;
  securityChangePassword: SecurityChangePassword;
  fetchStatus: FetchStatus;
}

export interface UserAccount {
  type: string;
  payload: UserAccountState;
}

export interface CityState {
  city: string;
}

export interface EmailState {
  email: string;
}

export interface UserAccountState {
  login: string;
  firstName: string;
  lastName: string;
  passport: string;
  phone: string;
  email: string;
  isVip: boolean;
  enabledNotificationSettings: string[];
}

export interface UserLogin {
  isAuth: boolean;
  isFirstLogin: boolean;
  isSMSAuth: boolean;
  isSMSBanState: boolean;
  banTimeUntil: string;
  isSMSOpen: boolean;
  errorMessage: string;
  token?: string;
  errorHandler?(): void;
}

export interface PasswordRecovery {
  isCheckPassport: boolean;
  isCheckSms: boolean;
  isSMSBanState: boolean;
  isChangePassword: boolean;
  phoneUser: string;
  blockedUntil: string | null;
  errorMessage: string;
}

export interface SecurityChangePassword {
  isSMSOpen: boolean;
  errorMessage: string;
}

export interface ChangePasswordSuccess {
  type: string;
  isSMSOpen: boolean;
}

export interface UserData {
  type: string;
  userData: RequestBodyLogin;
  smsData: RequestSMSBody;
}

export interface ResponseBodyLogin {
  message: string;
  phone: string;
  blockedUntil: string | null;
}

export interface RequestBodyLogin {
  login: string;
  password: string;
}

export interface RequestBodyPassport {
  passport: string;
}

export interface ResponseBodyPassport {
  message: string;
  phone: string;
  blockedUntil: string | null;
}

export interface RequestBodySmsCode {
  smsCode: string;
}

export interface RequestBodyNewPassword {
  newPassword: string;
}

export interface RequestError {
  type: string;
  payload: { error: string };
}

export interface LoginSuccess {
  type: string;
  isAuth: boolean;
  isSMSOpen: boolean;
  token: string | null;
}

export interface FetchCurrentUserSuccess {
  type: string;
  isAuth: boolean;
  token: string | null;
  userData: UserAccountState;
}

export interface FetchCurrentUserError {
  type: string;
  isAuth: boolean;
  token: string | null;
  error: string;
}

export interface PassportSuccess {
  type: string;
  isCheckPassport: boolean;
}

export interface PassportDataSuccess {
  type: string;
  phone: string;
  blockedUntilTime: string | null;
}

export interface SmsPasswordRecoverySuccess {
  type: string;
  isCheckSms: boolean;
}

export interface NewPasswordSuccess {
  type: string;
  isChangePassword: boolean;
}

export interface SavePhoneUser {
  type: string;
  phoneUser: string;
}

export interface UserErrorMessage {
  type: string;
  errorMessage: string;
}

export interface SMSError {
  type: string;
  payload: { error: string };
}

export interface RequestSMSBody {
  smsCode: string;
}

export interface SMSFirstStepFail {
  type: string;
  isSMSFirstStepFail: boolean;
}

export interface SMSSecondStepFail {
  type: string;
  isSMSSecondStepFail: boolean;
}

export interface SMSBanState {
  type: string;
  isSMSBanState: boolean;
}

export interface SMSSuccess {
  type: string;
  isSMSAuth: boolean;
}

export interface SendNewSMS {
  type: string;
  isSend: boolean;
}

export interface SMSNew {
  smsFilterType: string;
}

export interface FirstLogin {
  type: string;
  isFirstLogin: boolean;
}

export interface LoginUnregistered {
  type: string;
  isUnregistered: boolean;
}

export interface LoginGetBanTimer {
  type: string;
  banTimeUntil: string;
}

export interface RequestBodyRates {
  baseCodes: string[];
  termCode: string;
}

export interface UserLogoutSuccess {
  type: string;
  isAuth: boolean;
  token: string;
}

export interface UserLogoutError extends Omit<UserLogoutSuccess, 'token'> {}

export interface NotificationState {
  enabledNotificationSettings: string[];
}

export interface RequestHistoryTransaction {
  page: number;
  value: string;
  selectValue: string;
  count: number[];
  dateFrom: string;
  dateTo: string;
}

export interface RequestFilteredHistory {
  searchInput: string;
  dateFrom: string;
  dateTo: string;
  operationType: string;
  amountFrom: string;
  amountTo: string;
}

export interface RequestDebitCard {
  cardProductId: number;
  deliveryType: string;
  deliveryCountry: string;
  deliveryCity: string;
  deliveryAddress: string;
  bankBranchId: string;
  deliveryStatus: string;
  isTermsAgreed: boolean;
}

export interface RequestSecurityQuestion {
  question: string;
  answer: string;
}

export interface RequestSecurityPassword {
  currentPassword: string;
  newPassword: string;
  actionSuccess?(isSMSOpen: boolean): ChangePasswordSuccess;
  actionError?(fetchError: string): UserErrorMessage;
}

export interface RequestTransferPhoneValidation {
  phoneNumber: string;
}

export interface RequestCurrentPasswordValidation {
  currentPassword: string;
  newPassword: string;
}

export type SuccessAction =
  | LoginSuccess
  | PassportSuccess
  | SmsPasswordRecoverySuccess
  | NewPasswordSuccess
  | ChangePasswordSuccess;

export type RequestBodyTypes =
  | RequestBodyLogin
  | RequestBodyPassport
  | RequestBodySmsCode
  | RequestBodyNewPassword
  | RequestSMSBody
  | SMSNew
  | SendNewSMS
  | FirstLogin
  | EmailState
  | NotificationState
  | RequestBodyRates
  | CreditPremium
  | RequestHistoryTransaction
  | RequestFilteredHistory
  | RequestDebitCard
  | RequestSecurityQuestion
  | RequestTransferPhoneValidation
  | RequestCardAmountValidation
  | CardActivationBody
  | RequestSecurityPassword
  | RequestCurrentPasswordValidation
  | ChangeLimitCard
  | ChangeStatusCard
  | CardChangePinCode;
