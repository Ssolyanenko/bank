import { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { smsCodeTimer, logTime } from 'helpers/index';

interface Props {
  timeString: string;
}

export const BanTimer: FC<Props> = ({ timeString }) => {
  const [minutes, sec] = timeString.split(':').map((str) => parseInt(str, 10));

  const [timer, setTimer] = useState({ minutes, sec });

  const dispatch = useDispatch();

  useEffect(() => {
    if (Number.isNaN(timer.minutes) || Number.isNaN(timer.sec)) {
      setTimer({ minutes: 0, sec: 0 });
    }

    if (timer.minutes === 0 && timer.sec === 0) {
      return;
    }

    const timeout = setTimeout(() => {
      const newTimer = smsCodeTimer(timer);
      setTimer(newTimer);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [timer, dispatch]);

  return <span> {logTime(timer)} </span>;
};
