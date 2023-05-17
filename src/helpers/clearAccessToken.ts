import { ACCESS_TOKEN } from 'constants/user';

export const clearAccessToken = (): void => sessionStorage.removeItem(ACCESS_TOKEN);
