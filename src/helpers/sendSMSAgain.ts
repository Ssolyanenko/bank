import { SMS_NEW_URL } from 'constants/requestUrls';
import { SMS_SEND_AGAIN } from 'constants/user';
import { ActionType } from 'interfaces/action';
import { requestSMS, setSMSError } from 'store';

export const onSendSMSAgain =
  (
    SMS_SESSION: string,
    setIsActiveNewRequest: (arg: boolean) => void,
    setIsRestartTimer: (arg: boolean) => void
  ): ActionType =>
  (dispatch) => {
    dispatch(
      requestSMS({
        body: { smsFilterType: SMS_SESSION },
        url: SMS_NEW_URL,
        responseMessage: SMS_SEND_AGAIN,
        actionError: setSMSError,
      })
    );
    setIsActiveNewRequest(false);
    setIsRestartTimer(true);
  };
