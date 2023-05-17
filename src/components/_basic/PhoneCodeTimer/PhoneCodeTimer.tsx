import { FC, useEffect, useState } from 'react';

import { logTime, smsCodeTimer } from 'helpers/index';

interface MinValueProps {
  isRestartTimer?: boolean;
  setIsRestartTimer?(isActive: boolean): void;
  setIsActiveNewRequest(isActive: boolean): void;
  isActiveNewRequest: boolean;
  timeValue: string;
}

export const PhoneCodeTimer: FC<MinValueProps> = ({
  isRestartTimer = false,
  setIsRestartTimer,
  setIsActiveNewRequest,
  isActiveNewRequest,
  timeValue,
}) => {
  const [minutes, sec] = timeValue.split(':').map((str) => parseInt(str, 10));

  const [timer, setTimer] = useState({ minutes, sec });

  useEffect(() => {
    if (Number.isNaN(timer.minutes) || Number.isNaN(timer.sec)) {
      return setTimer({ minutes: 0, sec: 0 });
    }

    if (timer.minutes === 0 && timer.sec === 0) {
      setIsActiveNewRequest(true);

      return;
    }

    const timeout = setTimeout(() => {
      const newTimer = smsCodeTimer(timer);
      setTimer(newTimer);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [timer, setIsActiveNewRequest]);

  useEffect(() => {
    if (isActiveNewRequest) setTimer({ minutes: 0, sec: 0 });

    if (!isActiveNewRequest) setTimer({ minutes, sec });

    if (isRestartTimer) {
      setTimer({ minutes, sec });
      setIsRestartTimer && setIsRestartTimer(false);
    }
  }, [isActiveNewRequest, minutes, sec, isRestartTimer, setIsRestartTimer]);

  return <span> {logTime(timer)} </span>;
};
