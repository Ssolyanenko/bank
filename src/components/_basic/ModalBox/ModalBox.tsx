import { FC, ReactElement, useState } from 'react';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { ButtonType, Size } from 'interfaces/common/componentsSettings';
import { PhoneCodeTimer, SecondaryButton } from 'components/_basic';
import { useTypedSelector, useTypedDispatch } from 'hooks';
import { onSendSMSAgain } from 'helpers/sendSMSAgain';
import { SMS_FOR_SESSION } from 'constants/user';
import { TimerDelay } from 'constants/timerDelay';
import { getIsSMSLoginBanState } from 'store';
import classes from './ModalBox.module.scss';

export interface SMSPropsBox {
  timeBlock: string;
}

const { DEFAULT_DELAY, BAN_DELAY } = TimerDelay;

export const ModalBox: FC<SMSPropsBox> = ({ timeBlock = BAN_DELAY }): ReactElement => {
  const isSMSBanState = useTypedSelector(getIsSMSLoginBanState);
  const [isActiveNewRequest, setIsActiveNewRequest] = useState(false);
  const [isRestartTimer, setIsRestartTimer] = useState(false);

  const dispatch = useTypedDispatch();

  const { t } = useTranslation();

  return (
    <>
      <Box>
        {!isActiveNewRequest ? (
          !isSMSBanState ? (
            <p className={classes.codeLabel}>
              {t('modalBox.codeExpirationTime')}&nbsp;
              <PhoneCodeTimer
                timeValue={DEFAULT_DELAY}
                isRestartTimer={isRestartTimer}
                setIsRestartTimer={setIsRestartTimer}
                isActiveNewRequest={isActiveNewRequest}
                setIsActiveNewRequest={setIsActiveNewRequest}
              />
              &nbsp; {t('modalBox.seconds')}
            </p>
          ) : (
            <p className={classes.codeLabel}>
              {t('modalBox.sendCodeAgain')}&nbsp;
              <PhoneCodeTimer
                timeValue={timeBlock}
                isRestartTimer={isRestartTimer}
                setIsRestartTimer={setIsRestartTimer}
                isActiveNewRequest={isActiveNewRequest}
                setIsActiveNewRequest={setIsActiveNewRequest}
              />
              &nbsp; {t('modalBox.seconds')}
            </p>
          )
        ) : (
          <div className={classes.codeLabel}>
            <div className={classes.formInputSMSMessage}>{t('user.codeHasExpired')}</div>
          </div>
        )}
      </Box>
      <Box className={classes.codeLabelDontGet}>{t('modalBox.didNotGetTheCode')}</Box>
      <Box className={classes.dialogSendButton}>
        <SecondaryButton
          isDisabled={isSMSBanState}
          size={Size.LARGE}
          type={ButtonType.SUBMIT}
          onClick={(): void => dispatch(onSendSMSAgain(SMS_FOR_SESSION, setIsActiveNewRequest, setIsRestartTimer))}
        >
          {t('buttonNames.sendAgain')}
        </SecondaryButton>
      </Box>
    </>
  );
};
