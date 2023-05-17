import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { Store } from 'store';
import { RatesInterface } from 'interfaces/rates';
import { RequestBodyTypes, RequestError, SuccessAction, LoginUnregistered, SMSSuccess, UserErrorMessage } from './user';

export interface RequestRateMiddleware {
  body: RequestBodyTypes;
  typeAction: string;
  url: string;
  actionError(fetchError: string): RequestError;
  setRates(rates: RatesInterface): void;
}

export interface RequestSMS {
  body: RequestBodyTypes;
  url: string;
  responseMessage: string;
  actionError(fetchError: string): RequestError;
}

export interface RequestMiddleware {
  body: RequestBodyTypes;
  typeAction?: string;
  url: string;
  responseMessage?: string;
  unregisteredMessage?: string;
  actionSuccess(isChangeData: boolean, isChangeDataSecond?: boolean): SuccessAction;
  actionError(fetchError: string): UserErrorMessage;
  actionUnregistered?(isUnregistered?: boolean): LoginUnregistered;
  nextStep?(isHandleNext: boolean): void;
}

export interface RequestSMSMiddleware {
  body: RequestBodyTypes;
  url: string;
  actionSuccess(sSMSAuth: boolean): SMSSuccess;
  actionError(fetchError: string): UserErrorMessage;
}

export type ActionType = ThunkAction<void, Store, null, Action>;
