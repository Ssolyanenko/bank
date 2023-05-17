import { setSMSError, setSMSSuccess } from 'store';
import { SMS_NEW_URL } from './requestUrls';
import { SMS_SEND_AGAIN } from './user';

export const SMS_MOCK_REQUEST = {
  body: { smsFilterType: '1234' },
  url: SMS_NEW_URL,
  responseMessage: SMS_SEND_AGAIN,
  actionError: setSMSError,
};

export const SMS_MOCK_MIDDLEWARE_REQUEST = {
  body: { smsFilterType: '1234' },
  typeAction: SMS_NEW_URL,
  actionSuccess: setSMSSuccess,
  actionError: setSMSError,
};
