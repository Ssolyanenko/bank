import { DELAY_ACCESS_REQUEST } from 'constants/delayAccessRequest';
import { store } from 'store';
import { restartTokenTimer } from './restartTokenTimer';

store.subscribe(() => {
  store.getState();
});

export const saveTimerToSessionStorage = (): void => {
  const { isAuth } = store.getState().userData.userLogin;
  const refreshTokenLastModifiedDate = Number(sessionStorage.getItem('refreshTokenLastModifiedDate'));
  const currentDate: number = Date.now();
  const accessTokenLifeTime: number = DELAY_ACCESS_REQUEST;
  const difference: number = currentDate - refreshTokenLastModifiedDate;
  const correctTime: number = accessTokenLifeTime - difference;

  if (isAuth) {
    restartTokenTimer(correctTime);
  }
};
