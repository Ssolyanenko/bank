import { ACCESS_TOKEN } from 'constants/user';

export const getAccessToken = (): string | null => sessionStorage.getItem(ACCESS_TOKEN);
